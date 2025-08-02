import { ArrowDown, ArrowRightLeft as Exchange, FileCode, CheckSquare } from "lucide-react";
import { useState } from "react";
import { deploymentFiles } from "@/lib/data";
import CodeBlock from "./code-block";

export default function MigrationSection() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const migrationSteps = [
    { pip: "pip install requests", uv: "uv pip install requests" },
    { pip: "pip install -r requirements.txt", uv: "uv pip install -r requirements.txt" },
    { pip: "pip freeze > requirements.txt", uv: "uv pip compile requirements.in" },
    { pip: "python -m venv venv", uv: "uv venv .venv" }
  ];

  const checklistItems = [
    "Install UV package manager",
    "Create UV virtual environment", 
    "Migrate requirements.txt",
    "Update CI/CD scripts",
    "Test application functionality"
  ];

  return (
    <section id="migration" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--github-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Migration Guide</h2>
          <p className="text-xl text-[var(--github-muted)] max-w-3xl mx-auto">
            Seamlessly migrate your existing pip projects to UV
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Exchange className="text-[var(--github-primary)] mr-3" />
                Command Migration
              </h3>
              
              <div className="space-y-6">
                {migrationSteps.map((step, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-3 text-[var(--github-muted)]">
                      {index === 0 && "Package Installation"}
                      {index === 1 && "Requirements Installation"}
                      {index === 2 && "Dependency Locking"}
                      {index === 3 && "Virtual Environment"}
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <span className="text-sm text-[var(--github-muted)] block mb-2">Before (pip)</span>
                        <div className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded p-3">
                          <code className="font-mono text-sm">{step.pip}</code>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="text-[var(--github-primary)]" />
                      </div>
                      <div>
                        <span className="text-sm text-[var(--github-success)] block mb-2">After (UV)</span>
                        <div className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded p-3">
                          <code className="font-mono text-sm">{step.uv}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileCode className="text-[var(--github-primary)] mr-3" />
                Migration Script
              </h3>
              
              <CodeBlock
                code={deploymentFiles.migrationScript}
                title="migrate_to_uv.py"
                language="python"
              />
            </div>

            <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Migration Checklist</h3>
              <div className="space-y-3">
                {checklistItems.map((item, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded border-[var(--github-border)] bg-[var(--github-surface)]"
                      checked={checkedItems[item] || false}
                      onChange={() => handleCheckboxChange(item)}
                    />
                    <span className="text-sm">{item}</span>
                    {checkedItems[item] && <CheckSquare className="h-4 w-4 text-[var(--github-success)]" />}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
