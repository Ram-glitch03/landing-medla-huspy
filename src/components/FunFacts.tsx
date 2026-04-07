import { motion } from "motion/react";
import { Play, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Miembros del Equipo", value: "25+" },
  { label: "Años de Experiencia", value: "14" },
  { label: "Reseñas de Clientes", value: "4.9" },
  { label: "Clientes Felices", value: "2K" }
];

export default function FunFacts() {
  return (
    <section className="py-24 bg-white" id="fun-facts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-video group cursor-pointer"
          >
            <img 
              src="https://framerusercontent.com/images/5kRJEYuFVRuEzoFp55sO37GYEZ8.png" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play size={32} fill="black" />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-navy">
              Diseñe el espacio de sus sueños. Reserve una consulta con nuestros expertos.
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gold text-navy px-10 py-4 rounded-full font-medium hover:bg-navy hover:text-white transition-colors">
                Contáctanos
              </button>
              <button className="bg-cream text-navy border border-muted px-10 py-4 rounded-full font-medium hover:bg-muted transition-colors">
                Explorar Proyectos
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-cream p-8 md:p-12 rounded-3xl border border-muted flex flex-col justify-between h-64"
            >
              <h3 className="text-xl font-medium text-black/60">{stat.label}</h3>
              <div className="text-5xl md:text-7xl font-bold tracking-tighter">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
