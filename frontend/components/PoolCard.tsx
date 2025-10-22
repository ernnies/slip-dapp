import { Pool } from "@utils/types";

export function PoolCard({ pool }: { pool: Pool }) {
  return (
    <div className="card">
      <h2 className="text-xl font-bold text-moca">Pool #{pool.id}</h2>
      <p className="text-gray-300">Members: {pool.members.length}</p>
      <p className="text-gray-300">Staked: {pool.stakedAmount} $MOCA</p>
      <p className="text-gray-300">Status: {pool.active ? "Active" : "Closed"}</p>
      <a href={`/pools/${pool.id}`} className="btn-secondary mt-4 inline-block w-full text-center">
        View Details
      </a>
    </div>
  );
}