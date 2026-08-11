import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProjectCard, Project } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { InProcessModal } from './components/InProcessModal';
import { ProjectSidebar } from './components/ProjectSidebar';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { HeroParticles } from './components/HeroParticles';
import { BrandMarquee } from './components/BrandMarquee';

import imgMockupWeb1 from "figma:asset/e74f6c49b3bac2bda76f95ca4f96236bb774a2e6.png";
import imgBegoApp from "figma:asset/d1374282898f5472e24c2dc24988e6dc9d913c65.png";
import imgMockupSprintia from "figma:asset/713d795dee7cfcab489ee588e192dd8cf5a6934a.png";
import imgWireframes1 from "figma:asset/2cc6d581963c8b0c3108196450ca02982bd83eb7.png";
import imgGrafico from "figma:asset/85630eaced7b58cdfc80052d4fa7810161e36ab1.png";
import imgCandados from "figma:asset/c151b13501bf9a5361423e642e23bcf45375225c.png";
import imgHeyMobil from "figma:asset/508a0efb4c95dfef069839e945e23ee8baeedf69.png";
import imgClaroCover from "./assets/claro/cover.gif";
import imgClaroBlanco from "./assets/claro/resumen_blanco.png";
import imgClaroOscuro from "./assets/claro/resumen_oscuro.png";
import imgClaroGradiente from "./assets/claro/resumen_gradiente.png";

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
    id: '6',
    title: 'HEY MOVIL',
    category: 'Landing Page',
    year: '2024',
    image: imgHeyMobil,
    description: 'Planes a la medida de tu empresa. Impulsa la eficiencia de tu empresa con nuestra telefonía móvil: conectividad garantizada al mejor precio. Una landing page diseñada para comunicar claridad y confianza.',
    role: 'Diseñador',
    credits: 'Diseño: Sprintia Studio',
    galleryImages: [
      imgHeyMobil,
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

  const handleExplore = (project: Project) => {
    setSelectedProject(project);
    if (project.title === 'HEY MOVIL' || project.title === 'CLARO') {
        setIsInProcessModalOpen(true);
    } else {
        setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleConfirmInProcess = () => {
    setIsInProcessModalOpen(false);
    setIsModalOpen(true);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToProject = (index: number) => {
    const element = document.getElementById(`project-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <Toaster position="bottom-right" />
      <Header currentSection={currentSection} onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        {currentSection === 'work' && (
          <motion.main
            key="work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="snap-container"
          >
            <ProjectSidebar 
              total={projects.length} 
              current={activeProjectIndex} 
              onIndexChange={handleScrollToProject}
            />
            <HeroParticles key="hero-particles" onVisible={() => setActiveProjectIndex(-1)} />
            <BrandMarquee />
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onExplore={() => handleExplore(project)}
                onVisible={(i) => setActiveProjectIndex(i)}
              />
            ))}
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
            <Contact />
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