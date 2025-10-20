export function PortfolioCard({ apy }: { apy: string }) {
  return (
    <div className="card">
      <h3>Portfolio APY: {apy}</h3>
      <p>Total Value: $10,000</p>
    </div>
  );
}