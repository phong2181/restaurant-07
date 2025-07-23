import React from 'react';
import { X } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
}

interface DishModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
}

const DishModal: React.FC<DishModalProps> = ({ dish, isOpen, onClose }) => {
  if (!isOpen || !dish) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
          
          <div className="pr-10">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-2">
              {dish.name}
            </h2>
            <p className="text-2xl font-bold text-green-700 mb-4">{dish.price}</p>
            
            <div className="mb-6">
              <img 
                src={dish.image} 
                alt={dish.name}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">{dish.description}</p>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Ingredients</h3>
              <p className="text-gray-700 leading-relaxed">{dish.ingredients}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishModal;