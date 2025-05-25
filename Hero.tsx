import React from 'react';

interface HeroProps {
  paddingTopClass: string;
}

const Hero: React.FC<HeroProps> = ({ paddingTopClass }) => {
  return (
    <section id="hero" className={`relative bg-cover bg-center bg-fixed ${paddingTopClass} py-24 md:py-32 lg:py-40 xl:py-48`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black/65"></div> {/* Slightly darker overlay */}
      <div className="container mx-auto text-center relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight hero-shadow-text">
          Secretaría de Ciencia, Tecnología e Innovación de Sonora
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto hero-shadow-text">
          Impulsamos la ciencia e innovación regional desde el corazón del noroeste.
        </p>
        <a
          href="#sei-sonora"
          className="bg-[#8B0D37] text-white text-lg font-semibold py-3.5 px-10 rounded-full hover:bg-[#6D0A2B] transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#BC955C]/70 focus:ring-opacity-50"
        >
          Conoce el SEI-Sonora
        </a>
      </div>
      <style>
        {`
        .hero-shadow-text {
          text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.8); /* Stronger shadow */
        }
      `}
      </style>
    </section>
  );
};

export default Hero;