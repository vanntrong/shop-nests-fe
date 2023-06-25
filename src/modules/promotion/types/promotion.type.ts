export type TPromotion = {
  id: string;
  name: string;
  description: string;
  code: string;
  typePromotion: "percent" | "money";
  discountFor: "product" | "shipping";
  value: number;
  maxValue: number | null;
  reduce?: {
    isFreeShip: boolean;
    reduceMoney: number | null;
  };
};
