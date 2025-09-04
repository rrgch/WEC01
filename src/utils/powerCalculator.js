export const calculatePower = (voltage, current) => {
  return parseFloat((voltage * current).toFixed(3));
};