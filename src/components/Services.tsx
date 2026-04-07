import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Corretaje Inmobiliario",
    description: "Búsqueda personalizada de propiedades de lujo que se ajusten a sus necesidades específicas, con acceso a listados exclusivos 'off-market'.",
    image: "https://framerusercontent.com/images/feGoGWRofaN0PXLOIth36ks.jpg"
  },
  {
    id: 2,
    title: "Due Diligence Legal",
    description: "Auditoría exhaustiva de la situación jurídica de la propiedad, verificando títulos, gravámenes y cumplimiento de normativas locales.",
    image: "https://framerusercontent.com/images/MX6Fscor2B5r57kBYw3Q5q3wtA.jpg"
  },
  {
    id: 3,
    title: "Negociación de Contratos",
    description: "Representación legal experta en la negociación de términos contractuales para asegurar las mejores condiciones y protección para nuestros clientes.",
    image: "https://framerusercontent.com/images/CVhrbSi8wnpthDDgRVL57SM0Jig.jpg"
  },
  {
    id: 4,
    title: "Administración de Propiedades",
    description: "Gestión integral de activos inmobiliarios, desde el mantenimiento hasta la optimización de rentas y cumplimiento fiscal.",
    image: "https://framerusercontent.com/images/nW1kk44CQdv040rogSmrewcnr6A.jpg"
  },
  {
    id: 5,
    title: "Litigios y Resolución de Conflictos",
    description: "Defensa legal especializada en disputas inmobiliarias, posesiones y resolución de conflictos contractuales complejos.",
    image: "https://framerusercontent.com/images/K8UI7tzL5EeQEIfPWWEc2ntd68.jpg"
  }
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-display font-semibold mb-16 tracking-tight max-w-3xl text-navy">
          Asegurando que tenga todos los servicios necesarios para su proyecto
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-2">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                onMouseEnter={() => setActive(index)}
                className={`p-8 rounded-3xl cursor-pointer transition-all duration-500 border ${active === index ? 'bg-navy text-white border-navy shadow-xl' : 'bg-white text-body border-muted hover:border-navy/20'}`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-display font-medium">{service.title}</h3>
                  <ArrowUpRight size={24} className={active === index ? 'text-accent' : 'text-black/20'} />
                </div>
                <AnimatePresence mode="wait">
                  {active === index && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-white/70 leading-relaxed"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="sticky top-32">
            <motion.div 
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img 
                src={services[active].image} 
                alt={services[active].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
