import { motion } from "framer-motion";
import { Cloud, Rocket } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Brand */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Cloud className="w-10 h-10 text-primary" />
              <span className="text-3xl font-bold gradient-text">
                Azure DevOps Academy
              </span>
            </div>
            <p className="text-lg text-muted-foreground italic">
              Empowering DevOps Engineers for the Future Cloud{" "}
              <span className="inline-block">☁️✨</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#courses" className="text-muted-foreground hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-muted-foreground">
              © 2025 Azure DevOps Academy by{" "}
              <span className="text-primary font-semibold">Bharath Reddy</span>{" "}
              | All Rights Reserved
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Rocket className="w-4 h-4 text-accent" />
              <span>Built with passion for DevOps learners worldwide</span>
            </div>
          </div>

          {/* Tech Stack Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full">
              <span className="text-xs text-muted-foreground">Powered by</span>
              <span className="text-sm font-semibold gradient-text">
                React • Three.js • Tailwind
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};
