import React, { useState } from 'react';
import { SectionProps } from '../types';

const ContactForm: React.FC<SectionProps> = ({ id, scrollMarginTopClass }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error
    // Basic validation
    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.asunto.trim() || !formData.mensaje.trim()) {
        setError("Por favor, complete todos los campos.");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.correo)) {
        setError("Por favor, ingrese un correo electrónico válido.");
        return;
    }
    
    console.log("Form data submitted:", formData);
    // Here you would typically send the data to a backend API
    setIsSubmitted(true);
    setFormData({ nombre: '', correo: '', asunto: '', mensaje: '' }); // Reset form
    setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
  };

  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 bg-gray-100 ${scrollMarginTopClass}`}> {/* Changed background */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
          Conecta con el Futuro. Conecta con Sonora.
        </h2>
        <p className="text-lg text-gray-700 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
          ¿Tienes alguna pregunta o te gustaría colaborar con nosotros? ¡Contáctanos!
        </p>
        <div className="max-w-lg mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-gray-200">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 border border-green-300 rounded-lg text-center text-sm" role="alert">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
            </div>
          )}
          {error && (
             <div className="mb-6 p-4 bg-red-100 text-red-800 border border-red-300 rounded-lg text-center text-sm" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 text-left">
            <div>
              <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-1.5">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="appearance-none bg-white border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#BC955C] focus:border-[#BC955C] transition-shadow shadow-sm hover:border-gray-400"
                placeholder="Tu nombre completo"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="correo" className="block text-gray-700 text-sm font-bold mb-1.5">Correo Electrónico:</label>
              <input
                type="email"
                id="correo"
                value={formData.correo}
                onChange={handleChange}
                className="appearance-none bg-white border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#BC955C] focus:border-[#BC955C] transition-shadow shadow-sm hover:border-gray-400"
                placeholder="tu@correo.com"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="asunto" className="block text-gray-700 text-sm font-bold mb-1.5">Asunto:</label>
              <input
                type="text"
                id="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="appearance-none bg-white border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#BC955C] focus:border-[#BC955C] transition-shadow shadow-sm hover:border-gray-400"
                placeholder="Asunto del mensaje"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-1.5">Mensaje:</label>
              <textarea
                id="mensaje"
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                className="appearance-none bg-white border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#BC955C] focus:border-[#BC955C] transition-shadow shadow-sm hover:border-gray-400"
                placeholder="Escribe tu mensaje aquí..."
                aria-required="true"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8B0D37] text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-[#6D0A2B] transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#BC955C]/70 focus:ring-opacity-50"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;