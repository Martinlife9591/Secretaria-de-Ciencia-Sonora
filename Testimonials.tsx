import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { SectionProps } from '../types';

const Testimonials: React.FC<SectionProps> = ({ id, scrollMarginTopClass }) => {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 bg-gray-100 ${scrollMarginTopClass}`}> {/* Changed background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 md:mb-16 text-center">Voces de la Ciencia y la Innovación en Sonora</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center border border-gray-200">
              <div className="text-5xl text-[#BC955C] mb-4">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-gray-700 italic mb-6 text-md md:text-lg leading-relaxed">
                {testimonial.quote}
              </p>
              {/* <div className="text-5xl text-[#BC955C] mt-2 self-end">
                <i className="fas fa-quote-right"></i>
              </div> */}
              <div className="mt-auto border-t border-gray-200 w-2/3 pt-4">
                <p className="text-md text-gray-800 font-semibold">- {testimonial.author}</p>
                {testimonial.affiliation && <p className="text-sm text-[#8B0D37] font-medium">{testimonial.affiliation}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;