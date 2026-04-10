import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  CalendarCheck,
  CreditCard,
  Truck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ReachSection from "@/components/ReachSection";
import { SERVICES } from "@/lib/constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Non-emergency medical transport services including hospital discharge, dialysis, wheelchair, stretcher, and inter-facility transfers in Norfolk County.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Non-Emergency Patient Transport"
        description="From hospital discharges to recurring dialysis rides, we provide safe, professional, and comfortable medical transportation for every patient need."
        backgroundImage="/images/service-vehicle.png"
      />

      {/* Services Grid */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.sectionHead}>
              <span className="eyebrow">What We Offer</span>
              <h2>Our Transport Services</h2>
              <p>Tap any service to book directly.</p>
            </div>
          </Reveal>

          <div className={styles.servicesGrid}>
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={i * 50}>
                <Link
                  href="/book"
                  className={styles.serviceCard}
                  id={service.id}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={styles.serviceCardImg}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={styles.serviceCardOverlay}>
                    <span className={styles.serviceCardTag}>
                      {service.title.split(" ")[0]}
                    </span>
                    <div className={styles.serviceCardBottom}>
                      <h3 className={styles.serviceCardName}>{service.title}</h3>
                      <p className={styles.serviceCardDesc}>
                        {service.shortDescription}
                      </p>
                      <span className={styles.serviceCardLink}>
                        Book This Service
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Info — moved up */}
      <section className={`section ${styles.vehicleSection}`}>
        <div className="container">
          <div className={styles.vehicleGrid}>
            <Reveal>
              <div className={styles.vehicleContent}>
                <span className="eyebrow">Our Vehicle</span>
                <h2>Wheelchair &amp; Stretcher Accessible Transport</h2>
                <p>
                  Our medical transport van is fully equipped with wheelchair
                  and stretcher accessibility, operated by trained attendants
                  who prioritize patient comfort and safety.
                </p>
                <ul className={styles.vehicleList}>
                  {[
                    "Secure wheelchair tie-down systems",
                    "Ramp access for smooth loading",
                    "Stretcher-equipped for reclined transport",
                    "Climate-controlled passenger area",
                    "Trained attendants on every trip",
                  ].map((item, i) => (
                    <li key={i}><CheckCircle2 size={16} />{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className={styles.vehicleImageWrap}>
                <Image
                  src="/images/vehicle.png"
                  alt="Norfolk Patient Transport vehicle"
                  fill
                  className={styles.vehicleImage}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How It Works — moved down, white background */}
      <section className={`section ${styles.stepsSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.stepsHeader}>
              <span className="eyebrow">How It Works</span>
              <h2>Book Your Transport in 4 Simple Steps</h2>
              <p>
                From booking to arrival, we keep the process simple so you can
                focus on what matters.
              </p>
            </div>
          </Reveal>

          <div className={styles.stepsGrid}>
            {[
              {
                num: "01",
                icon: <ClipboardList size={24} />,
                title: "Submit Your Booking",
                desc: "Fill out the online form with patient details, pickup and destination addresses, mobility needs, and preferred date and time.",
              },
              {
                num: "02",
                icon: <CalendarCheck size={24} />,
                title: "Receive Confirmation",
                desc: "Our dispatch team reviews your request and confirms the transport schedule, arrival window, and any special requirements.",
              },
              {
                num: "03",
                icon: <CreditCard size={24} />,
                title: "Arrange Payment",
                desc: "Pay by credit card, cash, or e-transfer. Approved hospitals and care facilities can use Net 30 billing.",
              },
              {
                num: "04",
                icon: <Truck size={24} />,
                title: "Your Transport Arrives",
                desc: "A trained attendant arrives on time with a wheelchair and stretcher accessible vehicle, ready to assist from door to door.",
              },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className={styles.stepCard}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3 className={styles.stepCardTitle}>{step.title}</h3>
                  <p className={styles.stepCardDesc}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ReachSection
        title={"Need a Ride to Your\nAppointment?"}
        description="Book your transport online or call our 24/7 dispatch line. We'll make sure you get to your appointment safely and on time."
      />
    </>
  );
}
