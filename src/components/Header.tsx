"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import styles from "./Header.module.css";
import { SITE, NAV_LINKS } from "@/lib/constants";

const HEADER_PILLS = NAV_LINKS.filter((l) => l.href !== "/book");

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.headerInner}>
          {/* Left Nav Pills */}
          <nav className={styles.leftNav}>
            {HEADER_PILLS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navPill}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className={styles.rightActions}>
            <a
              href={`tel:${SITE.phoneHref}`}
              className={styles.phonePill}
            >
              <Phone size={13} />
              <span className={styles.phoneText}>{SITE.phoneDisplay}</span>
            </a>
            <Link href="/book" className={styles.bookBtn}>
              Book Now
              <span className={styles.bookBtnArrow}>
                <ArrowUpRight size={14} />
              </span>
            </Link>
            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
      >
        <div className={styles.drawerHeader}>
          <Link
            href="/"
            className={styles.drawerLogo}
            onClick={() => setMenuOpen(false)}
          >
            Norfolk PT
          </Link>
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.drawerActions}>
          <Link
            href="/book"
            className={styles.drawerBookBtn}
            onClick={() => setMenuOpen(false)}
          >
            Book Transport
            <ArrowUpRight size={16} />
          </Link>
          <a href={`tel:${SITE.phoneHref}`} className={styles.drawerPhone}>
            <Phone size={16} />
            {SITE.phoneDisplay}
          </a>
          <span className={styles.drawerHours}>{SITE.hours}</span>
        </div>
      </aside>
    </>
  );
}
