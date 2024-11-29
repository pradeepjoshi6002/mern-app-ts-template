export const calculateDiscountedPrice = (price: number, percetage: number) => {
  return price * (1 - percetage / 100) + '$';
};
