export function calculateAPY(principal: number, interest: number, time: number): string {
  return ((principal * (1 + interest / 100) ** time - principal) / principal * 100).toFixed(2) + '%';
}