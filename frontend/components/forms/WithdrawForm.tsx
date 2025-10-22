"use client";

export function WithdrawForm({ poolId }: { poolId: string }) {
  console.log("Withdraw from pool:", poolId); // Use poolId
  return (
    <form className="card">
      <input className="input-field" placeholder="Amount to Withdraw" />
      <button className="btn-secondary">Withdraw</button>
    </form>
  );
}