export type Room = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  capacity: number;
  area: number;
  price: number;
  features: string[];
  amenities: string[];
  images: string[];
};

export type Experience = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Extra = {
  id: string;
  title: string;
  description: string;
  price?: number;
};
