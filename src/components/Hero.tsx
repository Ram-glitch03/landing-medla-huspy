import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 overflow-hidden bg-cream" id="hero">
      <div className="flex flex-col gap-4">
        {/* Ticker Top */}
        <div className="ticker-container py-4 border-y border-muted">
          <div className="ticker-content flex gap-8 whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <h1 key={i} className="text-3xl md:text-5xl font-display font-medium uppercase tracking-tight">
                Compra con Cero Riesgos Legales <span className="text-accent">•</span> Excelencia Inmobiliaria <span className="text-accent">•</span>
              </h1>
            ))}
          </div>
        </div>

        {/* Ticker Bottom */}
        <div className="ticker-container py-3 border-b border-muted">
          <div className="ticker-content flex gap-8 whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
            {[...Array(10)].map((_, i) => (
              <h1 key={i} className="text-3xl md:text-5xl font-display font-medium uppercase tracking-tight">
                Alianza Huspy & MEDLA <span className="text-accent">•</span> Tu Inversión Blindada <span className="text-accent">•</span>
              </h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
