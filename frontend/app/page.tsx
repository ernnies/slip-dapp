import { ThemeToggle } from "@components/ui/ThemeToggle";
import { Notification } from "@components/ui/Notification";
import { Chart } from "@components/ui/Chart";
import { useNotifications } from "@hooks/useNotifications";
import { useTypedRoutes } from "@hooks/useTypedRoutes";
import toast from 'react-hot-toast';

export default function Home() {
  const { notifications, addNotification } = useNotifications();
  const { goToPool } = useTypedRoutes();
  const chartData = [10, 12, 15];  // Mock

  return (
    <main className="container mx-auto p-4">
      <ThemeToggle />
      <Notification message="Welcome!" />
      <Chart data={chartData} />
      <button onClick={() => goToPool('1')}>Go to Pool</button>
      <button onClick={() => addNotification('Stake added!')}>Notify</button>
    </main>
  );
}