import { TCategory } from "@/types/category";
import { TVariant } from "@/types/variant";

export const dummyVariants: TVariant[] = [
  {
    title: "Hộp 100gr",
    value: "100gr",
  },
  {
    title: "Hộp 50gr",
    value: "50gr",
  },
];

export const dummyOtherListCategories: Partial<TCategory>[] = [
  {
    name: "Hồng sâm",
    image: "/images/home/bg-nhan-sam.jpeg",
    slug: "hong-sam",
  },
  {
    name: "linh chi",
    image: "/images/home/bg-linh-chi.jpeg",
    slug: "linh-chi",
  },
  {
    name: "an cung ngưu",
    image: "/images/home/bg-an-cung-ngu.jpeg",
    slug: "an-cung-nguu",
  },
  {
    name: "Tinh dầu thông đỏ",
    image: "/images/home/bg-tinh-dau-thong-do.jpeg",
    slug: "tinh-dau-thong-do",
  },
  {
    name: "Đông trùng",
    image: "/images/home/bg-dong-trung.png",
    slug: "dong-trung-ha-thao",
  },
];
