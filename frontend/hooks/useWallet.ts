"use client";
import { ethers } from "ethers";

export function useWallet() {
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null);
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      setSigner(signer);
    }
  };
  return { signer, connectWallet };
}