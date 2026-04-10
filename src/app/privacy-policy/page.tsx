import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Norfolk Patient Transport collects, uses, and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Norfolk Patient Transport collects, uses, and protects personal information."
        backgroundImage="/images/termsofuse.jpg"
      />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.content}`}>
          <Reveal>
            <div className={`card ${styles.policyCard}`}>
              <div className={styles.policySection}>
                <h2>Information We Collect</h2>
                <p>
                  We collect information required to provide transportation
                  services, including contact details, trip details, and
                  mobility-related needs. This may include patient names,
                  addresses, phone numbers, email addresses, and medical
                  accessibility requirements.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>How We Use Information</h2>
                <p>
                  Information is used to schedule and deliver transportation
                  services, communicate booking updates, and maintain service
                  quality and safety. We do not sell or share personal
                  information with third parties for marketing purposes.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Data Protection</h2>
                <p>
                  We apply reasonable administrative and technical safeguards to
                  protect personal information. Access is limited to authorized
                  personnel who require it to perform their duties. Data is
                  retained only as long as necessary for service delivery and
                  legal compliance.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Cookies and Website Usage</h2>
                <p>
                  Our website may use cookies and similar technologies to
                  improve user experience and analyze site traffic. You can
                  control cookie preferences through your browser settings.
                </p>
              </div>

              <div className={styles.policySection}>
                <h2>Contact</h2>
                <p>
                  For privacy questions or data requests, contact us at{" "}
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
