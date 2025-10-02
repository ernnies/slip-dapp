import { WalletConnect } from "@components/WalletConnect";
import { PoolCard } from "@components/PoolCard";

export default async function Home() {
  const pools = [
    { id: "1", members: ["0x123", "0x456"], stakedAmount: "1000", active: true },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <WalletConnect />
      <h1 className="text-3xl font-bold text-center text-moca py-6">
        SLIP: Shared Liability Insurance Protocol
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {pools.map((pool) => (
          <PoolCard key={pool.id} pool={pool} />
        ))}
      </div>
    </main>
  );
}