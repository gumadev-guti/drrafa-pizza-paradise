
import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
              alt="Pizzaiolo preparando pizza"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-pizzeria-red mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                En <span className="font-semibold text-pizzeria-red">DRafa</span>, llevamos 
                más de tres generaciones perfeccionando el arte de la pizza italiana auténtica. 
                Nuestra historia comenzó en un pequeño pueblo de Nápoles, donde nuestro abuelo 
                Rafael aprendió los secretos de la verdadera pizza napolitana.
              </p>
              <p>
                Cada pizza que servimos es el resultado de años de tradición familiar, 
                combinada con ingredientes cuidadosamente seleccionados: tomates San Marzano, 
                mozzarella di bufala campana, y harina tipo 00 importada directamente de Italia.
              </p>
              <p>
                Nuestro horno de leña, construido según las especificaciones tradicionales 
                napolitanas, alcanza temperaturas de más de 450°C, creando esa corteza 
                perfectamente crujiente por fuera y suave por dentro que caracteriza a 
                una auténtica pizza italiana.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-pizzeria-red mb-2">25+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pizzeria-red mb-2">50k+</div>
                <div className="text-sm text-gray-600">Pizzas Servidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pizzeria-red mb-2">4.9★</div>
                <div className="text-sm text-gray-600">Valoración Media</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
