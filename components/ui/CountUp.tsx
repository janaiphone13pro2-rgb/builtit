"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 1.5,
  suffix = "",
  prefix = "",
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLSpanElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();
  const decimalPlaces = String(end).includes(".") ? String(end).split(".")[1].length : 0;

  useEffect(() => {
    if (!isInView || hasAnimated.current) {
      return;
    }

    hasAnimated.current = true;

    if (reduceMotion) {
      setCount(end);
      return;
    }

    const startTime = performance.now();
    setCount(0);

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((end * eased).toFixed(decimalPlaces)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [decimalPlaces, duration, end, isInView, reduceMotion]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      aria-label={`${prefix}${end.toFixed(decimalPlaces)}${suffix}`}
    >
      <span aria-hidden="true">
        {prefix}
        {count.toFixed(decimalPlaces)}
        {suffix}
      </span>
    </motion.span>
  );
}
