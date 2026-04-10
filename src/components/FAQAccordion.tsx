"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQAccordion.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpen?: number;
}

export default function FAQAccordion({ items, defaultOpen }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ?? null);

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
            <button
              className={styles.trigger}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{item.question}</span>
              <ChevronDown size={18} className={styles.chevron} />
            </button>
            <div className={styles.content}>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
