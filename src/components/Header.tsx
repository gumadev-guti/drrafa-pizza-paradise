
import React, { useState } from 'react';
import { Pizza, Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-pizzeria-red p-2 rounded-full">
              <Pizza className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-playfair font-bold text-pizzeria-red">
              DRafa
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-pizzeria-red transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-pizzeria-red transition-colors font-medium"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-pizzeria-red transition-colors font-medium"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-pizzeria-red transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+34 123 456 789</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>Madrid, España</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-pizzeria-red transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-pizzeria-red transition-colors font-medium py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left text-gray-700 hover:text-pizzeria-red transition-colors font-medium py-2"
              >
                Menú
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-gray-700 hover:text-pizzeria-red transition-colors font-medium py-2"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left text-gray-700 hover:text-pizzeria-red transition-colors font-medium py-2"
              >
                Contacto
              </button>
              <div className="pt-2 border-t border-gray-200">
                <div className="flex items-center space-x-1 text-gray-600 py-1">
                  <Phone className="h-4 w-4" />
                  <span>+34 123 456 789</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600 py-1">
                  <MapPin className="h-4 w-4" />
                  <span>Madrid, España</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
