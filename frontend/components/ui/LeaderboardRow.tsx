export function LeaderboardRow({ id, yield: yieldValue, address }: { id: string; yield: string; address: string }) {
  return (
    <div className="card flex justify-between items-center animate-pulseGold">
      <span>{id}</span>
      <span>{yieldValue}</span>
      <span>{address.slice(0, 6)}...</span>
    </div>
  );
}