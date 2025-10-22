"use client";
import { useState, useEffect } from "react";
import { useWallet } from "@hooks/useWallet";
import { SLIPSDK } from "@utils/slip-sdk";
import { Pool } from "@utils/types";

export function usePoolData(poolId: string) {
  const [pool, setPool] = useState<Pool | null>(null);
  const { signer } = useWallet();

  useEffect(() => {
    const fetchPool = async () => {
      if (signer) {
        const sdk = new SLIPSDK(
          process.env.NEXT_PUBLIC_MOCA_TESTNET_RPC!,
          process.env.NEXT_PUBLIC_DCA_CONTRACT_ADDRESS!
        );
        const data = await sdk.getPool(poolId, signer);
        setPool(data);
      }
    };
    fetchPool();
  }, [poolId, signer]);

  return { pool }; // Ensure this returns an object with pool property
}