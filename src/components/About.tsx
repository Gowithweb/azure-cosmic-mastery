import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="glass p-8 md:p-12 glow-rainbow animate-glow-rainbow">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar Section */}
              <div className="flex-shrink-0">
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 via-purple-500 to-cyan-400 p-1 glow-gold animate-spin-slow"
                >
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-7xl animate-bounce-slow">👨‍💻✨</span>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  👨‍🏫✨ About the <span className="gradient-text">Instructor</span> 🌟
                </h2>
                <h3 className="text-2xl font-semibold gradient-text-gold mb-4">
                  Bharath Reddy 🎓
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Hi, I'm Bharath Reddy, a Cloud ☁️ & DevOps Professional helping{" "}
                  <span className="gradient-text-purple font-semibold">
                    <Users className="inline-block w-5 h-5" /> 10,000+ students 🎓
                  </span>{" "}
                  transform their careers 🚀.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Learn Azure DevOps the practical way with{" "}
                  <span className="gradient-text-gold font-semibold">hands-on labs 🔬</span>,{" "}
                  <span className="gradient-text-purple font-semibold">real projects 📊</span>, and{" "}
                  <span className="gradient-text font-semibold">industry-ready pipelines ⚙️</span>.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <motion.div className="glass p-4 rounded-xl text-center glow-gold" whileHover={{ scale: 1.1, rotate: 5 }}>
                    <div className="text-3xl font-bold gradient-text">10K+ 🎓</div>
                    <div className="text-sm text-muted-foreground">Students</div>
                  </motion.div>
                  <motion.div className="glass p-4 rounded-xl text-center glow-purple" whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="text-3xl font-bold gradient-text">8 ⏱️</div>
                    <div className="text-sm text-muted-foreground">Weeks</div>
                  </motion.div>
                  <motion.div className="glass p-4 rounded-xl text-center glow-cyan" whileHover={{ scale: 1.1, rotate: 5 }}>
                    <div className="text-3xl font-bold gradient-text">100% 🚀</div>
                    <div className="text-sm text-muted-foreground">Practical</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
