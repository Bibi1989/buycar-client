export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(price).slice(1, -3);
};

export const prices = [
  500000,
  1000000,
  1500000,
  2000000,
  2500000,
  3000000,
  10000000,
  20000000,
  30000000,
  40000000,
  50000000,
];
