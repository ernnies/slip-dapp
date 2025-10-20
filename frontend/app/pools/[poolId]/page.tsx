"use client";
import { useParams } from "next/navigation";
import { StakeForm } from "@components/StakeForm";
import { CredentialProof } from "@components/CredentialProof";
import { YieldDashboard } from "@components/YieldDashboard";
import { usePoolData } from "@hooks/usePoolData";
import { Modal } from "@components/ui/Modal";

export default function PoolDetail() {
  const { poolId } = useParams();
  const pool = usePoolData(poolId as string);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-moca mb-4">Pool #{poolId}</h1>
      {pool ? (
        <>
          <div className="card">
            <p>Members: {pool.members.length}</p>
            <p>Staked: {pool.stakedAmount} $MOCA</p>
            <p>Status: {pool.active ? "Active" : "Closed"}</p>
          </div>
          <StakeForm poolId={poolId as string} />
          <CredentialProof poolId={poolId as string} />
          <YieldDashboard poolId={poolId as string} />
          <Modal trigger={<button className="bg-slip text-white px-4 py-2 rounded-md mt-4">View Details</button>}>
            <h3 className="text-lg font-bold">Pool Details</h3>
            <p>Pool ID: {poolId}</p>
            <p>Active: {pool.active.toString()}</p>
          </Modal>
        </>
      ) : (
        <p>Loading pool data...</p>
      )}
    </div>
  );
}