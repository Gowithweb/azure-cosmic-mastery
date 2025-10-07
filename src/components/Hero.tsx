import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const AzureSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#007FFF"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* 3D Azure Sphere */}
      <div className="absolute top-20 right-10 w-96 h-96 hidden lg:block">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} color="#00FFFF" intensity={0.5} />
          <AzureSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <span className="text-5xl md:text-7xl font-bold">
                <Rocket className="inline-block mr-2 text-primary animate-float" size={60} />
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up">
              Become an <span className="gradient-text">Azure DevOps</span> Engineer 🚀✨
            </h1>

            <p className="text-3xl md:text-4xl font-semibold text-muted-foreground animate-bounce-slow">
              ⚡ From Zero to Hero in 8 Weeks 🎯
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base text-accent font-medium">
              <motion.span className="glass px-4 py-2 rounded-full animate-pulse-slow glow-gold" whileHover={{ scale: 1.1, rotate: 5 }}>💻✨ Live classes</motion.span>
              <motion.span className="glass px-4 py-2 rounded-full animate-pulse-slow glow-purple" whileHover={{ scale: 1.1, rotate: -5 }}>🚀🔥 Real-time Projects</motion.span>
              <motion.span className="glass px-4 py-2 rounded-full animate-pulse-slow glow-azure" whileHover={{ scale: 1.1, rotate: 5 }}>📜🎓 Certification Guidance</motion.span>
              <motion.span className="glass px-4 py-2 rounded-full animate-pulse-slow glow-cyan" whileHover={{ scale: 1.1, rotate: -5 }}>🎥⏰ 24/7 Recording Access</motion.span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 glow-rainbow animate-glow-rainbow hover:scale-110 transition-all"
              >
                <Rocket className="mr-2 animate-bounce-slow" />
                🔵 Join Live Class 🎓
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 glass border-primary/50 hover:bg-primary/10 glow-purple hover:scale-110 transition-all"
              >
                <Download className="mr-2 animate-bounce-slow" />
                📘 Download Syllabus ⬇️
              </Button>
            </div>
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            className="absolute bottom-10 left-10 hidden lg:block"
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="glass p-6 rounded-2xl glow-rainbow animate-glow-rainbow">
              <span className="text-4xl">🐳✨</span>
              <p className="text-sm mt-2 font-medium gradient-text">Docker</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-40 left-20 hidden lg:block"
            animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          >
            <div className="glass p-6 rounded-2xl glow-purple animate-glow-rainbow">
              <span className="text-4xl">☸️💫</span>
              <p className="text-sm mt-2 font-medium gradient-text">Kubernetes</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-32 right-20 hidden lg:block"
            animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          >
            <div className="glass p-6 rounded-2xl glow-gold animate-glow-rainbow">
              <span className="text-4xl">🪐🌟</span>
              <p className="text-sm mt-2 font-medium gradient-text">Terraform</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
