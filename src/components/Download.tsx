import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, FileText, Calendar } from "lucide-react";

export const Download = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass p-8 md:p-12 text-center glow-azure">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto glow-azure">
                <FileText className="w-12 h-12 text-primary" />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              📘 Course <span className="gradient-text">Syllabus</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download the complete Azure DevOps Course Topics (PDF) and get daily
              class PDFs and notes automatically
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 glow-cyan hover:scale-105 transition-transform"
              >
                <DownloadIcon className="mr-2" />
                Download Full Syllabus
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 glass border-accent/50 hover:bg-accent/10 hover:scale-105 transition-transform"
              >
                <Calendar className="mr-2" />
                Get Daily Notes
              </Button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl mb-2">📄</div>
                <div className="font-semibold">Complete Syllabus</div>
                <div className="text-sm text-muted-foreground">14 modules detailed</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl mb-2">📅</div>
                <div className="font-semibold">Daily PDFs</div>
                <div className="text-sm text-muted-foreground">Auto-delivered notes</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold">Learning Path</div>
                <div className="text-sm text-muted-foreground">Week-by-week guide</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
