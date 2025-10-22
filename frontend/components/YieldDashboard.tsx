"use client";
import { useState, useEffect, useMemo } from "react";
import { SLIPSDK } from "@utils/slip-sdk";
import { useWallet } from "@hooks/useWallet";
import { formatMoca, formatDate } from "@utils/formatters";

export function YieldDashboard({ poolId }: { poolId: string }) {
  const [yieldData, setYieldData] = useState<{ totalYield: string; lastUpdate: string } | null>(null);
  const { signer } = useWallet();

  const sdk = useMemo(() => {
    return new SLIPSDK(
      process.env.NEXT_PUBLIC_MOCA_TESTNET_RPC!,
      process.env.NEXT_PUBLIC_DCA_CONTRACT_ADDRESS!
    );
  }, []);

  useEffect(() => {
    const fetchYield = async () => {
      if (signer) {
        const data = await sdk.getYieldData(poolId, signer);
        setYieldData(data);
      }
    };
    fetchYield();
  }, [poolId, signer, sdk]);

  return (
    <div className="card mt-4">
      <h2 className="text-xl font-bold text-moca">Yield Dashboard</h2>
      {yieldData ? (
        <div>
          <p className="text-gray-300">Total Yield: {formatMoca(yieldData.totalYield)}</p>
          <p className="text-gray-300">Last Update: {formatDate(yieldData.lastUpdate)}</p>
        </div>
      ) : (
        <p className="text-gray-400">Loading yield data...</p>
      )}
    </div>
  );
}