import React from 'react';
import { REGIONS_DATA, IMPACT_INDICATORS_DATA } from '../constants';
import { SectionProps } from '../types';

const ProjectsAndIndicators: React.FC<SectionProps> = ({ id, scrollMarginTopClass }) => {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 bg-gray-100 ${scrollMarginTopClass}`}> {/* Changed background */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Proyectos e Indicadores Regionales</h2>
        <p className="text-gray-700 mb-12 md:mb-16 text-lg max-w-2xl mx-auto">
          Distribución de iniciativas científicas y tecnológicas en las regiones clave de Sonora.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {REGIONS_DATA.map((region) => (
            <div key={region.name} className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl flex flex-col">
              <h3 className="text-2xl font-semibold text-[#285C4D] mb-4">{region.name}</h3>
              <div className="text-6xl font-bold text-[#8B0D37] mb-2">{region.projectCount}</div>
              <p className="text-gray-600 mb-6 text-lg">Proyectos Activos</p>
              <h4 className="text-md font-semibold text-gray-800 mb-2 mt-auto">Áreas de Enfoque:</h4>
              <ul className="text-left text-gray-700 space-y-1.5 text-sm">
                {region.focusAreas.map((area) => (
                  <li key={area} className="flex items-start">
                    <i className="fas fa-chevron-circle-right text-[#BC955C] mr-2.5 mt-1 flex-shrink-0"></i>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 lg:mt-24 bg-white rounded-xl shadow-xl p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Indicadores de Impacto</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {IMPACT_INDICATORS_DATA.map((indicator) => (
              <div key={indicator.label} className="p-4 text-center bg-gray-50 rounded-lg shadow-sm">
                <div className="text-4xl lg:text-5xl font-bold text-[#8B0D37]">{indicator.value}</div>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{indicator.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndIndicators;