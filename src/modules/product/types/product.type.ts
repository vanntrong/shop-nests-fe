import { IPaginationResponse } from "@/types/common";
import { TVariant } from "@/types/variant";

export type TProduct = {
  id: string;
  isActive: true;
  name: string;
  slug: string;
  thumbnailUrl: string;
  price: number;
  description: string;
  salePrice: number | null;
  images: string[];
  weight: number;
  inventory: number;
  saleEndAt: string | null;
  detailDescription: string;
  isDeleted: false;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
};

export type TProductList = {
  title: string;
  variant: TVariant[] | null;
  products: IPaginationResponse<TProduct>;
};
