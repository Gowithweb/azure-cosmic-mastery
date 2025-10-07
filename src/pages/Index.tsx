import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CourseModules } from "@/components/CourseModules";
import { Companies } from "@/components/Companies";
import { LiveClasses } from "@/components/LiveClasses";
import { Testimonials } from "@/components/Testimonials";
import { Instagram } from "@/components/Instagram";
import { Download } from "@/components/Download";
import { Social } from "@/components/Social";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <CourseModules />
      <Companies />
      <LiveClasses />
      <Testimonials />
      <Instagram />
      <Download />
      <Social />
      <Footer />
    </div>
  );
};

export default Index;
