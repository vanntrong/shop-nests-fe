export type TCategory = {
  id: string;
  name: string;
  description: string;
  slug: string;
  createdAt: string;
  level: number;
  updatedAt: string;
  deletedAt: null;

  subCategories?: TCategory[];
  parentCategory?: TCategory;
};
