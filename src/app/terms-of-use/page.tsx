import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import styles from "../privacy-policy/page.module.css";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms and conditions for using Norfolk Patient Transport services and website.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Terms and conditions governing the use of Norfolk Patient Transport services and website."
        backgroundImage="/images/termsofuse.jpg"
      />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.content}`}>
          <Reveal>
            <div className={`card ${styles.policyCard}`}>
              <div className={styles.policySection}>
                <h2>Acceptance of Terms</h2>
                <p>
                  By accessing and using the Norfolk Patient Transport website
                  and services, you agree to be bound by these Terms of Use. If
                  you do not agree to these terms, please do not use our website
                  or services.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Service Description</h2>
                <p>
                  Norfolk Patient Transport provides non-emergency medical
                  transportation services. We are not an ambulance service and do
                  not provide emergency medical care. Our services include
                  wheelchair transport, stretcher transport, hospital discharge
                  transport, and medical appointment transportation.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Booking and Cancellation</h2>
                <p>
                  All transport bookings are subject to availability. We
                  recommend booking at least 24 to 48 hours in advance when
                  possible. Cancellations should be made as early as possible to
                  allow reallocation of resources. Late cancellations or no-shows
                  may be subject to a cancellation fee.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Payment Terms</h2>
                <p>
                  We accept credit card, cash, and e-transfer as forms of
                  payment. Approved hospitals, clinics, retirement homes, and
                  long-term care facilities may qualify for Net 30 billing terms.
                  All charges are due according to the agreed payment method and
                  timeline.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Patient Responsibility</h2>
                <p>
                  Patients and booking contacts are responsible for providing
                  accurate information regarding mobility needs, medical
                  requirements, and pickup details. Failure to disclose relevant
                  information may result in service delays or the inability to
                  complete a transport safely.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Limitation of Liability</h2>
                <p>
                  Norfolk Patient Transport shall not be liable for delays
                  caused by traffic, weather, or circumstances beyond our
                  control. While we take every precaution to ensure patient
                  safety, our liability is limited to the extent permitted by
                  applicable Ontario law.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Website Use</h2>
                <p>
                  The content on this website is provided for informational
                  purposes. We make reasonable efforts to keep information
                  accurate and up to date, but do not guarantee completeness or
                  accuracy. Unauthorized use of this website may give rise to a
                  claim for damages.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Changes to Terms</h2>
                <p>
                  We reserve the right to update these Terms of Use at any time.
                  Continued use of our services after changes are posted
                  constitutes acceptance of the revised terms.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Contact</h2>
                <p>
                  For questions about these terms, contact us at{" "}
                  <a href="mailto:info@norfolkpatienttransport.com">
                    info@norfolkpatienttransport.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
