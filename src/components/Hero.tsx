import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg" 
          alt="Korean food background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 to-orange-50/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-6">
            Hansik Garden
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Modern Korean Cuisine in the Heart of Seoul
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the warmth and authenticity of traditional Korean home cooking 
            in our stylish, modern space. Seasonal, locally sourced ingredients prepared 
            using classic recipes with elegant presentation.
          </p>
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Our Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;