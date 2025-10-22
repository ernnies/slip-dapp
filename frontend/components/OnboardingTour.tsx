"use client";
import { motion } from "framer-motion";

export function OnboardingTour() {
  return (
    <motion.div
      className="card p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Welcome to DCA Yield Optimizer!
    </motion.div>
  );
}