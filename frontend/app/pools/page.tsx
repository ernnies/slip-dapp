import { PoolCard } from "@components/PoolCard";

export default function Pools() {
  const pools = [
    { id: "1", members: ["0x123", "0x456"], stakedAmount: "1000", active: true },
    { id: "2", members: ["0x789"], stakedAmount: "500", active: false },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-moca mb-4">Community Pools</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pools.map((pool) => (
          <PoolCard key={pool.id} pool={pool} />
        ))}
      </div>
    </div>
  );
}