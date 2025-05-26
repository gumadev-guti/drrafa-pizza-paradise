
import React from 'react';
import { Pizza, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-pizzeria-red p-2 rounded-full">
                <Pizza className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-playfair font-bold text-pizzeria-gold">
                DRafa Pizzería
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Auténtica pizza italiana en el corazón de Madrid. Tradición, 
              calidad y sabor desde hace más de 25 años.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-pizzeria-red transition-colors hover-scale"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-pizzeria-red transition-colors hover-scale"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-pizzeria-red transition-colors hover-scale"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 text-pizzeria-gold">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-white transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 text-pizzeria-gold">
              Contacto
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Calle de la Pizza, 123</p>
              <p>28001 Madrid, España</p>
              <p>+34 123 456 789</p>
              <p>info@drafa-pizzeria.es</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 DRafa Pizzería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
