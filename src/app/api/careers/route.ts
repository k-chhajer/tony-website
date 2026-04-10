import { NextResponse } from "next/server";
import { checkRateLimit, isHoneypotFilled, getClientIP, sanitizeInput } from "@/lib/security";

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request: Request) {
  try {
    const clientIP = getClientIP(request);
    const rateCheck = checkRateLimit(`careers:${clientIP}`, 3, 60 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    const honeypot = formData.get("website") as string;
    if (isHoneypotFilled(honeypot)) {
      return NextResponse.json({ success: true });
    }

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const certifications = formData.getAll("certifications").map((value) => String(value));
    const otherCertifications = (formData.get("otherCertifications") as string) || "";

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!phone || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ error: "Valid phone number is required" }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const resume = formData.get("resume") as File | null;
    if (!resume || !(resume instanceof File) || resume.size === 0) {
      return NextResponse.json({ error: "Resume file is required" }, { status: 400 });
    }

    if (!ALLOWED_FILE_TYPES.includes(resume.type)) {
      return NextResponse.json(
        { error: "Resume must be PDF, DOC, or DOCX format" },
        { status: 400 }
      );
    }

    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Resume must be under 5MB" },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      phone: sanitizeInput(phone),
      email: sanitizeInput(email),
      certifications: certifications.map((item) => sanitizeInput(item)).join(", "),
      otherCertifications: sanitizeInput(otherCertifications),
      resumeName: resume.name,
      resumeSize: `${(resume.size / 1024).toFixed(1)} KB`,
    };

    console.log("New career application:", JSON.stringify(sanitizedData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Careers API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}