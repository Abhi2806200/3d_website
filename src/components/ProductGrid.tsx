import React from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { Package } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our collection of premium furniture and lighting. Each piece is carefully crafted and can be viewed in stunning 3D detail.
            </p>
          </div>
          <Package className="h-12 w-12 text-indigo-600 hidden lg:block" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};