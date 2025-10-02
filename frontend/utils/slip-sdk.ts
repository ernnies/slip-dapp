import { ethers } from "ethers";

export class SLIPSDK {
  private provider: ethers.providers.JsonRpcProvider;
  private contract: ethers.Contract;

  constructor(rpcUrl: string, contractAddress: string) {
    this.provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const abi = [
      "function createPool(address[] memory _members, address _sessionKey)",
      "function stake(uint256 _poolId, uint256 _amount)",
      "function getPool(uint256 _poolId) view returns (address[] memory, uint256, address, bool)",
    ];
    this.contract = new ethers.Contract(contractAddress, abi, this.provider);
  }

  async createPool(members: string[], sessionKey: string, signer: ethers.Signer) {
    const contractWithSigner = this.contract.connect(signer);
    const tx = await contractWithSigner.createPool(members, sessionKey);
    return tx.wait();
  }

  async stake(poolId: string, amount: string, signer: ethers.Signer) {
    const contractWithSigner = this.contract.connect(signer);
    const tx = await contractWithSigner.stake(poolId, ethers.utils.parseUnits(amount, 18));
    return tx.wait();
  }

  async generateAIRProof(claim: { loanAmount: number; riskScore: string }) {
    // Mock AIR Kit integration (replace with actual Moca SDK when available)
    return { proof: `mock-proof-${claim.loanAmount}-${claim.riskScore}` };
  }
}