import { Facebook, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="flex flex-col gap-8">
            <a href="/" className="font-display text-4xl font-bold tracking-tighter">
              HUSPY <span className="text-accent">-</span> MEDLA
            </a>
            <p className="text-xl text-white/60 max-w-md leading-relaxed">
              Una alianza estratégica que brinda soluciones inmobiliarias premium con seguridad legal integral. Su inversión, nuestra prioridad.
            </p>
            <div className="flex gap-4">
              {[Facebook, Github, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <h4 className="text-lg font-bold">Páginas</h4>
              <nav className="flex flex-col gap-4 text-white/60 font-medium">
                <a href="/" className="hover:text-white transition-colors">Inicio</a>
                <a href="#property" className="hover:text-white transition-colors">Propiedades</a>
                <a href="#blog" className="hover:text-white transition-colors">Blog</a>
                <a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-lg font-bold">Empresa</h4>
              <nav className="flex flex-col gap-4 text-white/60 font-medium">
                <a href="#about" className="hover:text-white transition-colors">Nosotros</a>
                <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
                <a href="#reviews" className="hover:text-white transition-colors">Reseñas</a>
                <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
              </nav>
            </div>
            <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
              <h4 className="text-lg font-bold">Contacto</h4>
              <div className="flex flex-col gap-4 text-white/60 font-medium">
                <a href="mailto:hello@arcadia.com" className="hover:text-white transition-colors italic">hola@huspymedla.com</a>
                <a href="tel:+0123456789" className="hover:text-white transition-colors italic">+0123456789</a>
                <button className="bg-gold text-navy px-8 py-3 rounded-full font-medium hover:bg-white hover:text-navy transition-all w-fit mt-4">
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-medium">
          <div className="flex items-center gap-2">
            <span>© 2026</span>
            <span>-</span>
            <span>Desarrollado con Framer</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
          <div>
            Con 💛 por <a href="#" className="text-gold hover:text-white transition-colors">Avanzza AI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
