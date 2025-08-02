import { Button } from "@/components/ui/button";
import { Play, Code, Rocket } from "lucide-react";
import CodeBlock from "./code-block";

export default function HeroSection() {
  const quickStartCode = `pip install uv
uv venv .venv
source .venv/bin/activate`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded-full p-4">
            <Rocket className="text-[var(--github-primary)] text-4xl" />
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-[var(--github-primary)]">UV</span> CLI Showcase
        </h1>
        
        <p className="text-xl sm:text-2xl text-[var(--github-muted)] mb-8 max-w-3xl mx-auto">
          Learn modern Python package management with UV - the fast, reliable, and Cargo-inspired package manager
        </p>

        {/* Quick Start Terminal */}
        <div className="max-w-4xl mx-auto mb-12">
          <CodeBlock
            code={quickStartCode}
            title="Quick Start"
            language="bash"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('getting-started')}
            className="bg-[var(--github-primary)] hover:bg-blue-600 text-white px-8 py-3 text-lg"
          >
            <Play className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('examples')}
            className="border-[var(--github-border)] bg-[var(--github-surface)] hover:bg-[var(--github-border)] text-[var(--github-text)] px-8 py-3 text-lg"
          >
            <Code className="mr-2 h-5 w-5" />
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
}
