"use client";
import { useParams } from "next/navigation";
import { StakeForm } from "@components/StakeForm";
import { CredentialProof } from "@components/CredentialProof";

export default function PoolDetail() {
  const { poolId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-moca mb-4">Pool #{poolId}</h1>
      <StakeForm poolId={poolId as string} />
      <CredentialProof poolId={poolId as string} />
    </div>
  );
}