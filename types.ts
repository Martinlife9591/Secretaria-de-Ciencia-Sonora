
export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface ProjectRegion {
  name: string;
  projectCount: number;
  focusAreas: string[];
}

export interface ImpactIndicator {
  value: string | number;
  label: string;
}

export interface CallToAction {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  affiliation?: string;
}

export interface AlliancePartner {
  name: string;
  logoUrl: string;
}

export interface SectionProps {
  id?: string;
  scrollMarginTopClass?: string;
}
