import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Cloud,
  Settings,
  Terminal,
  GitBranch,
  Kanban,
  Repeat,
  Zap,
  TestTube,
  Globe,
  Container,
  Boxes,
  Github,
  Bot,
  Network,
} from "lucide-react";

const modules = [
  { icon: Cloud, title: "Introduction to Cloud & Azure", emoji: "☁️" },
  { icon: Settings, title: "Azure Administration", emoji: "⚙️" },
  { icon: Terminal, title: "Linux for DevOps", emoji: "🐧" },
  { icon: Terminal, title: "PowerShell & Azure CLI", emoji: "💻" },
  { icon: GitBranch, title: "Git & Azure Repos", emoji: "🧭" },
  { icon: Kanban, title: "Project Management in Agile & Scrum", emoji: "🏗️" },
  { icon: Repeat, title: "Azure DevOps Project Lifecycle", emoji: "🔁" },
  { icon: Zap, title: "CI/CD with Pipelines", emoji: "⚡" },
  { icon: TestTube, title: "SonarQube & Code Quality", emoji: "🧪" },
  { icon: Globe, title: "Terraform Infrastructure as Code", emoji: "🪐" },
  { icon: Container, title: "Docker & Kubernetes", emoji: "🐳☸️" },
  { icon: Boxes, title: "ARM Templates & GitHub Actions", emoji: "🧰" },
  { icon: Bot, title: "Ansible & Automation", emoji: "🤖" },
  { icon: Network, title: "Istio & Service Mesh", emoji: "🔐" },
];

export const CourseModules = () => {
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
            📘 Course <span className="gradient-text">Modules</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            14 comprehensive modules covering everything from basics to advanced
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="glass p-6 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors glow-azure">
                      <module.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{module.emoji}</span>
                      <span className="font-bold text-primary text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg leading-tight">
                      {module.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-semibold text-accent">
            📚 Learn from Real Projects, Real DevOps Pipelines
          </p>
        </motion.div>
      </div>
    </section>
  );
};
