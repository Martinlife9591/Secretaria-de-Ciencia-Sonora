import React from 'react';

const Footer: React.FC = () => {

  const quickLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "¿Quiénes Somos?", href: "#quienes-somos" },
    { label: "SEI-Sonora", href: "#sei-sonora" },
    { label: "Convocatorias", href: "#convocatorias" },
    { label: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "https://www.facebook.com/sectisonora/", label: "Facebook", ariaLabel: "Visita nuestra página de Facebook" },
    { icon: "fab fa-twitter", href: "https://twitter.com/sectisonora", label: "Twitter", ariaLabel: "Síguenos en Twitter" },
    { icon: "fab fa-instagram", href: "https://www.instagram.com/sectisonora/", label: "Instagram", ariaLabel: "Síguenos en Instagram"},
    // { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" }, // Assuming no LinkedIn for now
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contacto SECTISON</h4>
          <address className="not-italic text-sm space-y-1">
            <p>Comonfort y Dr. Paliza S/N, Edificio Sonora ala Norte, Primer Nivel</p>
            <p>Col. Centenario C.P. 83260</p>
            <p>Hermosillo, Sonora, México.</p>
            <p>Teléfono: <a href="tel:+526621084700" className="hover:text-[#BC955C] transition-colors">(662) 108 4700</a></p>
            <p>Email: <a href="mailto:contacto.secti@sonora.gob.mx" className="hover:text-[#BC955C] transition-colors">contacto.secti@sonora.gob.mx</a></p>
          </address>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Accesos Rápidos</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-[#BC955C] transition-colors">{link.label}</a>
              </li>
            ))}
             <li><a href="#transparencia" className="hover:text-[#BC955C] transition-colors">Transparencia</a></li> {/* Added missing Transparencia link */}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Síguenos</h4>
          <div className="flex justify-center md:justify-start space-x-5">
            {socialLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                aria-label={link.ariaLabel} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#BC955C] transition-colors text-2xl transform hover:scale-110"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
          <div className="mt-8">
             <span className="text-gray-300 opacity-90 text-base sm:text-lg font-semibold uppercase mx-auto md:mx-0 block text-center md:text-left">
                GOBIERNO DEL ESTADO DE SONORA
             </span>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-xs">
        <p>&copy; {new Date().getFullYear()} SECTISON. Todos los derechos reservados.</p>
        <p className="mt-1">Secretaría de Ciencia, Tecnología e Innovación del Estado de Sonora.</p>
        <p className="mt-2">Desarrollado con fines demostrativos.</p>
      </div>
    </footer>
  );
};

export default Footer;