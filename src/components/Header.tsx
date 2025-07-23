import React from 'react';
import { Menu, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">한</span>
            </div>
            <h1 className="text-2xl font-serif font-bold text-amber-900">Hansik Garden</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">About</a>
            <a href="#menu" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">Menu</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">Contact</a>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Seoul, Korea</span>
            </div>
          </nav>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;