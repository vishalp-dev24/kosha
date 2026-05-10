"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MotionSection({
  children,
  className,
  delay = 0,
  id
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={reducedMotion ? false : { opacity: 0 }}
      whileInView={reducedMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      className={cn("relative", className)}
      id={id}
    >
      {children}
    </motion.section>
  );
}
