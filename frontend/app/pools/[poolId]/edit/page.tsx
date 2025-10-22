"use client";
import { useParams } from "next/navigation";

export default function EditPool() {
  const params = useParams<{ poolId: string }>();
  return <div className="card">Edit Pool {params.poolId}</div>;
}