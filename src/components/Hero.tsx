import React from 'react';
import { Scene } from './3d/Scene';
import { Fallback } from './3d/Fallback';
import { ArrowDown, Package } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-900">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent animate-pulse" />
      </div>

      {/* 3D Scene */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] hidden lg:block">
        <Scene 
          height="100%" 
          cameraPosition={[3, 2, 5]} 
          autoRotate={true}
        >
          <Fallback
            type="torus"
            scale={2.5}
            position={[0, 0, 0]}
            autoRotate={true}
            color="#a78bfa"
          />
          <spotLight
            position={[10, 10, 10]}
            angle={0.2}
            penumbra={1}
            intensity={2.5}
          />
          <pointLight position={[-10, -10, -10]} intensity={1.5} />
        </Scene>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col justify-center h-full pt-24 lg:w-1/2">
          {/* Tagline */}
          <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
            <Package className="h-10 w-10 text-indigo-400 animate-spin-slow" />
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-400">
              Future Store
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-tight animate-slideUp">
            Shop in
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-400">
              {" "}3D Reality
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-2xl text-indigo-200 max-w-xl mb-10 animate-fadeIn">
            Dive into an immersive shopping experience. Explore, rotate, and zoom like never before.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-110 transform transition-all shadow-lg">
              Shop Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white drop-shadow-lg" />
      </div>
    </div>
  );
};
