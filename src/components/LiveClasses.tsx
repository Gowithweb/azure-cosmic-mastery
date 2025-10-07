import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Video, Clock, PlayCircle } from "lucide-react";

export const LiveClasses = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            🎥 Live & Recorded <span className="gradient-text">Classes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Learn live or watch recordings anytime, anywhere
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass p-8 h-full glow-azure hover:scale-105 transition-all">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6"
                >
                  <Video className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">Live Classes</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Interactive sessions with real-time doubt clearing
                </p>
                <div className="flex items-center gap-2 text-accent">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Mon-Fri, 7 PM IST</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass p-8 h-full glow-cyan hover:scale-105 transition-all">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-6"
                >
                  <PlayCircle className="w-12 h-12 text-accent" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">Recordings Available</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Access all class recordings 24x7 for lifetime
                </p>
                <div className="flex items-center gap-2 text-accent">
                  <PlayCircle className="w-5 h-5" />
                  <span className="font-semibold">24x7 Access</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Zoom Integration Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Card className="glass p-6 inline-block">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-xl">Powered by Zoom</div>
                <div className="text-muted-foreground">
                  High-quality video conferencing for seamless learning
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
