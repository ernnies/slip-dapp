"use client";
import Confetti from "react-confetti";

export function ConfettiEffect() {
  return <Confetti width={window.innerWidth} height={window.innerHeight} />;
}