"use client";
import { useState } from "react";
import { SLIPSDK } from "@utils/slip-sdk";

export function CredentialProof({ poolId }: { poolId: string }) {
  const [loanAmount, setLoanAmount] = useState("");
  const [riskScore, setRiskScore] = useState("low");
  const sdk = new SLIPSDK(
    process.env.NEXT_PUBLIC_MOCA_TESTNET_RPC!,
    process.env.NEXT_PUBLIC_DCA_CONTRACT_ADDRESS!
  );

  const handleSubmitProof = async () => {
    const proof = await sdk.generateAIRProof({
      loanAmount: parseInt(loanAmount),
      riskScore,
      poolId,
    });
    console.log("Proof generated:", proof); // Use proof
  };

  return (
    <div className="card mt-4">
      <h3 className="text-lg font-bold text-moca">Submit Yield Proof</h3>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        className="input-field w-full mt-2"
        placeholder="Yield Amount"
      />
      <select
        value={riskScore}
        onChange={(e) => setRiskScore(e.target.value)}
        className="input-field w-full mt-2"
      >
        <option value="low">Low Risk</option>
        <option value="medium">Medium Risk</option>
        <option value="high">High Risk</option>
      </select>
      <button onClick={handleSubmitProof} className="btn-secondary mt-4 w-full">
        Submit Proof
      </button>
    </div>
  );
}