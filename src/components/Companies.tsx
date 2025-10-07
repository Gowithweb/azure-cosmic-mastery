import { motion } from "framer-motion";

const companies = [
  "Microsoft",
  "Accenture",
  "Infosys",
  "TCS",
  "Tech Mahindra",
  "HCL",
  "Capgemini",
  "Cognizant",
  "AWS",
];

export const Companies = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse-slow">
            💼✨ Employees Who Learn <span className="gradient-text">With Us</span> 🌟🎓
          </h2>
          <p className="text-xl text-muted-foreground">
            🌍 Students from top companies trust our training 🚀
          </p>
        </motion.div>

        {/* Infinite Scroll Animation */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-12 items-center"
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <motion.div
                  key={index}
                  className="glass px-8 py-6 rounded-2xl min-w-[250px] text-center glow-rainbow animate-glow-rainbow hover:scale-110 transition-all"
                  whileHover={{ scale: 1.15, rotate: 3 }}
                >
                  <span className="text-2xl font-bold gradient-text">
                    ⭐ {company} ✨
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
