import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Accessibility,
  BedDouble,
  HeartPulse,
  ClipboardList,
  CalendarCheck,
  CreditCard,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCarousel from "@/components/ServiceCarousel";
import type { ServiceSlide } from "@/components/ServiceCarousel";
import {
  SITE,
  SERVICES,
  SERVICE_AREAS,
  FAQ_ITEMS,
} from "@/lib/constants";
import styles from "./page.module.css";

const IMAGES = {
  hero: "/images/hero-hospital.png",
};

const SERVICE_SLIDES: ServiceSlide[] = SERVICES.map((s) => ({
  img: s.image,
  title: s.title,
  description: s.shortDescription,
  tag: s.title.split(" ")[0],
  href: `/services#${s.id}`,
}));

export default function HomePage() {
  return (
    <>
      {/* ══════════ Hero ══════════ */}
      <section className={styles.heroOuter}>
        <div className={styles.hero}>
          <Image
            src={IMAGES.hero}
            alt="Norfolk Patient Transport — professional medical transport"
            fill
            className={styles.heroBgImage}
            priority
          />
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.heroCenterBlock}>
              <Reveal delay={80}>
                <h1 className={styles.heroTitle}>
                  Safe, Reliable Patient Transport
                  <br />
                  for Norfolk &amp; Haldimand
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className={styles.heroSub}>
                  Non-emergency medical transportation with trained attendants.
                  <br />
                  Wheelchair &amp; stretcher accessible. Book online or call
                  dispatch 24/7.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className={styles.heroCtaRow}>
                  <Link href="/book" className={styles.heroCta}>
                    Book Transport
                    <span className={styles.heroCtaArrow}>
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className={styles.heroCtaOutline}
                  >
                    <Phone size={14} />
                    Call Dispatch
                  </a>
                </div>
              </Reveal>
            </div>

            <div className={styles.heroBottom}>
              <Reveal delay={240}>
                <div className={styles.heroBottomLeft}>
                  <div className={styles.heroCommitmentText}>
                    Professional, compassionate
                    <br />
                    transport for patients across
                    <br />
                    Norfolk &amp; Haldimand County.
                  </div>
                  <div className={styles.heroSatisfiedBadge}>
                    <div className={styles.heroBadgeIcon}>
                      <ShieldCheck size={16} />
                    </div>
                    <span className={styles.heroSatisfiedText}>
                      BLS CERTIFIED ATTENDANTS
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <div className={styles.heroBottomRight}>
                  <div className={styles.heroInfoPills}>
                    <span className={styles.heroInfoPill}>
                      <Clock size={12} /> 24/7 Dispatch
                    </span>
                    <span className={styles.heroInfoPill}>
                      <Truck size={12} /> Wheelchair &amp; Stretcher
                    </span>
                    <span className={styles.heroInfoPill}>
                      <MapPin size={12} /> 9+ Service Areas
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ Mission ══════════ */}
      <section className={`section ${styles.missionSection}`}>
        <div className={`container ${styles.missionGrid}`}>
          <div className={styles.missionLeft}>
            <Reveal>
              <div className={styles.missionImageBlock}>
                <Image
                  src="/images/service-vehicle.png"
                  alt="Norfolk Patient Transport vehicle at hospital"
                  fill
                  className={styles.missionMainImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.missionImageOverlay} />
                <div className={styles.missionBadge}>
                  <div className={styles.missionBadgeIcon}>
                    <HeartPulse size={18} />
                  </div>
                  <div>
                    <span className={styles.missionBadgeTitle}>24/7</span>
                    <span className={styles.missionBadgeSub}>Dispatch Available</span>
                  </div>
                </div>
                <div className={styles.missionBadgeBottom}>
                  <div className={styles.missionBadgeIcon}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className={styles.missionBadgeTitle}>BLS Certified</span>
                    <span className={styles.missionBadgeSub}>Trained Attendants</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.missionSmallImages}>
                <div className={styles.missionSmallImg}>
                  <Image
                    src="/images/about-care.png"
                    alt="Patient care inside transport vehicle"
                    fill
                    className={styles.missionSmallImgInner}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className={styles.missionSmallImg}>
                  <Image
                    src="/images/why-choose-us.png"
                    alt="Attendant assisting patient at home"
                    fill
                    className={styles.missionSmallImgInner}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className={styles.missionRight}>
            <Reveal>
              <span className={styles.missionEyebrow}>Our Mission</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className={styles.missionTitle}>
                Safe &amp; Reliable Transportation for Every Patient
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={styles.missionDesc}>
                We provide non-emergency medical transportation for patients
                who need help getting to medical appointments but do not
                require an ambulance. Our service bridges the gap between
                private transportation and emergency services, offering a
                professional, comfortable, and accessible alternative.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.missionDesc}>
                Whether it&apos;s a hospital discharge, a dialysis appointment,
                or an inter-facility transfer, our trained attendants and
                equipped vehicles ensure patients travel safely and arrive on time.
              </p>
            </Reveal>

            <div className={styles.missionHighlights}>
              <Reveal delay={180}>
                <div className={styles.missionHighlight}>
                  <div className={styles.missionHighlightIcon}>
                    <Accessibility size={22} />
                  </div>
                  <div>
                    <h4>Wheelchair Accessible</h4>
                    <p>Fully equipped vans with secure tie-down systems and ramp access.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={220}>
                <div className={styles.missionHighlight}>
                  <div className={styles.missionHighlightIcon}>
                    <BedDouble size={22} />
                  </div>
                  <div>
                    <h4>Stretcher Capable</h4>
                    <p>Stretcher transport for patients who must remain reclined during travel.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <div className={styles.missionHighlight}>
                  <div className={styles.missionHighlightIcon}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4>Local Coverage</h4>
                    <p>Serving Norfolk County, Haldimand County, Brantford, Hamilton, and more.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <Link href="/about" className={styles.missionCta}>
                Learn More About Us
                <span className={styles.missionCtaArrow}>
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ Services Carousel ══════════ */}
      <section className={styles.servicesOuter}>
        <div className={styles.servicesBox}>
          <div className={styles.servicesInner}>
            <div className={styles.servicesHeader}>
              <div className={styles.servicesHeaderLeft}>
                <span className={styles.servicesLabel}>Services</span>
                <h2 className={styles.servicesTitle}>
                  Explore Our Transport Services
                </h2>
              </div>
              <div className={styles.servicesHeaderRight}>
                <Link href="/services" className={styles.servicesViewAll}>
                  View All
                  <span className={styles.servicesViewAllIcon}>
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.servicesCarouselWrap}>
            <Reveal>
              <ServiceCarousel items={SERVICE_SLIDES} />
            </Reveal>
          </div>

          <div className={styles.servicesInner}>
            <div className={styles.servicesBottom}>
              <div className={styles.servicesNav}>
                <button className={styles.navArrowBtn} aria-label="Previous">
                  <ArrowLeft size={16} />
                </button>
                <button className={styles.navArrowBtnActive} aria-label="Next">
                  <ArrowRight size={16} color="white" />
                </button>
              </div>
              <p className={styles.servicesFootnote}>
                Book transport for hospital discharges, medical appointments,
                dialysis, or inter-facility transfers with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ How It Works ══════════ */}
      <section className={`section ${styles.stepsSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.stepsHeader}>
              <span className="eyebrow">How It Works</span>
              <h2 className={styles.stepsTitle}>Book Your Transport in 4 Simple Steps</h2>
              <p className={styles.stepsSub}>
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

          <Reveal delay={350}>
            <div className={styles.stepsCta}>
              <Link href="/book" className={styles.stepsCtaBtn}>
                Book Transport Now
                <span className={styles.stepsCtaArrow}>
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ Service Areas ══════════ */}
      <section className={`section ${styles.areasSection}`}>
        <div className="container">
          <div className={styles.areasHeader}>
            <Reveal>
              <span className={styles.areasLabel}>Service Areas</span>
              <h2 className={styles.areasTitle}>
                Where We Serve
              </h2>
              <p className={styles.areasSub}>
                Reliable patient transport across Norfolk County, Haldimand
                County, and surrounding communities.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <Link href="/service-areas" className={styles.areasViewAll}>
                View All Areas
                <span className={styles.areasViewAllIcon}>
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className={styles.areasGrid}>
            {SERVICE_AREAS.map((area, i) => (
              <Reveal key={area.slug} delay={i * 50}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className={styles.areaCard}
                >
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className={styles.areaCardImg}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className={styles.areaCardOverlay}>
                    <span className={styles.areaCardPin}>
                      <MapPin size={12} />
                    </span>
                    <div className={styles.areaCardBottom}>
                      <h4 className={styles.areaCardName}>
                        {area.cityLabel}
                      </h4>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.faqHeader}>
              <span className="eyebrow">FAQ</span>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.faqSub}>
                Quick answers about our non-emergency patient transport
                services, booking, and coverage areas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className={styles.faqWrap}>
              <FAQAccordion items={FAQ_ITEMS.slice(0, 8)} defaultOpen={0} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.faqCta}>
              <Link href="/faq" className="btn btn-outline">
                View All Questions <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
