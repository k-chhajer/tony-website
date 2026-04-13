import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/constants";
import styles from "./page.module.css";

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join Our Team"
        description="We're looking for reliable, compassionate professionals to provide non-emergency medical transportation across Norfolk and Haldimand County."
        backgroundImage="/images/nonertransportteam.jpg"
      />

      <section className={styles.content}>
        <div className={`container ${styles.inner}`}>
          <Reveal>
            <p className={styles.lead}>
              Norfolk Patient Transport is always interested in hearing from
              qualified individuals who are passionate about patient care and
              community service. We are looking for reliable and compassionate
              professionals to join our team providing non-emergency medical
              transportation throughout Norfolk and Haldimand County.
            </p>

            <p className={styles.lead}>
              As a member of our team, you will transport patients safely and
              comfortably to and from hospitals, clinics, dialysis centres,
              retirement homes, and private residences. You will work directly
              with our dispatch team, coordinate with healthcare facility staff,
              and ensure every patient receives professional, dignified care from
              pickup to drop-off.
            </p>

            <p className={styles.lead}>
              We operate a modern fleet of wheelchair and stretcher accessible
              vehicles. Every trip includes trained attendants who follow
              established safety protocols and patient handling procedures. Our
              service covers Norfolk County, Haldimand County, and surrounding
              areas including Simcoe, Port Dover, Delhi, Brantford, Hamilton,
              Hagersville, and Tillsonburg.
            </p>

            <p className={styles.lead}>
              We welcome candidates at various experience levels. During the
              review process, candidates will be assessed for the appropriate
              role, and offers will align with that level.
            </p>
          </Reveal>

          <Reveal>
            <h2>Open Positions</h2>

            <h3>Patient Transport Attendant</h3>
            <p className={styles.meta}>Full-Time &middot; Norfolk County, ON</p>
            <p>
              Provide safe, professional non-emergency transport for patients.
              Assist with wheelchair and stretcher transfers, coordinate with
              dispatch, and deliver compassionate care on every trip.
            </p>

            <h3>Transport Driver</h3>
            <p className={styles.meta}>Full-Time &middot; Norfolk County, ON</p>
            <p>
              Operate patient transport vehicles safely and efficiently. Maintain
              vehicle readiness, follow scheduled routes, and work closely with
              attendants to ensure smooth patient movement.
            </p>

            <h3>Dispatch Coordinator</h3>
            <p className={styles.meta}>Full-Time &middot; Norfolk County, ON</p>
            <p>
              Manage incoming transport requests, coordinate driver schedules,
              and communicate with hospitals and care facilities to keep
              operations running on time.
            </p>
          </Reveal>

          <Reveal>
            <h2>What We Look For</h2>
            <p>Applicants must possess the following minimum qualifications:</p>
            <ul>
              <li>Valid Basic Life Support (BLS) certification or CPR Level HCP</li>
              <li>Valid Ontario G Class Driver&apos;s License</li>
              <li>Ability to remain calm and professional in emergency or stressful situations</li>
              <li>Ability to safely lift 250+ lbs using a stretcher or stair chair with a partner</li>
              <li>Strong verbal and written communication skills in English</li>
              <li>Safe driving record with a clean driver&apos;s abstract</li>
              <li>Ability to obtain a Criminal Record Check with Vulnerable Sector Screening</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2>Health &amp; Immunization Requirements</h2>
            <p>
              Applicants must be able to provide documentation of up-to-date
              immunizations including:
            </p>
            <ul>
              <li>MMR</li>
              <li>DPT</li>
              <li>Polio</li>
              <li>Varicella</li>
              <li>Hepatitis B</li>
              <li>COVID-19 (minimum two doses)</li>
              <li>TB Skin Test (Step 1 within the last 12 months)</li>
            </ul>
          </Reveal>

          <Reveal>
            <div className={styles.applyBlock}>
              <h2>How to Apply</h2>
              <p>
                Send your resume and a brief introduction to{" "}
                <a href={`mailto:${SITE.emailCareers}`} className={styles.emailLink}>
                  {SITE.emailCareers}
                </a>
                . Please include the position title in your subject line. We
                review every application and will follow up if there&apos;s a fit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
