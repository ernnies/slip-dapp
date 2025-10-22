"use client";
import { useState } from "react";
import { ethers } from "ethers";

export function useWallet() {
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      setSigner(signer);
    } else {
      alert("Please install MetaMask!");
    }
  };

  return { signer, connectWallet };
}