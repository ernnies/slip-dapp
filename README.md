**A decentralized lending protocol on Moca Chain built for the Proof of Build Buildathon**

**Shared Liability Insurance Protocol (SLIP)** is a DeFi primitive on **Moca Chain** that enables communities to stake **\$MOCA tokens** to co-sign high-risk loans or investments.

* **ZKPs (Zero-Knowledge Proofs)**: enforce automated slashing on defaults while preserving privacy.
* **Moca AIR Kit**: leveraged for decentralized identity verification.
* **Smart Account Session Keys**: enable group-based staking and management.

🚀 **Target Impact**: Unlock financial access for the underbanked, aiming for **\$5M TVL** and **10K+ users** within 6 months.

---

## ⚡ What It Does

* Enables decentralized lending where **communities pool \$MOCA** to back loans.
* **AIR Credentials** validate user identity and eligibility.
* **ZKPs trigger slashing** securely on loan defaults.
* Runs on **Moca Chain’s low-fee infrastructure**, ensuring scalability.

---

## 🛠️ The Problem It Solves

Traditional finance excludes **underbanked communities** in emerging markets. SLIP:

* Creates **trust-based lending** backed by \$MOCA stakes.
* Reduces **fraud and collateral barriers** via ZKPs.
* Scales securely without overburdening borrowers.

---

## 💡 Challenges We Faced

* Complex **ZKP integration** with Moca’s AIR Kit.
* Optimizing **slashing logic** for gas efficiency on testnet.
* Ensuring **wallet connectivity** across multiple devices.

---

## 🧑‍💻 Technologies Used

* **Frontend**: Next.js, Tailwind CSS, TypeScript
* **Blockchain**: Solidity, Hardhat, ethers.js
* **Identity**: Moca AIR Kit (mocked for demo)
* **Testing**: Mocha/Chai
* **Deployment**: Moca Chain testnet

---

## 🔨 How We Built It

1. Developed smart contracts (e.g., `SLIPStaking.sol`) with **Hardhat**.
2. Built a **Next.js frontend** styled with Tailwind CSS.
3. Integrated **mocked AIR Kit ZKPs** + session keys.
4. Deployed on **Moca testnet** and tested end-to-end.

---

## 📚 What We Learned

* Optimized **ZKP circuits** for performance.
* Realized **community feedback** is crucial for usability.
* Identified edge cases in **staking/slashing logic** during trials.

---

## 🚀 What’s Next

* **Short-Term**: Launch on mainnet, refine UI.
* **Medium-Term**: Integrate with other DeFi protocols, partner with Animoca Brands.
* **Long-Term**: Scale to **50K+ users**, introduce micro-savings and credential markets.

---

## ⚙️ Setup Instructions

### Prerequisites

* Node.js (v18+)
* MetaMask (configured for **Moca Chain testnet**)
* Testnet \$MOCA tokens (via faucet)

### Installation

**Clone the Repository**

```bash
git clone https://github.com/ernnies/slip-dapp.git
cd slip-dapp
```

**Backend Setup (Hardhat)**

```bash
npm install --save-dev hardhat @openzeppelin/contracts
```

**Frontend Setup**

```bash
cd frontend
npm install
```

**Environment Configuration**
Create `frontend/.env.local`:

```env
NEXT_PUBLIC_MOCA_TESTNET_RPC=https://testnet.mocachain.io
NEXT_PUBLIC_SLIP_CONTRACT_ADDRESS=0xYourDeployedAddress
```

Update `hardhat.config.ts` with your RPC + private key.

---

## ▶️ Running the Project

**Deploy Contracts**

```bash
npx hardhat run scripts/deploy.ts --network moca_testnet
```

Update `.env.local` with the deployed contract address.

**Start Frontend**

```bash
cd frontend
npm run dev
```

Access at [http://localhost:3000](http://localhost:3000).

**Test the dApp**

* Connect MetaMask to Moca testnet.
* Create a pool, stake \$MOCA, and submit a mock ZKP proof.

---

## 🧪 Testing

**Backend Tests**

```bash
npx hardhat test
```

**Frontend Testing**

* Manual browser testing.
* Future: Add Jest for unit tests.

---

## 🌍 Deployment

* **Contracts**: Deployed with Hardhat → Moca testnet.
* **Frontend**: Deployed via Vercel (`npm run build`).
* **Demo Link**: [https://slip-dapp.vercel.app](https://slip-dapp.vercel.app) *(post-deployment)*

---

## 📋 Buildathon Details

* **Wave**: 1
* **Grant Request**: \$10K (\$5K audit, \$5K marketing)
* **Mentorship Needs**: ZKP optimization, tokenomics guidance
* **VC Intros**: Seeking \$500K seed (Animoca ecosystem)
* **Demo Date**: October 10, 2025 (Token2049)

---

## 📜 License

This project is licensed under the **MIT License** (see [LICENSE](LICENSE)).

---

## 📬 Contact

* **Twitter**: [@slip\_builder](https://twitter.com/slip_builder)
* **Email**: [ernnies@example.com](mailto:ernnies@example.com)

---

## 🙏 Acknowledgments

* Built with support from the **Moca Network** team.
* Inspired by **Animoca Brands’ decentralized identity vision**.
* Special thanks to the **Proof of Build community**!

---

## 📝 Notes

* Replace placeholder addresses (e.g., `0xYourDeployedAddress`) after deployment.
* Upload `logo.png` to `frontend/public/` if missing.
* This README is optimized for Buildathon submission and can be updated post-demo.

---

Would you like me to also **generate a `docs/architecture.md`** with diagrams (contracts, flows, ZKP logic) so judges see the technical depth clearly?
