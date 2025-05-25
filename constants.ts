
import { ProjectRegion, ImpactIndicator, CallToAction, Testimonial, AlliancePartner, NavItem } from './types';

export const NAV_ITEMS_DESKTOP: NavItem[] = [
  {
    label: "Ciencia y Humanidades",
    href: "#ciencia", // Placeholder, could link to a specific part of a page or new page
    subItems: [
      { label: "Sistema Estatal de Investigadores", href: "#sei-sonora" },
      { label: "Divulgación Científica", href: "#divulgacion" }, // Example
    ],
  },
  {
    label: "Tecnología e Innovación",
    href: "#tecnologia", // Placeholder
    subItems: [
      { label: "RED ECOS Sonora", href: "#red-ecos" }, // Link to section if exists
      { label: "Emprendimiento Tecnológico", href: "#emprendimiento" }, // Example
    ],
  },
  { label: "Red ECOS Sonora", href: "#red-ecos-main" }, // Assuming there's a main section for this
  { label: "SECTISON - Salud", href: "https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221hxL0b1Dy_QPNudEnvGdPEz1iyO5B3omH%22%5D,%22action%22:%22open%22,%22userId%22:%22106724450584040675052%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing" },
  { label: "Servicios en Línea", href: "#servicios" },
  { label: "Transparencia", href: "#transparencia" },
];

export const NAV_ITEMS_MOBILE: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "¿Quiénes Somos?", href: "#quienes-somos" },
  { label: "Programas", href: "#proyectos" }, // Mapped to Proyectos e Indicadores
  { label: "Convocatorias", href: "#convocatorias" },
  { label: "Sistema Estatal de Investigadores", href: "#sei-sonora" },
  { label: "RED ECOS SONORA", href: "#red-ecos-main" }, // Mapped to a potential section
  { label: "Contacto", href: "#contacto" },
];


export const REGIONS_DATA: ProjectRegion[] = [
  { name: "Región Norte", projectCount: 45, focusAreas: ["Minería Sustentable", "Energías Renovables", "Agricultura de Precisión"] },
  { name: "Región Centro", projectCount: 62, focusAreas: ["Biotecnología", "Desarrollo Industrial", "Tecnologías de la Salud"] },
  { name: "Región Sur", projectCount: 38, focusAreas: ["Acuicultura", "Turismo Sostenible", "Agroindustria"] },
];

export const IMPACT_INDICATORS_DATA: ImpactIndicator[] = [
  { value: 145, label: "Proyectos Totales" },
  { value: 324, label: "Investigadores" },
  { value: 28, label: "Municipios" },
  { value: 12, label: "Centros de Investigación" },
];

export const ACTIVE_CALLS_DATA: CallToAction[] = [
  { title: "Convocatoria ICTIECH 2024", description: "Apoyo a proyectos de investigación científica y tecnológica en áreas estratégicas para el estado de Sonora.", link: "#", linkText: "Más detalles" },
  { title: "Programa COPOCYT para Jóvenes Investigadores", description: "Fomento a la investigación realizada por jóvenes talentos sonorenses.", link: "#", linkText: "Más detalles" },
  { title: "Iniciativa CCYTET de Innovación Tecnológica", description: "Impulso a proyectos de desarrollo tecnológico y transferencia de conocimiento.", link: "#", linkText: "Más detalles" },
  { title: "Fondo de Apoyo a la Investigación Biomédica", description: "Financiamiento para investigación en salud y biotecnología aplicada.", link: "#", linkText: "Más detalles" },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { quote: "La ciencia y la tecnología son pilares fundamentales para el progreso de Sonora. Desde SECTI, estamos comprometidos a impulsar un ecosistema de innovación robusto y colaborativo.", author: "Said Saavedra Bracamonte", affiliation: "Secretario de SECTISON" },
  { quote: "El apoyo del SEI-Sonora ha sido crucial para el desarrollo de nuestra investigación en el área biotecnológica. Estamos generando conocimiento de impacto para la región.", author: "Martin Samuel Hernandez", affiliation: "Investigador" },
  { quote: "La colaboración entre la academia, el gobierno y la empresa es esencial para la innovación. SECTI-Sonora está facilitando estas alianzas estratégicas.", author: "Ana Sofía Valdez", affiliation: "CEO de InnovaTech Sonora" },
];

export const ALLIANCE_PARTNERS_DATA: AlliancePartner[] = [
  { name: "Universidad de Sonora (UNISON)", logoUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "Inst. Tecnológico de Sonora (ITSON)", logoUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "Tecnológico de Monterrey (ITESM)", logoUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "Univ. Tecnológica de Sonora (UTS)", logoUrl: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "Centro de Inv. en Alim. y Des. (CIAD)", logoUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "El Colegio de Sonora (COLSON)", logoUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "AgroTech del Noroeste", logoUrl: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "Sonora Software Solutions", logoUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "BioGen Innovaciones", logoUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "Energías Limpias de Sonora", logoUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "Caffenio (Ejemplo Empresa Local)", logoUrl: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
  { name: "Ford Hermosillo (Ejemplo Industria)", logoUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=60&q=80" },
];
