import React, { useState } from 'react';
import DishCard from './DishCard';
import DishModal from './DishModal';

interface Dish {
  id: number;
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
}

const Menu = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dishes: Dish[] = [
    {
      id: 1,
      name: "Kimchi Jeon (Kimchi Pancake)",
      price: "₩8,000",
      description: "A savory pancake made with house-fermented kimchi.",
      ingredients: "Kimchi, flour, egg, green onion, vegetable oil, dipping soy sauce (soy, vinegar, sesame).",
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
    },
    {
      id: 2,
      name: "Bulgogi",
      price: "₩16,000",
      description: "Thinly sliced marinated beef grilled with vegetables.",
      ingredients: "Thin beef slices, soy sauce, garlic, sesame oil, sugar, onion, carrot, mushroom, green onion.",
      image: "https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg"
    },
    {
      id: 3,
      name: "Bibimbap",
      price: "₩12,000",
      description: "Warm rice bowl topped with assorted vegetables, beef, and fried egg.",
      ingredients: "Steamed rice, zucchini, carrot, spinach, bean sprouts, mushrooms, marinated beef, fried egg, gochujang sauce.",
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
    },
    {
      id: 4,
      name: "Japchae",
      price: "₩10,000",
      description: "Stir-fried glass noodles with beef and vegetables.",
      ingredients: "Sweet potato starch noodles, beef, carrot, spinach, onion, mushroom, soy sauce, sesame oil, sugar.",
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
    },
    {
      id: 5,
      name: "Samgyeopsal (Grilled Pork Belly)",
      price: "₩17,000",
      description: "Grilled pork belly served with fresh lettuce, garlic, and ssamjang.",
      ingredients: "Thick-cut pork belly slices, fresh lettuce, raw garlic, green chili, ssamjang (soybean paste, chili paste, garlic).",
      image: "https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg"
    },
    {
      id: 6,
      name: "Tteokbokki (Spicy Rice Cakes)",
      price: "₩9,000",
      description: "Chewy rice cakes simmered in a sweet and spicy sauce.",
      ingredients: "Rice cakes, fish cakes, gochujang, garlic, sugar, green onion, boiled egg.",
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
    },
    {
      id: 7,
      name: "Haemul Sundubu Jjigae (Seafood Soft Tofu Stew)",
      price: "₩11,000",
      description: "Spicy stew with soft tofu, mixed seafood, and vegetables.",
      ingredients: "Soft tofu, clams, shrimp, squid, zucchini, onion, garlic, egg, gochugaru (Korean chili flakes), anchovy broth.",
      image: "https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg"
    },
    {
      id: 8,
      name: "Hotteok (Sweet Korean Pancake)",
      price: "₩5,000",
      description: "Warm, chewy pancake filled with brown sugar, nuts, and cinnamon.",
      ingredients: "Wheat flour, brown sugar, cinnamon, walnuts, sunflower seeds, vegetable oil.",
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
    }
  ];

  const beverages = [
    { name: "Barley Tea", price: "₩2,000" },
    { name: "Makgeolli (Rice Wine)", price: "₩6,000 per cup" },
    { name: "Soju", price: "₩5,000 per bottle" },
    { name: "Korean Plum Juice", price: "₩3,000" }
  ];

  const handleViewDetails = (dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDish(null);
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover authentic Korean flavors prepared with seasonal, locally sourced ingredients
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-amber-900 mb-8 text-center">
            Main Dishes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dishes.map((dish) => (
              <DishCard 
                key={dish.id} 
                dish={dish} 
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-serif font-bold text-amber-900 mb-6 text-center">
            Beverages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {beverages.map((beverage, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                <span className="font-medium text-gray-800">{beverage.name}</span>
                <span className="font-bold text-green-700">{beverage.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DishModal 
        dish={selectedDish}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Menu;