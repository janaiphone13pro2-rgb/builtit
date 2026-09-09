"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function TiltCard({ children, className, tiltAmount = 4 }: TiltCardProps) {
  return (
    <motion.div
      className={cn("relative h-full", className)}
      whileHover={{ y: -4, rotateX: -tiltAmount * 0.18, rotateY: tiltAmount * 0.18 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      style={{ transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}
