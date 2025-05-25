import React from 'react';
import { ACTIVE_CALLS_DATA } from '../constants';
import { SectionProps } from '../types';

const ActiveCalls: React.FC<SectionProps> = ({ id, scrollMarginTopClass }) => {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 bg-white ${scrollMarginTopClass}`}> {/* Changed background */}
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 md:mb-16 text-center">Convocatorias Activas</h2>
        <div className="overflow-x-auto pb-8 -mb-6"> {/* Increased pb for scrollbar */}
          <div className="flex space-x-6 md:space-x-8 px-4 md:px-0 min-w-max pb-2"> {/* Added pb-2 for card shadow visibility */}
            {ACTIVE_CALLS_DATA.map((call) => (
              <div key={call.title} className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-80 md:w-96 flex-shrink-0 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between border border-gray-200">
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#8B0D37] mb-4">{call.title}</h3>
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">{call.description}</p>
                </div>
                <a
                  href={call.link}
                  className="inline-flex items-center mt-auto text-[#BC955C] hover:text-[#8B0D37] font-semibold group transition-colors duration-200 self-start text-base"
                >
                  {call.linkText} 
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-200"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-12 text-center text-gray-700 text-lg">
          Consulta todas las convocatorias <a href="#" className="text-[#8B0D37] hover:underline font-bold">aquí</a>.
        </p>
      </div>
    </section>
  );
};

export default ActiveCalls;