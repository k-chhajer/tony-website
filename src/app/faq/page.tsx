import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import ReachSection from "@/components/ReachSection";
import { FAQ_ITEMS } from "@/lib/constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Get answers to common questions about Norfolk Patient Transport services, booking, service areas, and more.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Find quick answers to the most common questions about our non-emergency patient transport services, booking process, and coverage areas."
        backgroundImage="/images/facilitiesbackground2.jpg"
      />

      <section className="section">
        <div className="container">
          <div className={styles.faqWrapper}>
            <Reveal>
              <FAQAccordion items={FAQ_ITEMS} />
            </Reveal>
          </div>
        </div>
      </section>

      <ReachSection
        title={"Still Have\nQuestions?"}
        description="Our team is happy to help. Reach out and we'll get back to you promptly with the answers you need."
      />
    </>
  );
}
