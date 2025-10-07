import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin } from "lucide-react";

export const Social = () => {
  const socials = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@bharathreddy_sa",
      url: "https://www.instagram.com/bharathreddy_sa/",
      color: "from-purple-500 to-pink-500",
      emoji: "📷",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "Azure DevOps Tutorials",
      url: "#",
      color: "from-red-500 to-red-600",
      emoji: "▶️",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "Bharath Reddy",
      url: "#",
      color: "from-blue-500 to-blue-600",
      emoji: "💼",
    },
  ];

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
            🔗 Follow <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Stay connected for updates, tips, and community support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="block"
            >
              <div className="glass p-8 rounded-2xl text-center hover:glow-azure transition-all group cursor-pointer">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="inline-block mb-4"
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${social.color} p-4 group-hover:scale-110 transition-transform`}>
                    <social.icon className="w-full h-full text-white" />
                  </div>
                </motion.div>

                <div className="text-4xl mb-2">{social.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                <p className="text-accent font-medium">{social.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
