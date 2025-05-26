
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-shadow">
          Bienvenidos a{' '}
          <span className="text-pizzeria-gold">DRafa</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow max-w-2xl mx-auto leading-relaxed">
          Auténtica pizza italiana hecha con amor, ingredientes frescos y 
          la pasión de generaciones de maestros pizzaiolos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToMenu}
            size="lg" 
            className="bg-pizzeria-red hover:bg-pizzeria-darkRed text-white px-8 py-3 text-lg font-semibold hover-scale"
          >
            Ver Nuestro Menú
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pizzeria-red px-8 py-3 text-lg font-semibold hover-scale"
          >
            Hacer Reserva
          </Button>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="animate-scale-in">
            <div className="bg-pizzeria-red/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-playfair font-bold mb-2">Ingredientes Frescos</h3>
              <p className="text-gray-200">Seleccionamos los mejores ingredientes para cada pizza</p>
            </div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-pizzeria-red/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-playfair font-bold mb-2">Horno de Leña</h3>
              <p className="text-gray-200">Cocinadas en nuestro horno tradicional de leña</p>
            </div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-pizzeria-red/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-playfair font-bold mb-2">Recetas Tradicionales</h3>
              <p className="text-gray-200">Siguiendo las recetas auténticas de Italia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
