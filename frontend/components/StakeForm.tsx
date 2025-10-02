"use client";
import { useState } from "react";
import { SLIPSDK } from "@utils/slip-sdk";
import { useWallet } from "@hooks/useWallet";

export function StakeForm({ poolId }: { poolId: string }) {
  const [amount, setAmount] = useState("");
  const { signer } = useWallet();
  const sdk = new SLIPSDK(
    process.env.NEXT_PUBLIC_MOCA_TESTNET_RPC!,
    process.env.NEXT_PUBLIC_SLIP_CONTRACT_ADDRESS!
  );

  const handleStake = async () => {
    if (!signer) return;
    try {
      const tx = await sdk.stake(poolId, amount, signer);
      alert("Stake successful!");
    } catch (error) {
      console.error(error);
      alert("Stake failed.");
    }
  };

  return (
    <div className="p-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border border-moca p-2 rounded-md"
        placeholder="Enter $MOCA amount"
      />
      <button
        onClick={handleStake}
        className="ml-2 bg-slip text-white px-4 py-2 rounded-md hover:bg-moca"
      >
        Stake
      </button>
    </div>
  );
}