import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Bed, Bath, Square, ShieldCheck, ArrowUpRight } from "lucide-react";
import PropertyModal from "./PropertyModal";

const properties = [
  {
    id: 4,
    title: "Villa Marítima Moderna",
    location: "Malibú, California",
    price: "$8,250,000",
    description: "Una obra maestra de la arquitectura moderna con vistas panorámicas al océano. Esta villa cuenta con acabados de la más alta calidad y un sistema de seguridad de última generación.",
    image: "https://framerusercontent.com/images/WOPbNEoVwVBEZSxKioaHVQsRw.jpg",
    country: "EE. UU.",
    beds: 6,
    baths: 5,
    sqft: 5800
  },
  {
    id: 5,
    title: "Penthouse en el Centro",
    location: "Manhattan, Nueva York",
    price: "$3,900,000",
    description: "Lujo urbano en su máxima expresión. Este penthouse ofrece vistas inigualables del skyline de la ciudad y acceso a servicios exclusivos del edificio.",
    image: "https://framerusercontent.com/images/gWgrVaTFFvESDa44lIJ2TQBiNs.jpg",
    country: "EE. UU.",
    beds: 3,
    baths: 3,
    sqft: 2400
  },
  {
    id: 6,
    title: "Retiro en la Montaña",
    location: "Aspen, Colorado",
    price: "$5,100,000",
    description: "El refugio perfecto para los amantes de la naturaleza. Esta propiedad combina el encanto rústico con todas las comodidades modernas en un entorno privado.",
    image: "https://framerusercontent.com/images/UzvG2ClQ4lZNxQ3AdSesEvjGpA.jpg",
    country: "EE. UU.",
    beds: 4,
    baths: 4,
    sqft: 3600
  },
  {
    id: 7,
    title: "Residencia Azure",
    location: "Miami, Florida",
    price: "$2,450,000",
    description: "Diseño contemporáneo y elegancia tropical. Esta residencia en Miami es ideal para quienes buscan un estilo de vida vibrante y sofisticado.",
    image: "https://framerusercontent.com/images/mDvr4fdOsRdnlgMn61AeeQmibA.jpg",
    country: "EE. UU.",
    beds: 3,
    baths: 2,
    sqft: 2100
  },
  {
    id: 8,
    title: "Mansión Clásica",
    location: "Bel Air, California",
    price: "$12,500,000",
    description: "Elegancia atemporal con jardín privado tipo parque. Un refugio exclusivo con acabados en mármol y detalles arquitectónicos históricos.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    country: "EE. UU.",
    beds: 8,
    baths: 10,
    sqft: 12000
  },
  {
    id: 9,
    title: "Lote Frente al Mar",
    location: "Ibiza, España",
    price: "€6,200,000",
    description: "Paraíso mediterráneo con muelle privado. Disfruta de la máxima privacidad con acceso exclusivo a calas escondidas.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    country: "España",
    beds: 5,
    baths: 6,
    sqft: 4500
  },
  {
    id: 10,
    title: "Eco-Villa Contemporánea",
    location: "Tulum, México",
    price: "$1,850,000",
    description: "Un diseño autosustentable entre la selva y el mar. Acabados de chukum, paneles solares y piscinas privadas integradas a la naturaleza.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    country: "México",
    beds: 4,
    baths: 4,
    sqft: 3200
  },
  {
    id: 11,
    title: "Apartamento Smart-Home",
    location: "Dubai, EAU",
    price: "$4,200,000",
    description: "Controla toda tu vivienda desde tu smartphone. Vistas al Burj Khalifa con interiorismo firmado por diseñadores italianos.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    country: "EAU",
    beds: 3,
    baths: 4,
    sqft: 2800
  }
];

export default function PropertiesGrid() {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (property: any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-muted/30" id="properties-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4 text-navy">
              Propiedades Destacadas
            </h2>
            <p className="text-xl text-black/60 max-w-2xl">
              Explora nuestra selección exclusiva de propiedades, todas con el respaldo legal de MEDLA para garantizar tu inversión.
            </p>
          </div>
          <button className="flex items-center gap-2 text-lg font-medium hover:text-gold transition-colors border-b border-navy pb-1 text-navy">
            Ver Catálogo Completo <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-muted"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <ShieldCheck size={14} className="text-accent" /> Verificado
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 text-black/40 text-sm font-medium mb-2">
                  <MapPin size={14} />
                  <span>{property.location}</span>
                </div>
                <h3 className="text-xl font-display font-medium mb-4 group-hover:text-accent transition-colors">
                  {property.title}
                </h3>

                <div className="flex justify-between items-center py-4 border-y border-muted mb-6">
                  <div className="flex items-center gap-1">
                    <Bed size={16} className="text-black/40" />
                    <span className="text-sm font-bold">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} className="text-black/40" />
                    <span className="text-sm font-bold">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square size={16} className="text-black/40" />
                    <span className="text-sm font-bold">{property.sqft}m²</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-accent">{property.price}</span>
                  <button
                    onClick={() => openModal(property)}
                    className="p-2 rounded-full border border-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
