import { FileText, Terminal, Rocket } from "lucide-react";
import { deploymentFiles } from "@/lib/data";
import CodeBlock from "./code-block";

export default function DeploymentSection() {
  const deploymentSteps = [
    {
      number: 1,
      title: "Push to GitHub",
      description: "Commit your UV project to a GitHub repository"
    },
    {
      number: 2,
      title: "Connect to Render",
      description: "Link your GitHub repository to Render.com"
    },
    {
      number: 3,
      title: "Configure Build",
      description: "Use render.yaml or manual configuration"
    },
    {
      number: 4,
      title: "Deploy",
      description: "Automatic deployment on every git push"
    }
  ];

  return (
    <section id="deployment" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Deployment</h2>
          <p className="text-xl text-[var(--github-muted)] max-w-3xl mx-auto">
            Deploy your UV-powered applications to Render.com with ease
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="text-[var(--github-primary)] mr-3" />
                render.yaml Configuration
              </h3>
              
              <CodeBlock
                code={deploymentFiles.renderYaml}
                title="render.yaml"
                language="yaml"
              />
            </div>

            <div className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Terminal className="text-[var(--github-primary)] mr-3" />
                start.sh Script
              </h3>
              
              <CodeBlock
                code={deploymentFiles.startSh}
                title="start.sh"
                language="bash"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Rocket className="text-[var(--github-primary)] mr-3" />
                FastAPI Example
              </h3>
              
              <CodeBlock
                code={deploymentFiles.fastApiExample}
                title="main.py"
                language="python"
              />
            </div>

            <div className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Deployment Steps</h3>
              <div className="space-y-4">
                {deploymentSteps.map((step) => (
                  <div key={step.number} className="flex items-start space-x-3">
                    <span className="bg-[var(--github-primary)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-[var(--github-muted)] text-sm">{step.description}</p>
                    </div>
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
