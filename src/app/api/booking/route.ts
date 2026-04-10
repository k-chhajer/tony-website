import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validation";
import { sanitizeObject, checkRateLimit, isHoneypotFilled, getClientIP } from "@/lib/security";

export async function POST(request: Request) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateCheck = checkRateLimit(`booking:${clientIP}`, 5, 60 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check
    if (isHoneypotFilled(body.website)) {
      // Silently accept to fool bots
      return NextResponse.json({ success: true });
    }

    // Validate
    const result = bookingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", errors: result.error.issues },
        { status: 400 }
      );
    }

    // Sanitize
    const sanitized = sanitizeObject(result.data);

    // ========================================================
    // TODO: Send email to bookings@norfolkpatienttransport.com
    // using your preferred email service (Resend, SendGrid, etc.)
    // ========================================================
    console.log("ðŸ“¦ New booking submission:", JSON.stringify(sanitized, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

