import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--github-surface)] border-b border-[var(--github-border)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Zap className="text-[var(--github-primary)] text-xl" />
              <span className="text-xl font-bold">UV CLI</span>
            </div>
            <span className="text-sm text-[var(--github-muted)]">Modern Python Package Manager</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('getting-started')}
              className="text-[var(--github-text)] hover:text-[var(--github-primary)] transition-colors"
            >
              Getting Started
            </button>
            <button 
              onClick={() => scrollToSection('tutorials')}
              className="text-[var(--github-text)] hover:text-[var(--github-primary)] transition-colors"
            >
              Tutorials
            </button>
            <button 
              onClick={() => scrollToSection('migration')}
              className="text-[var(--github-text)] hover:text-[var(--github-primary)] transition-colors"
            >
              Migration
            </button>
            <button 
              onClick={() => scrollToSection('deployment')}
              className="text-[var(--github-text)] hover:text-[var(--github-primary)] transition-colors"
            >
              Deployment
            </button>
            <button 
              onClick={() => scrollToSection('examples')}
              className="text-[var(--github-text)] hover:text-[var(--github-primary)] transition-colors"
            >
              Examples
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[var(--github-border)]"
          >
            {mobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--github-surface)] border-t border-[var(--github-border)]">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection('getting-started')}
              className="block w-full text-left py-2 text-[var(--github-text)] hover:text-[var(--github-primary)] transition-colors"
            >
              Getting Started
            </button>
            <button 
              onClick={() => scrollToSection('tutorials')}
              className="block w-full text-left py-2 text-[var(--github-text)] hover:text-[var(--github-primary)] transition-colors"
            >
              Tutorials
            </button>
            <button 
              onClick={() => scrollToSection('migration')}
              className="block w-full text-left py-2 text-[var(--github-text)] hover:text-[var(--github-primary)] transition-colors"
            >
              Migration
            </button>
            <button 
              onClick={() => scrollToSection('deployment')}
              className="block w-full text-left py-2 text-[var(--github-text)] hover:text-[var(--github-primary)] transition-colors"
            >
              Deployment
            </button>
            <button 
              onClick={() => scrollToSection('examples')}
              className="block w-full text-left py-2 text-[var(--github-text)] hover:text-[var(--github-primary)] transition-colors"
            >
              Examples
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
