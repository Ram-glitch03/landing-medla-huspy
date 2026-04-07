import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Palms at Riverfront",
    category: "Auditoría Legal y Adquisición Inmobiliaria",
    description: "Gestión integral de la adquisición de un complejo residencial de lujo, incluyendo la auditoría de títulos y la estructuración legal de la compraventa.",
    image: "https://framerusercontent.com/images/WOPbNEoVwVBEZSxKioaHVQsRw.jpg",
    size: "small"
  },
  {
    id: 2,
    title: "Harborview Lofts",
    category: "Estructuración Contractual y Ventas",
    description: "Desarrollo de marcos contractuales para ventas en preventa y gestión de la comercialización exclusiva de lofts industriales rehabilitados.",
    image: "https://framerusercontent.com/images/gWgrVaTFFvESDa44lIJ2TQBiNs.jpg",
    size: "large"
  },
  {
    id: 3,
    title: "Building Wealth with Commercial",
    category: "Derecho Inmobiliario Corporativo",
    description: "Asesoría legal estratégica para fondos de inversión en la adquisición de activos comerciales de alto rendimiento en zonas premium.",
    image: "https://framerusercontent.com/images/UzvG2ClQ4lZNxQ3AdSesEvjGpA.jpg",
    size: "large"
  },
  {
    id: 4,
    title: "Azure Park",
    category: "Cumplimiento de Uso de Suelo y Zonificación",
    description: "Gestión de permisos y cumplimiento normativo para un desarrollo residencial sostenible, asegurando la viabilidad legal del proyecto.",
    image: "https://framerusercontent.com/images/mDvr4fdOsRdnlgMn61AeeQmibA.jpg",
    size: "small"
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-xl tracking-tight text-navy">
            Proyectos Estratégicos con Propósito
          </h2>
          <a 
            href="#all-projects" 
            className="flex items-center gap-2 text-lg font-medium hover:text-gold transition-colors border-b border-navy pb-1 text-navy"
          >
            Ver Todos los Proyectos <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer relative rounded-3xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                  <span className="text-sm font-bold uppercase tracking-widest text-accent mb-2">{project.category}</span>
                  <h3 className="text-3xl font-display font-medium mb-4">{project.title}</h3>
                  <p className="text-white/80 line-clamp-3 mb-6">{project.description}</p>
                  <div className="flex items-center gap-2 font-medium border-b border-white w-fit pb-1">
                    Ver Detalles <ArrowUpRight size={18} />
                  </div>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
