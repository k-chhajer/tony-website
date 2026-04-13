"use client";

import { Star } from "lucide-react";
import styles from "./ReviewsMarquee.module.css";

const REVIEWS = [
  {
    name: "Margaret H.",
    text: "The attendants were so kind and professional. They made my mother feel safe and comfortable the entire ride to her appointment.",
    rating: 5,
  },
  {
    name: "David R.",
    text: "We use Norfolk Patient Transport for my father's weekly dialysis appointments. Always on time, always courteous. Truly a lifesaver.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    text: "After my husband's hospital discharge, they handled everything with care. The stretcher transport was smooth and stress-free.",
    rating: 5,
  },
  {
    name: "James P.",
    text: "Excellent service from booking to drop-off. The dispatch team was helpful and the driver was very patient with my elderly mother.",
    rating: 5,
  },
  {
    name: "Linda M.",
    text: "Professional, punctual, and genuinely caring. I recommend Norfolk Patient Transport to anyone needing non-emergency medical transport.",
    rating: 5,
  },
  {
    name: "Robert K.",
    text: "The wheelchair-accessible van was clean and well-maintained. The attendant helped my wife every step of the way.",
    rating: 5,
  },
  {
    name: "Karen W.",
    text: "Our retirement home relies on their service for resident appointments. They coordinate perfectly with our staff every time.",
    rating: 5,
  },
  {
    name: "Thomas B.",
    text: "Booking was easy and the team followed up with confirmation right away. Great communication from start to finish.",
    rating: 5,
  },
];

function ReviewCard({ name, text, rating }: { name: string; text: string; rating: number }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>
      <p className={styles.text}>&ldquo;{text}&rdquo;</p>
      <span className={styles.name}>{name}</span>
    </div>
  );
}

export default function ReviewsMarquee() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marqueeTrack}>
        {doubled.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </div>
  );
}
