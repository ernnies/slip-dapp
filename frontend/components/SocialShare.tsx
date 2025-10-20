export function SocialShare({ poolId }: { poolId: string }) {
  const url = `https://dca-optimizer.com/pools/${poolId}`;
  return (
    <button onClick={() => navigator.share({ url })}>Share</button>
  );
}