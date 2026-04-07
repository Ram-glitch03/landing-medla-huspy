import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              id="menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="font-display text-2xl font-bold tracking-tighter" id="logo">
              HUSPY <span className="text-accent">-</span> MEDLA
            </a>
          </div>

          <div className="flex items-center">
            <a 
              href="#contact" 
              className="bg-navy text-white px-6 py-2.5 rounded-full font-medium hover:bg-gold hover:text-navy transition-colors"
              id="contact-btn"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "-100%" }
        }}
        className="fixed inset-0 top-20 bg-cream z-40 p-6"
      >
        <nav className="flex flex-col gap-6 text-4xl font-display font-medium">
          <a href="/" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Inicio</a>
          <a href="#property" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Propiedades</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Nosotros</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Proyectos</a>
          <a href="#blog" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Blog</a>
        </nav>
      </motion.div>
    </header>
  );
}
