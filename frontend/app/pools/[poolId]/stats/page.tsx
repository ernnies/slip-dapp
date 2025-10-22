"use client";
import { useParams } from "next/navigation";

export default function PoolStats() {
  const { poolId } = useParams<{ poolId: string }>();
  return <div className="card">Stats for Pool {poolId}</div>;
}