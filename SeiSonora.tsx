import React from 'react';
import { SectionProps } from '../types';

const SeiSonora: React.FC<SectionProps> = ({ id, scrollMarginTopClass }) => {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 bg-white ${scrollMarginTopClass}`}> {/* Changed background for contrast */}
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl text-[#8B0D37] mb-6 inline-block">
            <i className="fas fa-users-cog"></i> {/* Icon for SEI */}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Sistema Estatal de Investigadores (SEI-Sonora)
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            El SEI-Sonora es una plataforma clave para impulsar la investigación y el desarrollo en nuestro estado. Conecta a investigadores, promueve la colaboración y facilita el acceso a convocatorias y recursos.
          </p>
          <a
            href="#" // Placeholder for actual link
            className="bg-[#8B0D37] text-white text-lg font-semibold py-3.5 px-10 rounded-full hover:bg-[#6D0A2B] transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#BC955C]/70 focus:ring-opacity-50"
          >
            Registro y Convocatorias
          </a>
        </div>
      </div>
    </section>
  );
};

export default SeiSonora;