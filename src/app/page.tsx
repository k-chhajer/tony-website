import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
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
  ExternalLink,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import ReachSection from "@/components/ReachSection";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import HeroSlideshow from "@/components/HeroSlideshow";
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
          <HeroSlideshow />
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.heroCenterBlock}>
              <Reveal delay={80}>
                <h1 className={styles.heroTitle}>
                  Norfolk Patient Transport
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
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>

            <div className={`${styles.heroBottom} ${styles.desktopHeroTags}`}>
              <Reveal delay={240}>
                <div className={styles.heroBottomLeft}>
                  <span className={styles.heroInfoPill}>
                    <MapPin size={12} /> 9+ Service Areas
                  </span>
                  <span className={styles.heroInfoPill}>
                    <ShieldCheck size={12} /> CTS Certified Attendants
                  </span>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <div className={styles.heroBottomRight}>
                  <div className={styles.heroInfoPills}>
                    <span className={styles.heroInfoPill}>
                      <Clock size={12} /> 24/7 Dispatch
                    </span>
                    <span className={styles.heroInfoPill}>
                      <Truck size={12} /> Wheelchair & Stretcher
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Mobile Tags Marquee */}
            <div className={styles.mobileHeroTagsMarquee}>
              <div className={styles.heroTagsTrack}>
                <span className={styles.heroInfoPill}>
                  <MapPin size={12} /> 9+ Service Areas
                </span>
                <span className={styles.heroInfoPill}>
                  <ShieldCheck size={12} /> CTS Certified Attendants
                </span>
                <span className={styles.heroInfoPill}>
                  <Clock size={12} /> 24/7 Dispatch
                </span>
                <span className={styles.heroInfoPill}>
                  <Truck size={12} /> Wheelchair & Stretcher
                </span>
                {/* Duplicates for infinite scroll */}
                <span className={styles.heroInfoPill} aria-hidden="true">
                  <MapPin size={12} /> 9+ Service Areas
                </span>
                <span className={styles.heroInfoPill} aria-hidden="true">
                  <ShieldCheck size={12} /> CTS Certified Attendants
                </span>
                <span className={styles.heroInfoPill} aria-hidden="true">
                  <Clock size={12} /> 24/7 Dispatch
                </span>
                <span className={styles.heroInfoPill} aria-hidden="true">
                  <Truck size={12} /> Wheelchair & Stretcher
                </span>
              </div>
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
                  src="/images/front4.jpg"
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
                    <span className={styles.missionBadgeTitle}>CTS Certified</span>
                    <span className={styles.missionBadgeSub}>Trained Attendants</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.missionSmallImages}>
                <div className={styles.missionSmallImg}>
                  <Image
                    src="/images/dialysis.jpg"
                    alt="Dialysis transport service"
                    fill
                    className={styles.missionSmallImgInner}
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </div>
                <div className={styles.missionSmallImg}>
                  <Image
                    src="/images/stretchertransport.jpg"
                    alt="Stretcher transport service"
                    fill
                    className={styles.missionSmallImgInner}
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </div>
                <div className={styles.missionSmallImg}>
                  <Image
                    src="/images/about-care.png"
                    alt="Patient care and compassion"
                    fill
                    className={styles.missionSmallImgInner}
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className={styles.missionRight}>
            <div className={styles.missionRightTop}>
              <Reveal>
              <span className="eyebrow">Our Mission</span>
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
          </div>

          <div className={styles.missionRightBottom}>

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
      </div>
    </section>

      {/* ══════════ Services Carousel ══════════ */}
      <section className={styles.servicesOuter}>
        <div className={styles.servicesBox}>
          <div className={styles.servicesInner}>
            <div className={styles.servicesHeader}>
              <div className={styles.servicesHeaderLeft}>
                <span className="eyebrow">Services</span>
                <h2 className={styles.servicesTitle}>
                  Explore Our Transport Services
                </h2>
                <p className={styles.servicesSub}>
                  Professional, accessible transport tailored to every patient need.
                </p>
              </div>
              <div className={`${styles.servicesHeaderRight} ${styles.desktopCta}`}>
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
          <div className={styles.mobileCtaWrap}>
            <Link href="/services" className={styles.servicesViewAll}>
              View All
              <span className={styles.servicesViewAllIcon}>
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ How It Works ══════════ */}
      <section className={`section ${styles.stepsSection}`}>
        <div className="container">
          <div className={styles.stepsHeader}>
            <div className={styles.stepsHeaderLeft}>
              <span className="eyebrow">How It Works</span>
              <h2>Book in 4 Simple Steps</h2>
              <p className={styles.stepsSub}>
                From booking to arrival, we keep a simple process.
              </p>
            </div>
            <div className={`${styles.stepsHeaderRight} ${styles.desktopCta}`}>
              <Link href="/book" className={styles.stepsCtaBtn}>
                Book Transport Now
                <span className={styles.stepsCtaArrow}>
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </div>

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
          <div className={styles.mobileCtaWrap}>
            <Link href="/book" className={styles.stepsCtaBtn}>
              Book Transport Now
              <span className={styles.stepsCtaArrow}>
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ Service Areas ══════════ */}
      <section className={`section ${styles.areasSection} section-alt`}>
        <div className="container">
          <div className={styles.areasHeader}>
            <div className={styles.areasHeaderLeft}>
              <span className="eyebrow">Service Areas</span>
              <h2>Where We Serve</h2>
              <p className={styles.areasSub}>
                Reliable patient transport across Norfolk County, Haldimand
                County, and surrounding communities.
              </p>
            </div>
            <div className={`${styles.areasHeaderRight} ${styles.desktopCta}`}>
              <Link href="/service-areas" className={styles.areasViewAll}>
                View All Areas
                <span className={styles.areasViewAllIcon}>
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </div>

          <div className={styles.areasGrid}>
            {SERVICE_AREAS.map((area, i) => (
              <Reveal key={area.slug} delay={i * 50}>
                <Link
                  href="/book"
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
          <div className={styles.mobileCtaWrap}>
            <Link href="/service-areas" className={styles.areasViewAll}>
              View All Areas
              <span className={styles.areasViewAllIcon}>
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.faqGrid}>
            <div className={styles.faqLeft}>
              <span className="eyebrow">FAQ</span>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.faqSub}>
                Quick answers about our non-emergency patient transport
                services, booking, and coverage areas.
              </p>
              <Link href="/faq" className={`${styles.faqViewAll} ${styles.desktopCta}`}>
                View All
                <span className={styles.faqViewAllIcon}>
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
            <div className={styles.faqRight}>
              <FAQAccordion items={FAQ_ITEMS.slice(0, 7)} defaultOpen={0} />
            </div>
            <div className={`${styles.mobileCtaWrap} ${styles.faqMobileCta}`}>
              <Link href="/faq" className={styles.faqViewAll}>
                View All
                <span className={styles.faqViewAllIcon}>
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ Reviews ══════════ */}
      <section className={styles.reviewsSection}>
        <div className={styles.reviewsBox}>
          <div className={styles.reviewsInner}>
            <div className={styles.reviewsHeader}>
              <div className={styles.reviewsHeaderLeft}>
                <span className="eyebrow">What Patients Say</span>
                <h2>Trusted by Patients &amp; Families</h2>
                <p className={styles.reviewsSub}>
                  Read what our patients and their families have to say about their experience.
                </p>
              </div>
              <div className={`${styles.reviewsHeaderRight} ${styles.desktopCta}`}>
                <a
                  href="https://www.google.com/maps/place/Norfolk+Patient+Transport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.reviewsViewAll}
                >
                  Google Reviews
                  <span className={styles.reviewsViewAllIcon}>
                    <ExternalLink size={14} />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.reviewsCarouselWrap}>
            <Reveal>
              <ReviewsMarquee />
            </Reveal>
          </div>
          <div className={styles.mobileCtaWrap}>
            <a
              href="https://www.google.com/maps/place/Norfolk+Patient+Transport"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.reviewsViewAll}
            >
              Google Reviews
              <span className={styles.reviewsViewAllIcon}>
                <ExternalLink size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      <ReachSection
        title={"Ready to Book\nYour Transport?"}
        description="Schedule safe, reliable patient transportation online or get in touch with our dispatch team — available 24/7 to help coordinate your ride."
        variant="white"
      />
    </>
  );
}
