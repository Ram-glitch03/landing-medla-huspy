import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import PropertyModal from "./PropertyModal";

const slides = [
  {
    id: 1,
    title: "Residencias de Lujo Verificadas",
    location: "California, EE. UU.",
    price: "$6,700,000",
    description: "Cada propiedad en nuestra cartera se somete a una rigurosa auditoría legal por parte de MEDLA, garantizando una inversión segura para su tranquilidad.",
    image: "https://framerusercontent.com/images/p5BN4cVTeyjLTQq8xMuouj85684.jpg",
    country: "EE. UU.",
    beds: 5,
    baths: 4,
    sqft: 4500
  },
  {
    id: 2,
    title: "Seguridad en Inversión Comercial",
    location: "Nueva York, EE. UU.",
    price: "$4,500,000",
    description: "Nos especializamos en transacciones comerciales complejas, brindando cobertura legal completa y posicionamiento estratégico en el mercado inmobiliario.",
    image: "https://framerusercontent.com/images/kOrazeXaLileMgcDNpNUeKTms.jpg",
    country: "EE. UU.",
    beds: 3,
    baths: 2,
    sqft: 2800
  },
  {
    id: 3,
    title: "Derecho de Desarrollo Sostenible",
    location: "California, EE. UU.",
    price: "$2,800,000",
    description: "Nuestros proyectos integran lo último en diseño sostenible con un marco legal robusto para una viabilidad a largo plazo.",
    image: "https://framerusercontent.com/images/gbziiPbMHhTmBmsVTSO7IA4t1Q.jpg",
    country: "EE. UU.",
    beds: 4,
    baths: 3,
    sqft: 3200
  }
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  const openModal = (property: any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-white" id="property">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl group shadow-2xl">
          <motion.div 
            className="flex h-full"
            animate={{ x: `-${current * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full h-full relative">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 md:p-16 text-white">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-sm uppercase tracking-widest mb-2 font-medium bg-gold text-navy w-fit px-3 py-1 rounded-full">
                      <ShieldCheck size={16} /> Verificado por MEDLA
                    </div>
                    <span className="text-sm uppercase tracking-widest mb-2 block font-medium opacity-80">{slide.location}</span>
                    <h2 className="text-4xl md:text-6xl font-display font-medium mb-4 tracking-tight">{slide.title}</h2>
                    <p className="text-lg opacity-90 mb-6 line-clamp-2 max-w-xl">{slide.description}</p>
                    <div className="flex items-center gap-6">
                      <span className="text-3xl font-bold text-white">{slide.price}</span>
                      <button 
                        onClick={() => openModal(slide)}
                        className="bg-white text-navy px-10 py-4 rounded-full font-medium hover:bg-gold hover:text-navy transition-all transform hover:scale-105"
                      >
                        Ver Propiedad
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Controls */}
          <div className="absolute bottom-8 right-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 left-8 flex gap-2">
            {slides.map((_, i) => (
              <div 
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-12 bg-white' : 'w-4 bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <PropertyModal 
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
