import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { SERVICE_AREAS, SITE } from "@/lib/constants";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((entry) => entry.slug === slug);
  if (!area) return { title: "Area Not Found" };
  return {
    title: `Patient Transport in ${area.cityLabel}`,
    description: `${area.summary} Book wheelchair, stretcher, and assisted non-emergency transportation in ${area.cityLabel}.`,
  };
}

export default async function ServiceAreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((entry) => entry.slug === slug);
  if (!area) notFound();

  return (
    <>
      <PageHero
        eyebrow={area.cityLabel}
        title={`Patient Transport in ${area.cityLabel}`}
        description={area.summary}
        backgroundImage={area.image}
      >
        <Link href="/service-areas" className={styles.backLink}>
          <ArrowLeft size={14} />
          All Service Areas
        </Link>
      </PageHero>

      {/* Content */}
      <section className="section">
        <div className={`container ${styles.layout}`}>
          <Reveal>
            <div className={`card ${styles.mainCard}`}>
              <span className="eyebrow">Local Coverage</span>
              <h2>What trips we support in {area.cityLabel}</h2>
              <p>
                Patients in {area.cityLabel} can request non-emergency transport
                for specialist appointments, diagnostics, hospital discharges,
                recurring treatment, and inter-facility movement.
              </p>
              <ul className="bullet-list">
                <li><CheckCircle2 size={18} />Residential pickups with access notes and mobility planning.</li>
                <li><CheckCircle2 size={18} />Hospital, clinic, and treatment-centre destinations.</li>
                <li><CheckCircle2 size={18} />Ambulatory, wheelchair, stretcher, and assisted transfers.</li>
                <li><CheckCircle2 size={18} />One-way and return-trip scheduling.</li>
                <li><CheckCircle2 size={18} />Recurring appointment bookings for dialysis and therapy.</li>
              </ul>
              <div className={styles.cardActions}>
                <Link href="/book" className="btn btn-primary">
                  Book in {area.cityLabel} <ArrowRight size={14} />
                </Link>
                <a href={`tel:${SITE.phoneHref}`} className="btn btn-outline">
                  <Phone size={14} /> Call Dispatch
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className={`card ${styles.sideCard}`}>
              <h3>Trip Profile for {area.cityLabel}</h3>
              <ul className={styles.profileList}>
                <li><MapPin size={16} />Local appointment transport</li>
                <li><MapPin size={16} />Regional referral routes</li>
                <li><MapPin size={16} />Discharge and return-home support</li>
                <li><MapPin size={16} />Recurring treatment scheduling</li>
              </ul>
              <hr className={styles.divider} />
              <h4>Service Details</h4>
              <ul className={styles.detailsList}>
                <li>Wheelchair &amp; stretcher accessible</li>
                <li>Trained attendants on every trip</li>
                <li>24/7 dispatch coordination</li>
                <li>Net 30 billing for facilities</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
