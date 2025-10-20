export const formatMoca = (amount: string): string => {
  return `${parseFloat(amount).toFixed(2)} $MOCA`;
};

export const formatDate = (timestamp: string): string => {
  return new Date(parseInt(timestamp) * 1000).toLocaleDateString();
};