import PillNav from './PillNav';
import './PillNav.css';
import './SiteNav.css';
import logo from '../assets/logotipo.svg';

type Section = 'work' | 'about' | 'contact';

interface SiteNavProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

const ITEMS: { label: string; href: string; section: Section }[] = [
  { label: 'Proyectos', href: '#work', section: 'work' },
  { label: 'Sobre mí', href: '#about', section: 'about' },
  { label: 'Contacto', href: '#contact', section: 'contact' },
];

/**
 * Header de la v2: PillNav de React Bits adaptado a la navegación por estado
 * del portafolio (sin react-router). Queda fijo arriba y centrado, como en el video.
 */
export function SiteNav({ currentSection, onNavigate }: SiteNavProps) {
  const activeHref = ITEMS.find(i => i.section === currentSection)?.href ?? '#work';

  const handleItemClick = (item?: { href?: string }) => {
    const match = ITEMS.find(i => i.href === item?.href);
    onNavigate(match ? match.section : 'work');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="site-nav-shell pointer-events-auto">
        <PillNav
          logo={logo}
          logoAlt="Portafolio de Fernando Téllez"
          items={ITEMS}
          activeHref={activeHref}
          onItemClick={handleItemClick}
          ease="power3.easeOut"
          baseColor="#0B0B0B"
          pillColor="#FFFFF8"
          pillTextColor="#0B0B0B"
          hoveredPillTextColor="#FFFFF8"
          initialLoadAnimation
        />
      </div>
    </div>
  );
}
