import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo garantiza MEDLA la seguridad de mi inversión?",
    answer: "MEDLA realiza una auditoría legal exhaustiva (due diligence) de cada propiedad antes de que entre en nuestra cartera. Verificamos la validez de los títulos, la ausencia de gravámenes ocultos y el cumplimiento de todas las normativas urbanísticas."
  },
  {
    question: "¿Qué servicios incluye la colaboración Huspy & MEDLA?",
    answer: "Ofrecemos un servicio integral que combina el corretaje inmobiliario premium de Huspy con la asesoría legal especializada de MEDLA. Esto incluye búsqueda de propiedades, negociación de contratos, gestión de trámites notariales y administración post-venta."
  },
  {
    question: "¿Puedo comprar una propiedad si soy extranjero?",
    answer: "Sí, nuestro equipo legal se especializa en transacciones internacionales y le guiará a través de todos los requisitos legales y fiscales necesarios para que su compra sea segura y transparente, independientemente de su nacionalidad."
  },
  {
    question: "¿Cuánto tiempo toma el proceso de auditoría legal?",
    answer: "Generalmente, una auditoría estándar toma entre 5 y 10 días hábiles, dependiendo de la complejidad de la propiedad y la rapidez de respuesta de las instituciones públicas. Nuestro objetivo es la máxima celeridad sin comprometer la seguridad."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-navy">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-black/60">
            Todo lo que necesita saber sobre nuestra alianza y cómo protegemos su patrimonio.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-muted rounded-3xl overflow-hidden transition-all duration-300 hover:border-black/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex justify-between items-center text-left"
              >
                <span className="text-xl font-display font-medium">{faq.question}</span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-navy text-white' : 'bg-muted text-body'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-black/60 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
