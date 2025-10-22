"use client";
import { useState } from "react";
import { ethers } from "ethers";

export function WalletConnect() {
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [address, setAddress] = useState<string | null>(null); // Add address to state

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress(); // Get address
      setSigner(signer);
      setAddress(addr); // Update address state
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="card mt-4">
      <button onClick={connectWallet} className="btn-primary w-full">
        Connect Wallet
      </button>
      {signer && address && <p className="text-gray-300 mt-2">Connected: {address}</p>}
    </div>
  );
}