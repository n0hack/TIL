export type Category =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';

export interface NewsCategory {
  name: Category;
  text: string;
}

export interface NewsData {
  articles: News[] | null;
}

export interface News {
  source?: {
    id: string | null;
    name: string | null;
  };
  author?: null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt?: string | null;
  content?: string | null;
}
