import { motion, AnimatePresence } from 'motion/react';
import BorderGlow from './BorderGlow';
import { X, Play, Search, Layout, Palette, CheckCircle, GitBranch, BarChart3, Layers, Smartphone, Users, Sparkles, ArrowRight, BookOpen, Target, Lightbulb, Link as LinkIcon, Moon, Sun, ChevronLeft, ChevronRight, Lock, Beaker, Zap, Eye, MousePointerClick, Shield, Wifi } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Project } from './ProjectCard';
import imgPortada1 from "figma:asset/1fe2690b9ec451502e9ec00eab0096f3097a5f8d.png";
import imgBegoAppVideo from "figma:asset/913d51bf1b050eb32ba44ed9ef3eeb087afae04a.png";
import imgWireframes1 from "figma:asset/2cc6d581963c8b0c3108196450ca02982bd83eb7.png";
import imgWireframesNew from "figma:asset/9b2a9159d45cccd916d8be896f0a982b2f18ecbd.png";
import imgBegoMockups from "figma:asset/b0a74d983f855f1ff22c27b5b6930bc537e64178.png";
import imgBegoAppResult from "figma:asset/453ba25f6c0818bd2c1c52b6a008ca5712308c13.png";
import imgBegoResultadosCollage from "../assets/opt/bego_resultados_collage_v4.webp";
import imgClarity01 from "../assets/claro/opt/clarity_01_portada_kpis.webp";
import imgClarity02 from "../assets/claro/opt/clarity_02_dead_clicks.webp";
import imgClarity03 from "../assets/claro/opt/clarity_03_rage_clicks.webp";
import imgClarity04 from "../assets/claro/opt/clarity_04_sintesis.webp";
import imgClaroResumenBlanco from "../assets/claro/opt/resumen_blanco.webp";
import imgClaroResumenOscuro from "../assets/claro/opt/resumen_oscuro.webp";
import imgClaroResumenGradiente from "../assets/claro/opt/resumen_gradiente.webp";
import imgClaroWifiBefore01 from "../assets/claro/opt/wifi_before_01_seis_categorias.webp";
import imgClaroWifiAfter01 from "../assets/claro/opt/wifi_after_01_tu_hogar.webp";
import imgClaroWifiAfter02 from "../assets/claro/opt/wifi_after_02_dispositivos_contador.webp";
import imgSprintiaAI from "figma:asset/f650179d481a73cdf367a2cf4be4cc843b739da3.png";
import imgSprintiaProfile from "figma:asset/3224556a98df4eae05ea136d1ce744ef9da725d1.png";
import imgSprintiaMatches from "figma:asset/f0e38f1149c5dd91b64c4f426e8792522df8ff60.png";
import imgSprintiaEmpatizar from "figma:asset/c16f4a099358b4f2cf1f2dfe67216b7276da8754.png";
import imgWebsite from "figma:asset/fde052730caf12fcae0fa9113fed84a5b35b15a0.png";
import { ComponentsCarousel } from './ComponentsCarousel';
import { ResearchCarousel } from './ResearchCarousel';
import { DesignProcessGraphic } from './DesignProcessGraphic';
import { AtomicDesignVisual } from './AtomicDesignVisual';
import { PhoneMockupComparison, MockupPhone, MockupDesktop } from './PhoneMockupComparison';
import { SprintiaBranding } from './SprintiaBranding';
import { HeatmapAnalysis } from './HeatmapAnalysis';
import { useState, useEffect, useRef } from 'react';
import imgFlow1 from "figma:asset/9e759507d6800b46a965c41d62130d884b68ab80.png";
import imgFlow2 from "figma:asset/b2b03ed3caca926563bdbe391ad8a7dab0387905.png";
import imgFlow3 from "figma:asset/c9b46d4967db41e8fee693fadc28a7c589adc421.png";
import imgFlow4 from "figma:asset/f55f5b6048a670d4db047936751c699af3c07b66.png";
import imgDarkMode from "figma:asset/1a7536b7af1bbca4015e1ade66273017f9a852e6.png";
import imgLightMode from "figma:asset/044bdd94adc9da857170b2f9e6cf211896fcba5c.png";
import imgInfoArch from "figma:asset/72c69fd7ef4d076cde8e17186788f9be3d62b21c.png";
import { SiteMapDiagram } from './SiteMapDiagram';
import { EmpathyMap } from './EmpathyMap';
import { HeyMovilPersona } from './HeyMovilPersona';
import { HeyMovilEmpathyMap } from './HeyMovilEmpathyMap';
import HeyMovilWireframes from '../imports/HeyMovilWireframes';
import HeyMovilDesign from '../imports/Group163140';
import Desktop645 from '../imports/Desktop645';
import { Section2 as SprintiaButtons, Section3 as SprintiaInputs, Section4 as SprintiaCards } from '../imports/Group163455';
import SprintiaIcons from '../imports/Section';
import Nosotros from '../imports/Nosotros';
import Desktop687 from '../imports/Desktop687';
import imgCandadosLogin from "figma:asset/5a16a5a56a3291eba8a31ff80c5c35bc683374c7.png";
import imgCandadosOrders from "figma:asset/304b5d32d002dcc8c45c27fb5bb4bdc7c36a3df9.png";
import imgCandadosFilter from "figma:asset/8ff595b32998f9d6a7c005501975a2eeda80bbb9.png";
import imgCandadosMap from "figma:asset/22c796e56b223de63e257f73a86ca82630398030.png";
import imgCandadosMobile from "figma:asset/08df9ea0e03726fa00e2cc0821813bb475d66cee.png";
import imgGobPolygon from "figma:asset/90c9c403430b55927546bf4befba63042f9747f0.png";
import imgGobFraude from "figma:asset/ac509da947da08975760264a2367beb5aaa243be.png";
import imgGobDashboard from "figma:asset/9cb376f3af32213d9644ce7865d1f6b3b3d5e0cd.png";
import imgGobDesignSystem from "figma:asset/0b470923ede7578b1353977f4ca2e1ef5c8621ea.png";
import imgGobiernoMobile from "figma:asset/ff05b0ffe6ded0bccc6fe4b055201920c98b9edb.png";
import imgGobiernoDesktop from "figma:asset/81c2f4066164f9f74358826d9c6e30097f486b72.png";
import imgBegoWeb1 from "figma:asset/308418fb34b0d54b6459240f13a6c447f901b623.png";
import imgBegoWeb2 from "figma:asset/8e64ee5463608062eb678199e4743e325bc70119.png";
import imgBegoWeb3 from "figma:asset/1844fdcef4db2201e445d0da6478339d96a28cca.png";
import imgBegoWeb4 from "figma:asset/90e068228818593975cb10afbc06b9fadf4324fb.png";
import imgBegoWeb5 from "figma:asset/eca5108e495cc584cb5a0d284f02ee94650c934d.png";
import imgBegoMobile1 from "figma:asset/83ae86c18c4cbc6f11c7dcbc64cab85feb93ce48.png";
import imgBegoMobile2 from "figma:asset/0491915bd0bc4d775cd24db3ddb42e5be64fc7e8.png";
import imgBegoMobile3 from "figma:asset/e409e5f2a7e2ee9c0efda663c70d8ebb706c2f25.png";
import imgBegoMobile4 from "figma:asset/4e653ab56e1b66934bbd5efce265a1c0fd28570a.png";
import imgBegoMobile5 from "figma:asset/92cd9dd317909d011bea421d0eb19a479c057c56.png";
import imgBegoWeb6 from "figma:asset/409284335cb45c66ecb973578be4dc838dfc6c43.png";
import imgBegoMobile6 from "figma:asset/c09df16b77586207c7ec5eaef69c78689f6e6362.png";
import imgPrototipoFlow from "figma:asset/ac2751011fd4dcd3d1df10532591744684a17dd1.png";
import imgBegoUserFlowNew from "figma:asset/17b85e598c37b3149d01375230f635e2cf05821a.png";
import imgGobComponents from "figma:asset/624469a79c14f2d482c3d1789a1d1d93171aeae9.png";
import imgGobIcons from "figma:asset/03ae919ef26bd0b87db4ef2011bea3c1b5a65d42.png";
import imgLayoutGuide from "figma:asset/70e93de3ca4ec1f320bedc3f0ffc835733c43cc4.png";
import imgTesting from "figma:asset/f21e5f1602700b7770deab10a8ebb1f41d888c5f.png";
import imgMazeReport from "figma:asset/4f0ec3cd61c3ab0ee6db12cc9bd6c0d179d33d0c.png";
import imgHeatmap1 from "figma:asset/540307d14690dff54fa8a133c1675201e2f25766.png";
import imgHeatmapMobileNew from "figma:asset/cfd1db2c08a45478aa273a988564909c2cab0546.png";
import imgHeatmap2 from "figma:asset/013a334491ac1639ae3401fd1585065d78d660ac.png";
import imgSprintiaHeatmap from "figma:asset/b7a0bf1be350285cdb079627ed95e569c1a98fce.png";
import imgSprintiaFocus from "figma:asset/f5876840ced0ab3b7186764056544b45b1f261e3.png";
import imgSprintiaContrast from "figma:asset/2a5fa461ab81997d6e3529006508b728fe39da0f.png";
import imgBegoHeatmap from "figma:asset/bc33124dec1a945ec3f27cf1e296101c0a47cc0c.png";
import imgBegoHeatmapIterated from "figma:asset/ee99d47229f4c2be465a44afe74423bc37d874d1.png";
import imgBegoUI from "figma:asset/9cd3a199c722a53744b258352d68148452011850.png";
import imgBegoDashboardDark from "figma:asset/e2e2d58e8775febd2be6b557d10b0587b82c053f.png";
import imgGobiernoDashboardLight from "figma:asset/03406aa138ae60af75f0ad4a04e5f741da32476d.png";
import imgGobiernoTagsLight from "figma:asset/af8a21a0b2118e33e813e70daa65abe0741dc84b.png";
import imgBegoTagsDark from "figma:asset/62b8b12ab027a60630165f10f6eca7651972b5aa.png";
import imgGobiernoMapLight from "figma:asset/e710c7fd4e99880cdd28e241e9efecb7b74cc563.png";
import imgBegoMapDark from "figma:asset/c5567f42a1197db6a066b557df71692f6f4fc630.png";
import imgMazeHeatmap from "figma:asset/b257ecb63b21e7404eecf539c70ace364135bf42.png";
import imgMazePaths from "figma:asset/25695d7fd03a9d2c2d94a8bfd2734d002591758c.png";
import imgMazeStats from "figma:asset/b4390da853fdc670fca4d2962b58291e31152a9a.png";
import MazeScreens from '../imports/Group163709-439-4647';
import Group162565 from '../imports/Group162565';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export function ProjectModal({ project, isOpen, onClose, onNext }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [gobiernoStep, setGobiernoStep] = useState<'interfaces' | 'candados' | null>(null);
  const [activeSection, setActiveSection] = useState<string>('duration');
  
  useEffect(() => {
    if (isOpen) {
        setGobiernoStep(null);
    }
  }, [isOpen]);

  const [showDemoAlert, setShowDemoAlert] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDarkModeMockup, setIsDarkModeMockup] = useState(true);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [wireframeIndex, setWireframeIndex] = useState(0);
  const [begoWebIndex, setBegoWebIndex] = useState(0);
  const [comparisonIndex, setComparisonIndex] = useState(0);
  const [claroSlide, setClaroSlide] = useState(0);

  useEffect(() => {
    if (modalRef.current) {
        modalRef.current.scrollTop = 0;
    }
  }, [project]);

  if (!project) return null;

  const isBegoApp = project.title === 'BEGO APP';
  const isBegoWeb = project.title === 'BEGO WEB';
  const isCandados = project.title === 'CANDADOS';
  const isSprintia = project.title === 'SPRINTIA';
  const isHeyMovil = project.title === 'HEY MOVIL';
  const isClaro = project.title === 'CLARO';

  // Heatmap Data
  const sprintiaSlides = [
    { id: 'heatmap', image: imgSprintiaHeatmap, label: 'Mapa de Calor', description: 'Análisis de intensidad de atención visual. Las zonas rojas indican mayor retención.', icon: Eye },
    { id: 'focus', image: imgSprintiaFocus, label: 'Mapa de Foco', description: 'Validación de claridad y percepción. Focus Score de 67 confirma alta visibilidad.', icon: Layers },
    { id: 'contrast', image: imgSprintiaContrast, label: 'Mapa de Contraste', description: 'Evaluación de accesibilidad y jerarquía.', icon: Zap }
  ];
  const sprintiaHotspots = [
    { x: 50, y: 35, label: "Foco de Identidad", description: "El rostro del usuario retiene el 67% de la atención visual.", icon: Eye },
    { x: 50, y: 88, label: "CTA Optimizado", description: "Botón 'Compartir' ubicado en zona de pulgar con alto contraste.", icon: MousePointerClick },
    { x: 82, y: 55, label: "Jerarquía de Datos", description: "Simplificación de estadísticas (90/90/88).", icon: CheckCircle }
  ];

  const begoSlides = [
    { id: 'heatmap', image: imgBegoHeatmap, label: 'Diseño Anterior (Heatmap)', description: 'El análisis del diseño original reveló una dispersión crítica de la atención hacia datos no accionables.', icon: Eye },
    { id: 'heatmap_iterated', image: imgBegoHeatmapIterated, label: 'Validación de Iteración', description: 'La eliminación del neomorfismo y el ajuste de contraste lograron que el CTA captara atención visual prioritaria, validando la mejora en la jerarquía.', icon: CheckCircle },
    { id: 'ui', image: imgBegoUI, label: 'Diseño Optimizado', description: 'Nueva jerarquía visual que centraliza el foco en la acción de rastreo.', icon: Layers }
  ];
  const begoHotspots = [
    { x: 50, y: 15, label: "Atención Dispersa", description: "El usuario fija su atención en el ID de la orden (zona roja), ignorando el resto del contenido.", icon: Eye },
    { x: 15, y: 35, label: "Flujo Interrumpido", description: "La lectura se desvía a la izquierda, perdiendo la secuencia lógica de la información.", icon: Layers },
    { x: 50, y: 80, label: "Neomorfismo y Carga Visual", description: "La aplicación de neomorfismo introduce ruido visual que eleva la carga cognitiva, obstaculizando la identificación del CTA como elemento interactivo prioritario.", icon: MousePointerClick }
  ];

  const isCandadosFlow = isCandados && gobiernoStep === 'candados';
  const isInterfacesFlow = isCandados && gobiernoStep === 'interfaces';

  // Navigation Items
  const navItems = [
    { id: 'duration', label: 'Duración' },
    { id: 'role', label: 'Rol' },
    { id: 'objective', label: 'Objetivo' },
    { id: 'research', label: 'Investigación' },
    { id: 'process', label: 'Proceso' },
    ...(isSprintia || isBegoApp || isCandados || isClaro ? [{ id: 'testing', label: 'Testeo' }] : []),
    { id: 'results', label: 'Resultados' },
    { id: 'lessons', label: 'Lecciones' },
    // Conditionally add links
    { id: 'links', label: 'Enlaces' }
  ];

  // Helper component for sections
  const Section = ({ id, title, icon: Icon, children, className = "" }: { id: string, title: string, icon?: any, children: React.ReactNode, className?: string }) => {
    if (!children) return null;
    return (
      <section id={id} className={`mb-24 scroll-mt-32 ${className}`}>
        <div className="flex items-center gap-3 mb-8">
          {Icon && <Icon className="w-5 h-5 text-white/55" aria-hidden="true" />}
          <h3 className="text-[1.15rem] md:text-[1.5rem] font-medium text-white tracking-tight">
            {title}
          </h3>
        </div>
        <div className="text-white/80 leading-relaxed text-[1rem] md:text-[1.0625rem]">
          {children}
        </div>
      </section>
    );
  };

  // Timeline Component (Reused for Bego App & Web)
  const TimelineGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {[
        { icon: Search, title: "Investigación", time: "1 Mes", tags: ["Análisis Competencia", "Personas"] },
        { icon: Layout, title: "Arquitectura", time: "1.5 Meses", tags: ["Arquitectura Info", "Flujos de usuario", "Wireframes"] },
        { icon: Palette, title: "Diseño Visual", time: "1 Mes", tags: ["Diseño UI", "Prototipo"] },
        { icon: CheckCircle, title: "Pruebas", time: "0.5 Meses", tags: ["Handoff", "Documentación"] }
      ].map((phase, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ y: -5 }}
          className="bg-white/5 rounded-xl p-6 border border-white/5 flex flex-col items-center text-center group hover:bg-white/10 transition-colors"
        >
          <div className={`mb-4 p-3 bg-white/5 rounded-full transition-colors ${isSprintia ? 'group-hover:bg-white/20' : isCandadosFlow ? 'group-hover:bg-white/20' : isCandados ? 'group-hover:bg-white/20' : 'group-hover:bg-white/20'}`}>
            <phase.icon className={`w-6 h-6 text-white transition-colors ${isSprintia ? 'group-hover:text-white/70' : isCandadosFlow ? 'group-hover:text-white/70' : isCandados ? 'group-hover:text-white/70' : 'group-hover:text-white/70'}`} />
          </div>
          <h3 className="mb-2 font-medium opacity-90">{phase.title}</h3>
          <div className={`mb-4 text-sm font-bold ${isSprintia ? 'text-white/70' : isCandadosFlow ? 'text-white/70' : isCandados ? 'text-white/70' : 'text-white/70'}`}>{(isSprintia || isBegoWeb || isCandados) && phase.title === 'Pruebas' ? 'En proceso' : phase.time}</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {phase.tags.filter(tag => !(isBegoWeb && (tag === 'Flujos de usuario' || tag === 'Wireframes'))).map(tag => (
              <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 text-[0.7rem] text-white/60 border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Visual Design Component
  const VisualDesignBlock = () => (
    <div className="mt-8 space-y-12">
      {/* Typography Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <Palette className={`w-5 h-5 ${isSprintia ? 'text-white/70' : isCandadosFlow ? 'text-white/70' : isInterfacesFlow ? 'text-white/70' : isCandados ? 'text-white/70' : 'text-white/70'}`} />
            <div className="text-xs font-bold tracking-widest text-[rgb(255,255,249)] uppercase text-[24px]">Diseño</div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          {/* Typography Display */}
          <div className="bg-white/[0.03] rounded-[20px] p-8 relative overflow-hidden border border-white/[0.08] group hover:border-white/20 transition-colors">
          <div className="relative">
            <div className={`text-sm uppercase tracking-widest opacity-40 mb-4 ${isCandadosFlow ? 'font-[Poppins]' : 'font-[Gotham]'}`}>Tipografía</div>
            <div className="mb-6">
              <div className={`text-[2rem] sm:text-[3.5rem] leading-none tracking-tight mb-2 font-bold text-white ${isSprintia ? 'font-[Montserrat]' : isCandadosFlow ? 'font-[Poppins]' : 'font-[Gotham]'} break-words`}>
                {isSprintia ? 'MONTSERRAT' : isCandadosFlow ? 'POPPINS' : 'GOTHAM'}
              </div>
              <div className="flex items-center gap-3 text-sm opacity-60 font-mono">
                <span className={isSprintia ? 'font-[Montserrat]' : isCandadosFlow ? 'font-[Poppins]' : 'font-[Gotham]'}>Regular</span><span>•</span>
                <span className={isSprintia ? 'font-[Montserrat]' : isCandadosFlow ? 'font-[Poppins]' : 'font-[Gotham]'}>Medium</span><span>•</span>
                <span className={isSprintia ? 'font-[Montserrat]' : isCandadosFlow ? 'font-[Poppins]' : 'font-[Gotham]'}>Semibold</span><span>•</span><span className={isSprintia ? 'font-[Montserrat]' : isCandadosFlow ? 'font-[Poppins]' : 'font-[Gotham]'}>Light</span>
              </div>
            </div>
          </div>
        </div>
        {/* Style Overview */}
        <div className="bg-white/[0.03] rounded-[20px] p-8 border border-white/[0.08] group hover:border-white/20 transition-colors h-full">
           <div className="text-sm uppercase tracking-widest opacity-40 mb-4 font-[Avenir]">Glyphs</div>
           <div className="grid grid-cols-[auto_1fr] gap-6 items-center">
            <div className="text-[4rem] leading-none opacity-90 font-[Avenir]">Aa</div>
            <div className="space-y-1 text-xs opacity-50 font-mono">
              <div className="tracking-widest font-[Avenir]">ABCDEFGHIJKLM</div>
              <div className="tracking-widest font-[Avenir]">NOPQRSTUVWXYZ</div>
              <div className="font-[Avenir]">0123456789</div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Colors & Glass */}
      <div className={`grid grid-cols-1 ${isCandados ? '' : 'xl:grid-cols-2'} gap-8`}>
        <div className="bg-white/[0.03] rounded-[20px] p-8 border border-white/10">
          <div className="text-sm uppercase tracking-widest opacity-40 mb-6">Paleta de Color</div>
          <div className="flex gap-4">
             {(isSprintia ? [
               {c: '#0B0B0B', l: 'Dark'}, 
               {c: '#00FF7F', l: 'Brand'}, // SpringGreen
               {c: '#F5F5F5', l: 'Light'}, 
               {c: '#A5A5A5', l: 'Grey'}
             ] : isCandadosFlow ? [
               {c: '#0B0B0B', l: 'Dark'}, 
               {c: '#006470', l: 'Brand'}, // Teal
               {c: '#F5F5F5', l: 'Light'}, 
               {c: '#A5A5A5', l: 'Grey'}
             ] : isInterfacesFlow ? [
               {c: '#611232', l: 'Principal'}, // Guinda Principal
               {c: '#9F2141', l: 'Resaltado'}, // Guinda Resaltado
               {c: '#C59349', l: 'Principal'}, // Dorado Principal
               {c: '#FFDEAC', l: 'Resaltado'}  // Dorado Resaltado
             ] : isCandados ? [
               {c: '#0B0B0B', l: 'Dark'}, 
               {c: '#006470', l: 'Brand'}, // Green
               {c: '#F5F5F5', l: 'Light'}, 
               {c: '#A5A5A5', l: 'Grey'}
             ] : [
               {c: '#060606', l: 'Dark'}, 
               {c: '#FFEE00', l: 'Brand'}, 
               {c: '#FFFFDE', l: 'Light'}, 
               {c: '#A5A5A5', l: 'Grey'}
             ]).map((color, i) => (
               <div key={i} className="flex-1 flex flex-col gap-2">
                 <div className="aspect-[3/4] rounded-lg w-full relative overflow-hidden" style={{ background: color.c }}>
                    {(color.c === '#FFEE00' || color.c === '#00FF7F' || color.c === '#E35053' || color.c === '#006470' || color.c === '#611232') && <div className="absolute inset-0 bg-white/20 blur-lg opacity-50"></div>}
                 </div>
                 <div className="text-[0.6rem] font-mono opacity-50 text-center">{color.c}</div>
               </div>
             ))}
          </div>
        </div>
        
        {!isCandados && (
        <div className="bg-white/[0.03] rounded-[20px] p-8 border border-white/10 overflow-hidden relative">
           <div className="text-sm uppercase tracking-widest opacity-40 mb-6">Glassmorphism</div>
           <div className="flex justify-center gap-4 relative z-10">
              <div className="w-20 h-24 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 transform -rotate-6 translate-y-2"></div>
              <div className={`w-20 h-24 rounded-lg backdrop-blur-md transform z-10 shadow-xl ${isSprintia ? 'bg-white/10 border-white/25/20' : isCandadosFlow ? 'bg-white/10 border-white/25/20' : isInterfacesFlow ? 'bg-white/10 border-white/25/20' : isCandados ? 'bg-white/10 border-white/25/20' : 'bg-white/10 border-white/25/20'}`}></div>
              <div className="w-20 h-24 rounded-lg backdrop-blur-md border border-white/10 transform rotate-6 translate-y-2" style={{ backgroundImage: "linear-gradient(237.924deg, rgba(237, 237, 237, 0.12) 10.815%, rgba(237, 237, 237, 0.1) 42.163%, rgba(237, 237, 237, 0.02) 89.185%)" }}></div>
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>
        )}
      </div>

      {/* Design System */}
      <div className="bg-white/[0.03] rounded-[20px] p-6 md:p-8 border border-white/10">
        <div className="text-sm uppercase tracking-widest opacity-40 mb-6">Design System</div>
        <div className="mb-12">
            {isBegoApp ? (
                <div className="mb-6 max-w-4xl bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-white" />
                    <div className="flex gap-4">
                        <Sparkles className="w-5 h-5 text-white/70 shrink-0 mt-1" />
                        <p className="text-white/90 leading-relaxed text-[17px]">
                            Al enfrentar fricciones con el equipo de desarrollo debido a la falta de claridad en los componentes heredados, el Líder de UX nos encomendó la creación de un nuevo estándar. En colaboración con el equipo asumimos el reto, pero tomé la iniciativa de ir más allá de lo solicitado: propuse y desarrollé un Design System interactivo. Esta herramienta no solo visualizaba el comportamiento de los componentes, sino que entregaba el código CSS y permitía su previsualización en Figma con un solo clic, cerrando la brecha técnica y elevando la eficiencia operativa conjunta en un 90%.
                        </p>
                    </div>
                </div>
            ) : (
                <p className="text-white/80 leading-relaxed text-[17px] mb-6 max-w-4xl">
                    En colaboración con el equipo, se desarrolló un Design System integral basado en la metodología Atomic Design. Se implementaron componentes con propiedades booleanas y variantes para agilizar el flujo de trabajo, asegurando una consistencia visual perfecta y facilitando la coordinación técnica con el equipo de desarrollo.
                </p>
            )}
            {isBegoApp && (
                <motion.a 
                    href="https://ratio-coyote-00081753.figma.site" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0B0B0B] rounded-xl text-sm font-medium shadow-lg shadow-white/10 hover:shadow-white/20 transition-all"
                >
                    <LinkIcon className="w-4 h-4" />
                    Design System Interactivo
                </motion.a>
            )}
        </div>
        {isSprintia ? (
            <div className="flex flex-col gap-6 mt-8">
                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                     <div className="bg-white/[0.03] rounded-[20px] p-6 border border-white/5 overflow-hidden flex justify-center items-center">
                        <div className="scale-[0.8] sm:scale-90 md:scale-100 origin-center transform-gpu">
                            <SprintiaButtons />
                        </div>
                     </div>
                     <div className="bg-white/[0.03] rounded-[20px] p-6 border border-white/5 overflow-hidden flex justify-center items-center">
                        <div className="w-[382px] scale-[0.8] sm:scale-90 md:scale-100 origin-center transform-gpu">
                            <SprintiaInputs />
                        </div>
                     </div>
                 </div>
                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                     <div className="bg-white/[0.03] rounded-[20px] p-6 border border-white/5 overflow-hidden flex justify-center items-center">
                        <div className="scale-[0.8] sm:scale-90 md:scale-100 origin-center transform-gpu">
                            <SprintiaCards />
                        </div>
                     </div>
                     <div className="bg-white/[0.03] rounded-[20px] p-6 border border-white/5 overflow-hidden flex justify-center items-center">
                         <div className="w-[382px] scale-[0.8] sm:scale-90 md:scale-100 origin-center transform-gpu">
                            <SprintiaIcons />
                         </div>
                     </div>
                 </div>
            </div>
        ) : isInterfacesFlow ? (
            <div className="mt-12 space-y-8">
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                   <ImageWithFallback src={imgGobDesignSystem} alt="Gobierno Design System" className="w-full h-auto" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-white/5">
                        <div className="p-4 border-b border-white/5">
                            <h5 className="text-white font-medium text-sm uppercase tracking-wider opacity-70">Componentes</h5>
                        </div>
                        <ImageWithFallback src={imgGobComponents} alt="Gobierno Components" className="w-full h-auto" />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-white/5">
                        <div className="p-4 border-b border-white/5">
                            <h5 className="text-white font-medium text-sm uppercase tracking-wider opacity-70">Iconografía</h5>
                        </div>
                        <ImageWithFallback src={imgGobIcons} alt="Gobierno Icons" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        ) : (
            <AtomicDesignVisual accentColor={isSprintia ? '#00FF7F' : isInterfacesFlow ? '#FFFFFF' : isCandados ? '#FFFFFF' : '#FFFFFF'} />
        )}
      </div>

      {/* Wireframes & Mockups */}
      {!isBegoApp && (
      <div className={`bg-white/[0.03] rounded-[20px] p-6 md:p-8 border border-white/10 ${(isSprintia || isHeyMovil) ? 'hidden' : ''}`}>
        <div className="text-sm uppercase tracking-widest opacity-40 mb-6">Wireframes & Mockups</div>
        <p className="text-white/80 leading-relaxed text-[17px] mb-8 max-w-4xl">
           {isBegoApp 
             ? "Ante la exigencia de cronogramas ajustados, se implementó una estrategia de diseño ágil, construyendo los wireframes directamente con componentes de alta fidelidad. Al tratar estas estructuras como maquetas de diseño final desde la fase conceptual, logramos optimizar los tiempos de iteración y asegurar el cumplimiento de los plazos estratégicos sin comprometer la calidad visual del producto."
             : isBegoWeb
             ? "Por directriz del liderazgo de diseño y ante la necesidad de iteraciones rápidas, se implementó una metodología de diseño directo en alta fidelidad. Esta estrategia optimizó los ciclos de validación y entrega, permitiendo cumplir con los exigentes cronogramas del proyecto manteniendo un estándar visual superior desde la etapa conceptual."
             : "La evolución visual del proyecto, desde la estructura inicial hasta la interfaz final de alta fidelidad."
           }
        </p>
        
        {/* Wireframes */}
        <div className="mb-12">
            <div className="h-[27.625px] opacity-90 relative shrink-0 w-full mb-4">
               <p className="font-medium leading-[27.625px] text-[17px] text-white">Wireframes de Alta Fidelidad</p>
            </div>
             <div className={`relative ${isBegoApp ? 'group/carousel' : ''}`}>
                 {/* Navigation Arrows - Only for Bego App */}
                 {isBegoApp && (
                    <>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setWireframeIndex(prev => (prev === 0 ? 1 : 0));
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors opacity-100 lg:opacity-0 group-hover/carousel:opacity-100"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setWireframeIndex(prev => (prev === 0 ? 1 : 0));
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors opacity-100 lg:opacity-0 group-hover/carousel:opacity-100"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </>
                 )}

                 {isCandados ? (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
                         {isInterfacesFlow ? (
                            <>
                               <div className="flex justify-center transform scale-90 md:scale-100 origin-center">
                                   <MockupPhone image={imgGobiernoMobile} label="Mobile App" accentColor="#FFFFFF">
                                       <Group162565 />
                                   </MockupPhone>
                               </div>
                               <div className="w-full">
                                   <MockupDesktop image={imgGobiernoDesktop} label="Desktop Platform" delay={0.2} accentColor="#FFFFFF" />
                               </div>
                            </>
                         ) : (
                            <>
                                 <div className="flex justify-center transform scale-90 md:scale-100 origin-center">
                                     <MockupPhone image={imgCandadosMobile} label="Mobile App" accentColor="#FFFFFF" />
                                 </div>
                                 <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group bg-[#060606]">
                                     <div className="bg-[#111] px-4 py-3 flex gap-2 border-b border-white/5 items-center">
                                         <div className="flex gap-1.5">
                                             <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                                             <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                             <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                                         </div>
                                         <div className="mx-auto w-1/2 h-5 bg-white/5 rounded-md text-[10px] flex items-center justify-center text-white/20 font-mono">candados.gob.mx</div>
                                     </div>
                                     <ImageWithFallback src={imgCandadosMap} alt="Desktop Platform" className="w-full h-auto" />
                                 </div>
                            </>
                         )}
                     </div>
                 ) : (
                 <div className="relative w-full aspect-[16/10] rounded-[14px] overflow-hidden bg-[#080c0f] border border-white/5">
                     <ImageWithFallback 
                        src={imgWireframesNew} 
                        alt="Wireframes" 
                        className="w-full h-full object-cover" 
                     />
                     
                    {/* Overlay for Website Screenshot - Only for Bego App */}
                    {isBegoApp && (
                        <AnimatePresence>
                            {wireframeIndex === 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute"
                                    style={{
                                        top: '10.5%',
                                        left: '12.8%',
                                        width: '74.2%',
                                        height: '76%',
                                        transform: 'perspective(1000px) rotateX(1deg) rotateY(-1deg)',
                                        transformOrigin: 'center center'
                                    }}
                                >
                                    <ImageWithFallback 
                                        src={imgWebsite} 
                                        alt="Website Mockup" 
                                        className="w-full h-full object-cover object-top rounded-sm" 
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}
                </div>
                )}
            </div>
            {/* New Carousel Section for Bego Web */}
            {isBegoWeb && (
                <div className="mt-8 mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative group/bego-carousel">
                     {/* Navigation Arrows */}
                     <button 
                         onClick={(e) => {
                             e.stopPropagation();
                             setBegoWebIndex(prev => (prev === 0 ? 4 : prev - 1));
                         }}
                         className="absolute left-4 lg:-left-16 top-[28%] lg:top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
                     >
                         <ChevronLeft className="w-6 h-6 text-white" />
                     </button>
                     <button 
                         onClick={(e) => {
                             e.stopPropagation();
                             setBegoWebIndex(prev => (prev === 4 ? 0 : prev + 1));
                         }}
                         className="absolute right-4 lg:-right-16 top-[28%] lg:top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
                     >
                         <ChevronRight className="w-6 h-6 text-white" />
                     </button>

                    <div className="lg:col-span-2 relative">
                     <div className="relative w-full aspect-[16/9] bg-black rounded-lg border border-white/10 shadow-2xl overflow-hidden">
                         {/* Browser Bar */}
                         <div className="h-6 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                             <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                             <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                         </div>
                         {/* Images Carousel */}
                         <div className="relative w-full h-full overflow-hidden">
                             <AnimatePresence mode="popLayout">
                                 <motion.div
                                     key={begoWebIndex}
                                     initial={{ x: "100%", opacity: 0 }}
                                     animate={{ x: 0, opacity: 1 }}
                                     exit={{ x: "-100%", opacity: 0 }}
                                     transition={{ duration: 0.5, ease: "easeInOut" }}
                                     className="absolute inset-0"
                                 >
                                     <ImageWithFallback 
                                        src={begoWebIndex === 0 ? imgBegoWeb3 : begoWebIndex === 1 ? imgBegoWeb2 : begoWebIndex === 2 ? imgBegoWeb1 : begoWebIndex === 3 ? imgBegoWeb4 : imgBegoWeb6} 
                                        alt="Bego Web Screen"
                                        className="w-full h-full object-cover"
                                     />
                                 </motion.div>
                             </AnimatePresence>
                         </div>
                    </div>
                    </div>

                    <div className="lg:col-span-1 flex justify-center">
                         <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] max-w-full shadow-xl">
                            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        key={begoWebIndex}
                                        initial={{ x: "100%", opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: "-100%", opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <ImageWithFallback
                                            src={begoWebIndex === 0 ? imgBegoMobile1 : begoWebIndex === 1 ? imgBegoMobile2 : begoWebIndex === 2 ? imgBegoMobile3 : begoWebIndex === 3 ? imgBegoMobile5 : imgBegoMobile6}
                                            className="w-full h-full object-cover"
                                            alt="Bego Mobile Screen"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Global Paginator */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                         {[0, 1, 2, 3, 4].map((idx) => (
                             <button
                                 key={idx}
                                 onClick={(e) => { e.stopPropagation(); setBegoWebIndex(idx); }}
                                 className={`h-1.5 rounded-full transition-all duration-300 ${
                                     begoWebIndex === idx ? "bg-white w-6" : "bg-white/40 w-1.5 hover:bg-white/60"
                                 }`}
                             />
                         ))}
                     </div>
                </div>
            )}
        </div>
      </div>
      )}

      {isHeyMovil && (
          <div className="bg-white/[0.03] rounded-[20px] p-6 md:p-8 border border-white/10">
                 <div className="text-sm uppercase tracking-widest opacity-40 mb-6">Wireframes & Mockups</div>
                 <p className="text-white/80 leading-relaxed text-[17px] mb-8 max-w-4xl">
                     Desde la conceptualización en baja fidelidad hasta el diseño final, cada paso se alineó con el objetivo de negocio.
                 </p>
                 <div className="mb-12">
                     <h4 className="font-medium leading-[27.625px] text-[17px] text-white mb-4">Wireframes de Baja Fidelidad</h4>
                     <HeyMovilWireframes />
                 </div>
                 <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
                     <h5 className="text-white font-medium mb-4 opacity-90 p-4">Mockups de Alta Fidelidad</h5>
                     <div className="relative w-full h-[1925px] md:h-[3850px] overflow-hidden bg-white">
                        <div className="origin-top-left w-[400%] h-[400%] md:w-[200%] md:h-[200%] scale-[0.25] md:scale-[0.5] pointer-events-none">
                            <HeyMovilDesign />
                        </div>
                     </div>
                </div>
          </div>
      )}
    </div>
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-[100]"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-[101] overflow-y-auto bg-[#0B0B0B] hide-scrollbar"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={onClose}
              className="fixed top-4 right-4 md:top-8 md:right-8 z-[110] px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3 group shadow-lg"
              aria-label="Volver al inicio"
            >
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Volver al inicio</span>
              <div className="w-px h-4 bg-white/20 group-hover:bg-white/30 transition-colors"></div>
              <X size={16} className="text-white/70 group-hover:text-white transition-colors" />
            </motion.button>

            {/* Content Container */}
            <div className="min-h-screen">
              {isCandados && !gobiernoStep ? (
                <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-8 animate-in fade-in duration-500 py-20 md:py-8">
                    <div className="max-w-4xl w-full">
                        <h2 className="text-[1.75rem] md:text-[2.5rem] font-medium text-center mb-4 text-white">Gobierno de México</h2>
                        <p className="text-white/60 text-center mb-8 md:mb-12 text-base md:text-lg max-w-3xl mx-auto">
                          Como parte de una estrategia de alianza futura, colaboré en la adaptación de interfaces y el desarrollo de dos iniciativas clave. CANDADOS destaca como el proyecto más avanzado y robusto. Selecciona el módulo que deseas explorar.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <button 
                                onClick={() => setGobiernoStep('interfaces')}
                                className="group relative text-left h-full w-full"
                            >
                              <BorderGlow edgeSensitivity={28} glowColor="0 0 100" backgroundColor="#0D0D0D" borderRadius={20} glowRadius={36} glowIntensity={0.8} coneSpread={25} colors={['#ffffff', '#d4d4d8', '#a1a1aa']} fillOpacity={0.3} className="h-full">
                              <div className="flex flex-col h-full p-6 md:p-8">
                                <Layout className="w-10 h-10 md:w-12 md:h-12 text-white/70 mb-4 md:mb-6" />
                                <h3 className="text-[1.5rem] md:text-[2rem] leading-tight font-medium text-white mb-2 md:mb-4">Interfaces Gobierno</h3>
                                <p className="text-sm md:text-base text-white/60 leading-relaxed">Adaptación integral de la arquitectura Bego para el sector público, optimizando procesos gubernamentales mediante una experiencia digital escalable.</p>
                                <div className="mt-auto pt-6 md:pt-8 flex items-center text-white/70 font-medium opacity-100 md:opacity-0 group-hover:opacity-100 transition-all transform md:translate-y-2 group-hover:translate-y-0 text-sm md:text-base">
                                    Explorar <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                              </div>
                              </BorderGlow>
                            </button>

                            <button 
                                onClick={() => setGobiernoStep('candados')}
                                className="group relative text-left h-full w-full"
                            >
                              <BorderGlow edgeSensitivity={28} glowColor="0 0 100" backgroundColor="#0D0D0D" borderRadius={20} glowRadius={36} glowIntensity={0.8} coneSpread={25} colors={['#ffffff', '#d4d4d8', '#a1a1aa']} fillOpacity={0.3} className="h-full">
                              <div className="flex flex-col h-full p-6 md:p-8">
                                <Lock className="w-10 h-10 md:w-12 md:h-12 text-white/70 mb-4 md:mb-6" />
                                <h3 className="text-[1.5rem] md:text-[2rem] leading-tight font-medium text-white mb-2 md:mb-4">Candados</h3>
                                <p className="text-sm md:text-base text-white/60 leading-relaxed">Plataforma de seguridad inteligente para el ecosistema gubernamental, especializada en la gestión crítica de permisos y control de accesos de alta confidencialidad.</p>
                                <div className="mt-auto pt-6 md:pt-8 flex items-center text-white/70 font-medium opacity-100 md:opacity-0 group-hover:opacity-100 transition-all transform md:translate-y-2 group-hover:translate-y-0 text-sm md:text-base">
                                    Explorar <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                              </div>
                              </BorderGlow>
                            </button>
                        </div>
                    </div>
                </div>
              ) : (
                <>
              {/* Hero Section */}
              <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
                 {isSprintia ? (
                    <div onClick={() => window.open('https://youtu.be/85lXR8z1B0M', '_blank')} className="w-full h-full cursor-pointer group relative">
                      <ImageWithFallback src={imgPortada1} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <motion.div whileHover={{ scale: 1.1 }} className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-2xl">
                          <Play className="w-8 h-8 text-black fill-black" />
                        </motion.div>
                      </div>
                    </div>
                  ) : isBegoApp ? (
                    <div onClick={() => window.open('https://www.youtube.com/watch?v=T9QQbftW3aE', '_blank')} className="w-full h-full cursor-pointer group relative">
                      <ImageWithFallback src="https://img.youtube.com/vi/T9QQbftW3aE/maxresdefault.jpg" alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                         <motion.div whileHover={{ scale: 1.1 }} className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-2xl">
                          <Play className="w-8 h-8 text-black fill-black" />
                        </motion.div>
                      </div>
                    </div>
                  ) : isCandadosFlow ? (
                    <ImageWithFallback src={imgCandadosMap} alt="Candados Map View" className="w-full h-full object-cover" />
                  ) : (
                    <ImageWithFallback src={project.image} alt={project.title} className={`w-full h-full ${project.title === 'GRAFICO Y MULTIMEDIA' ? 'object-contain' : 'object-cover'}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent pointer-events-none"></div>
              </div>

              <div className="max-w-[1400px] mx-auto px-4 md:px-8 -mt-20 relative z-10 pb-20">
                {/* Header Info */}
                <div className="mb-16">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[2rem] md:text-[3rem] font-medium mb-8 tracking-tight"
                  >
                    {isCandadosFlow ? 'CANDADOS' : isCandados ? 'INTERFACES GOBIERNO' : project.title}
                  </motion.h1>

                  {/* Meta Stats */}
                  {/* Rol, año y categoría. La duración salió de aquí: en la
                      mitad de los proyectos era "En proceso" o "Variable", que
                      no le dice nada a quien lee. */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-y border-white/10 py-6 mb-8">
                     {[
                       { label: 'Rol', val: (isBegoApp || isBegoWeb || isCandados) ? 'Diseñador UX/UI' : project.role },
                       { label: 'Año', val: project.year },
                       { label: 'Categoría', val: isCandadosFlow ? 'SAAS / SEGURIDAD' : isBegoWeb ? 'WEB RESPONSIVO' : project.category }
                     ].map((stat, i) => (
                       <div key={i}>
                         <div className="text-xs uppercase tracking-widest opacity-50 mb-1">{stat.label}</div>
                         <div className="text-sm md:text-base font-medium">{stat.val === 'Variable' ? 'En proceso' : stat.val}</div>
                       </div>
                     ))}
                  </div>


                </div>

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-20">
                  
                  {/* Sticky Sidebar Navigation (Desktop) */}
                  <aside className="hidden lg:block h-fit sticky top-8">
                    <nav className="flex flex-col gap-1 relative border-l border-white/10 pl-6">
                      {navItems.map((item) => (
                         <button
                           key={item.id}
                           onClick={() => scrollToSection(item.id)}
                           className={`text-left py-2 text-sm transition-all duration-300 hover:text-white ${activeSection === item.id ? (isSprintia ? 'text-white/70 font-medium translate-x-1' : isCandadosFlow ? 'text-white/70 font-medium translate-x-1' : isCandados ? 'text-white/70 font-medium translate-x-1' : isClaro ? 'text-white/70 font-medium translate-x-1' : 'text-white/70 font-medium translate-x-1') : 'text-white/40'}`}
                         >
                           {item.label}
                         </button>
                      ))}
                    </nav>
                  </aside>

                  {/* Content Column */}
                  <div className="flex-1">
                    
                    {isBegoApp && (
                      <div className="mb-12">
                        <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium text-white mb-4">Descripción del Proyecto</h2>
                        <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-3xl">
                          BeGo Driver es una app móvil para transportistas que permite encontrar y aceptar cargas, gestionar viajes y dar seguimiento a servicios de transporte de forma digital, ayudando a reducir tiempos muertos y optimizar la operación logística.
                        </p>
                      </div>
                    )}

                    {isSprintia && (
                      <div className="mb-12">
                        <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium text-white mb-4">Descripción del Proyecto</h2>
                        <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-3xl">
                          Sprintia es una plataforma digital enfocada en el fútbol amateur que conecta jugadores, equipos y ligas mediante matchmaking inteligente, reputación deportiva y filtros por nivel y disponibilidad, con el objetivo de reducir conflictos y mejorar la organización y experiencia de juego.
                        </p>
                      </div>
                    )}

                    {isClaro && (
                      <div className="mb-12">
                        <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium text-white mb-4">Descripción del Proyecto</h2>
                        <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-3xl">
                          Auditoría de experiencia digital del Portal de Pagos de Claro Colombia (claro.com.co) apoyada en Microsoft Clarity, seguida de una propuesta de rediseño del widget "Resumen en Vivo" para la gestión de dispositivos y planes, explorando variantes de tema claro, oscuro y de marca.
                        </p>
                      </div>
                    )}

                    {/* 1. Duración */}
                    <Section id="duration" title="Duración del Proyecto" icon={CheckCircle}>
                      {(isBegoApp || isBegoWeb || isHeyMovil) ? (
                        <>
                           <p className="opacity-70 mb-4 max-w-2xl">
                             Una visión general del cronograma de actividades UX ejecutadas durante el desarrollo del proyecto.
                           </p>
                           <TimelineGrid />
                        </>
                      ) : (
                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                          <p className="opacity-80">
                            {isCandados 
                              ? (isCandadosFlow 
                                  ? "El proyecto tuvo una duración de 6 meses, abarcando desde el descubrimiento y análisis de seguridad hasta la implementación de los dashboards de control." 
                                  : "El proyecto se encuentra actualmente en proceso, enfocado en la traducción de la experiencia Bego hacia los lineamientos de identidad gubernamental para la presentación de la alianza.")
                              : "El proyecto sigue en proceso de desarrollo, iterando constantemente en el diseño y la implementación de nuevas funcionalidades."
                            }
                          </p>
                        </div>
                      )}
                    </Section>

                    {/* 2. Tu Rol */}
                    <Section id="role" title="Mi Rol" icon={Users}>
                      <div className="prose prose-invert max-w-none mb-8">
                         {isBegoApp ? (
                           <div className="space-y-6 text-lg leading-relaxed text-white/80">
                             <div className="flex flex-wrap gap-3">
                                {['UX Design', 'UI Design', 'UX Writer'].map((role) => (
                                  <div key={role} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/90 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors cursor-default">
                                    {role}
                                  </div>
                                ))}
                              </div>
                              <ul className="space-y-4">
                                {[
                                  "Colaboré en el rediseño UX/UI optimizando flujos clave mediante metodologías ágiles para una experiencia más intuitiva y centrada en el usuario.",
                                  "Desarrollé prototipos de baja y alta fidelidad para validar iteraciones y asegurar una implementación técnica precisa y eficiente.",
                                  "Co-creé el Design System desde cero utilizando Atomic Design, garantizando escalabilidad, consistencia visual y orden en la aplicación.",
                                  "Implementé componentes booleanos avanzados para optimizar estados y estilos, agilizando el mantenimiento y la colaboración en el equipo de diseño."
                                ].map((item, index) => (
                                  <li key={index} className="flex items-start gap-3 group">
                                    <CheckCircle className="w-5 h-5 text-white/70 shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-[17px] text-white/80 group-hover:text-white/95 transition-colors">{item}</span>
                                  </li>
                                ))}
                              </ul>
                           </div>
                         ) : (
                           isSprintia ? (
                             <div className="space-y-6 text-lg leading-relaxed text-white/80">
                               <div className="flex flex-wrap gap-3">
                                 {[
                                   { title: 'Product Vision Lead', desc: 'Definición de visión, estrategia y liderazgo de producto.' },
                                   { title: 'Desarrollador IA', desc: 'Frontend con Make y Horizon impulsado por IA.' },
                                   { title: 'Product Designer', desc: 'UX/UI, branding, Design System y arquitectura de info.' }
                                 ].map((card, i) => (
                                   <div key={i} className="flex-1 min-w-[200px] p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/5 hover:border-white/25/20 transition-all group">
                                     <h4 className="font-medium text-white mb-1 group-hover:text-white/70 transition-colors">{card.title}</h4>
                                     <p className="text-xs text-white/60">{card.desc}</p>
                                   </div>
                                 ))}
                               </div>
                               <ul className="space-y-4 pt-2">
                                 {[
                                   "Dirigí la consultoría integral para Sprintia liderando un equipo multidisciplinario, definiendo la visión estratégica, la experiencia de usuario y la dirección del producto.",
                                    "Estructuré un modelo de negocio híbrido Freemium/Premium impulsado por mecánicas de gamificación, maximizando la retención de usuarios y optimizando las estrategias de monetización.",
                                   "Diseñé y optimicé flujos UX/UI con enfoque en usabilidad y escalabilidad, creando un Design System robusto y adaptable.",
                                   "Desarrollé el frontend utilizando herramientas de IA para acelerar el proceso, implementando código limpio y componentes reutilizables.",
                                   "Trabajé desde la creación de contenido multimedia hasta la construcción del branding e identidad visual, integrando diseño, negocio y tecnología."
                                 ].map((item, index) => (
                                   <li key={index} className="flex items-start gap-3 group">
                                     <CheckCircle className="w-5 h-5 text-white/70 shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                                     <span className="text-[17px] text-white/80 group-hover:text-white/95 transition-colors">{item}</span>
                                   </li>
                                 ))}
                               </ul>
                             </div>
                           ) : isClaro ? (
                              <div className="space-y-6 text-lg leading-relaxed text-white/80">
                                 <div className="flex flex-wrap gap-3">
                                   {['UX Research', 'Análisis de Datos', 'UI Design'].map((role) => (
                                     <div key={role} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/90 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors cursor-default">
                                       {role}
                                     </div>
                                   ))}
                                 </div>
                                 <ul className="space-y-4">
                                    {[
                                      "Ejecuté una auditoría de experiencia digital del Portal de Pagos usando Microsoft Clarity, analizando 40 sesiones de usuarios reales durante mayo de 2026.",
                                      "Identifiqué la causa raíz de las fricciones críticas: un error JS activo desde el segundo 0:01 de carga que bloqueaba el CTA principal 'Pagar mi factura Claro'.",
                                      "Cuantifiqué el impacto: 10.42% de sesiones con dead clicks y 29.66% de rage clicks concentrados en un solo elemento del Hero, priorizando recomendaciones por severidad.",
                                      "Propuse un rediseño del widget 'Resumen en Vivo' de gestión de dispositivos y planes, explorando tres variantes de tema (claro, oscuro y de marca)."
                                    ].map((item, index) => (
                                      <li key={index} className="flex items-start gap-3 group">
                                        <CheckCircle className="w-5 h-5 text-white/70 shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-[17px] text-white/80 group-hover:text-white/95 transition-colors">{item}</span>
                                      </li>
                                    ))}
                                 </ul>
                              </div>
                           ) : isHeyMovil ? (
                              <div className="space-y-6 text-lg leading-relaxed text-white/80">
                                 <div className="flex flex-wrap gap-3">
                                   {['UX Research', 'UI Design', 'Prototyping'].map((role) => (
                                     <div key={role} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/90 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors cursor-default">
                                       {role}
                                     </div>
                                   ))}
                                 </div>
                                 <ul className="space-y-4">
                                    {[
                                      "Lideré el proceso de diseño end-to-end, desde la investigación de mercado hasta la entrega final de los mockups en alta fidelidad.",
                                      "Estructuré la arquitectura de información para priorizar la propuesta de valor y los planes tarifarios, facilitando la comprensión del servicio.",
                                      "Diseñé una interfaz limpia y moderna que transmite confianza institucional sin perder el dinamismo de una startup tecnológica."
                                    ].map((item, index) => (
                                      <li key={index} className="flex items-start gap-3 group">
                                        <CheckCircle className="w-5 h-5 text-white/70 shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-[17px] text-white/80 group-hover:text-white/95 transition-colors">{item}</span>
                                      </li>
                                    ))}
                                 </ul>
                              </div>
                           ) : isCandadosFlow ? (
                              <div className="space-y-6">
                                 <p className="opacity-80 text-[24px]">Colaboré en el diseño integral desde cero, iterando estratégicamente en UX y UI para garantizar una adaptación responsive óptima en móvil y escritorio.</p>
                                 <div className="bg-[#003d44]/20 p-6 rounded-xl border border-[#003d44]/30">
                                    <h4 className="text-white/70 font-semibold mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white"></div> CANDADOS</h4>
                                    <p className="text-sm opacity-90">Plataforma inteligente para la gestión de seguridad, monitoreo de dispositivos y control de accesos críticos en tiempo real.</p>
                                 </div>
                                <div className="flex flex-wrap gap-3 pt-2">
                                 {['UX design', 'UI design', 'Prototyping'].map((role) => (
                                   <div key={role} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/90 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors cursor-default">
                                     {role}
                                   </div>
                                 ))}
                               </div>
                             </div>
                           ) : isCandados ? (
                              <div className="space-y-6">
                                 <p className="opacity-80 text-[24px]">Colaboré en el Reskinning Sistemático de la suite de servicios Bego para su integración gubernamental.</p>
                                 <div className="bg-[#751E25]/20 p-6 rounded-xl border border-[#751E25]/30">
                                    <h4 className="text-white/70 font-semibold mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white"></div> INTERFACES GOBIERNO</h4>
                                    <p className="text-sm opacity-90">Ante la directriz de 'no investigación' para esta fase de demo, mi rol se centró en la traducción fiel de los flujos operativos existentes hacia una nueva interfaz institucional.</p>
                                 </div>
                                <div className="flex flex-wrap gap-3 pt-2">
                                 {['UI Adaptation', 'Visual Translation'].map((role) => (
                                   <div key={role} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/90 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors cursor-default">
                                     {role}
                                   </div>
                                 ))}
                               </div>
                             </div>
                           ) : (
                             <p className="leading-relaxed text-white/80 text-[17px]">
                               {isBegoWeb ? "Como Diseñador UX, Diseñador UI y UX Writer, mi trabajo se centró en transformar la operación logística en una experiencia digital clara, eficiente e intuitiva." :
                                isCandados ? "Responsable del diseño integral de la experiencia de usuario y la interfaz visual para la plataforma gubernamental." :
                                project.role}
                             </p>
                           )
                         )}
                      </div>

                      {/* Bego Web Specific Cards */}
                      {isBegoWeb && (
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                              { icon: GitBranch, title: "Simplificación", desc: "Optimicé el registro y seguimiento para reducir fricciones." },
                              { icon: BarChart3, title: "Data Driven", desc: "Interfaces claras para visualizar métricas logísticas." },
                              { icon: Smartphone, title: "Responsivo", desc: "Experiencias fluidas para operación en carretera." }
                            ].map((card, i) => (
                              <motion.div 
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group"
                              >
                                <card.icon className="w-8 h-8 mb-4 text-white/70" />
                                <h4 className="font-semibold mb-2 text-lg">{card.title}</h4>
                                <p className="text-sm opacity-60 leading-relaxed">{card.desc}</p>
                              </motion.div>
                            ))}
                         </div>
                      )}
                    </Section>

                    {/* 3. Objetivo */}
                    <Section id="objective" title="Objetivo" icon={Target}>
                       <div className="relative pl-8 border-l-2 py-2 border-white">
                          {isBegoWeb ? (
                            <div className="space-y-6">
                              <p className="italic opacity-80 text-[24px]">"Transformar la gestión logística mediante un ecosistema digital transparente que optimice el flujo de mercancías y centralice el control operativo." {/*��*/}</p>
                              <p className="text-base opacity-80 leading-relaxed">El objetivo principal fue mejorar la experiencia de usuario y la claridad del producto, ya que la versión anterior presentaba problemas de usabilidad, navegación poco intuitiva y una propuesta de valor difícil de comprender para el usuario final.</p>
                            </div>
                          ) : isBegoApp ? (
                            <div className="space-y-8">
                              <p className="italic opacity-80 text-[24px]">"Conectar cargadores con transportistas usando inteligencia artificial para optimizar las operaciones logísticas en una plataforma nativa."</p>
                              
                              <div>
                                <h4 className="text-white font-medium mb-3 text-lg">Definiendo el problema</h4>
                                <p className="opacity-80 leading-relaxed text-[17px]">
                                  La falta de visibilidad en seguridad y los retornos en vacío generaban ineficiencias críticas. Además, una interfaz poco intuitiva complicaba la operación para los transportistas, frenando la adopción y el flujo logístico.
                                </p>
                                <h4 className="text-white font-medium mb-3 text-lg mt-6">Posible solución</h4>
                                <p className="opacity-80 leading-relaxed text-[17px]">
                                  Rediseño UX/UI centrado en roles que optimiza la visibilidad operativa y toma de decisiones en tiempo real. Se reestructuró la arquitectura para facilitar el monitoreo de viajes y seguridad.
                                </p>
                              </div>
                            </div>
                          ) : isCandadosFlow ? (
                             <div className="space-y-6">
                                <p className="italic opacity-80 text-[24px]">"Garantizar la integridad de la cadena de custodia mediante una plataforma de monitoreo en tiempo real que permita la gestión eficiente de candados inteligentes y alertas de seguridad."</p>
                                <p className="text-base opacity-80 leading-relaxed">
                                  El objetivo central fue crear una interfaz que permitiera a los operadores visualizar el estado de miles de dispositivos simultáneamente, con un sistema de filtrado y alertas críticas que redujera el tiempo de respuesta ante incidentes de seguridad.
                                </p>
                            </div>
                          ) : isCandados ? (
                             <div className="space-y-6">
                                <p className="italic opacity-80 text-[24px]">"Demostrar la viabilidad técnica y operativa de los servicios de Bego dentro del ecosistema gubernamental, adaptando una plataforma validada a una nueva identidad institucional."</p>
                                <div className="bg-[#751E25]/20 p-6 rounded-xl border border-[#751E25]/30">
                                   <h4 className="text-white/70 font-semibold mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white"></div> ALIANZA ESTRATÉGICA</h4>
                                   <p className="text-sm opacity-90">El objetivo fue adaptar la plataforma existente para cumplir con la normativa visual federal, facilitando así la negociación de una alianza estratégica sin incurrir en costos de desarrollo de nuevas funcionalidades.</p>
                                </div>
                             </div>
                           ) : isSprintia ? (
                            <p className="italic opacity-80 text-[24px]">"Diseñar y desarrollar una plataforma digital que conecte jugadores, equipos y ligas de fútbol amateur mediante matchmaking inteligente con IA, enfocada en mejorar la transparencia, reducir conflictos dentro del deporte y fortalecer la reputación de los jugadores a través de un sistema de reseñas y perfiles digitales, optimizando la experiencia de búsqueda, conexión y participación deportiva."</p>
                          ) : isClaro ? (
                            <p className="italic opacity-80 text-[24px]">"Detectar, cuantificar y priorizar las fricciones que impiden a los usuarios completar el pago de su factura en el Portal Claro, y traducir esos hallazgos en una propuesta de rediseño accionable para el widget de gestión de dispositivos y planes."</p>
                          ) : (
                            <p className="italic opacity-80 text-[24px]">{project.description}</p>
                          )}
                       </div>
                    </Section>

                    {/* 4. Investigación */}
                    <Section id="research" title="Investigación" icon={Search}>
                       {(isBegoApp || isSprintia || isBegoWeb || isHeyMovil) ? (
                          <div className="space-y-8">
                            <p className="opacity-80">
                                {isHeyMovil
                                    ? "Para Hey Movil, el proceso comenzó con un análisis profundo de la competencia y las necesidades del mercado B2B de telefonía. Se identificaron los puntos de fricción en la contratación de planes empresariales y se definieron los user personas clave."
                                    : isSprintia 
                                    ? "El desarrollo de Sprintia se apoyó en un proceso de investigación estratégica que integró UX Research, análisis legal, estudio de mercado y evaluación de modelos de monetización, permitiendo tomar decisiones informadas y construir un producto digital viable, escalable y alineado con las dinámicas reales del fútbol amateur."
                                    : isBegoWeb 
                                    ? "Se realizó un análisis competitivo del sector logístico para fundamentar la propuesta. Debido a los plazos estratégicos del proyecto, el líder del área decidió reprogramar la investigación de profundidad —incluyendo mapas de empatía y encuestas— para fases posteriores, priorizando así la arquitectura y el diseño visual para un lanzamiento ágil." 
                                    : "Ante la falta de documentación heredada, lideré una investigación desde cero con un enfoque cualitativo centrado en descubrir oportunidades de valor para el usuario. Esta estrategia permitió abordar el rediseño libre de sesgos, fundamentando la toma de decisiones en un análisis competitivo robusto y en la definición precisa de las necesidades de transportistas y cargadores."}
                            </p>
                            <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                              <ResearchCarousel isBegoApp={isBegoApp} isSprintia={isSprintia} isHeyMovil={isHeyMovil} />
                            </div>
                            
                            {isHeyMovil && (
                                <div className="space-y-8 mt-8">
                                    <HeyMovilPersona />
                                    <HeyMovilEmpathyMap />
                                </div>
                            )}

                            {isSprintia && (
                              <div className="space-y-8 mt-8">
                                <EmpathyMap />
                                
                                <div>
                                    <h4 className="flex items-center gap-3 text-lg font-medium mb-6 opacity-90 text-[rgba(255,255,255,0.8)]">
                                       <Users className="w-5 h-5 text-white/70" />
                                       Empatizar
                                    </h4>
                                    <p className="opacity-80 leading-relaxed text-[17px] mb-6">
                                       En la etapa de Empatizar, realizamos encuestas estratégicas a jugadores para comprender a profundidad sus necesidades. Evaluamos sus expectativas antes de usar la app, identificamos fricciones durante la experiencia de uso y medimos su percepción de valor posterior, obteniendo insights clave para optimizar la solución.
                                    </p>
                                    <div 
                                       className="rounded-xl overflow-hidden border border-white/10 relative group mb-8 cursor-pointer max-w-3xl hover:border-white/25 transition-colors shadow-lg"
                                       onClick={() => setSelectedImage(imgSprintiaEmpatizar)}
                                    >
                                       <ImageWithFallback src={imgSprintiaEmpatizar} alt="Encuestas de Empatía" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                          <Search className="text-white w-10 h-10 drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                            )}
                          </div>
                       ) : isCandados ? (
                          isCandadosFlow ? (
                             <div className="space-y-8">
                               <p className="opacity-80 leading-relaxed text-[17px]">
                                 Para abordar la inseguridad crítica en el transporte de carga, lideré una investigación profunda sobre los vectores de ataque en la logística aduanera. El análisis reveló que la vulnerabilidad principal residía en la desconexión operativa entre los dispositivos de seguridad física y los sistemas de monitoreo digital, generando puntos ciegos aprovechados por la delincuencia.
                               </p>
                               <div className="space-y-6 mt-8">
                                 <div>
                                   <h4 className="flex items-center gap-3 text-lg font-medium mb-6 opacity-90 text-[rgba(255,255,255,0.8)]">
                                     <Shield className="w-5 h-5 text-white/70" />
                                     Sinergia Hardware + Software
                                   </h4>
                                   <p className="opacity-80 leading-relaxed text-[17px] mb-6">
                                     La investigación concluyó que la mitigación efectiva de riesgos requiere la fusión de hardware y software. Un candado satelital actuando como sensor autónomo, integrado a una plataforma inteligente capaz de procesar telemetría en tiempo real, crea un escudo digital. Esta arquitectura permite detectar anomalías instantáneas—como aperturas fuera de geocerca—eliminando el error humano y garantizando una respuesta inmediata ante incidentes.
                                   </p>
                                   <div 
                                     className="rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer hover:border-white/25 transition-colors shadow-lg"
                                     onClick={() => setSelectedImage(imgCandadosMap)}
                                   >
                                     <ImageWithFallback src={imgCandadosMap} alt="Seguridad Logística" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                       <Search className="text-white w-10 h-10 drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           ) : (
                             <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                                <p className="opacity-80 leading-relaxed">
                                   Por definición estratégica del liderazgo, este proyecto no contempló una fase de descubrimiento de usuarios. La 'investigación' se reorientó hacia el análisis de los lineamientos de identidad del Gobierno Federal y la deconstrucción de los componentes de Bego para su mapeo directo.
                                </p>
                             </div>
                           )
                       ) : isClaro ? (
                          <div className="space-y-6">
                            <p className="opacity-80 leading-relaxed text-[17px]">
                              La investigación partió de datos de comportamiento real en lugar de suposiciones. Usando Microsoft Clarity, analicé 40 sesiones grabadas del Portal de Pagos (claro.com.co/personas/autogestion/portal-pagos) durante mayo de 2026, cruzando métricas de scroll, tiempo activo, dead clicks y rage clicks para aislar la causa raíz de la baja conversión.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {[
                                { val: '1.396.768', label: 'Sesiones totales' },
                                { val: '1,79', label: 'Páginas / sesión' },
                                { val: '25,99%', label: 'Scroll promedio' },
                                { val: '31 seg', label: 'Tiempo activo' },
                              ].map((stat, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                  <div className="text-xl md:text-[1.25rem] font-medium text-white">{stat.val}</div>
                                  <div className="text-[0.7rem] uppercase tracking-wide opacity-50 mt-1">{stat.label}</div>
                                </div>
                              ))}
                            </div>
                            <div
                              className="rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer hover:border-white/25 transition-colors shadow-lg"
                              onClick={() => setSelectedImage(imgClarity01)}
                            >
                              <ImageWithFallback src={imgClarity01} alt="Reporte Clarity - Portada y KPIs" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <Search className="text-white w-10 h-10 drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                              </div>
                            </div>
                          </div>
                       ) : (
                          <p className="opacity-80">Análisis de requerimientos y estudio de casos de uso similares para definir la mejor arquitectura de información.</p>
                       )}
                    </Section>

                    {/* 5. Proceso */}
                    <Section id="process" title="Proceso de Diseño" icon={Layers}>
                        <p className="opacity-80 mb-10 text-lg">
                           {isHeyMovil ? "Seguí un proceso iterativo ágil, comenzando con wireframes de baja fidelidad para validar la estructura de la información, evolucionando hacia un diseño de alta fidelidad que integra la identidad visual de la marca." :
                            isBegoApp ? "Rediseñé la experiencia visual priorizando la accesibilidad y la consistencia sistémica, garantizando una interacción fluida y escalable para el usuario final." :
                            isBegoWeb ? "Estructuré un lenguaje visual que fusiona confianza corporativa con innovación tecnológica, optimizando la carga cognitiva y la usabilidad en cada flujo." :
                            isCandadosFlow ? "Diseñé un sistema de monitoreo de alta densidad de información, priorizando la legibilidad de estados críticos y la eficiencia en la gestión de alertas de seguridad." :
                            isCandados ? "Implementé una estrategia de 'Reskinning Sistemático', mapeando átomo por átomo los componentes de Bego hacia el Design System gubernamental, asegurando la integridad de los flujos de negocio." :
                            isSprintia ? "Optimicé el ciclo de diseño integrando Inteligencia Artificial para acelerar la iteración y validación. Este enfoque redujo tiempos operativos, permitiendo priorizar la investigación estratégica y la funcionalidad robusta del producto." :
                            isClaro ? "A partir de los hallazgos de la auditoría, propuse un rediseño del widget 'Resumen en Vivo' de gestión de dispositivos y planes, explorando tres direcciones de tema para evaluar cuál comunica mejor la marca sin sacrificar legibilidad ni jerarquía del CTA." :
                            "Evolucion�� la solución desde bocetos conceptuales hasta un diseño de alta fidelidad validado, centrando cada iteración en las necesidades reales del usuario."}
                        </p>

                        {isClaro && (
                             <div id="resumen-vivo-block" className="mt-12 mb-16">
                                <h4 className="text-white font-medium mb-6 text-[1.25rem] flex items-center gap-3">
                                   <Palette className="w-6 h-6 text-white/70" />
                                   Exploración de Tema — "Resumen en Vivo"
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                   {[
                                     { img: imgClaroResumenBlanco, label: 'Claro' },
                                     { img: imgClaroResumenOscuro, label: 'Oscuro Premium' },
                                     { img: imgClaroResumenGradiente, label: 'Hero Gradiente' },
                                   ].map((variant, idx) => (
                                     <div key={idx}>
                                       <div
                                         className="rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer hover:border-white/25 transition-colors shadow-lg bg-black"
                                         onClick={() => setSelectedImage(variant.img)}
                                       >
                                         <ImageWithFallback src={variant.img} alt={`Resumen en Vivo - ${variant.label}`} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
                                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                           <Search className="text-white w-8 h-8 drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                                         </div>
                                       </div>
                                       <div className="text-center text-sm opacity-60 mt-3">{variant.label}</div>
                                     </div>
                                   ))}
                                </div>
                             </div>
                        )}

                        {isClaro && (
                             <div id="wifi-redesign-block" className="mt-4 mb-16">
                                <h4 className="text-white font-medium mb-4 text-[1.25rem] flex items-center gap-3">
                                   <Layers className="w-6 h-6 text-white/70" />
                                   Rediseño — Asesor de Velocidad Wi-Fi (Claro República Dominicana)
                                </h4>
                                <p className="opacity-80 leading-relaxed text-[17px] mb-6 max-w-4xl">
                                   Como segunda pieza dentro de esta colaboración, se abordó el Asesor de Velocidad y Experiencia Wi-Fi del portal de Claro República Dominicana. En su versión original, el paso de selección de dispositivos presentaba hasta seis categorías visibles al mismo tiempo, cada una con varias casillas de uso adicionales — llegando a más de veinte opciones activas en una sola pantalla antes de poder continuar.
                                </p>
                                <p className="opacity-80 leading-relaxed text-[17px] mb-6 max-w-4xl">
                                   Ese patrón eleva la carga cognitiva: obliga a evaluar y comparar muchas alternativas en paralelo antes de avanzar, lo que ralentiza la decisión en un flujo de autoservicio pensado para resolverse en segundos. Para fundamentar el rediseño recurrí a la <span className="text-white font-medium">Ley de Miller</span> (Miller, 1956), que describe la capacidad limitada de la memoria de trabajo humana: en promedio, una persona puede retener y procesar entre 5 y 9 elementos (7 ± 2) a la vez antes de que la precisión de sus decisiones comience a degradarse. Aplicar este principio implica reducir el número de opciones visibles simultáneamente, agrupar por relevancia y avanzar en pasos más cortos — priorizando profundidad de flujo sobre densidad de pantalla.
                                </p>

                                <div className="text-sm uppercase tracking-widest opacity-50 mb-4">Antes del rediseño</div>
                                <div className="max-w-2xl">
                                   <div
                                     className="rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer hover:border-white/25 transition-colors shadow-lg bg-black"
                                     onClick={() => setSelectedImage(imgClaroWifiBefore01)}
                                   >
                                     <ImageWithFallback src={imgClaroWifiBefore01} alt="Las 6 categorías de dispositivos visibles al mismo tiempo, con más de 20 casillas activas" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                       <Search className="text-white w-8 h-8 drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                                     </div>
                                   </div>
                                   <div className="text-center text-sm opacity-60 mt-3">Las 6 categorías de dispositivos, con más de 20 opciones visibles a la vez</div>
                                </div>

                                <p className="opacity-80 leading-relaxed text-[17px] mt-10 mb-6 max-w-4xl">
                                   Para la propuesta, apliqué el mismo principio en dos frentes complementarios. Primero, en la estructura de decisión: en lugar de mostrar las seis categorías de dispositivos abiertas simultáneamente, el paso "Tus Dispositivos" ahora presenta una sola categoría expandida a la vez, con el resto colapsado y accesible con un clic — reduciendo el número de opciones que la persona debe sostener en su memoria de trabajo en cualquier momento dado. Segundo, en la continuidad visual del flujo: se incorporó una imagen contextual distinta en cada uno de los tres pasos (Tu Hogar, Tus Dispositivos, Tus Necesidades), de modo que el usuario reconoce visualmente en qué parte del proceso se encuentra sin tener que releer el indicador de pasos. Esto libera capacidad de memoria de trabajo — que de otro modo se usaría en reorientarse — para lo que realmente importa: decidir.
                                </p>

                                <div className="text-sm uppercase tracking-widest opacity-50 mb-4">Después del rediseño</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                   {[
                                     { img: imgClaroWifiAfter01, label: 'Paso 1 — Tu Hogar' },
                                     { img: imgClaroWifiAfter02, label: 'Paso 2 — Tus Dispositivos (una categoría a la vez)' },
                                   ].map((shot, idx) => (
                                     <div key={idx}>
                                       <div
                                         className="rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer hover:border-white/25 transition-colors shadow-lg bg-black"
                                         onClick={() => setSelectedImage(shot.img)}
                                       >
                                         <ImageWithFallback src={shot.img} alt={shot.label} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                           <Search className="text-white w-8 h-8 drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                                         </div>
                                       </div>
                                       <div className="text-center text-sm opacity-60 mt-3">{shot.label}</div>
                                     </div>
                                   ))}
                                </div>
                             </div>
                        )}

                        {isHeyMovil && (
                             <div className="mt-12 mb-16 max-w-[864px] mx-auto">
                                <MockupDesktop label="Landing Page" delay={0.2} image="" interactive={false}>
                                     <div className="w-full relative bg-white mx-auto overflow-hidden" style={{ height: '4600px', maxWidth: '864px' }}>
                                         <div className="origin-top-left scale-[0.6]">
                                             <HeyMovilDesign />
                                         </div>
                                     </div>
                                 </MockupDesktop>
                             </div>
                        )}

                        {isSprintia && (
                             <div className="mt-12 mb-16 flex flex-col gap-6">
                                <div>
                                   <h4 className="text-white font-medium mb-4 flex items-center gap-3 text-[1.25rem]">
                                      <Palette className="w-6 h-6 text-white/70" />
                                      Branding y Logotipo
                                   </h4>
                                   <p className="opacity-80 leading-relaxed text-lg max-w-4xl text-[17px]">
                                     El logotipo de Sprintia nace de la fusión visual de dos tarjetas de jugadores, elementos centrales de la aplicación, entrelazadas para formar la letra 'S'. El naming combina 'Sprint'—el impulso decisivo para alcanzar una meta en el deporte—con el sufijo 'IA', destacando el papel fundamental de la inteligencia artificial en la plataforma.
                                   </p>
                                </div>
                                <SprintiaBranding />
                             </div>
                        )}

                        {isInterfacesFlow && (
                            <div className="mt-8 mb-16 space-y-12">
                                {/* Pantallas Principales */}
                                <div>
                                    <h4 className="text-white font-medium mb-6 text-xl">Arquitectura y Visualización de Datos</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl bg-[#1A1A1A] cursor-pointer hover:border-white/25 transition-colors" onClick={() => setSelectedImage(imgGobPolygon)}>
                                            <div className="aspect-[4/3] relative">
                                                <ImageWithFallback src={imgGobPolygon} alt="Create New Polygon" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                            </div>
                                            <div className="p-4 bg-[#111]">
                                                <h5 className="text-white font-medium text-sm mb-1">Geolocalización de Riesgos</h5>
                                                <p className="text-xs text-white/50">Mapa de calor para tramos carreteros peligrosos.</p>
                                            </div>
                                        </div>
                                        <div className="group rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl bg-[#1A1A1A] cursor-pointer hover:border-white/25 transition-colors" onClick={() => setSelectedImage(imgGobFraude)}>
                                            <div className="aspect-[4/3] relative">
                                                <ImageWithFallback src={imgGobFraude} alt="Fraude Fiscal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                            </div>
                                            <div className="p-4 bg-[#111]">
                                                <h5 className="text-white font-medium text-sm mb-1">Fraude Fiscal</h5>
                                                <p className="text-xs text-white/50">Análisis comparativo de redes federales y estatales.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard */}
                                <div>
                                    <h4 className="text-white font-medium mb-6 text-xl">Dashboard Administrativo</h4>
                                    <div className="rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl bg-[#1A1A1A] cursor-pointer group hover:border-white/25 transition-colors" onClick={() => setSelectedImage(imgGobDashboard)}>
                                         <div className="aspect-video relative">
                                            <ImageWithFallback src={imgGobDashboard} alt="Dashboard Pagos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                    <p className="mt-4 text-sm text-white/60 text-center max-w-2xl mx-auto">
                                        Visualización clara de métricas financieras y operativas, diseñada para facilitar la toma de decisiones rápidas en la administración pública.
                                    </p>
                                </div>
                            </div>
                        )}



                        {(isBegoApp || isSprintia) && (
                            <div className="mt-8 mb-12">
                                <h4 className="text-white font-medium mb-4 text-lg">Metodología</h4>
                                <p className="opacity-80 leading-relaxed text-[17px] mb-6">
                                {isBegoApp 
                                    ? "Bajo la directriz del liderazgo del equipo, se adoptó una gestión metodológica adaptativa combinando SCRUM para la ejecución de sprints rápidos enfocados en UI y optimización, con Design Thinking para abordar flujos complejos que requerían mayor tiempo de investigación y definición. Esta estrategia híbrida permitió acelerar el delivery en tareas tácticas mientras se aseguraba la profundidad analítica en los retos estratégicos del producto."
                                    : "Adopté un enfoque estratégico de Design Thinking para resolver problemas complejos centrados en el usuario, validando hipótesis mediante iteraciones rápidas. Esta visión se materializó a través de un Design System escalable que estandarizó los patrones de interacción, optimizando la colaboración con ingeniería y reduciendo la deuda técnica para garantizar un time-to-market eficiente y un producto final consistente."
                                }
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    {
                                    icon: isSprintia ? Lightbulb : Target,
                                    title: isSprintia ? "Design Thinking" : "Sprints Iterativos",
                                    desc: isSprintia 
                                        ? "Implementé un enfoque centrado en el usuario para desglosar la complejidad, iterando desde la empatía hasta la validaci��n para acelerar una arquitectura escalable."
                                        : "Organización en ciclos con objetivos definidos y validación continua, priorizando flujos críticos para maximizar el impacto operativo."
                                    },
                                    {
                                    icon: Layers,
                                    title: "Diseño Incremental",
                                    desc: "Desarrollo progresivo de interfaces con feedback temprano, permitiendo ajustes rápidos y evitando fricciones de usabilidad."
                                    },
                                    {
                                    icon: isSprintia ? Sparkles : Users,
                                    title: isSprintia ? "Colaboración & AI" : "Colaboración & Handoff",
                                    desc: isSprintia 
                                        ? "Optimicé la producción mediante IA, iterando cada resultado con una estilización manual rigurosa para garantizar la autenticidad visual y un handoff eficiente."
                                        : isBegoApp ? "Comunicación fluida con desarrollo para garantizar un handoff ágil y sin errores." : "Comunicación�� constante con el equipo técnico para un handoff eficiente, reduciendo ambigüedades y acelerando el lanzamiento."
                                    }
                                ].map((card, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] cursor-default group">
                                    <div className={`mb-4 p-2 rounded-lg w-fit transition-colors ${isSprintia ? 'bg-white/10 group-hover:bg-white/20' : 'bg-white/10 group-hover:bg-white/20'}`}>
                                        <card.icon className={`w-6 h-6 ${isSprintia ? 'text-white/70' : 'text-white/70'}`} />
                                    </div>
                                    <h5 className="font-semibold text-white mb-2">{card.title}</h5>
                                    <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/90 transition-colors">{card.desc}</p>
                                    </div>
                                ))}
                                </div>
                                <div className="mt-8">
                                    <DesignProcessGraphic accentColor={isSprintia ? '#00FF7F' : '#FFFFFF'} imageSrc={isBegoApp ? imgBegoUserFlowNew : undefined} />
                                </div>
                            </div>
                        )}

                        {isBegoApp && (
                            <div className="mt-16">
                                <h4 className="flex items-center gap-3 text-lg font-medium mb-6 opacity-90 text-[rgba(255,255,255,0.8)]">
                                   <Layout className="w-5 h-5 text-white/70" />
                                   Wireframes & Estructura
                                </h4>
                                <div 
                                    className="aspect-video rounded-xl overflow-hidden relative border border-white/10 group mb-16 cursor-pointer"
                                    onClick={() => setSelectedImage(imgWireframes1)}
                                >
                                   <ImageWithFallback src={imgWireframes1} alt="Wireframes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>

                                <h4 className="flex items-center gap-3 text-lg font-medium mb-6 opacity-90 text-[rgba(255,255,255,0.8)]">
                                   Layout Guide
                                </h4>
                                <p className="opacity-80 leading-relaxed mb-6">
                                   Se estableció una guía técnica de maquetación que define las reglas de espaciado y alineación, asegurando un acomodo preciso y consistente de los componentes en toda la interfaz.
                                </p>
                                <div 
                                    className="aspect-video rounded-xl overflow-hidden relative border border-white/10 group mb-16 cursor-pointer bg-[#060606]"
                                    onClick={() => setSelectedImage(imgLayoutGuide)}
                                >
                                   <ImageWithFallback src={imgLayoutGuide} alt="Layout Guide" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                                </div>


                            </div>
                        )}

                        {isBegoWeb && (
                            <div className="mt-8 mb-12">
                                <h4 className="text-white font-medium mb-4 text-lg">Arquitectura de la Información</h4>
                                <p className="opacity-80 leading-relaxed text-[17px] mb-6">
                                    En colaboración con marketing, definí una arquitectura de información estratégica y optimizada para SEO, asegurando una navegación intuitiva y un posicionamiento orgánico efectivo.
                                </p>
                                <div className="rounded-xl overflow-hidden border border-white/10 relative group">
                                    <ImageWithFallback src={imgInfoArch} alt="Arquitectura de Información" className="w-full h-auto object-cover" />
                                </div>
                                <div className="mt-8">
                                    <h5 className="text-white/90 font-medium mb-4 ml-1 text-sm uppercase tracking-wider opacity-70">Mapa del Sitio</h5>
                                    <div className="bg-black/20 rounded-xl border border-white/5 p-4 overflow-hidden">
                                        <SiteMapDiagram />
                                    </div>
                                </div>
                            </div>
                        )}

                        {(isBegoApp || isBegoWeb || isCandados) && <VisualDesignBlock />}

                        {isSprintia && (
                          <div className="mt-16 space-y-16">


                             {/* 1. Wireframes & Estructura (Moved to start as requested) */}
                             <div>
                                <h4 className="flex items-center gap-3 text-lg font-medium mb-6 opacity-90 text-[rgba(255,255,255,0.8)]">
                                   <Layout className="w-5 h-5 text-white/70" />
                                   Wireframes & Estructura
                                </h4>
                                <p className="opacity-80 leading-relaxed text-[17px] mb-6">
                                   El uso estratégico de IA funcionó como un wireframing avanzado, permitiendo previsualizar la estructura final de las pantallas. Esta metodología optimizó la toma de decisiones, reforzando la usabilidad y la coherencia estética del producto.
                                </p>
                                <div 
                                    className="aspect-video rounded-xl overflow-hidden relative border border-white/10 group mb-8"
                                >
                                   <div className="absolute inset-0 z-10 flex items-center justify-center p-4 gap-4 md:gap-16 pointer-events-none">
                                      <div className="pointer-events-auto scale-[0.6] md:scale-75 origin-center">
                                         <MockupPhone image={imgSprintiaAI} label="Generado por IA" delay={0} />
                                      </div>
                                      <div className="pointer-events-auto scale-[0.6] md:scale-75 origin-center">
                                         <MockupPhone image={imgSprintiaMatches} label="Iteración Propia" delay={0.2} isAfter accentColor="#00FF7F" />
                                      </div>
                                   </div>
                                </div>
                             </div>

                             {/* 2. Visual Design (Colors, Typography, Design System) */}
                             <VisualDesignBlock />

                             {/* 3. Testing y Validación */}

                          </div>
                        )}

                        {isBegoApp && (
                          <div className="mt-16">
                            <ComponentsCarousel />



                            <h4 className="flex items-center gap-3 text-lg font-medium mb-6 opacity-90 text-[rgba(255,255,255,0.8)]">
                               <GitBranch className="w-5 h-5 text-white/70" />
                               Prototipos
                            </h4>
                            <p className="opacity-80 leading-relaxed mb-8">
                               Los prototipados se manejaron de acuerdo a los tiempos de la empresa y equipos tanto como de programación como de diseño.
                            </p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                               <div 
                                 className="col-span-2 md:col-span-3 aspect-video rounded-xl overflow-hidden border border-white/10 relative group bg-[#060606] cursor-pointer"
                                 onClick={() => setSelectedImage(imgFlow3)}
                               >
                                   <ImageWithFallback src={imgFlow3} alt="Prototipo Overview" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                               </div>
                               <div 
                                 className="aspect-square rounded-xl overflow-hidden border border-white/10 relative group bg-[#060606] cursor-pointer"
                                 onClick={() => setSelectedImage(imgFlow1)}
                               >
                                   <ImageWithFallback src={imgFlow1} alt="Prototipo Flow 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                               </div>
                               <div 
                                 className="aspect-square rounded-xl overflow-hidden border border-white/10 relative group bg-[#060606] cursor-pointer"
                                 onClick={() => setSelectedImage(imgFlow2)}
                               >
                                   <ImageWithFallback src={imgFlow2} alt="Prototipo Flow 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                               </div>
                               <div 
                                 className="aspect-square rounded-xl overflow-hidden border border-white/10 relative group bg-[#060606] cursor-pointer"
                                 onClick={() => setSelectedImage(imgFlow4)}
                               >
                                   <ImageWithFallback src={imgFlow4} alt="Prototipo Flow 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                               </div>
                            </div>
                            
                                <div id="testing" className="scroll-mt-32">
                                    <h4 className="flex items-center gap-3 text-lg font-medium mb-6 opacity-90 text-[rgba(255,255,255,0.8)]">
                                       <Beaker className="w-5 h-5 text-white/70" />
                                       Testing
                                    </h4>
                                    <p className="opacity-80 leading-relaxed mb-6">
                                       Para mitigar sesgos de confirmación y evolucionar más allá de las evaluaciones heurísticas tradicionales, propuse e implementé Maze como plataforma central de validación. Esta estrategia permitió realizar pruebas A/B, pruebas de usabilidad, entrevistas, encuestas y análisis de heatmaps, fundamentando las decisiones de diseño en datos cuantitativos y cualitativos robustos.
                                    </p>
                                    <div className="mb-16">
                                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-50 border border-gray-100 group/img relative">
                                                <ImageWithFallback 
                                                    src={imgMazeReport} 
                                                    alt="Reporte de Maze" 
                                                    className="w-full h-auto transition-transform duration-700 group-hover/img:scale-105" 
                                                />
                                            </div>
                                            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-50 border border-gray-100 group/img relative">
                                                <ImageWithFallback 
                                                    src={imgHeatmapMobileNew} 
                                                    alt="Heatmap Mobile" 
                                                    className="w-full h-auto transition-transform duration-700 group-hover/img:scale-105" 
                                                />
                                            </div>
                                            <div className="md:col-span-2 rounded-xl overflow-hidden shadow-lg bg-gray-50 border border-gray-100 group/img relative">
                                                <ImageWithFallback 
                                                    src={imgTesting} 
                                                    alt="Prueba de prototipo Maze" 
                                                    className="w-full h-auto transition-transform duration-700 group-hover/img:scale-105" 
                                                />
                                            </div>
                                       </div>
                                    </div>

                                    {/* Bego Heatmap Analysis */}
                                    <div className="mt-12">
                                        <h4 className="flex items-center gap-3 text-lg font-medium mb-6 opacity-90 text-[rgba(255,255,255,0.8)]">
                                            <Smartphone className="w-5 h-5 text-white/70" />
                                            Análisis de Mapas de Calor
                                        </h4>
                                        <p className="opacity-80 leading-relaxed text-[17px] mb-8">
                                            Se realizaron estudios de atención visual para validar la jerarquía de la información, asegurando que los usuarios identificaran rápidamente el estatus de sus envíos y las acciones principales.
                                        </p>
                                        <HeatmapAnalysis 
                                            slides={begoSlides}
                                            hotspots={begoHotspots}
                                            accentColor="#FFFFFF"
                                            metrics={{ clarityScore: 70, focusScore: 96 }}
                                            appName="Bego Insight"
                                        />
                                    </div>

                                </div>

                            <h4 className="flex items-center gap-3 text-lg font-medium mb-6 opacity-90 text-[rgba(255,255,255,0.8)] mt-24">
                               <div className="w-5 h-5 rounded-full border border-white/25 flex items-center justify-center">
                                   <div className="w-3 h-3 bg-white rounded-full"></div>
                               </div>
                               Light Mode / Dark Mode
                            </h4>
                            <p className="opacity-80 leading-relaxed mb-8">
                               La interfaz se diseñó para adaptarse a cualquier entorno de trabajo. El modo oscuro reduce la fatiga visual durante turnos nocturnos, mientras que el modo claro garantiza una legibilidad óptima bajo la luz directa del sol.
                            </p>

                            <div className="flex flex-col items-center justify-center bg-[#060606] border border-white/10 rounded-2xl p-12 relative overflow-hidden mb-16 group">
                                <div className={`absolute inset-0 transition-opacity duration-700 ${isDarkModeMockup ? 'opacity-20 bg-gradient-to-tr from-blue-900/40 to-purple-900/40' : 'opacity-20 bg-gradient-to-tr from-yellow-100/10 to-orange-100/10'}`}></div>
                                
                                <div className="flex items-center gap-4 mb-8 z-10 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                                    <button 
                                        onClick={() => setIsDarkModeMockup(false)}
                                        className={`p-3 rounded-full transition-all duration-300 ${!isDarkModeMockup ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-white/50 hover:text-white'}`}
                                    >
                                        <Sun size={20} />
                                    </button>
                                    <button 
                                        onClick={() => setIsDarkModeMockup(true)}
                                        className={`p-3 rounded-full transition-all duration-300 ${isDarkModeMockup ? 'bg-[#1a1a1a] text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10' : 'text-white/50 hover:text-white'}`}
                                    >
                                        <Moon size={20} />
                                    </button>
                                </div>

                                <div className="relative w-full max-w-[300px] aspect-[9/19] rounded-[2.5rem] border-[8px] border-[#1a1a1a] overflow-hidden shadow-2xl bg-[#111] z-10">
                                     <AnimatePresence mode="wait">
                                        <motion.div 
                                            key={isDarkModeMockup ? 'dark' : 'light'}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0"
                                        >
                                             <motion.div
                                                animate={{ y: ["0%", "-50%"] }}
                                                transition={{
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    duration: 10,
                                                    ease: "easeInOut",
                                                    delay: 1
                                                }}
                                                className="w-full"
                                             >
                                                 <ImageWithFallback 
                                                    src={isDarkModeMockup ? imgDarkMode : imgLightMode} 
                                                    alt={isDarkModeMockup ? "Dark Mode Interface" : "Light Mode Interface"} 
                                                    className="w-full h-auto"
                                                />
                                             </motion.div>
                                        </motion.div>
                                     </AnimatePresence>
                                </div>
                            </div>
                          </div>
                        )}
                    </Section>

                    {/* Testeo (Sprintia, Candados & Claro) */}
                    {(isSprintia || isCandadosFlow || isClaro) && (
                      <Section id="testing" title={isCandados ? "Testeo de Usabilidad" : isClaro ? "Auditoría de Comportamiento" : "Testeo & Validación"} icon={CheckCircle}>
                        {isClaro && (
                          <div className="space-y-10">
                            <p className="opacity-80 mb-2 text-lg">
                              Reporte completo de Microsoft Clarity sobre el Portal de Pagos, con distribución de dead clicks y rage clicks por zona, y la síntesis de hallazgos con recomendaciones priorizadas.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {[
                                { img: imgClarity01, label: 'Portada & KPIs' },
                                { img: imgClarity02, label: 'Dead Clicks por Zona' },
                                { img: imgClarity03, label: 'Rage Clicks por Zona' },
                                { img: imgClarity04, label: 'Síntesis & Recomendaciones' },
                              ].map((slide, idx) => (
                                <div
                                  key={idx}
                                  className="rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer hover:border-white/25 transition-colors shadow-lg bg-black"
                                  onClick={() => setSelectedImage(slide.img)}
                                >
                                  <ImageWithFallback src={slide.img} alt={slide.label} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <Search className="text-white w-10 h-10 drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                                  </div>
                                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-sm font-medium text-white">
                                    {slide.label}
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="bg-white/5 border border-white/25/20 rounded-xl p-6 md:p-8">
                              <h5 className="font-bold text-white/70 mb-4 flex items-center gap-3 text-xl">
                                <Zap className="w-6 h-6" /> Hallazgo Crítico
                              </h5>
                              <p className="text-white/80 leading-relaxed text-[17px] mb-4">
                                Error JS crítico ("null is not an object") activo desde el segundo 0:01 de carga, bloqueando el CTA principal "Pagar mi factura Claro". Es la causa raíz confirmada del 10,42% de sesiones con dead clicks y del 29,66% de rage clicks concentrados en el subtítulo del Hero.
                              </p>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                {[
                                  { val: '10,42%', label: 'Dead clicks' },
                                  { val: '29,66%', label: 'Rage clicks' },
                                  { val: '9 seg', label: 'Hasta abandono' },
                                  { val: '75,59%', label: 'Top 3 zonas críticas' },
                                ].map((stat, i) => (
                                  <div key={i} className="text-center">
                                    <div className="text-lg md:text-xl font-bold text-white">{stat.val}</div>
                                    <div className="text-[0.7rem] uppercase tracking-wide opacity-50 mt-1">{stat.label}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {isCandados && (
                            <div className="space-y-8">
                                <p className="opacity-80 mb-6 text-lg">
                                   Se utilizó la herramienta Maze para realizar pruebas de usabilidad, heatmaps y encuestas en varios flujos.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
                                   <div className="md:row-span-2 rounded-xl overflow-hidden border border-white/10 relative group bg-[#060606] cursor-pointer hover:border-white/25 transition-colors" onClick={() => setSelectedImage(imgMazeHeatmap)}>
                                       <ImageWithFallback src={imgMazeHeatmap} alt="Heatmap Analysis" className="w-full h-full object-contain md:object-cover object-right group-hover:scale-105 transition-transform duration-500" />
                                   </div>
                                   <div className="rounded-xl overflow-hidden border border-white/10 relative group bg-[#060606] cursor-pointer hover:border-white/25 transition-colors" onClick={() => setSelectedImage(imgMazePaths)}>
                                       <ImageWithFallback src={imgMazePaths} alt="Mission Paths" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                   </div>
                                   <div className="rounded-xl overflow-hidden border border-white/10 relative group bg-[#060606] cursor-pointer hover:border-white/25 transition-colors" onClick={() => setSelectedImage(imgMazeStats)}>
                                       <ImageWithFallback src={imgMazeStats} alt="Testing Stats" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                   </div>
                                   <div className="col-span-1 md:col-span-2 rounded-xl overflow-hidden border border-white/10 relative group bg-[#060606] cursor-pointer hover:border-white/25 transition-colors overflow-hidden">
                                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[920px] transform scale-[0.25] md:scale-[0.4] origin-center pointer-events-none">
                                            <MazeScreens />
                                       </div>
                                   </div>
                                </div>
                            </div>
                        )}

                        {isSprintia && (
                        <>
                        <p className="opacity-80 mb-10 text-lg">
                           La etapa de validación fue fundamental para alinear la visión del producto con las necesidades reales de los usuarios. A través de pruebas de usabilidad y feedback iterativo, transformamos suposiciones en certezas, garantizando una experiencia fluida y eficiente.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors group">
                              <h5 className="font-bold text-white/70 mb-6 flex items-center gap-3 text-xl">
                                 <Search className="w-6 h-6" /> Hallazgos Clave
                              </h5>
                              <ul className="space-y-4">
                                 {[
                                    "La terminología técnica generaba fricción; se simplificó el lenguaje para ser más inclusivo con jugadores amateurs.",
                                    "El flujo de registro original era extenso; se implementó un onboarding progresivo para reducir la tasa de abandono.",
                                    "Los usuarios demandaron mayor control sobre la privacidad de sus datos de contacto en los perfiles públicos."
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/80 text-[17px]">
                                       <span className="w-2 h-2 rounded-full bg-white mt-2 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                                       {item}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors group">
                              <h5 className="font-bold text-white/70 mb-6 flex items-center gap-3 text-xl">
                                 <Target className="w-6 h-6" /> Iteraciones de Diseño
                              </h5>
                              <ul className="space-y-4">
                                 {[
                                    "Optimización de la arquitectura de información para reducir los clics necesarios en tareas críticas.",
                                    "Implementación de feedback visual inmediato en las acciones de matchmaking para mejorar la percepción del sistema.",
                                    "Rediseño de las tarjetas de jugador para priorizar la información de reputación y disponibilidad."
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/80 text-[17px]">
                                       <span className="w-2 h-2 rounded-full bg-white mt-2 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                                       {item}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        <div className="mt-16">
                            <h4 className="flex items-center gap-3 text-lg font-medium mb-6 opacity-90 text-[rgba(255,255,255,0.8)]">
                               <Smartphone className="w-5 h-5 text-white/70" />
                               Mapas de Calor
                            </h4>
                            <p className="opacity-80 leading-relaxed text-[17px] mb-8">
                               Para garantizar una experiencia de usuario fluida y efectiva, implementamos metodologías de validación basadas en datos. El uso de mapas de calor predictivos permitió optimizar la jerarquía visual y asegurar que los elementos críticos de conversión captaran la atención necesaria desde el primer instante.
                            </p>
                            <HeatmapAnalysis 
                                slides={sprintiaSlides}
                                hotspots={sprintiaHotspots}
                                accentColor="#00FF7F"
                                metrics={{ clarityScore: 64, focusScore: 67 }}
                                appName="Attention Insight"
                            />
                         </div>
                         </>
                        )}
                      </Section>
                    )}

                    {/* 6. Resultados */}
                    <Section id="results" title="Resultados" icon={Sparkles}>
                       <div className="mb-10">
                         <div className={`p-6 bg-gradient-to-r from-white/5 to-transparent border-l-4 rounded-r-xl ${isSprintia ? 'border-white/25' : isCandadosFlow ? 'border-white/25' : isCandados ? 'border-white/25' : isClaro ? 'border-white/25' : 'border-white/25'}`}>
                            <p className="text-lg md:text-xl text-white/90 text-[24px]">
                              {isBegoApp ? "El rediseño mejoró notablemente la experiencia de usuario mediante una paleta de alto contraste que reduce la fatiga visual de los transportistas, optimizando la funcionalidad y puliendo cada componente." :
                               isBegoWeb ? "El rediseño fue una mejora notable y actualmente está en proceso de desarrollo, manteniendo iteraciones en tiempo real para abordar áreas de oportunidad junto al departamento de desarrollo." :
                               isCandadosFlow ? "Se logró una plataforma unificada que permite la gestión centralizada de candados inteligentes, con una interfaz clara y eficiente para el monitoreo en tiempo real." :
                               isCandados ? "El diseño se ejecutó exitosamente en colaboración, demostrando la adaptabilidad de la tecnología Bego para operar bajo una identidad institucional con la eficiencia del sector privado." :
                               isClaro ? "La auditoría tradujo datos de comportamiento en un plan de acción priorizado (corregir el error JS, asignar acción al subtítulo del Hero, optimizar el tiempo de carga) y en una propuesta visual concreta para el widget de gestión de dispositivos, lista para validar con el equipo de desarrollo." :
                               "Evolucionando hacia un MVP funcional mediante la implementación de Supabase para la persistencia de datos, garantizando una arquitectura escalable antes de la entrega técnica a los desarrolladores."}
                            </p>
                         </div>
                       </div>
                       
                       {(isBegoApp || isBegoWeb) ? (
                         <PhoneMockupComparison isBegoWeb={isBegoWeb} />
                       ) : isCandadosFlow ? (
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                               {[imgCandadosLogin, imgCandadosOrders, imgCandadosFilter, imgCandadosMap].map((img, idx) => (
                                   <div key={idx} className="group rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl bg-white/5 cursor-pointer" onClick={() => setSelectedImage(img)}>
                                      <ImageWithFallback src={img} alt={`Candados Screen ${idx + 1}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                                   </div>
                               ))}
                           </div>
                       ) : isCandados ? (
                           <div className="relative group/carousel">
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                   {/* Bego Side */}
                                   <div className="group rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl bg-[#1A1A1A] cursor-pointer" onClick={() => setSelectedImage(comparisonIndex === 0 ? imgBegoDashboardDark : comparisonIndex === 1 ? imgBegoTagsDark : imgBegoMapDark)}>
                                      <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white/80">Bego Original</div>
                                      <div className="grid grid-cols-1 grid-rows-1">
                                          <div className={`col-start-1 row-start-1 transition-opacity duration-500 ${comparisonIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                            <ImageWithFallback src={imgBegoDashboardDark} alt="Bego Dashboard" className="w-full h-auto object-cover" />
                                          </div>
                                          <div className={`col-start-1 row-start-1 transition-opacity duration-500 ${comparisonIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                            <ImageWithFallback src={imgBegoTagsDark} alt="Bego Tags" className="w-full h-auto object-cover" />
                                          </div>
                                          <div className={`col-start-1 row-start-1 transition-opacity duration-500 ${comparisonIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                            <ImageWithFallback src={imgBegoMapDark} alt="Bego Map" className="w-full h-auto object-cover" />
                                          </div>
                                      </div>
                                   </div>
                                   
                                   {/* Gobierno Side */}
                                   <div className="group rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl bg-white/5 cursor-pointer" onClick={() => setSelectedImage(comparisonIndex === 0 ? imgGobiernoDashboardLight : comparisonIndex === 1 ? imgGobiernoTagsLight : imgGobiernoMapLight)}>
                                      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white">Adaptación</div>
                                      <div className="grid grid-cols-1 grid-rows-1">
                                          <div className={`col-start-1 row-start-1 transition-opacity duration-500 ${comparisonIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                            <ImageWithFallback src={imgGobiernoDashboardLight} alt="Gobierno Dashboard" className="w-full h-auto object-cover" />
                                          </div>
                                          <div className={`col-start-1 row-start-1 transition-opacity duration-500 ${comparisonIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                            <ImageWithFallback src={imgGobiernoTagsLight} alt="Gobierno Tags" className="w-full h-auto object-cover" />
                                          </div>
                                          <div className={`col-start-1 row-start-1 transition-opacity duration-500 ${comparisonIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                            <ImageWithFallback src={imgGobiernoMapLight} alt="Gobierno Map" className="w-full h-auto object-cover" />
                                          </div>
                                      </div>
                                   </div>
                               </div>
                               
                               <button 
                                 onClick={(e) => { e.stopPropagation(); setComparisonIndex(prev => (prev === 0 ? 2 : prev - 1)); }}
                                 className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all z-20"
                               >
                                 <ChevronLeft className="w-5 h-5" />
                               </button>

                               <button 
                                 onClick={(e) => { e.stopPropagation(); setComparisonIndex(prev => (prev === 2 ? 0 : prev + 1)); }}
                                 className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all z-20"
                               >
                                 <ChevronRight className="w-5 h-5" />
                               </button>

                               <div className="flex justify-center gap-2 mt-6">
                                  {[0, 1, 2].map((idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => setComparisonIndex(idx)}
                                      className={`w-2 h-2 rounded-full transition-all ${comparisonIndex === idx ? 'bg-white w-6' : 'bg-white/20'}`}
                                    />
                                  ))}
                               </div>
                           </div>
                       ) : (
                         project.galleryImages && project.galleryImages.length > 0 && (
                           <div className="grid grid-cols-1 gap-8">
                             {project.galleryImages.map((img, idx) => (
                               <div key={idx} className="group rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                                  <div className="aspect-[16/10]">
                                    <ImageWithFallback src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                  </div>
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                               </div>
                             ))}
                           </div>
                         )
                       )}
                       
                       {/* Additional Result Image - Only for Bego App */}
                       {isBegoApp && (
                         <div className="mt-16">
                           <ImageWithFallback 
                             src={imgBegoAppResult} 
                             alt="Bego App Result Mockup" 
                             className="w-full h-auto rounded-2xl" 
                           />
                           
                           {/* Collage renderizado directamente sin contenedor fondo */}
                           <div className="w-full relative mt-24 md:mt-32 group">
                              <ImageWithFallback 
                                src={imgBegoResultadosCollage} 
                                alt="Bego App Pantallas Finales" 
                                className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700" 
                                style={{ filter: 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.4))' }}
                              />
                           </div>
                         </div>
                       )}

                       {/* Apple Feature Block — Entregables clave (Claro) */}
                       {isClaro && (() => {
                          const claroSlides = [
                            {
                              image: imgClarity01,
                              title: 'Auditoría de Comportamiento',
                              description: 'Dead clicks, rage clicks y el error técnico que bloqueaba la conversión, detectados con Microsoft Clarity.',
                              target: 'testing',
                            },
                            {
                              image: imgClaroResumenGradiente,
                              title: 'Resumen en Vivo',
                              description: 'Propuesta visual en tres variantes de tema para el widget de gestión de dispositivos y planes.',
                              target: 'resumen-vivo-block',
                            },
                            {
                              image: imgClaroWifiAfter01,
                              title: 'Asesor de Velocidad Wi-Fi',
                              description: 'Rediseño del flujo de selección de dispositivos aplicando la Ley de Miller, Claro República Dominicana.',
                              target: 'wifi-redesign-block',
                            },
                          ];
                          const slide = claroSlides[claroSlide];
                          const goPrev = () => setClaroSlide((p) => (p === 0 ? claroSlides.length - 1 : p - 1));
                          const goNext = () => setClaroSlide((p) => (p === claroSlides.length - 1 ? 0 : p + 1));
                          return (
                            <div className="mt-16">
                              <h3 className="text-[1.25rem] font-medium text-white mb-2">Entregables clave</h3>
                              <p className="opacity-60 mb-8 max-w-2xl">Tres piezas de trabajo, de la evidencia al rediseño.</p>

                              <div className="group/block relative w-full h-[460px] md:h-[600px] rounded-[32px] overflow-hidden bg-black shadow-2xl">
                                <AnimatePresence mode="wait">
                                  <motion.div
                                    key={claroSlide}
                                    initial={{ opacity: 0, scale: 1.03 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 cursor-pointer"
                                    onClick={() => setSelectedImage(slide.image)}
                                  >
                                    <ImageWithFallback src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                                  </motion.div>
                                </AnimatePresence>

                                {/* Caption glass panel */}
                                <div className="absolute bottom-5 left-5 right-5 md:right-auto md:max-w-md bg-white/10 backdrop-blur-md rounded-[25px] px-6 py-5 z-10">
                                  <p className="text-white text-base md:text-lg leading-relaxed">
                                    <span className="font-bold">{slide.title}.</span>{' '}
                                    <span className="opacity-80">{slide.description}</span>
                                  </p>
                                  <button
                                    onClick={(e) => { e.stopPropagation(); scrollToSection(slide.target); }}
                                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white transition-colors"
                                  >
                                    Ver en el caso de estudio
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </button>
                                </div>

                                {/* Prev / Next */}
                                <button
                                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                                  className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-95 opacity-0 group-hover/block:opacity-100 z-10"
                                  aria-label="Anterior"
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                                  className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-95 opacity-0 group-hover/block:opacity-100 z-10"
                                  aria-label="Siguiente"
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </button>

                                {/* Dots */}
                                <div className="absolute top-5 right-5 flex gap-1.5 z-10">
                                  {claroSlides.map((_, i) => (
                                    <button
                                      key={i}
                                      onClick={(e) => { e.stopPropagation(); setClaroSlide(i); }}
                                      className={`h-1.5 rounded-full transition-all ${i === claroSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'}`}
                                      aria-label={`Ir al slide ${i + 1}`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                       })()}
                    </Section>

                    {/* 7. Lecciones */}
                    <Section id="lessons" title="Lecciones Aprendidas" icon={Lightbulb}>
                       <div className={`${isSprintia ? 'bg-white/5 border-white/25/10' : isCandadosFlow ? 'bg-white/5 border-white/25/10' : isCandados ? 'bg-white/5 border-white/25/10' : isClaro ? 'bg-white/5 border-white/25/10' : 'bg-white/5 border-white/25/10'} p-8 rounded-2xl border backdrop-blur-sm relative overflow-hidden`}>
                          <p className="text-lg leading-relaxed opacity-90 relative z-10">
                            {isBegoApp ? "Aprendí que existen múltiples caminos para lograr un objetivo y que cada proyecto requiere metodologías diferentes. Es crucial diseñar aplicaciones nativas basándose en la investigación para evitar sesgos y tomar decisiones acertadas." :
                             isBegoWeb ? "Perder el miedo a diseñar directamente en alta fidelidad fue una decisión estratégica. Aunque conlleva riesgos, en cronogramas exigentes esta metodología demostró ser altamente funcional para cumplir los objetivos de negocio." :
                             isSprintia ? "Construir un ecosistema digital desde cero integrando tecnologías de vanguardia fue un desafío que validó mi perfil técnico-creativo. Sin embargo, la evaluación heurística representó el reto más crítico, exigiendo una auditoría profunda de las decisiones de diseño. Este proceso fortaleció mi criterio estratégico, enseñándome a priorizar la usabilidad objetiva sobre la estética y a transformar hallazgos en iteraciones que elevaron la madurez del producto." :
                             isCandadosFlow ? "La gestión de grandes volúmenes de datos en tiempo real exige una jerarquía visual impecable. Aprendí a equilibrar la densidad de información con la claridad operativa, asegurando que las alertas críticas nunca pasen desapercibidas." :
                             isCandados ? "Aprendí a capitalizar la madurez de un producto existente para saltar etapas de validación. La consistencia de la arquitectura de información de Bego fue clave para permitir una adaptación visual radical sin romper la experiencia." :
                             isClaro ? "Los datos de comportamiento no mienten: lo que parecía un problema de diseño visual resultó ser un error técnico bloqueando la conversión. Aprendí a no asumir causas antes de auditar, y a priorizar hallazgos por severidad e impacto real antes de proponer soluciones visuales." :
                             "Cada proyecto presenta desafíos únicos que fortalecen mi capacidad para resolver problemas de diseño de manera estratégica."}
                          </p>
                       </div>
                    </Section>

                    {/* 8. Enlaces */}
                    {!isCandados && (
                    <Section id="links" title="Enlaces Adicionales" icon={LinkIcon}>
                      {isSprintia ? (
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="relative">
                            <button onClick={() => setShowDemoAlert(true)} className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                              <Smartphone className="w-5 h-5" /> Prototipo
                            </button>
                            
                            <AnimatePresence>
                              {showDemoAlert && (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.9 }}
                                  className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                                  onClick={() => setShowDemoAlert(false)}
                                >
                                  <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-2xl" onClick={e => e.stopPropagation()}>
                                    <div className="flex items-center gap-3 mb-4">
                                      <Smartphone className="w-6 h-6 text-white/70" />
                                      <h3 className="text-xl font-medium text-white">Experiencia Móvil</h3>
                                    </div>
                                    <p className="text-white/80 leading-relaxed mb-6">
                                      Es recomendable previsualizar esta demo desde tu celular para apreciar correctamente la interacción y el diseño nativo.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                      <a
                                        href="https://wafer-font-69797136.figma.site"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setShowDemoAlert(false)}
                                        className="w-full py-3 bg-white text-black font-bold rounded-lg hover:opacity-90 transition-colors flex items-center justify-center gap-2"
                                      >
                                        Continuar a Demo <ArrowRight className="w-4 h-4" />
                                      </a>
                                      <button 
                                        onClick={() => setShowDemoAlert(false)}
                                        className="w-full py-3 bg-white/5 text-white/60 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                                      >
                                        Cancelar
                                      </button>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      ) : isBegoApp ? (
                         <div className="flex flex-col sm:flex-row gap-4 w-full">
                           <a 
                             href="https://bego.ai/es"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex-1 py-4 px-6 rounded-xl bg-white hover:bg-[#e6d600] text-black transition-all duration-300 text-sm font-bold shadow-[0_0_20px_rgba(255,238,0,0.15)] hover:shadow-[0_0_30px_rgba(255,238,0,0.3)] flex items-center justify-center gap-2"
                           >
                             Rediseño
                             <ArrowRight className="w-4 h-4" />
                           </a>
                         </div>
                      ) : (
                         <div className="flex flex-col sm:flex-row gap-4 w-full">
                           <a 
                             href={isBegoWeb ? "https://bego.ai/es" : "https://apps.apple.com/mx/app/bego-driver-busca-carga/id1549583488"}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex-1 py-4 px-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm font-medium text-white/70 hover:text-white flex items-center justify-center"
                           >
                             {isBegoWeb ? "Web anterior" : "App anterior"}
                           </a>
                           <button 
                             onClick={() => {
                                if (isBegoWeb || isHeyMovil) {
                                  window.open('https://bego.ai/es', '_blank');
                                } else {
                                  setIsDevModalOpen(true);
                                }
                              }}
                             className="flex-1 py-4 px-6 rounded-xl bg-white hover:bg-[#e6d600] text-black transition-all duration-300 text-sm font-bold shadow-[0_0_20px_rgba(255,238,0,0.15)] hover:shadow-[0_0_30px_rgba(255,238,0,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                           >
                             Re diseño
                             <ArrowRight className="w-4 h-4" />
                           </button>
                         </div>
                      )}
                    </Section>
                    )}

                  </div>
                </div>
              </div>

                    {/* Next Project Button */}
                    <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-24 pt-12 flex justify-end border-t border-white/10 mt-20">
                        <button
                            onClick={() => {
                                if (isCandados && !isCandadosFlow) {
                                    setGobiernoStep('candados');
                                    if (modalRef.current) modalRef.current.scrollTop = 0;
                                } else {
                                    onNext();
                                }
                            }}
                            className="group flex items-center gap-4 text-white transition-colors hover:text-white/80"
                        >
                            <div className="text-right">
                                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">Siguiente</span>
                                <span className="block text-xl font-bold">Proyecto</span>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:border-white group-hover:bg-white/10">
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Image Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all z-[210]"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={32} />
                </button>
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative w-full h-full flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ImageWithFallback 
                    src={selectedImage} 
                    alt="Preview" 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Development Modal */}
          <AnimatePresence>
            {isDevModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setIsDevModalOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  className="bg-[#111] border border-white/10 p-8 rounded-2xl max-w-md w-full text-center relative overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50"></div>
                    
                    <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/25/20">
                        {isBegoWeb ? <Sparkles className="w-8 h-8 text-white/70" /> : <GitBranch className="w-8 h-8 text-white/70" />}
                    </div>
                    
                    <h3 className="text-[1.25rem] font-medium text-white mb-2 text-[32px]">{isBegoWeb ? "Demo en Iteración" : "En Desarrollo"}</h3>
                    <p className="text-white/60 mb-8 leading-relaxed">
                        {isBegoWeb 
                          ? "Esta demostración se encuentra en un proceso de iteración activo por parte del equipo de desarrollo. Podrías encontrar actualizaciones en tiempo real mientras navegas."
                          : "Esta sección del proyecto se encuentra actualmente en proceso de construcción y refinamiento. Pronto estará disponible."}
                    </p>
                    
                    {isBegoWeb ? (
                        <div className="flex flex-col gap-3">
                            <a 
                                href="https://feature-new-interface-home.d2d2tvhzw8et7y.amplifyapp.com/es"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-[#e6d600] transition-colors flex items-center justify-center gap-2"
                                onClick={() => setIsDevModalOpen(false)}
                            >
                                Continuar a Demo <ArrowRight className="w-4 h-4" />
                            </a>
                            <button 
                                onClick={() => setIsDevModalOpen(false)}
                                className="w-full py-3 bg-white/5 text-white/60 font-medium rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                            >
                                Cancelar
                            </button>
                        </div>
                    ) : (
                        <button 
                            onClick={() => setIsDevModalOpen(false)}
                            className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            Entendido
                        </button>
                    )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
