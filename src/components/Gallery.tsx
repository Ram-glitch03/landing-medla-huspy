import { motion } from "motion/react";

const images = [
  {
    id: 1,
    src: "https://framerusercontent.com/images/z1VK2dJcAG6hokz7E5xKbNQgo4.png",
    alt: "Real estate 1",
    className: "col-span-1 row-span-2 h-[600px]"
  },
  {
    id: 2,
    src: "https://framerusercontent.com/images/5UJLjJbidnR6bksBFSZRWx3acg.png",
    alt: "Real estate 2",
    className: "col-span-2 row-span-1 h-[450px]"
  },
  {
    id: 3,
    src: "https://framerusercontent.com/images/z4iwXtxXaV8ujlB07yHcZebibs.png",
    alt: "Real estate 3",
    className: "col-span-1 row-span-1 h-[250px] mt-[-150px]"
  }
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-medium max-w-3xl mx-auto tracking-tight">
            Donde los sueños toman forma y los espacios cobran vida
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 h-[600px] rounded-3xl overflow-hidden"
          >
            <img 
              src="https://framerusercontent.com/images/z1VK2dJcAG6hokz7E5xKbNQgo4.png" 
              alt="Gallery 1" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-[450px] rounded-3xl overflow-hidden"
            >
              <img 
                src="https://framerusercontent.com/images/5UJLjJbidnR6bksBFSZRWx3acg.png" 
                alt="Gallery 2" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 h-[600px] rounded-3xl overflow-hidden"
          >
            <img 
              src="https://framerusercontent.com/images/z4iwXtxXaV8ujlB07yHcZebibs.png" 
              alt="Gallery 3" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
