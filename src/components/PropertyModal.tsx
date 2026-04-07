import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, Bed, Bath, Square, ShieldCheck } from "lucide-react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  description: string;
  image: string;
  country: string;
  beds?: number;
  baths?: number;
  sqft?: number;
}

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white z-20 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                  <ShieldCheck size={16} /> Verificado por MEDLA
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 text-black/60 font-medium mb-2">
                    <MapPin size={18} />
                    <span>{property.location}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-4">
                    {property.title}
                  </h2>
                  <div className="text-3xl font-bold text-accent">
                    {property.price}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-muted">
                  <div className="flex flex-col items-center gap-1">
                    <Bed size={20} className="text-black/40" />
                    <span className="font-bold">{property.beds || 4}</span>
                    <span className="text-xs text-black/40 uppercase font-bold tracking-wider">Hab.</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Bath size={20} className="text-black/40" />
                    <span className="font-bold">{property.baths || 3}</span>
                    <span className="text-xs text-black/40 uppercase font-bold tracking-wider">Baños</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Square size={20} className="text-black/40" />
                    <span className="font-bold">{property.sqft || 3200}</span>
                    <span className="text-xs text-black/40 uppercase font-bold tracking-wider">m²</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-bold uppercase tracking-widest text-sm text-black/40">Descripción</h3>
                  <p className="text-black/60 leading-relaxed">
                    {property.description} Esta propiedad ha sido sometida a una auditoría legal exhaustiva por MEDLA, asegurando que todos los títulos de propiedad, permisos de construcción y gravámenes estén en orden para una transferencia sin problemas.
                  </p>
                </div>

                <div className="mt-auto pt-6 flex gap-4">
                  <button className="flex-1 bg-black text-white py-4 rounded-full font-medium hover:bg-black/80 transition-colors">
                    Solicitar Información
                  </button>
                  <button className="flex-1 border border-black py-4 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                    Agendar Visita
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
