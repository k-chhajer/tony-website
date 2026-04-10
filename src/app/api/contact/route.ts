import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sanitizeObject, checkRateLimit, isHoneypotFilled, getClientIP } from "@/lib/security";

export async function POST(request: Request) {
  try {
    const clientIP = getClientIP(request);
    const rateCheck = checkRateLimit(`contact:${clientIP}`, 10, 60 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    if (isHoneypotFilled(body.website)) {
      return NextResponse.json({ success: true });
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", errors: result.error.issues },
        { status: 400 }
      );
    }

    const sanitized = sanitizeObject(result.data);

    // ========================================================
    // TODO: Send email to info@norfolkpatienttransport.com
    // ========================================================
    console.log("ðŸ“¬ New contact submission:", JSON.stringify(sanitized, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

