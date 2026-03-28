import type { ComponentType } from 'react';
import { MascotApexOrangeGlasses, MascotClawYellow, MascotStripeHeadphones } from './WorkCardMascots';

export type PortfolioProjectItem = {
  id: string;
  name: string;
  tag: string;
  blurb: string;
  Mascot: ComponentType;
};

export const PORTFOLIO_PROJECTS: PortfolioProjectItem[] = [
  {
    id: 'apex',
    name: 'Apex',
    tag: 'BRANDING',
    blurb: 'Identity and visual direction—logotype energy, color, and how the brand shows up at a glance.',
    Mascot: MascotApexOrangeGlasses,
  },
  {
    id: 'claw',
    name: 'Claw',
    tag: 'UI/UX',
    blurb: 'Product surfaces and flows—layout, hierarchy, and the small interactions that make a screen feel considered.',
    Mascot: MascotClawYellow,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    tag: 'MOTION',
    blurb: 'Motion and rhythm—how elements move so the interface feels alive without getting noisy.',
    Mascot: MascotStripeHeadphones,
  },
];
