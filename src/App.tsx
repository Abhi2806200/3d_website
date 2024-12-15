import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import GLBViewer from './components/GLBViewer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our Latest Model
        </h2>
        <GLBViewer />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <ProductGrid />
      </div>
      
      <Cart />
    </div>
  );
}

export default App;