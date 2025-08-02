import { Folder, Terminal } from "lucide-react";
import { codeExamples } from "@/lib/data";
import CodeBlock from "./code-block";

export default function ExamplesSection() {
  const projectFiles = [
    { name: "main.py", icon: "fas fa-file", type: "file" },
    { name: "requirements.in", icon: "fas fa-file", type: "file" },
    { name: "requirements.lock.txt", icon: "fas fa-file", type: "file" },
    { name: "render.yaml", icon: "fas fa-file", type: "file" },
    { name: "start.sh", icon: "fas fa-file", type: "file" },
    { name: ".venv/", icon: "fas fa-folder", type: "folder" }
  ];

  const setupCommands = [
    "uv venv .venv",
    "source .venv/bin/activate",
    "uv pip compile requirements.in",
    "uv pip sync requirements.lock.txt"
  ];

  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--github-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Code Examples</h2>
          <p className="text-xl text-[var(--github-muted)] max-w-3xl mx-auto">
            Real-world examples and use cases for UV package manager
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Example Cards */}
          {codeExamples.map((example) => (
            <div key={example.id} className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className={`${example.icon} text-[var(--github-primary)] text-xl mr-3`}></i>
                  <h3 className="text-lg font-semibold">{example.title}</h3>
                </div>
                <p className="text-[var(--github-muted)] text-sm mb-4">{example.description}</p>
                
                <CodeBlock
                  code={example.command}
                  title="Terminal"
                  language="bash"
                  className="text-xs"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Complete Example Project Structure */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Complete Project Structure</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Folder className="text-[var(--github-primary)] mr-3" />
                Project Files
              </h4>
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-folder text-[var(--github-warning)] mr-2"></i>
                  <span>my-uv-project/</span>
                </div>
                {projectFiles.map((file, index) => (
                  <div key={index} className="flex items-center ml-4">
                    <i className={`${file.icon} text-[var(--github-muted)] mr-2`}></i>
                    <span>{file.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Terminal className="text-[var(--github-primary)] mr-3" />
                Setup Commands
              </h4>
              <div className="space-y-3">
                {setupCommands.map((command, index) => (
                  <div key={index} className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded p-3">
                    <code className="font-mono text-sm text-[var(--github-text)]">{command}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
