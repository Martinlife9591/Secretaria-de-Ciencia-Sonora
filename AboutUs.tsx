import React from 'react';
import { SectionProps } from '../types';

const InfoCard: React.FC<{icon: string; title: string; children: React.ReactNode}> = ({icon, title, children}) => (
  <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="text-4xl text-[#8B0D37] mb-4">
      <i className={`fas ${icon}`}></i>
    </div>
    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <div className="text-gray-700 leading-relaxed text-sm md:text-base">
      {children}
    </div>
  </div>
);


const AboutUs: React.FC<SectionProps> = ({ id, scrollMarginTopClass }) => {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 bg-gray-100 ${scrollMarginTopClass}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 md:mb-16 text-center">¿Quiénes Somos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          <InfoCard icon="fa-bullseye" title="Nuestra Misión">
            <p>
              Fomentar, coordinar y articular las políticas públicas en materia de ciencia, tecnología e innovación en el estado de Sonora, impulsando el desarrollo económico y social sostenible.
            </p>
          </InfoCard>
          <InfoCard icon="fa-eye" title="Nuestra Visión">
            <p>
              Ser la institución líder en la promoción de una cultura científica y tecnológica innovadora en Sonora, reconocida a nivel nacional e internacional por su impacto en el bienestar de la sociedad.
            </p>
          </InfoCard>
          <InfoCard icon="fa-tasks" title="Objetivos Estratégicos">
             <ul className="list-none space-y-2 text-gray-700 text-left">
              {[
                "Fortalecer la investigación científica y el desarrollo tecnológico.",
                "Promover la innovación y el emprendimiento de base tecnológica.",
                "Fomentar la formación de talento humano especializado.",
                "Impulsar la divulgación y apropiación social de la ciencia.",
                "Establecer alianzas estratégicas multisectoriales."
              ].map(obj => (
                <li key={obj} className="flex items-start">
                  <i className="fas fa-check-circle text-[#BC955C] mr-2.5 mt-1 flex-shrink-0"></i>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;