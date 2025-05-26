
import React from 'react';
import { Card } from '@/components/ui/card';

const Menu = () => {
  const pizzas = [
    {
      name: 'Margherita',
      description: 'Salsa de tomate, mozzarella fresca, albahaca, aceite de oliva extra virgen',
      price: '€12.50',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      name: 'Pepperoni Clásica',
      description: 'Salsa de tomate, mozzarella, pepperoni italiano, orégano',
      price: '€14.00',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Quattro Stagioni',
      description: 'Salsa de tomate, mozzarella, jamón, champiñones, alcachofas, aceitunas',
      price: '€16.50',
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Prosciutto e Funghi',
      description: 'Salsa de tomate, mozzarella, jamón de Parma, champiñones frescos',
      price: '€15.00',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      name: 'Diavola',
      description: 'Salsa de tomate, mozzarella, salami picante, aceite de chile',
      price: '€14.50',
      image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Quattro Formaggi',
      description: 'Mozzarella, gorgonzola, parmesano, ricotta, miel de trufa',
      price: '€17.00',
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="menu" className="py-20 bg-pizzeria-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-pizzeria-red mb-4">
            Nuestro Menú
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Cada pizza es una obra maestra, preparada con ingredientes de la más alta calidad
            y cocinada a la perfección en nuestro horno de leña tradicional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza, index) => (
            <Card 
              key={pizza.name} 
              className="overflow-hidden hover-scale bg-white shadow-lg border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-48 object-cover"
                />
                {pizza.popular && (
                  <div className="absolute top-4 left-4 bg-pizzeria-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-playfair font-bold text-pizzeria-red">
                    {pizza.name}
                  </h3>
                  <span className="text-2xl font-bold text-pizzeria-gold">
                    {pizza.price}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {pizza.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            ¿No encuentras lo que buscas? Tenemos muchas más opciones
          </p>
          <button className="bg-pizzeria-red hover:bg-pizzeria-darkRed text-white px-8 py-3 rounded-lg font-semibold hover-scale transition-colors">
            Ver Menú Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
