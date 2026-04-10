import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReachSection from "@/components/ReachSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Norfolk Patient Transport. Call dispatch 24/7, email us, or book your transport online.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        description="Have a question about your upcoming transport, need to arrange a ride, or want to discuss setting up a facility account? We're available 24/7."
        backgroundImage="/images/customersupport.jpg"
      />

      <ReachSection
        title={"Need to Book a Ride\nor Have a Question?"}
        description="Our dispatch team is available around the clock. Book your transport online or reach out directly and we're happy to help coordinate your next trip."
      />
    </>
  );
}
