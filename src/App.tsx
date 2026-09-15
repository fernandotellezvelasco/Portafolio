import { useState, useEffect } from 'react';
import { SiteNav } from './components/SiteNav';
import { Project } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { InProcessModal } from './components/InProcessModal';
import { ProjectTransition } from './components/ProjectTransition';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { HeroStage } from './components/HeroStage';
import { BrandMarquee } from './components/BrandMarquee';
import { irAProyectos, irAInicio } from './lib/navegacion';

import imgMockupWeb1 from "figma:asset/e74f6c49b3bac2bda76f95ca4f96236bb774a2e6.png";
import imgBegoApp from "figma:asset/d1374282898f5472e24c2dc24988e6dc9d913c65.png";
import imgMockupSprintia from "figma:asset/713d795dee7cfcab489ee588e192dd8cf5a6934a.png";
import imgWireframes1 from "figma:asset/2cc6d581963c8b0c3108196450ca02982bd83eb7.png";
import imgGrafico from "figma:asset/85630eaced7b58cdfc80052d4fa7810161e36ab1.png";
import imgCandados from "figma:asset/c151b13501bf9a5361423e642e23bcf45375225c.png";
import imgClaroCover from "./assets/claro/cover.gif";
import imgClaroCard from "./assets/claro/opt/cover_card.webp";
import imgClaroBlanco from "./assets/claro/opt/resumen_blanco.webp";
import imgClaroOscuro from "./assets/claro/opt/resumen_oscuro.webp";
import imgClaroGradiente from "./assets/claro/opt/resumen_gradiente.webp";

const projects: Project[] = [
  {
    id: '7',
    title: 'CLARO',
    category: 'UX Audit & Producto',
    year: '2026',
    image: imgClaroCover,
    description: 'Auditoría UX del Portal de Pagos de Claro Colombia mediante Microsoft Clarity, identificando fricciones críticas de conversión, y propuesta de rediseño del widget "Resumen en Vivo" para la experiencia de gestión de dispositivos y planes.',
    role: 'UX Researcher & Diseñador de Producto',
    credits: 'Auditoría e Investigación: Luis Fernando Téllez / Herramienta: Microsoft Clarity',
    // En la card del carrusel va una versión vertical, encuadrada en la laptop.
    // Dentro del caso de estudio se sigue viendo la horizontal (`image`).
    cardImage: imgClaroCard,
    galleryImages: [
      imgClaroBlanco,
      imgClaroOscuro,
      imgClaroGradiente,
    ],
  },
  {
    id: '2',
    title: 'BEGO APP',
    category: 'App Móvil',
    year: '2025',
    image: imgBegoApp,
    description: 'Un compañero móvil para el ecosistema BEGO, llevando funciones poderosas a tu alcance. La app combina diseño intuitivo con funcionalidad sofisticada para experiencias fluidas en movimiento.',
    role: 'Diseñador',
    credits: 'Diseño: Sprintia Studio / Desarrollo iOS & Android: Mobile Team',
    galleryImages: [
      imgBegoApp,
      imgWireframes1, // Placeholder for wireframes image
    ],
  },
  {
    id: '1',
    title: 'BEGO WEB',
    category: 'Web',
    year: '2025',
    image: imgMockupWeb1,
    description: 'Una plataforma web integral diseñada para optimizar flujos de trabajo digitales y mejorar la experiencia del usuario. Construida con tecnologías modernas y enfoque en el rendimiento, BEGO Web representa el futuro de las soluciones empresariales.',
    role: 'Diseñador',
    credits: 'Diseño: Sprintia Studio / Desarrollo: Tech Partners',
    galleryImages: [
      imgMockupWeb1,
    ],
  },
  {
    id: '3',
    title: 'SPRINTIA',
    category: 'Producto',
    year: '2025',
    image: imgMockupSprintia,
    description: 'He liderado la consultoría de diseño y desarrollo para Sprintia, una plataforma digital que conecta jugadores, equipos y ligas de fútbol amateur mediante un sistema inteligente de reputación y matchmaking. Como Product Vision Lead, he trabajado en cada etapa del proyecto: desde la identidad visual y la experiencia de usuario hasta la estrategia de producto, creando una solución que impulsa la transparencia, la conexión y el crecimiento del deporte amateur.',
    role: 'Product Vision Lead, Diseñador y desarrollador IA',
    credits: 'Diseño de Producto: Sprintia Studio / Estrategia: Equipo Interno',
    galleryImages: [
      imgMockupSprintia,
    ],
  },
  {
    id: '4',
    title: 'CANDADOS',
    category: 'Web',
    year: '2025',
    image: imgCandados,
    description: 'Una aplicación web enfocada en seguridad que prioriza la privacidad del usuario y la protección de datos. Candados demuestra nuestro compromiso de construir confianza a través de diseño reflexivo y arquitectura robusta.',
    role: 'Diseñador',
    credits: 'Diseño y Desarrollo: Sprintia Studio / Consultoría de Seguridad: CyberSafe',
    galleryImages: [
      imgCandados,
    ],
  },
  {
    id: '5',
    title: 'GRAFICO Y MULTIMEDIA',
    category: 'Diseño Gráfico',
    year: '2025',
    image: imgGrafico,
    description: 'Proyecto de diseño gráfico y multimedia que explora las fronteras del arte digital y la expresión visual. Una fusión de tipografía experimental, renderizado 3D y narrativa visual que desafía las convenciones del diseño tradicional.',
    role: 'Diseñador Gráfico',
    credits: 'Diseño y Arte: Sprintia Studio',
    galleryImages: [
      imgGrafico,
    ],
  },
];

