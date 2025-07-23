import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-6">
              Our Atmosphere
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Step into our modern Hanok-inspired space, where traditional Korean 
                architecture meets contemporary comfort. Warm wooden beams, soft paper 
                lanterns, and sliding wooden doors create an inviting atmosphere.
              </p>
              <p>
                Our dining room features walnut wood tables, ceramic dishware from local 
                artisans, and carefully placed potted plants. Korean calligraphy scrolls 
                and ambient lighting complete the cozy, authentic experience.
              </p>
              <p>
                Watch our chefs prepare fresh banchan (side dishes) at our open kitchen 
                and visible banchan bar, where tradition meets culinary artistry.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 relative z-10">
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                <img 
                  src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg" 
                  alt="Korean restaurant interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">
              Design Elements
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Modern Hanok-inspired architecture</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Walnut wood tables & local ceramic dishware</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Paper lanterns & soft ambient lighting</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Open kitchen with visible banchan bar</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Korean calligraphy & potted plants</span>
              </li>
            </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;