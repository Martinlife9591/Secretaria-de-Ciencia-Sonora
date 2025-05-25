import React from 'react';
import { ALLIANCE_PARTNERS_DATA } from '../constants';
import { SectionProps } from '../types';

const StrategicAlliances: React.FC<SectionProps> = ({ id, scrollMarginTopClass }) => {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 bg-white ${scrollMarginTopClass}`}> {/* Changed background */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">Nuestras Alianzas Estratégicas</h2>
        <p className="text-lg text-gray-700 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
          Trabajamos en colaboración con las principales instituciones académicas, centros de investigación y empresas de Sonora para impulsar la ciencia y la innovación.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-10 md:gap-x-10 md:gap-y-12 items-center">
          {ALLIANCE_PARTNERS_DATA.map((partner, index) => (
            <div key={index} className="flex justify-center items-center p-3 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out transform hover:scale-110" title={partner.name}>
              <img src={partner.logoUrl} alt={partner.name} className="h-16 md:h-20 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicAlliances;