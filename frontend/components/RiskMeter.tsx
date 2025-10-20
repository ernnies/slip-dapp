export function RiskMeter({ score }: { score: string }) {
  return (
    <div className="w-20 h-20 rounded-full border-4 border-green-500"> {/* SVG gauge mock */}
      {score}
    </div>
  );
}