
import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-pizzeria-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-pizzeria-red mb-4">
            Visítanos
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Te esperamos en nuestro acogedor restaurante. Ven a disfrutar de la 
            auténtica experiencia italiana en el corazón de Madrid
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-white shadow-lg border-0 animate-scale-in">
              <div className="flex items-start space-x-4">
                <div className="bg-pizzeria-red p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-pizzeria-red mb-2">
                    Ubicación
                  </h3>
                  <p className="text-gray-600">
                    Calle de la Pizza, 123<br />
                    28001 Madrid, España
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg border-0 animate-scale-in">
              <div className="flex items-start space-x-4">
                <div className="bg-pizzeria-red p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-pizzeria-red mb-2">
                    Teléfono
                  </h3>
                  <p className="text-gray-600">
                    +34 123 456 789<br />
                    +34 987 654 321
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg border-0 animate-scale-in">
              <div className="flex items-start space-x-4">
                <div className="bg-pizzeria-red p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-pizzeria-red mb-2">
                    Horarios
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Lun - Jue: 12:00 - 23:00</p>
                    <p>Vie - Sáb: 12:00 - 24:00</p>
                    <p>Domingo: 12:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg border-0 animate-scale-in">
              <div className="flex items-start space-x-4">
                <div className="bg-pizzeria-red p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-pizzeria-red mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    info@drafa-pizzeria.es<br />
                    reservas@drafa-pizzeria.es
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="p-2 bg-white shadow-lg border-0 h-full">
              <div className="w-full h-96 lg:h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Mapa Interactivo</p>
                  <p>Calle de la Pizza, 123, Madrid</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-pizzeria-red text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              ¿Listo para una experiencia única?
            </h3>
            <p className="text-lg mb-6">
              Reserva tu mesa ahora y disfruta de la mejor pizza italiana de Madrid
            </p>
            <button className="bg-white text-pizzeria-red px-8 py-3 rounded-lg font-semibold hover-scale hover:bg-gray-100 transition-colors">
              Hacer Reserva
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
