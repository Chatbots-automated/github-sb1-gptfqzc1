import React from 'react';
import { Sun, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sun className="h-8 w-8 text-elida-gold" />
              <span className="font-playfair text-2xl font-bold text-elida-gold">ÉLIDA</span>
            </div>
            <p className="text-gray-400">
              Aukščiausios kokybės soliariumai ir profesionalus aptarnavimas Panevėžyje.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Kontaktai</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-elida-gold transition-colors">
                  <MapPin className="h-5 w-5 mr-2" />
                  Panevėžys, Lietuva
                </a>
              </li>
              <li>
                <a href="tel:+37060000000" className="flex items-center text-gray-400 hover:text-elida-gold transition-colors">
                  <Phone className="h-5 w-5 mr-2" />
                  +370 600 00000
                </a>
              </li>
              <li>
                <a href="mailto:info@elida.lt" className="flex items-center text-gray-400 hover:text-elida-gold transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  info@elida.lt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Nuorodos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-elida-gold transition-colors">
                  Paslaugos
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-elida-gold transition-colors">
                  Galerija
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-elida-gold transition-colors">
                  Rezervacijos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Sekite Mus</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-elida-gold transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-elida-gold transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ÉLIDA. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  );
}