import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ReachSection from "@/components/ReachSection";
import { SERVICE_AREAS } from "@/lib/constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Non-emergency patient transport serving Norfolk County, Haldimand County, Simcoe, Port Dover, Delhi, Brantford, Hamilton, Hagersville, Tillsonburg, and surrounding areas.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Where We Provide Patient Transport"
        description="Safe, comfortable non-emergency medical transportation for patients across Norfolk County, Haldimand County, and surrounding communities — whether you need a ride to a medical appointment, dialysis, or a hospital discharge."
        backgroundImage="/images/hamilton.jpg"
      />

      {/* Areas Grid */}
      <section className={`section ${styles.areasSection}`}>
        <div className="container">
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={styles.areaCardOverlay}>
                    <span className={styles.areaCardPin}>
                      <MapPin size={14} />
                    </span>
                    <div className={styles.areaCardBottom}>
                      <h3 className={styles.areaCardName}>{area.name}</h3>
                      <p className={styles.areaCardSummary}>{area.summary}</p>
                      <span className={styles.areaCardLink}>
                        View Details
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

      <ReachSection
        title={"Don't See Your Area?\nWe Can Still Help."}
        description="We regularly transport patients beyond our listed service areas. Reach out and our dispatch team will coordinate a solution for your pickup or destination."
      />
    </>
  );
}
