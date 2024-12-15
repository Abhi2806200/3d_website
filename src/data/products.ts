import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ergonomic Lounge Chair',
    price: 299.99,
    description: 'Experience ultimate comfort with our signature ergonomic design',
    modelUrl: '', // Using fallback
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://static.videezy.com/system/resources/previews/000/021/751/original/furniture-chair-rotating-360.mp4',
    features: ['Ergonomic Design', 'Premium Materials', 'Adjustable Height'],
    colors: ['#1F2937', '#4B5563', '#9CA3AF'],
    category: 'chairs'
  },
  {
    id: '2',
    name: 'Modern Pendant Light',
    price: 159.99,
    description: 'Illuminate your space with this stunning contemporary design',
    modelUrl: '', // Using fallback
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://static.videezy.com/system/resources/previews/000/052/842/original/Modern-Lamp-Rotating.mp4',
    features: ['Dimmable LED', 'Adjustable Height', 'Energy Efficient'],
    colors: ['#D1D5DB', '#F3F4F6', '#000000'],
    category: 'lighting'
  },
  {
    id: '3',
    name: 'Minimalist Coffee Table',
    price: 399.99,
    description: 'Sleek design meets functionality in this modern masterpiece',
    modelUrl: '', // Using fallback
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://static.videezy.com/system/resources/previews/000/052/844/original/Modern-Table-Rotating.mp4',
    features: ['Solid Wood', 'Storage Space', 'Scratch Resistant'],
    colors: ['#92400E', '#78350F', '#451A03'],
    category: 'tables'
  }
];