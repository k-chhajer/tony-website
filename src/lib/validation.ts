import { z } from "zod";

// --- Booking Form Schema ---
export const bookingSchema = z.object({
  // Patient Information
  patientName: z.string().min(2, "Patient name is required").max(100),
  patientWeight: z.string().min(1, "Patient weight is required").max(10),
  requiresOxygen: z.enum(["yes", "no"]),
  mobilityType: z.enum(["ambulatory", "wheelchair", "stretcher"]),

  // Pickup Information
  pickupAddress: z.string().min(5, "Pickup address is required").max(500),
  pickupFacility: z.string().max(200).optional().default(""),
  pickupRoom: z.string().max(50).optional().default(""),
  pickupDate: z.string().min(1, "Pickup date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),

  // Destination Information
  dropoffAddress: z.string().min(5, "Drop-off address is required").max(500),
  dropoffFacility: z.string().max(200).optional().default(""),
  appointmentTime: z.string().optional().default(""),

  // Transport Details
  tripType: z.enum(["one-way", "return"]),
  driverWait: z.enum(["yes", "no"]),
  escortCount: z.string().max(5).optional().default("0"),

  // Medical Assistance
  needsWheelchair: z.boolean().optional().default(false),
  needsStretcher: z.boolean().optional().default(false),
  needsOxygen: z.boolean().optional().default(false),
  needsTwoAttendants: z.boolean().optional().default(false),

  // Billing
  payer: z.enum(["patient", "family", "hospital", "care-home"]),
  paymentMethod: z.enum(["credit-card", "cash", "e-transfer", "net-30"]),

  // Contact
  contactName: z.string().min(2, "Contact name is required").max(100),
  contactPhone: z.string().min(10, "Valid phone number is required").max(20),
  contactEmail: z.string().email("Valid email is required").max(200),

  // Additional Notes
  specialInstructions: z.string().max(2000).optional().default(""),
  equipmentRequired: z.string().max(1000).optional().default(""),
  mobilityDetails: z.string().max(1000).optional().default(""),

  // Honeypot
  website: z.string().max(0).optional().default(""),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

// --- Contact Form Schema ---
export const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Valid email is required").max(200),
  phone: z.string().max(20).optional().default(""),
  subject: z.string().min(2, "Subject is required").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  website: z.string().max(0).optional().default(""),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// --- Careers Form Schema ---
export const careersSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  phone: z.string().min(10, "Valid phone number is required").max(20),
  email: z.string().email("Valid email is required").max(200),
  certifications: z.string().max(2000).optional().default(""),
  website: z.string().max(0).optional().default(""),
});

export type CareersFormData = z.infer<typeof careersSchema>;

