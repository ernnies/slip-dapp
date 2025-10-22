"use client";
import { useParams } from "next/navigation";
import { usePoolData } from "@hooks/usePoolData";
import { PoolCard } from "@components/PoolCard";

export default function PoolDetails() {
  const { poolId } = useParams<{ poolId: string }>();
  const { pool } = usePoolData(poolId); // Destructure pool from the hook's return

  if (!pool) {
    return <div className="card">Loading pool data...</div>;
  }

  return (
    <>
      <div className="card">
        <h1 className="text-2xl font-bold text-gold-500">Pool #{pool.id}</h1>
        <p>Members: {pool.members.length}</p>
        <p>Staked: {pool.stakedAmount} $MOCA</p>
        <p>Status: {pool.active ? "Active" : "Closed"}</p>
      </div>
      <PoolCard pool={pool} />
    </>
  );
}