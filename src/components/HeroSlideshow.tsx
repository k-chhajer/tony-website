"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./HeroSlideshow.module.css";

const HERO_IMAGES = [
  "/images/front4.jpg",
  "/images/front5.jpg",
  "/images/front1.jpg",
  "/images/front2.jpg",
  "/images/front3.jpg",
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slideshow}>
      {HERO_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Norfolk Patient Transport"
          fill
          className={`${styles.slide} ${i === current ? styles.active : ""}`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}
    </div>
  );
}
