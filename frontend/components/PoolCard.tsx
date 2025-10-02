import { Pool } from "@utils/types";

export function PoolCard({ pool }: { pool: Pool }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 border border-moca">
      <h2 className="text-xl font-bold text-moca">Pool #{pool.id}</h2>
      <p>Members: {pool.members.length}</p>
      <p>Staked: {pool.stakedAmount} $MOCA</p>
      <p>Status: {pool.active ? "Active" : "Closed"}</p>
    </div>
  );
}