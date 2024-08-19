export const getYear = () => {
  return new Date().getFullYear();
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const calculateDiscountPrice = (price, discountPercentage) => {
  const discountAmount = price * (discountPercentage / 100);
  return price - discountAmount;
};

export const randomPrice = () => {
  return Math.floor(Math.random() * (50000 - 20000 + 1) + 20000);
};

export const randomDiscount = () => {
  return [0, 5, 10, 15][Math.floor(Math.random() * 4)];
};
