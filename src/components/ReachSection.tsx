import Link from "next/link";
import { Phone, Mail, Clock, ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/constants";
import styles from "./ReachSection.module.css";

interface ReachSectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  variant?: "default" | "white";
}

export default function ReachSection({
  title,
  description,
  primaryLabel = "Book Transport",
  primaryHref = "/book",
  variant = "default",
}: ReachSectionProps) {
  return (
    <section className={`${styles.section} ${variant === "white" ? styles.sectionWhite : ""}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div className={styles.message}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{description}</p>
            <div className={`${styles.ctas} ${styles.desktopCta}`}>
              <Link href={primaryHref} className={styles.primary}>
                {primaryLabel}
                <span className={styles.primaryArrow}>
                  <ArrowUpRight size={14} />
                </span>
              </Link>
              <Link href="/contact" className={styles.outline}>
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className={styles.contact}>
            <h4 className={styles.contactTitle}>Get in Touch</h4>
            <div className={styles.contactList}>
              <a href={`tel:${SITE.phoneHref}`} className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={18} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Dispatch (24/7)</span>
                  <span className={styles.contactValue}>{SITE.phoneDisplay}</span>
                </div>
              </a>
              <a href={`mailto:${SITE.emailGeneral}`} className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={18} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>{SITE.emailGeneral}</span>
                </div>
              </a>
              <a href={`mailto:${SITE.emailBookings}`} className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={18} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Bookings</span>
                  <span className={styles.contactValue}>{SITE.emailBookings}</span>
                </div>
              </a>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Clock size={18} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Hours</span>
                  <span className={styles.contactValue}>24 hours / 7 days a week</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className={`${styles.ctas} ${styles.mobileCtaWrap}`}>
            <Link href={primaryHref} className={styles.primary}>
              {primaryLabel}
              <span className={styles.primaryArrow}>
                <ArrowUpRight size={14} />
              </span>
            </Link>
            <Link href="/contact" className={styles.outline}>
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
