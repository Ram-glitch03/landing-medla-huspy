import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "La importancia del Due Diligence en el sector inmobiliario de lujo",
    author: "Equipo Legal MEDLA",
    date: "9 de enero, 2026",
    image: "https://framerusercontent.com/images/hbykQkmfNuQ22d4eztW1Ysy5mTU.jpg"
  },
  {
    id: 2,
    title: "Cómo Huspy y MEDLA aseguran su inversión inmobiliaria",
    author: "Estrategia Huspy",
    date: "5 de septiembre, 2025",
    image: "https://framerusercontent.com/images/2M9pyXYdBI8HVYJWuDyHYJweKOU.jpg"
  },
  {
    id: 3,
    title: "Nueva Construcción: Marcos Legales y Tendencias de Diseño",
    author: "Editorial Conjunta",
    date: "15 de abril, 2026",
    image: "https://framerusercontent.com/images/PKk81QDLkOfTlkGsO80vOz4.jpg"
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-navy">
            Transformando ideas audaces en realidades tangibles
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Convertir visiones innovadoras en proyectos terminados es un viaje de creatividad, estrategia y precisión. Todo comienza con un sueño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer border border-muted rounded-3xl overflow-hidden bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-medium mb-4 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-black/60 font-medium">
                  <span>{post.author}</span>
                  <div className="w-1 h-1 rounded-full bg-muted"></div>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="#all-blog" 
            className="flex items-center gap-2 bg-navy text-white px-10 py-4 rounded-full font-medium hover:bg-gold hover:text-navy transition-colors"
          >
            Ver Todo el Blog <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
