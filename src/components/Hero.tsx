import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero pt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-hero mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Prem Prasad
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Passionate Learner & Aspiring Python Developer
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              A Data Science enthusiast with expertise in Python, Machine Learning, 
              and data visualization. I'm passionate about turning data into meaningful 
              insights and building solutions that make a difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button className="btn-hero">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
            <button className="btn-outline">
              View Projects
            </button>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6">
            <a href="https://github.com/Premprasad1707" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prem-prasad-632b8a301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth">
              <Linkedin size={24} />
            </a>
            <a href="mailto:premprasad.dev@email.com" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-glow">
            <img 
              src={heroImage} 
              alt="Professional workspace with Python development setup" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary/10"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-soft">
            <span className="font-semibold">Python Developer</span>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-soft">
            <span className="font-semibold">Data Science</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;