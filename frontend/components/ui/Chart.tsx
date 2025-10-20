"use client";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function Chart({ data }: { data: number[] }) {
  const chartData = { labels: ['Jan', 'Feb'], datasets: [{ label: 'APY', data }] };
  return <Line data={chartData} />;
}