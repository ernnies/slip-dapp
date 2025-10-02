"use client";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

export function useWallet() {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  useEffect(() => {
    const connect = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);
      }
    };
    connect();
  }, []);

  return { signer };
}