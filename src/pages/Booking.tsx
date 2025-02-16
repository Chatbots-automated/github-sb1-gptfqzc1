import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, Check } from 'lucide-react';

export default function Booking() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const services = [
    { id: 'lying', name: 'Gulimas Soliariumas' },
    { id: 'standing', name: 'Stovimas Soliariumas' }
  ];

  const timeSlots = [
    '10:00', '10:15', '10:30', '10:45',
    '11:00', '11:15', '11:30', '11:45',
    '12:00', '12:15', '12:30', '12:45',
    '13:00', '13:15', '13:30', '13:45'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({ selectedService, selectedTime, formData });
  };

  return (
    <div className="pt-20">
      <section className="bg-elida-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-6">
              Rezervuokite Laiką
            </h1>
            <p className="text-lg text-gray-600">
              Pasirinkite jums patogų laiką ir soliariumą
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div>
                <h3 className="font-playfair text-xl text-gray-900 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-elida-gold mr-2" />
                  Pasirinkite Paslaugą
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                        selectedService === service.id
                          ? 'border-elida-gold bg-elida-gold/5'
                          : 'border-gray-200 hover:border-elida-gold/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{service.name}</span>
                        {selectedService === service.id && (
                          <Check className="h-5 w-5 text-elida-gold" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h3 className="font-playfair text-xl text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-elida-gold mr-2" />
                  Pasirinkite Laiką
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedTime === time
                          ? 'bg-elida-gold text-white'
                          : 'bg-elida-cream hover:bg-elida-gold/20'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-playfair text-xl text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 text-elida-gold mr-2" />
                  Jūsų Informacija
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Vardas
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-elida-gold focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      El. Paštas
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-elida-gold focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefono Numeris
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-elida-gold focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-elida-gold text-white rounded-xl font-medium hover:bg-elida-accent transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Patvirtinti Rezervaciją
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}