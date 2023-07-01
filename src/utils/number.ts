import dayjs from "dayjs";
import { isNil } from "lodash";

import { POINT_TO_MONEY } from "@/configs/app.config";

export const numberToVND = (number: number) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(number);
};

export const calculateSale = (price: number, sale: number) => {
  return (((price - sale) / price) * 100).toFixed(2);
};

export const getPriceAfterSale = (price: number, sale?: number | null, saleEnd?: string | null) => {
  const isSaleAvailable = !isNil(sale) && !isNil(saleEnd) && dayjs().isBefore(saleEnd);

  if (isSaleAvailable) {
    return sale;
  }

  return price;
};

export const getReducePoint = (point?: number) => {
  if (point) return point * POINT_TO_MONEY;
  return 0;
};
