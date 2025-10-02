"use client";
import { useState } from "react";
import { ethers } from "ethers";
import { Button } from "./ui/Button";

export function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    }
  };

  return (
    <div className="flex justify-end p-4">
      <Button
        onClick={connectWallet}
        className="bg-moca text-white px-4 py-2 rounded-md hover:bg-slip"
      >
        {account ? `Connected: ${account.slice(0, 6)}...` : "Connect Wallet"}
      </Button>
    </div>
  );
}