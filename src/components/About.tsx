import { motion } from 'motion/react';
import svgPaths from '../imports/svg-q4myeocbke';
import { toast } from 'sonner@2.0.3';
import Group1 from '../imports/Group10469';
import ShapeBlur from './ShapeBlur/ShapeBlur';

export function About() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('fernandotellezvelasco@gmail.com');
    toast.success('Correo copiado al portapapeles');
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[896px] w-full"
      >
        {/* Header Section */}
        <div className="relative mb-12 md:mb-16 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3 md:mb-4"
          >
            <p className="uppercase tracking-[0.2em] md:tracking-[0.26em] text-[0.75rem] md:text-[1rem]">
              Sobre mí
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-[0.875rem] md:text-[1rem] tracking-tight">
              Creando experiencias digitales que inspiran
            </p>
          </motion.div>
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 md:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-8 md:gap-12 items-start">
            {/* Profile Image */}
            <div className="w-[290px] h-[453px] mx-auto md:mx-0 relative">
              <Group1 />
              <div className="absolute inset-0 pointer-events-none">
                <ShapeBlur
                  variation={0}
                  pixelRatioProp={typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1}
                  shapeSize={2.0}
                  roundness={0.5}
                  borderSize={0.06}
                  circleSize={0.31}
                  circleEdge={1.2}
                />
              </div>
            </div>
            
            {/* Bio Text */}
            <div className="max-w-[672px]">
              {/* Header - only visible on desktop */}
              <div className="hidden md:block mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-3 md:mb-4"
                >
                  <p className="uppercase tracking-[0.2em] md:tracking-[0.26em] text-[0.75rem] md:text-[1rem]">
                    Sobre mí
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p className="text-[0.875rem] md:text-[1rem] tracking-tight">
                    Creando experiencias digitales que inspiran
                  </p>
                </motion.div>
              </div>

              <div className="mb-4 md:mb-6">
                <p className="leading-relaxed text-[0.875rem] md:text-[1rem]">
                  Mi nombre es Fernando Téllez. A mis 29 años, me especializo en crear productos digitales y experiencias visuales con propósito. Mi enfoque se centra exclusivamente en el usuario, transformando ideas en soluciones empáticas y funcionales que van más allá de la pantalla para resolver necesidades reales y conectar genuinamente con las personas.
                </p>
              </div>
              <div>
                <p className="leading-relaxed text-[0.875rem] md:text-[1rem]">
                  Mi enfoque combina pensamiento estratégico con ejecución creativa, asegurando que cada proyecto entregue tanto excelencia estética como resultados medibles.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Credentials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Experiencia Column */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="opacity-50 uppercase tracking-[0.15em] md:tracking-[0.16em] text-[0.75rem] md:text-[1rem]">
                Experiencia
              </div>
              <div className="flex flex-col gap-2 opacity-80 text-[0.875rem] md:text-[1rem]">
                <p>Diseño Web</p>
                <p>Apps Móviles</p>
                <p>Estrategia de Producto</p>
                <p>Identidad de Marca</p>
                <p>Diseño gráfico</p>
                <p>Animación</p>
              </div>
            </div>

            {/* Industrias Column */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="opacity-50 uppercase tracking-[0.15em] md:tracking-[0.16em] text-[0.75rem] md:text-[1rem]">
                Industrias
              </div>
              <div className="flex flex-col gap-2 opacity-80 text-[0.875rem] md:text-[1rem]">
                <p>Tecnología</p>
                <p>Deporte</p>
                <p>Productos comerciales</p>
                <p>Diseño</p>
                <p>Logistica</p>
              </div>
            </div>

            {/* Logros Column */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="opacity-50 uppercase tracking-[0.15em] md:tracking-[0.16em] text-[0.75rem] md:text-[1rem]">
                Logros
              </div>
              <div className="flex flex-col gap-2 opacity-80 text-[0.875rem] md:text-[1rem]">
                <p>Certificado en marketing digital por Google Actívate</p>
                <p>Certificado en Udemi UX/UI Design</p>
                <p>Certificado por Google en UX/UI Design por COURSERA</p>
                <p>Licenciatura en diseño Gráfico en Universidad Tecnologica de Mexico</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 md:pt-12"
        >
          <div className="mb-4 md:mb-6 opacity-50 uppercase tracking-[0.15em] md:tracking-[0.16em] text-[0.75rem] md:text-[1rem]">
            Colaboremos
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleCopyEmail}
              className="relative w-full md:w-auto px-6 py-4 md:px-8 md:py-4 border border-white/30 hover:border-white/60 transition-colors group flex items-center gap-3 md:gap-4"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                <g>
                  <path d={svgPaths.p24d83580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.pd919a80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </g>
              </svg>
              <span className="lowercase text-[0.8rem] md:text-[1rem] truncate">
                fernandotellezvelasco@gmail.com
              </span>
            </button>
            
            <a
              href="tel:+525558181905"
              className="relative w-full md:w-auto px-6 py-4 md:px-8 md:py-4 border border-white/30 hover:border-white/60 transition-colors group flex items-center gap-3 md:gap-4"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                <path d="M18.3337 14.1V16.6C18.3349 16.832 18.2873 17.0617 18.1939 17.2744C18.1006 17.487 17.9637 17.678 17.7924 17.8349C17.6211 17.9918 17.4191 18.1112 17.1994 18.1855C16.9797 18.2599 16.7469 18.2876 16.517 18.2667C13.9522 17.988 11.4892 17.1118 9.32533 15.7083C7.31237 14.4288 5.60437 12.7208 4.32533 10.7083C2.91699 8.53426 2.04073 6.05908 1.767 3.48334C1.74615 3.25409 1.77367 3.02201 1.84763 2.80298 1.92159 2.58395 2.04038 2.38239 2.19637 2.21163C2.35237 2.04087 2.54251 1.90418 2.75439 1.81094C2.96627 1.7177 3.19515 1.66991 3.42699 1.67001H5.92699C6.32952 1.66598 6.72115 1.80688 7.02812 2.06542C7.33509 2.32397 7.53517 2.68304 7.59199 3.07501C7.69778 3.85952 7.89025 4.62881 8.16699 5.37501C8.28056 5.68024 8.30154 6.01425 8.22709 6.33268C8.15263 6.65112 7.98614 6.93953 7.75033 7.16667L6.68366 8.23334C7.85916 10.3216 9.51207 11.9745 11.6003 13.15L12.667 12.0833C12.8941 11.8475 13.1825 11.681 13.501 11.6066C13.8194 11.5321 14.1534 11.5531 14.4587 11.6667C15.2049 11.9434 15.9741 12.1359 16.7587 12.2417C17.1555 12.2988 17.5186 12.5033 17.7782 12.8165C18.0378 13.1297 18.176 13.5286 18.167 13.9375" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
              </svg>
              <span className="text-[0.8rem] md:text-[1rem]">
                55 5818 1905
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}