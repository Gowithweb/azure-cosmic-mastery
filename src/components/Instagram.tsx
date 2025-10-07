import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Instagram as InstagramIcon, TrendingUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Instagram = () => {
  const reels = [
    { emoji: "🎯", title: "Azure Fundamentals", views: "12K" },
    { emoji: "🚀", title: "DevOps Roadmap", views: "18K" },
    { emoji: "💡", title: "Career Tips", views: "15K" },
    { emoji: "⚡", title: "CI/CD Pipeline", views: "20K" },
    { emoji: "🐳", title: "Docker Basics", views: "25K" },
    { emoji: "☸️", title: "Kubernetes Guide", views: "22K" },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            📱 Instagram <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Follow us for live reels, Q&A, and DevOps insights!
          </p>

          <Button
            size="lg"
            className="glow-cyan hover:scale-105 transition-transform"
            asChild
          >
            <a
              href="https://www.instagram.com/bharathreddy_sa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="mr-2" />
              Follow @bharathreddy_sa
            </a>
          </Button>
        </motion.div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {reels.map((reel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass p-6 hover:glow-azure transition-all cursor-pointer group">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {reel.emoji}
                  </div>
                  <h3 className="font-semibold mb-2">{reel.title}</h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-accent">
                    <TrendingUp className="w-4 h-4" />
                    <span>{reel.views} views</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Instagram Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass p-6 text-center">
              <div className="text-4xl mb-2">🎥</div>
              <h3 className="font-bold mb-2">Trending Reels</h3>
              <p className="text-sm text-muted-foreground">
                Quick DevOps tips & tricks
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="glass p-6 text-center">
              <div className="text-4xl mb-2">💡</div>
              <h3 className="font-bold mb-2">Cloud Tips</h3>
              <p className="text-sm text-muted-foreground">
                Azure & AWS best practices
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass p-6 text-center">
              <div className="text-4xl mb-2">⚙️</div>
              <h3 className="font-bold mb-2">Career Talks</h3>
              <p className="text-sm text-muted-foreground">
                Live Q&A sessions
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
