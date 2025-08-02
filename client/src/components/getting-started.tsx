import { Download, Package, Terminal as Python, Zap, Shield, Settings } from "lucide-react";
import CodeBlock from "./code-block";

export default function GettingStarted() {
  const installCode = "pip install uv";
  const venvCode = "uv venv .venv";
  const pythonCode = "uv python install 3.11";

  return (
    <section id="getting-started" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--github-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Getting Started</h2>
          <p className="text-xl text-[var(--github-muted)] max-w-3xl mx-auto">
            UV is an extremely fast Python package and project manager, written in Rust
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Download className="text-[var(--github-primary)] mr-3" />
                Installation
              </h3>
              <p className="text-[var(--github-muted)] mb-4">Install UV using pip or your preferred package manager</p>
              
              <CodeBlock
                code={installCode}
                title="Terminal"
                language="bash"
              />
            </div>

            <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Package className="text-[var(--github-primary)] mr-3" />
                Create Virtual Environment
              </h3>
              <p className="text-[var(--github-muted)] mb-4">UV automatically manages virtual environments for your projects</p>
              
              <CodeBlock
                code={venvCode}
                title="Terminal"
                language="bash"
              />
            </div>

            <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Python className="text-[var(--github-primary)] mr-3" />
                Python Version Management
              </h3>
              <p className="text-[var(--github-muted)] mb-4">Install and manage Python versions with UV</p>
              
              <CodeBlock
                code={pythonCode}
                title="Terminal"
                language="bash"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Why UV?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="text-[var(--github-primary)] mt-1" />
                  <div>
                    <h4 className="font-medium">Extremely Fast</h4>
                    <p className="text-[var(--github-muted)] text-sm">10-100x faster than pip and pip-tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-[var(--github-success)] mt-1" />
                  <div>
                    <h4 className="font-medium">Reliable</h4>
                    <p className="text-[var(--github-muted)] text-sm">Deterministic and reproducible builds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Settings className="text-[var(--github-warning)] mt-1" />
                  <div>
                    <h4 className="font-medium">Drop-in Replacement</h4>
                    <p className="text-[var(--github-muted)] text-sm">Compatible with existing pip workflows</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Performance Comparison</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">UV</span>
                  <div className="flex-1 mx-3 bg-[var(--github-border)] rounded-full h-2">
                    <div className="bg-[var(--github-primary)] h-2 rounded-full w-1/12"></div>
                  </div>
                  <span className="text-sm text-[var(--github-muted)]">0.5s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">pip-tools</span>
                  <div className="flex-1 mx-3 bg-[var(--github-border)] rounded-full h-2">
                    <div className="bg-[var(--github-warning)] h-2 rounded-full w-8/12"></div>
                  </div>
                  <span className="text-sm text-[var(--github-muted)]">30s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">pip</span>
                  <div className="flex-1 mx-3 bg-[var(--github-border)] rounded-full h-2">
                    <div className="bg-[var(--github-danger)] h-2 rounded-full w-full"></div>
                  </div>
                  <span className="text-sm text-[var(--github-muted)]">45s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
