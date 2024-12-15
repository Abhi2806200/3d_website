export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  modelUrl: string;
  imageUrl: string;
  videoUrl?: string;
  features: string[];
  colors: string[];
  category: string;
}