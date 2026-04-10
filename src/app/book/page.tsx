"use client";

import { useState, type FormEvent } from "react";
import {
  User,
  MapPin,
  Calendar,
  Truck,
  CreditCard,
  Phone,
  FileText,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";
import { SITE } from "@/lib/constants";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

export default function BookPage() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });

    const form = e.currentTarget;
    const data = new FormData(form);
    const body: Record<string, unknown> = {};

    data.forEach((value, key) => {
      if (key === "needsWheelchair" || key === "needsStretcher" || key === "needsOxygen" || key === "needsTwoAttendants") {
        body[key] = value === "on";
      } else {
        body[key] = value;
      }
    });

    // Ensure boolean defaults
    body.needsWheelchair = body.needsWheelchair || false;
    body.needsStretcher = body.needsStretcher || false;
    body.needsOxygen = body.needsOxygen || false;
    body.needsTwoAttendants = body.needsTwoAttendants || false;

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setFormState({
          status: "success",
          message:
            "Your booking request has been submitted successfully. Our dispatch team will contact you shortly to confirm.",
        });
        form.reset();
      } else {
        const err = await res.json();
        setFormState({
          status: "error",
          message: err.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setFormState({
        status: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Book Transport"
        title="Schedule Your Patient Transport"
        description="Fill out the form below and our dispatch team will confirm your booking. For urgent requests, call dispatch anytime."
        backgroundImage="/images/booking.jpg"
      />

      {/* Form */}
      <section className="section">
        <div className={`container ${styles.formContainer}`}>
          {formState.status === "success" ? (
            <div className={`status-banner success ${styles.successBanner}`}>
              <CheckCircle2 size={24} />
              <div>
                <strong>Booking Submitted!</strong>
                <p>{formState.message}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Honeypot */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="website">Leave this empty</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {formState.status === "error" && (
                <div className="status-banner error">{formState.message}</div>
              )}

              {/* ── Patient Information ── */}
              <div className={styles.formSection}>
                <div className={styles.sectionLabel}>
                  <User size={18} />
                  <h3>Patient Information</h3>
                </div>
                <div className={styles.fieldGrid}>
                  <div className="form-group">
                    <label className="form-label">
                      Patient Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="patientName"
                      className="form-input"
                      required
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Patient Weight <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="patientWeight"
                      className="form-input"
                      required
                      placeholder="e.g., 180 lbs"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Requires Oxygen? <span className="required">*</span>
                    </label>
                    <select
                      name="requiresOxygen"
                      className="form-select"
                      required
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Mobility Type <span className="required">*</span>
                    </label>
                    <select
                      name="mobilityType"
                      className="form-select"
                      required
                    >
                      <option value="ambulatory">Ambulatory</option>
                      <option value="wheelchair">Wheelchair</option>
                      <option value="stretcher">Stretcher</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ── Pickup Information ── */}
              <div className={styles.formSection}>
                <div className={styles.sectionLabel}>
                  <MapPin size={18} />
                  <h3>Pickup Information</h3>
                </div>
                <div className={styles.fieldGrid}>
                  <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                    <label className="form-label">
                      Street Address <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="pickupStreet"
                      className="form-input"
                      required
                      placeholder="123 Main St"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      City <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="pickupCity"
                      className="form-input"
                      required
                      placeholder="e.g., Simcoe"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Province</label>
                    <input
                      type="text"
                      name="pickupProvince"
                      className="form-input"
                      defaultValue="Ontario"
                      placeholder="Ontario"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Postal Code <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="pickupPostalCode"
                      className="form-input"
                      required
                      placeholder="N3Y 1A1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Facility Name</label>
                    <input
                      type="text"
                      name="pickupFacility"
                      className="form-input"
                      placeholder="Hospital or care home name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Room / Unit Number</label>
                    <input
                      type="text"
                      name="pickupRoom"
                      className="form-input"
                      placeholder="If applicable"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Pickup Date <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Pickup Time <span className="required">*</span>
                    </label>
                    <input
                      type="time"
                      name="pickupTime"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* ── Destination Information ── */}
              <div className={styles.formSection}>
                <div className={styles.sectionLabel}>
                  <MapPin size={18} />
                  <h3>Destination Information</h3>
                </div>
                <div className={styles.fieldGrid}>
                  <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                    <label className="form-label">
                      Street Address <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="dropoffStreet"
                      className="form-input"
                      required
                      placeholder="456 King St"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      City <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="dropoffCity"
                      className="form-input"
                      required
                      placeholder="e.g., Hamilton"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Province</label>
                    <input
                      type="text"
                      name="dropoffProvince"
                      className="form-input"
                      defaultValue="Ontario"
                      placeholder="Ontario"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Postal Code <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="dropoffPostalCode"
                      className="form-input"
                      required
                      placeholder="L8P 1A1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Facility Name</label>
                    <input
                      type="text"
                      name="dropoffFacility"
                      className="form-input"
                      placeholder="Hospital, clinic, or care home"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Appointment Time</label>
                    <input
                      type="time"
                      name="appointmentTime"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* ── Transport Details ── */}
              <div className={styles.formSection}>
                <div className={styles.sectionLabel}>
                  <Truck size={18} />
                  <h3>Transport Details</h3>
                </div>
                <div className={styles.fieldGrid}>
                  <div className="form-group">
                    <label className="form-label">
                      Trip Type <span className="required">*</span>
                    </label>
                    <select name="tripType" className="form-select" required>
                      <option value="one-way">One Way</option>
                      <option value="return">Return Trip</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Will the Driver Wait? <span className="required">*</span>
                    </label>
                    <select name="driverWait" className="form-select" required>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Passengers Escorting Patient
                    </label>
                    <input
                      type="number"
                      name="escortCount"
                      className="form-input"
                      min="0"
                      max="3"
                      defaultValue="0"
                    />
                  </div>
                </div>

                <h4 className={styles.subLabel}>Medical Assistance Required</h4>
                <div className={styles.checkGrid}>
                  <label className="form-check">
                    <input type="checkbox" name="needsWheelchair" />
                    <span>Wheelchair</span>
                  </label>
                  <label className="form-check">
                    <input type="checkbox" name="needsStretcher" />
                    <span>Stretcher</span>
                  </label>
                  <label className="form-check">
                    <input type="checkbox" name="needsOxygen" />
                    <span>Oxygen</span>
                  </label>
                  <label className="form-check">
                    <input type="checkbox" name="needsTwoAttendants" />
                    <span>Two Attendants Required</span>
                  </label>
                </div>
              </div>

              {/* ── Billing Information ── */}
              <div className={styles.formSection}>
                <div className={styles.sectionLabel}>
                  <CreditCard size={18} />
                  <h3>Billing Information</h3>
                </div>
                <div className={styles.fieldGrid}>
                  <div className="form-group">
                    <label className="form-label">
                      Who Is Paying? <span className="required">*</span>
                    </label>
                    <select name="payer" className="form-select" required>
                      <option value="patient">Patient</option>
                      <option value="family">Family</option>
                      <option value="hospital">Hospital</option>
                      <option value="care-home">Care Home</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Payment Method <span className="required">*</span>
                    </label>
                    <select
                      name="paymentMethod"
                      className="form-select"
                      required
                    >
                      <option value="credit-card">Credit Card</option>
                      <option value="cash">Cash</option>
                      <option value="e-transfer">E-Transfer</option>
                      <option value="net-30">Net 30 (Facilities)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ── Contact Information ── */}
              <div className={styles.formSection}>
                <div className={styles.sectionLabel}>
                  <Phone size={18} />
                  <h3>Contact Information</h3>
                </div>
                <div className={styles.fieldGrid}>
                  <div className="form-group">
                    <label className="form-label">
                      Booking Contact Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      className="form-input"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      className="form-input"
                      required
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      className="form-input"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* ── Additional Notes ── */}
              <div className={styles.formSection}>
                <div className={styles.sectionLabel}>
                  <FileText size={18} />
                  <h3>Additional Notes</h3>
                </div>
                <div className={styles.fieldGrid}>
                  <div
                    className="form-group"
                    style={{ gridColumn: "1 / -1" }}
                  >
                    <label className="form-label">
                      Special Instructions for Transport
                    </label>
                    <textarea
                      name="specialInstructions"
                      className="form-textarea"
                      placeholder="Any special instructions, access details, or considerations..."
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Equipment Required</label>
                    <input
                      type="text"
                      name="equipmentRequired"
                      className="form-input"
                      placeholder="e.g., Portable oxygen tank"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Mobility Assistance Details
                    </label>
                    <input
                      type="text"
                      name="mobilityDetails"
                      className="form-input"
                      placeholder="e.g., Needs help with stairs"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`btn btn-primary btn-lg btn-block ${styles.submitBtn}`}
                disabled={formState.status === "submitting"}
              >
                {formState.status === "submitting" ? (
                  <>
                    <Loader2 size={18} className={styles.spinner} />
                    Submitting...
                  </>
                ) : (
                  "Submit Booking Request"
                )}
              </button>
              <p className={styles.formNote}>
                All bookings are confirmed by our dispatch team via phone or
                email.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
