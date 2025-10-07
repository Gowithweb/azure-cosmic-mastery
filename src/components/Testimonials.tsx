import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya R.",
    role: "Azure Engineer",
    text: "I cleared my Azure DevOps interview in just 45 days! Thanks, Bharath sir 🙌",
    rating: 5,
  },
  {
    name: "Vinod K.",
    role: "DevOps Analyst",
    text: "The real projects and CI/CD part were game-changing 🚀",
    rating: 5,
  },
  {
    name: "Ananya M.",
    role: "Cloud Engineer",
    text: "Best investment in my career! Got promoted within 3 months of completing the course.",
    rating: 5,
  },
  {
    name: "Rajesh S.",
    role: "Senior DevOps Engineer",
    text: "Bharath's teaching style is incredible. Complex concepts made simple and practical.",
    rating: 5,
  },
  {
    name: "Sneha P.",
    role: "Infrastructure Engineer",
    text: "The 24/7 recording access helped me learn at my own pace. Highly recommended!",
    rating: 5,
  },
  {
    name: "Karthik N.",
    role: "DevOps Specialist",
    text: "Hands-on labs and real-world projects prepared me perfectly for industry challenges.",
    rating: 5,
  },
];

export const Testimonials = () => {
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-bounce-slow">
            💬✨ What <span className="gradient-text">People Say</span> 🌟💯
          </h2>
          <p className="text-xl text-muted-foreground">
            Success stories from our amazing students 🎓🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: 2 }}
            >
              <Card className="glass p-6 h-full glow-rainbow animate-glow-rainbow hover:scale-105 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <Star
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg mb-6 italic leading-relaxed">
                  "✨ {testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold gradient-text-gold">
                    {testimonial.name} 🎓
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} 💼
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
