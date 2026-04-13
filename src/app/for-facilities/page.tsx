import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  FileText,
  CreditCard,
  Users,
  ShieldCheck,
  Truck,
  Hospital,
  Home,
  HeartHandshake,
  Stethoscope,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ReachSection from "@/components/ReachSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "For Hospitals & Care Facilities",
  description:
    "Streamlined non-emergency patient transport for hospitals, clinics, retirement homes, and long-term care facilities. Net 30 billing available.",
};

const benefits = [
  { icon: <Clock size={24} />, title: "24/7 Dispatch Coordination", desc: "Schedule transports anytime. Our dispatch team coordinates with your staff to minimize delays and ensure smooth patient flow.", image: "/images/why-choose-us.png" },
  { icon: <CreditCard size={24} />, title: "Net 30 Billing", desc: "Approved hospitals, clinics, retirement homes, and long-term care facilities can access streamlined invoicing with Net 30 payment terms.", image: "/images/payment.jpg" },
  { icon: <FileText size={24} />, title: "Simplified Booking", desc: "Book online or by phone. We capture all transport details upfront so there are no surprises or delays at pickup.", image: "/images/booking.jpg" },
  { icon: <ShieldCheck size={24} />, title: "Professional Attendants", desc: "Every trip includes trained attendants experienced in patient handling, mobility assistance, and facility protocols.", image: "/images/nonertransportteam.jpg" },
  { icon: <Truck size={24} />, title: "Wheelchair & Stretcher Fleet", desc: "Our vehicles are fully equipped for wheelchair and stretcher transport, ensuring safe, comfortable patient transfers.", image: "/images/stretcher.jpg" },
  { icon: <Users size={24} />, title: "Dedicated Account Support", desc: "Facilities with regular transport needs receive consistent service and priority scheduling coordination.", image: "/images/customersupport2.jpg" },
];

const facilities = [
  { icon: <Hospital size={22} />, title: "Hospitals", desc: "Discharge transport, inter-facility transfers, and appointment rides coordinated with your team.", image: "/images/brantfordgeneral.jpg" },
  { icon: <Home size={22} />, title: "Retirement Homes", desc: "Regular transport for residents needing medical appointments, specialist visits, and treatments.", image: "/images/retirementhome.jpeg" },
  { icon: <HeartHandshake size={22} />, title: "Long-Term Care Facilities", desc: "Recurring and on-demand transport with attendants trained in complex patient handling.", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop" },
  { icon: <Stethoscope size={22} />, title: "Dialysis Clinics", desc: "Consistent, reliable scheduling for recurring dialysis appointments with on-time performance.", image: "/images/dialysis.jpg" },
];

export default function ForFacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Hospitals & Care Facilities"
        title="Streamlined Patient Transport for Healthcare Facilities"
        description="Norfolk Patient Transport partners with hospitals, clinics, retirement homes, and long-term care facilities to provide reliable, professional discharge and appointment transport with Net 30 billing available."
        backgroundImage="/images/norfolk hospital.png"
      >
      </PageHero>

      {/* ══════ 1. Benefits – white background ══════ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.sectionHeadCenter}>
              <span className="eyebrow">Why Partner With Us</span>
              <h2>Built for Healthcare Operations</h2>
              <p>We understand the pace and demands of healthcare facilities. Our service integrates seamlessly with your discharge planning and patient transport workflows.</p>
            </div>
          </Reveal>
          <div className={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={styles.benefitCard}>
                  <Image src={b.image} alt={b.title} fill className={styles.cardBg} />
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardBody}>
                    <div className={styles.cardIconBubble}>{b.icon}</div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 2. Discharge Transport – grey background ══════ */}
      <section className={`section ${styles.greyBg}`}>
        <div className="container">
          <Reveal>
            <div className={styles.dischargeSplit}>
              <div className={styles.dischargeHeading}>
                <span className="eyebrow">Hospital Discharge</span>
                <h2>Discharge Transport That Reduces Wait Times</h2>
              </div>
              <ul className={styles.checkList}>
                {[
                  "Direct coordination with discharge planners",
                  "Flexible arrival windows that adapt to changes",
                  "Assistance from unit exit to home entry",
                  "Mobility devices and personal belongings handled",
                  "Ambulatory, wheelchair, and stretcher capable",
                ].map((item, i) => (
                  <li key={i}><CheckCircle2 size={16} />{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════ 3. Facility Types – white background ══════ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.sectionHeadCenter}>
              <span className="eyebrow">Facility Types</span>
              <h2>Who We Partner With</h2>
            </div>
          </Reveal>
          <div className={styles.facilityGrid}>
            {facilities.map((f, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className={styles.facilityCard}>
                  <Image src={f.image} alt={f.title} fill className={styles.cardBg} />
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardBody}>
                    <div className={styles.cardIconBubble}>{f.icon}</div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 4. CTA – grey background ══════ */}
      <ReachSection
        title={"Ready to Set Up a\nFacility Account?"}
        description="Contact us to discuss Net 30 billing, set up your facility account, or coordinate your first patient transport."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
