"use client";
import { useState, useEffect } from "react";

export function LiveYieldFeed() {
  const [yieldValue, setYieldValue] = useState("12%");
  useEffect(() => {
    const interval = setInterval(() => setYieldValue((Math.random() * 5 + 10).toFixed(1) + "%"), 5000);
    return () => clearInterval(interval);
  }, []);
  return <div className="text-gold-500">{yieldValue}</div>;
}