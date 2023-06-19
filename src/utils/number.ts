export const numberToVND = (number: number) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(number);
};

export const calculateSale = (price: number, sale: number) => {
  return Math.round(price - (price * sale) / 100);
};
