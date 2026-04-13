import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  Heart,
  Clock,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ReachSection from "@/components/ReachSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Norfolk Patient Transport — founded by Tony Nagrani and Stacy Nicole Barrett, providing safe, reliable non-emergency medical transportation across Norfolk County.",
};

const values = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Safety First",
    desc: "Every trip follows established safety protocols, vehicle checks, and patient handling procedures.",
  },
  {
    icon: <Heart size={24} />,
    title: "Compassionate Care",
    desc: "We treat every patient with dignity and respect, understanding the stress that comes with medical appointments.",
  },
  {
    icon: <Clock size={24} />,
    title: "Reliability",
    desc: "We show up on time, every time. Our dispatch team monitors schedules and communicates proactively.",
  },
  {
    icon: <Users size={24} />,
    title: "Community Focus",
    desc: "As a local service, we understand the communities we serve and the healthcare landscape across Norfolk and Haldimand.",
  },
];

const specializations = [
  { title: "Hospital Discharge", image: "/images/hospital-exterior-2.png" },
  { title: "Wheelchair Transport", image: "/images/about-care.png" },
  { title: "Stretcher Transport", image: "/images/stretcher.jpg" },
  { title: "Ambulatory Transport", image: "/images/oygensupport.jpeg" },
  { title: "Dialysis & Specialist Care", image: "/images/dialysis.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Caring Beyond The Ride"
        description="Safe, professional, and dependable non-emergency medical transportation across Simcoe, Norfolk County, and surrounding areas."
        backgroundImage="/images/about-care.png"
      />

      {/* ══════ Our Story — Text above, Photos below ══════ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.storyProse}>
              <span className="eyebrow">Our Story</span>
              <h2>Founded in Simcoe.<br />Rooted in Community.</h2>
              <p>
                Norfolk Patient Transport was founded by <strong>Tony Nagrani</strong> and <strong>Stacy Nicole Barrett</strong>, both of whom have deep roots in Simcoe and Norfolk County.
              </p>
              <p>
                Tony grew up in Simcoe, Ontario, where his father has served as a physician in the Norfolk County community for over 40 years. That lifelong exposure to healthcare shaped Tony&apos;s understanding of patient care, professionalism, and the importance of reliable, local medical transportation services. Today, Tony is a <strong>Certified Transport Specialist (CTS)</strong> through NEMTAC.
              </p>
              <p>
                Stacy also grew up in Simcoe and is a trained <strong>Personal Support Worker (PSW)</strong>, with hands-on experience supporting patients with dignity, compassion, and attention to detail.
              </p>
              <p>
                Together, they are returning home to raise their family and build Norfolk Patient Transport as a trusted, local provider of non-emergency medical transportation in Norfolk County — supporting hospitals, long-term care homes, retirement residences, clinics, and families across Simcoe, Delhi, Port Dover, Waterford, and surrounding communities.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={styles.founders}>
              <div className={styles.photoWrap}>
                <div className={styles.circle}>
                  <Image
                    src="/images/tony-placeholder.jpg"
                    alt="Tony Nagrani"
                    fill
                    className={styles.circleImg}
                  />
                </div>
                <p className={styles.name}>Tony Nagrani</p>
                <p className={styles.role}>Co-Founder &amp; CTS</p>
              </div>
              <div className={styles.photoWrap}>
                <div className={styles.circle}>
                  <Image
                    src="/images/stacy-placeholder.jpg"
                    alt="Stacy Nicole Barrett"
                    fill
                    className={styles.circleImg}
                  />
                </div>
                <p className={styles.name}>Stacy Nicole Barrett</p>
                <p className={styles.role}>Co-Founder &amp; PSW</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════ Specializations — grey, image cards ══════ */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className={styles.headCenter}>
              <span className="eyebrow">What We Do</span>
              <h2>What We Specialize In</h2>
            </div>
          </Reveal>
          <div className={styles.specGrid}>
            {specializations.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={styles.specCard}>
                  <Image src={s.image} alt={s.title} fill className={styles.specBg} />
                  <div className={styles.specOverlay} />
                  <span className={styles.specTitle}>{s.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Values — white, with tagline ══════ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.headCenter}>
              <span className="eyebrow">Our Values</span>
              <h2>What Guides Our Service</h2>
              <p className={styles.tagline}>
                At Norfolk Patient Transport, we believe in <strong>Caring Beyond The Ride</strong> — delivering safe, professional, and dependable non-emergency medical transportation across Simcoe, Norfolk County, and surrounding areas.
              </p>
            </div>
          </Reveal>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ReachSection
        title={"Ready to Book\nYour Transport?"}
        description="Schedule safe, reliable patient transportation online or get in touch with our dispatch team — available 24/7 to help coordinate your ride."
      />
    </>
  );
}
