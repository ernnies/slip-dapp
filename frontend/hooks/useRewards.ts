"use client";
import { useState, useEffect } from "react";

export function useRewards() {
  const [reward, setReward] = useState<string | null>(null);
  useEffect(() => {
    fetch('/api/rewards').then((res) => res.json()).then((data) => setReward(data.reward));
  }, []);
  return reward;
}