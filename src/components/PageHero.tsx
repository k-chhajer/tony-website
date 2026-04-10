import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  children,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt=""
              fill
              className={styles.heroBgImage}
              priority
            />
            <div className={styles.heroBgOverlay} />
          </>
        ) : (
          <>
            <div className={styles.heroGlow} />
            <div className={styles.heroPattern} />
          </>
        )}
      </div>
      <div className={`container ${styles.heroInner}`}>
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className={styles.heroTitle}>{title}</h1>
        </Reveal>
        <Reveal delay={140}>
          <p className={styles.heroSub}>{description}</p>
        </Reveal>
        {children && <Reveal delay={200}>{children}</Reveal>}
      </div>
    </section>
  );
}
