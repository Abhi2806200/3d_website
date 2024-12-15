import React from 'react';
import { Product } from '../types/product';
import { useCartStore } from '../store/cartStore';
import { Scene } from './3d/Scene';
import { Model } from './3d/Model';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [cameraPosition, setCameraPosition] = React.useState<[number, number, number]>([0, 0, 2.5]);

  const viewAngles = {
    front: [0, 0, 2.5],
    side: [2.5, 0, 0],
    top: [0, 2.5, 0],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Scene 
            height="600px"
            cameraPosition={cameraPosition}
            enableZoom={true}
          >
            <Model 
              url={product.modelUrl}
              scale={1.8}
              position={[0, 0, 0]}
            />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
          </Scene>
          <div className="p-4 flex justify-center space-x-4">
            {Object.entries(viewAngles).map(([angle, position]) => (
              <button
                key={angle}
                onClick={() => setCameraPosition(position as [number, number, number])}
                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors capitalize"
              >
                {angle} View
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-gray-600">{product.description}</p>
          <div className="text-3xl font-bold text-indigo-600">${product.price}</div>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
          >
            Add to Cart
          </button>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Product Features</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Interactive 3D Preview
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Multiple View Angles
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                High-quality Materials
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};