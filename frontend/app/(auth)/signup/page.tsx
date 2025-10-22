"use client";

export default function Signup() {
  return (
    <div className="card max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gold-500">Sign Up</h2>
      <input className="input-field w-full mt-4" placeholder="Email" />
      <button className="btn-primary w-full mt-4">Register</button>
    </div>
  );
}