import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-amber-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">한</span>
              </div>
              <h3 className="text-2xl font-serif font-bold">Hansik Garden</h3>
            </div>
            <p className="text-amber-100 leading-relaxed">
              Experience authentic Korean home cooking in our modern, welcoming space. 
              Traditional recipes meet contemporary presentation.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100">123 Gangnam-gu, Seoul, South Korea</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100">+82 2-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100">hello@hansikgarden.kr</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-300" />
                <div className="text-amber-100">
                  <div>Monday - Friday: 11:30 AM - 10:00 PM</div>
                  <div>Saturday - Sunday: 11:00 AM - 11:00 PM</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <span className="text-sm font-bold">IG</span>
                </button>
                <button className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <span className="text-sm font-bold">FB</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-12 pt-8 text-center">
          <p className="text-amber-200">
            © 2025 Hansik Garden. All rights reserved. | Modern Korean Cuisine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;