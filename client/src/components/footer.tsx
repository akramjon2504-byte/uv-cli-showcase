import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[var(--github-border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="text-[var(--github-primary)] text-xl" />
              <span className="text-xl font-bold">UV CLI Showcase</span>
            </div>
            <p className="text-[var(--github-muted)] mb-6 max-w-md">
              Learn modern Python package management with UV - the fast, reliable, and Cargo-inspired package manager.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">
                <i className="fab fa-discord text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">Documentation</a>
              <a href="#" className="block text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">API Reference</a>
              <a href="#" className="block text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">Examples</a>
              <a href="#" className="block text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">Community</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">UV Repository</a>
              <a href="#" className="block text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">Render.com</a>
              <a href="#" className="block text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">FastAPI</a>
              <a href="#" className="block text-[var(--github-muted)] hover:text-[var(--github-text)] transition-colors">Python.org</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--github-border)] mt-12 pt-8 text-center">
          <p className="text-[var(--github-muted)]">
            © 2024 UV CLI Showcase. Built with UV, FastAPI, and deployed on Render.com
          </p>
        </div>
      </div>
    </footer>
  );
}
