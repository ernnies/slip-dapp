export function assessRisk(volatility: number, liquidity: number): string {
  return volatility > 50 && liquidity < 1000 ? 'High' : 'Low';
}