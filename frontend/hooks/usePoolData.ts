"use client";
import { useState, useEffect } from "react";
import { SLIPSDK } from "@utils/slip-sdk";
import { useWallet } from "./useWallet";
import { Pool } from "@utils/types";

export function usePoolData(poolId: string) {
  const [pool, setPool] = useState<Pool | null>(null);
  const { signer } = useWallet();
  const sdk = new SLIPSDK(
    process.env.NEXT_PUBLIC_MOCA_TESTNET_RPC!,
    process.env.NEXT_PUBLIC_DCA_CONTRACT_ADDRESS!
  );

  useEffect(() => {
    const fetchPool = async () => {
      if (signer) {
        const data = await sdk.getPool(poolId, signer); // Mock method
        setPool(data);
      }
    };
    fetchPool();
  }, [poolId, signer]);

  return pool;
}