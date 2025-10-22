"use client";
import { motion } from "framer-motion";

export function GoldenBadge({ reward }: { reward: string }) {
  return (
    <motion.div className="bg-gold-500 text-black px-3 py-1 rounded-full animate-pulseGold">
      +{reward}
    </motion.div>
  );
}