import React, { useState } from 'react';
import { Product } from '../types/product';
import { useCartStore } from '../store/cartStore';
import { Scene } from './3d/Scene';
import { Fallback } from './3d/Fallback';
import { Play, Pause, RotateCcw, Eye, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isRotating, setIsRotating] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [cameraAngle, setCameraAngle] = useState<[number, number, number]>([0, 0, 2.5]);

  const handleViewChange = () => {
    const angles: [number, number, number][] = [
      [0, 0, 2.5],   // front
      [2.5, 0, 0],   // side
      [0, 2.5, 0],   // top
      [-2.5, 0, 0],  // other side
    ];
    
    const currentIndex = angles.findIndex(
      angle => angle[0] === cameraAngle[0] && angle[1] === cameraAngle[1]
    );
    const nextIndex = (currentIndex + 1) % angles.length;
    setCameraAngle(angles[nextIndex]);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      <div className="h-80 relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white">
        {showVideo && product.videoUrl ? (
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src={product.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <Scene 
            height="320px"
            cameraPosition={cameraAngle}
            autoRotate={isRotating}
          >
            <Fallback 
              type={product.category === 'chairs' ? 'box' : 
                    product.category === 'lighting' ? 'sphere' : 'torus'}
              scale={1.5}
              position={[0, 0, 0]}
              autoRotate={isRotating}
              color="#6366f1"
            />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
          </Scene>
        )}
        
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {/* {product.videoUrl && (
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="bg-white/90 text-gray-800 p-2 rounded-lg hover:bg-white shadow-lg"
            >
              {showVideo ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          )} */}
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="bg-white/90 text-gray-800 p-2 rounded-lg hover:bg-white shadow-lg"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleViewChange}
            className="bg-white/90 text-gray-800 p-2 rounded-lg hover:bg-white shadow-lg"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>
            <h3 className="text-xl font-semibold text-gray-800 mt-3">{product.name}</h3>
            <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <div className="flex space-x-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border-2 border-white shadow-md transform transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </span>
        </div>
        
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 group"
        >
          <ShoppingCart className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};