export type TCategory = {
  id: string;
  name: string;
  description: string;
  slug: string;
  createdAt: string;
  level: number;
  updatedAt: string;
  deletedAt: null;
  isShowAtHome?: boolean;
  isAtSidebar?: boolean;
  image?: string;

  subCategories?: TCategory[];
  parentCategory?: TCategory;
};
