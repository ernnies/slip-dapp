"use client";
import { useState } from "react";
import { SLIPSDK } from "@utils/slip-sdk";

export function CredentialProof({ poolId }: { poolId: string }) {
  const [loanAmount, setLoanAmount] = useState("");
  const [riskScore, setRiskScore] = useState("low");
  const sdk = new SLIPSDK(
    process.env.NEXT_PUBLIC_MOCA_TESTNET_RPC!,
    process.env.NEXT_PUBLIC_SLIP_CONTRACT_ADDRESS!
  );

  const handleSubmitProof = async () => {
    try {
      const proof = await sdk.generateAIRProof({
        loanAmount: parseInt(loanAmount),
        riskScore,
      });
      alert("Proof submitted!");
    } catch (error) {
      console.error(error);
      alert("Proof generation failed.");
    }
  };

  return (
    <div className="p-4 mt-4">
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        className="border border-moca p-2 rounded-md"
        placeholder="Loan Amount"
      />
      <select
        value={riskScore}
        onChange={(e) => setRiskScore(e.target.value)}
        className="border border-moca p-2 rounded-md ml-2"
      >
        <option value="low">Low Risk</option>
        <option value="medium">Medium Risk</option>
        <option value="high">High Risk</option>
      </select>
      <button
        onClick={handleSubmitProof}
        className="ml-2 bg-slip text-white px-4 py-2 rounded-md hover:bg-moca"
      >
        Submit Proof
      </button>
    </div>
  );
}