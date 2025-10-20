"use client";
import { signIn } from "next-auth/react";
import { MultiFactor } from "@/components/ui/MultiFactor";

export default function Login() {
  return (
    <div className="card max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-moca">Login to DCA Optimizer</h2>
      <button onClick={() => signIn("credentials")} className="btn-primary w-full mt-4">Wallet Connect</button>
      <MultiFactor />  {/* Feature 10 */}
    </div>
  );
}