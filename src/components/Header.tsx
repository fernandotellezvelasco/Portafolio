import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logotipo from '../imports/Logotipo';

interface HeaderProps {
  currentSection: 'work' | 'about' | 'contact';
  onNavigate: (section: 'work' | 'about' | 'contact') => void;
}

export function Header({ currentSection, onNavigate }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [lastScrollY]);

  const handleNavigateAndClose = (section: 'work' | 'about' | 'contact') => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6 flex items-center justify-between"
        style={{
          background: 'linear-gradient(to bottom, rgba(11, 11, 11, 0.9) 0%, rgba(11, 11, 11, 0) 100%)',
        }}
      >
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button 
            onClick={() => handleNavigateAndClose('work')}
            className="flex items-center gap-2 md:gap-3 hover:opacity-70 transition-opacity"
          >
            <div className="w-6 h-6 md:w-8 md:h-8">
              <Logotipo />
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="uppercase tracking-[0.3em] text-[0.7rem] md:text-[0.875rem]">Portafolio</span>
            </div>
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex items-center gap-8"
        >
          <NavLink
            label="Proyectos"
            active={currentSection === 'work'}
            onClick={() => onNavigate('work')}
          />
          <NavLink
            label="Sobre mí"
            active={currentSection === 'about'}
            onClick={() => onNavigate('about')}
          />
          <NavLink
            label="Contacto"
            active={currentSection === 'contact'}
            onClick={() => onNavigate('contact')}
          />
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:opacity-70 transition-opacity"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-full md:hidden z-40 bg-[#0B0B0B] pt-24 px-8"
          >
            <nav className="flex flex-col gap-8">
              <MobileNavLink
                label="Proyectos"
                active={currentSection === 'work'}
                onClick={() => handleNavigateAndClose('work')}
              />
              <MobileNavLink
                label="Sobre mí"
                active={currentSection === 'about'}
                onClick={() => handleNavigateAndClose('about')}
              />
              <MobileNavLink
                label="Contacto"
                active={currentSection === 'contact'}
                onClick={() => handleNavigateAndClose('contact')}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface NavLinkProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavLink({ label, active, onClick }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="relative uppercase tracking-[0.2em] transition-opacity hover:opacity-100 group"
      style={{ opacity: active ? 1 : 0.5 }}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute top-0 left-0 block w-full transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {label}
        </span>
      </span>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </button>
  );
}

function MobileNavLink({ label, active, onClick }: NavLinkProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative uppercase tracking-[0.2em] transition-opacity hover:opacity-100 text-left py-4 border-b border-white/10"
      style={{ opacity: active ? 1 : 0.5 }}
      whileHover={{ x: 10 }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.button>
  );
}