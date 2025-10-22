"use client";

import { useEffect } from "react";
import { Hero } from "@/components/ui/Hero";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Notification } from "@/components/ui/Notification";
import { Chart } from "@/components/ui/Chart";
import { useNotifications } from "@/hooks/useNotifications";
import { useTypedRoutes } from "@/hooks/useTypedRoutes";
import { LiveYieldFeed } from "@/components/LiveYieldFeed";
import { GoldenBadge } from "@/components/GoldenBadge";
import { useRewards } from "@/hooks/useRewards";
import { MultiChainSelector } from "@/components/MultiChainSelector";
import { PremiumBanner } from "@/components/PremiumBanner";

export default function Home() {
  const { notifications, addNotification } = useNotifications();
  const { goToPool } = useTypedRoutes();
  const chartData = [10, 12, 15];
  const reward = useRewards();

  // Use notifications
  useEffect(() => {
    if (notifications.length > 0) {
      console.log("Notifications:", notifications);
    }
  }, [notifications]);

  // Use addNotification
  const handleClick = () => addNotification("New yield update!");

  return (
    <main className="container mx-auto p-4">
      <Hero />
      <ThemeToggle />
      <Notification message="Welcome to Luxury Yield!" />
      <Chart data={chartData} />
      <LiveYieldFeed />
      {reward && <GoldenBadge reward={reward} />}
      <MultiChainSelector />
      <PremiumBanner />
      <button onClick={handleClick} className="btn-primary mt-4">
        Notify Me
      </button>
      <button onClick={() => goToPool("1")} className="btn-primary mt-4">
        Explore Pools
      </button>
    </main>
  );
}