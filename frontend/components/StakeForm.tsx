"use client";

import { useState } from "react";
import { SLIPSDK } from "@utils/slip-sdk";
import { useWallet } from "@hooks/useWallet";

export function StakeForm({ poolId }: { poolId: string }) {
  const [amount, setAmount] = useState("");
  const { signer } = useWallet();
  const sdk = new SLIPSDK(
    process.env.NEXT_PUBLIC_MOCA_TESTNET_RPC!,
    process.env.NEXT_PUBLIC_DCA_CONTRACT_ADDRESS!
  );

  const handleStake = async () => {
    if (!signer) return;
    try {
      const tx = await sdk.stake(poolId, amount, signer);
      console.log("Stake transaction:", tx.hash); // Use tx
      alert("Stake successful!");
    } catch (error) {
      console.error(error);
      alert("Stake failed.");
    }
  };

  return (
    <div className="card mt-4">
      <h3 className="text-lg font-bold text-moca">Stake $MOCA</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input-field w-full mt-2"
        placeholder="Enter $MOCA amount"
      />
      <button onClick={handleStake} className="btn-secondary mt-4 w-full">
        Stake
      </button>
    </div>
  );
}