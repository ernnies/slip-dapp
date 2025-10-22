"use client";
import Image from "next/image";

export function Hero() {
  return (
    <div className="hero relative overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      <div className="relative z-10 text-center p-10">
        <h1 className="text-6xl font-playfair text-gold-500 drop-shadow-lg">
          Unleash Yield Luxury
        </h1>
        <p className="text-xl text-gray-200 mt-4">
          Optimize your wealth with DCA on Moca Chain.
        </p>
        <button className="btn-primary mt-6">Get Started</button>
      </div>
    </div>
  );
}