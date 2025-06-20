export interface DeveloperData {
  name: string | null;
  link?: string | null;
  contact?: string | null;
  twitter?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  tiktok?: string | null;
}

export interface PublisherData {
  name: string | null;
  link?: string | null;
  contact?: string | null;
  twitter?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  tiktok?: string | null;
}

export interface GameData {
  title: string | null;
  description?: string | null;
  released?: string | null;
  genre?: string | null;
  tags?: string[] | null;
  platforms?: string[] | null;
  devs?: DeveloperData[];
  publishers?: PublisherData[];
  storeLinks?: {
    name: string;
    link: string;
  }[];
  image?: string | null;
  screenshots?: string[] | null;
  video?: string | null;
  isPaid?: boolean;
  engine?: string | null;
  slug?: string | null;
}
