import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import styles from "./Footer.module.css";

const linksCol1 = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
];

const linksCol2 = [
  { href: "/for-facilities", label: "For Facilities" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={`container ${styles.footerGrid}`}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoMark}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <span className={styles.logoName}>{SITE.name}</span>
            </Link>
            <p className={styles.brandDesc}>
              Safe and reliable non-emergency medical transportation serving
              Norfolk County, Haldimand County, and surrounding areas.
            </p>
            <Link href="/book" className={styles.footerCta}>
              Book Transport
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Quick Links Col 1 */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              {linksCol1.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links Col 2 */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linkList}>
              {linksCol2.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <Phone size={14} />
                <div>
                  <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
                  <span className={styles.contactNote}>24/7 Dispatch</span>
                </div>
              </li>
              <li>
                <Mail size={14} />
                <a href={`mailto:${SITE.emailGeneral}`}>{SITE.emailGeneral}</a>
              </li>
              <li>
                <MapPin size={14} />
                <span>{SITE.region}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarInner}`}>
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className={styles.bottomLink}>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
