import React from 'react';
import { Eye } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
}

interface DishCardProps {
  dish: Dish;
  onViewDetails: (dish: Dish) => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-serif font-bold text-amber-900">{dish.name}</h3>
          <span className="text-xl font-bold text-green-700">{dish.price}</span>
        </div>
        
        <p className="text-gray-700 mb-4 leading-relaxed">{dish.description}</p>
        
        <button
          onClick={() => onViewDetails(dish)}
          className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};

export default DishCard;