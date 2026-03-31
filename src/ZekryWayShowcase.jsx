import { useEffect, useMemo, useRef, useState } from "react";
import "./zekryway-showcase.css";

const showcaseSlides = [
  {
    id: "photo-1",
    alt: "Portfolio showcase image 1",
    src: "/photo1.png",
  },
  {
    id: "photo-2",
    alt: "Portfolio showcase image 2",
    src: "/photo2.png",
  },
  {
    id: "photo-3",
    alt: "Portfolio showcase image 3",
    src: "/photo3.png",
  },
];

const titleWords = [
  { text: "See", italic: false },
  { text: "It", italic: true },
  { text: "in", italic: false },
];

const subtitleWords = [
  "Experience",
  "the",
  "power",
  "and",
  "simplicity",
  "of",
  "the",
  "Buillt",
  "platform.",
];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function mapRange(value, inMin, inMax, outMin, outMax) {
  const normalized = clamp((value - inMin) / (inMax - inMin), 0, 1);
  return outMin + (outMax - outMin) * normalized;
}

export function ZekryWayShowcase() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const firstSlideRef = useRef(null);
  const rafRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({
    viewportWidth: 0,
    slideWidth: 0,
    gap: 64,
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      rafRef.current = 0;

      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const maxScroll = Math.max(section.offsetHeight - window.innerHeight, 1);
      const nextProgress = clamp(-rect.top / maxScroll, 0, 1);

      setProgress((previousProgress) =>
        Math.abs(previousProgress - nextProgress) > 0.002
          ? nextProgress
          : previousProgress
      );
    };

    const requestUpdate = () => {
      if (rafRef.current) {
        return;
      }

      rafRef.current = window.requestAnimationFrame(updateProgress);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !trackRef.current || !firstSlideRef.current) {
        return;
      }

      const viewportWidth = viewportRef.current.getBoundingClientRect().width;
      const slideWidth = firstSlideRef.current.getBoundingClientRect().width;
      const gap =
        Number.parseFloat(getComputedStyle(trackRef.current).columnGap) ||
        Number.parseFloat(getComputedStyle(trackRef.current).gap) ||
        64;

      setDimensions({
        viewportWidth,
        slideWidth,
        gap,
      });
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  const copyOpacity = 1 - clamp((progress - 0.2) / 0.2, 0, 1);
  const copyTranslateY = mapRange(progress, 0, 0.35, 0, -24);
  const trackOpacity = mapRange(progress, 0.2, 0.5, 0, 1);
  const fadeOpacity = mapRange(progress, 0.2, 0.5, 0, 1);
  const startOffset =
    dimensions.viewportWidth > 0 && dimensions.slideWidth > 0
      ? (dimensions.viewportWidth - dimensions.slideWidth) / 2
      : 0;
  const step = dimensions.slideWidth + dimensions.gap;
  const endOffset = startOffset - step * (showcaseSlides.length - 1);
  const trackTranslateX = mapRange(progress, 0.1, 1, startOffset, endOffset);

  const trackStyle = useMemo(
    () => ({
      opacity: trackOpacity,
      transform: `translate3d(${trackTranslateX}px, 0, 0)`,
    }),
    [trackOpacity, trackTranslateX]
  );

  const copyStyle = useMemo(
    () => ({
      opacity: copyOpacity,
      transform: `translate3d(0, ${copyTranslateY}px, 0)`,
    }),
    [copyOpacity, copyTranslateY]
  );

  return (
    <section
      ref={sectionRef}
      className={`zekryway-showcase${isVisible ? " is-visible" : ""}`}
    >
      <div className="zekryway-showcase__sticky">
        <div ref={viewportRef} className="zekryway-showcase__viewport">
          <div ref={trackRef} className="zekryway-showcase__track" style={trackStyle}>
            {showcaseSlides.map((slide, index) => (
              <article
                key={slide.id}
                ref={index === 0 ? firstSlideRef : null}
                className="zekryway-showcase__slide"
              >
                <div className="zekryway-showcase__card">
                  <img src={slide.src} alt={slide.alt} draggable="false" />
                  <div className="zekryway-showcase__card-ring" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="zekryway-showcase__ring" aria-hidden="true" />

        <div className="zekryway-showcase__copy" style={copyStyle}>
          <h2 className="zekryway-showcase__heading" aria-label="See It in">
            {titleWords.map((word, index) => (
              <span
                key={word.text}
                className={`zekryway-showcase__word${
                  word.italic ? " zekryway-showcase__word--italic" : ""
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {word.text}
              </span>
            ))}
          </h2>

          <p className="zekryway-showcase__subtitle">
            {subtitleWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="zekryway-showcase__subtitle-word"
                style={{ transitionDelay: `${0.08 + index * 0.06}s` }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        <div
          className="zekryway-showcase__fade"
          style={{ opacity: fadeOpacity }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
