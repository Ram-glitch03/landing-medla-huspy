import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-12">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-navy">
              La Sinergia Perfecta entre Inmobiliaria y Derecho
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden aspect-[4/5] shadow-lg transition-transform duration-500"
            >
              <img
                src="https://framerusercontent.com/images/uwKyXOBa9EjDrGWKztRHFPlNdM.png"
                alt="Colaboración"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="flex flex-col gap-8">
              <p className="text-xl text-black/60 leading-relaxed font-sans">
                Huspy y MEDLA unen fuerzas para ofrecer una experiencia única en el mercado inmobiliario. Combinamos la búsqueda de su propiedad ideal con la certeza legal absoluta que solo un despacho especializado puede brindar. Maximizamos el valor mientras minimizamos los riesgos.
              </p>

              <div className="flex items-center gap-12 py-8 border-t border-muted">
                <div>
                  <div className="text-5xl font-display font-bold mb-2 text-navy">100%</div>
                  <div className="text-black/60 font-medium uppercase tracking-wider text-sm">Certeza Legal</div>
                </div>
                <div className="w-px h-16 bg-muted"></div>
                <div>
                  <div className="text-5xl font-display font-bold mb-2 text-navy">24/7</div>
                  <div className="text-black/60 font-medium uppercase tracking-wider text-sm">Soporte Experto</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:pt-32">
            <p className="text-xl leading-relaxed font-sans text-black/70">
              Nuestra colaboración asegura que cada paso de su viaje inmobiliario, desde la búsqueda inicial hasta el contrato final, esté respaldado por expertos legales. Gestionamos auditorías, negociación de contratos y blindamos su inversión con total precisión y transparencia.
            </p>

            <a
              href="https://medla-asesores.com/agenda-tu-cita/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-full font-bold hover:bg-gold hover:text-navy transition-all duration-300 w-fit hover:scale-105 active:scale-95 shadow-md"
            >
              Conoce al Equipo
            </a>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg transition-transform duration-500"
            >
              <img
                src="https://framerusercontent.com/images/EDUhKLQaifbt7f9tQldLAajp1I.jpg"
                alt="About Us 2"
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
