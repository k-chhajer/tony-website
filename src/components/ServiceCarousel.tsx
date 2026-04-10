"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCarousel.module.css";

export interface ServiceSlide {
  img: string;
  title: string;
  description: string;
  tag: string;
  href: string;
}

interface ServiceCarouselProps {
  items: ServiceSlide[];
}

export default function ServiceCarousel({ items }: ServiceCarouselProps) {
  const doubled = [...items, ...items];

  return (
    <div className={styles.track}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={styles.card}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className={styles.cardImg}
              sizes="(max-width: 768px) 80vw, 320px"
            />
            <div className={styles.cardOverlay}>
              <span className={styles.cardTag}>{item.tag}</span>
              <div className={styles.cardBottom}>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
