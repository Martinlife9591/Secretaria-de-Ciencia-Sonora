import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { NAV_ITEMS_DESKTOP, NAV_ITEMS_MOBILE } from '../constants';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isExternal?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className, onClick, isExternal }) => (
  <a
    href={href}
    onClick={onClick}
    target={isExternal ? '_blank' : '_self'}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    className={`relative group text-white hover:text-[#FDE047] transition-colors duration-200 py-2 ${className}`} // Changed hover to a brighter gold
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B0D37] transition-all duration-300 ease-out group-hover:w-full"></span>
  </a>
);

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: NavItem[];
  onLinkClick?: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, items, onLinkClick }) => {
  return (
    <div className="relative group">
      <span className="nav-link text-white hover:text-[#FDE047] transition flex items-center cursor-pointer py-2">
        {trigger}
        <svg className="w-4 h-4 ml-1.5 transform group-hover:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B0D37] transition-all duration-300 ease-out group-hover:w-full"></span>
      </span>
      <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-xl py-2 mt-1 rounded-md w-60 z-20 border border-gray-200">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onLinkClick}
            className="block px-4 py-2.5 text-sm hover:bg-[#8B0D37] hover:text-white transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

interface HeaderProps {
  scrollOffsetClass: string; 
}

const Header: React.FC<HeaderProps> = ({ scrollOffsetClass }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Trigger shadow earlier
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      // Check if target or its parent is an anchor link
      const anchorTarget = target.closest('a[href^="#"]');
      if (anchorTarget && anchorTarget.getAttribute('href')?.startsWith('#')) {
        const targetId = anchorTarget.getAttribute('href')!.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          e.preventDefault();
          const headerElement = document.querySelector('header.fixed'); 
          const headerHeight = headerElement ? headerElement.clientHeight : 0;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          if (isMobileMenuOpen) {
            closeMobileMenu(); 
          }
        }
      }
    };

    document.addEventListener('click', smoothScroll as EventListener);
    return () => {
      document.removeEventListener('click', smoothScroll as EventListener);
    };
  }, [isMobileMenuOpen, scrollOffsetClass]);


  return (
    <header className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-2xl' : ''}`}> {/* Stronger shadow */}
      {/* Top Government Bar */}
      <div className="bg-[#841d3d] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center h-12 sm:h-14"> {/* Consistent height */}
          <span className="text-white font-semibold text-lg sm:text-xl uppercase">
            GOBIERNO DEL ESTADO DE SONORA
          </span>
        </div>
      </div>

      {/* Secondary Top Bar for gob.mx links */}
      <div className="bg-gray-800 text-white py-1.5 text-xs sm:text-sm">
        <div className="container mx-auto px-4 flex justify-end items-center">
            <div className="flex items-center space-x-4">
                <a href="https://www.gob.mx/gobierno" target="_blank" rel="noopener noreferrer" className="hover:text-[#FDE047] transition-colors">Gobierno</a>
                <a href="https://www.gob.mx/tramites" target="_blank" rel="noopener noreferrer" className="hover:text-[#FDE047] transition-colors">Trámites</a>
            </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#9C6C34] shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#hero" className="text-xl font-bold text-white hover:text-[#FDE047] transition-colors" onClick={isMobileMenuOpen ? closeMobileMenu : undefined}>
              SECTISON
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-5 lg:space-x-7 text-sm font-semibold"> {/* Increased font-semibold, spacing */}
              {NAV_ITEMS_DESKTOP.map((item) =>
                item.subItems ? (
                  <DropdownMenu key={item.label} trigger={item.label} items={item.subItems} onLinkClick={closeMobileMenu} />
                ) : (
                  <NavLink 
                    key={item.label} 
                    href={item.href} 
                    isExternal={item.href.startsWith('http')}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white focus:outline-none p-2 rounded-md hover:bg-white/20 transition-colors" aria-label="Menú principal" aria-expanded={isMobileMenuOpen}>
                {isMobileMenuOpen ? (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full border-t border-gray-200">
          <nav className="px-4 pt-3 pb-4 space-y-1.5">
            {NAV_ITEMS_MOBILE.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="block py-2.5 px-3 text-base font-medium text-gray-700 hover:bg-[#8B0D37] hover:text-white rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;