import { PortfolioCard } from "@/components/PortfolioCard";

export default async function Overview() {
  const data = await fetch('http://localhost:3000/api/apy', { cache: 'no-store' });  // Async API
  const apyData = await data.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <PortfolioCard apy={apyData.total} />
    </div>
  );
}