export default function App() {
  const [currentSection, setCurrentSection] = useState<'work' | 'about' | 'contact'>('work');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInProcessModalOpen, setIsInProcessModalOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(-1);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isModalOpen || isInProcessModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Always hide scrollbar visually to maintain minimalist look
    document.body.classList.add('hide-scrollbar');
    
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('hide-scrollbar');
    };
  }, [isModalOpen, isInProcessModalOpen]);

  /* Transición al entrar a un proyecto: la estrella crece desde el clic, la
     esfera de partículas estalla y el caso de estudio aparece detrás. */
  const [transicion, setTransicion] = useState<{
    project: Project;
    origen: { x: number; y: number };
  } | null>(null);

  const centroPantalla = () => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const handleExplore = (project: Project, origen?: { x: number; y: number }) => {
    // Este proyecto vive en Behance, no tiene caso de estudio en el sitio
    if (project.title === 'GRAFICO Y MULTIMEDIA') {
      window.open('https://www.behance.net/gallery/167666943/Portafolio-2023', '_blank');
      return;
    }

    setSelectedProject(project);

    // CLARO pregunta antes de entrar: la transición corre al confirmar
    if (project.title === 'CLARO') {
      setIsInProcessModalOpen(true);
      return;
    }

    setTransicion({ project, origen: origen ?? centroPantalla() });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleConfirmInProcess = () => {
    setIsInProcessModalOpen(false);
    if (selectedProject) setTransicion({ project: selectedProject, origen: centroPantalla() });
    else setIsModalOpen(true);
  };

  const handleCloseInProcess = () => {
    setIsInProcessModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % projects.length;
        setSelectedProject(projects[nextIndex]);
    }
  };

  const handleNavigate = (section: 'work' | 'about' | 'contact') => {
    setCurrentSection(section);

    /* "Proyectos" lleva al carrusel, no al principio del escenario: el menú
       decía proyectos y dejaba al usuario en la pantalla de bienvenida.
       Si veníamos de otra sección hay que esperar a que el escenario se monte
       para poder medir dónde está. */
    if (section === 'work') {
      irAProyectos();
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /** El logotipo siempre devuelve a la pantalla de bienvenida */
  const handleLogo = () => {
    const veniaDeOtraSeccion = currentSection !== 'work';
    setCurrentSection('work');
    if (veniaDeOtraSeccion) requestAnimationFrame(() => setTimeout(irAInicio, 90));
    else irAInicio();
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <Toaster position="bottom-right" />
      <SiteNav currentSection={currentSection} onNavigate={handleNavigate} onLogoClick={handleLogo} />

      <AnimatePresence mode="wait">
        {currentSection === 'work' && (
          <motion.main
            key="work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroStage
              key="hero-stage"
              projects={projects}
              onExplore={handleExplore}
              onVisible={() => setActiveProjectIndex(-1)}
            />
            <BrandMarquee />
          </motion.main>
        )}

        {currentSection === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
        )}

        {currentSection === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Contact onVerProyectos={() => handleNavigate('work')} />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNextProject}
      />

      {transicion && (
        <ProjectTransition
          key={transicion.project.id}
          origen={transicion.origen}
          onCubierto={() => setIsModalOpen(true)}
          onFin={() => setTransicion(null)}
        />
      )}

      <InProcessModal
        isOpen={isInProcessModalOpen}
        onClose={handleCloseInProcess}
        onConfirm={handleConfirmInProcess}
        title={selectedProject?.title === 'CLARO' ? 'Proyecto en construcción' : undefined}
        message={selectedProject?.title === 'CLARO'
          ? 'Este caso de estudio todavía está en construcción. Estoy terminando de pulir la investigación y el rediseño antes de publicarlo por completo — estará listo en unos días.\n\n¿Te gustaría ver el avance actual?'
          : undefined}
        variant={selectedProject?.title === 'CLARO' ? 'claro' : 'default'}
      />
    </div>
  );
}