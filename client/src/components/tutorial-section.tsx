import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Lightbulb, Info, Rocket } from "lucide-react";
import { tutorials } from "@/lib/data";
import CodeBlock from "./code-block";

export default function TutorialSection() {
  const [activeTutorial, setActiveTutorial] = useState("package-management");
  const [currentStep, setCurrentStep] = useState(0);

  const currentTutorial = tutorials.find(t => t.id === activeTutorial);
  const progressPercentage = currentTutorial ? ((currentStep + 1) / currentTutorial.steps.length) * 100 : 0;

  const handleStepForward = () => {
    if (currentTutorial && currentStep < currentTutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const changeTutorial = (tutorialId: string) => {
    setActiveTutorial(tutorialId);
    setCurrentStep(0);
  };

  return (
    <section id="tutorials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Interactive Tutorials</h2>
          <p className="text-xl text-[var(--github-muted)] max-w-3xl mx-auto">
            Learn UV through hands-on examples and step-by-step tutorials
          </p>
        </div>

        {/* Tutorial Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tutorials.map((tutorial) => (
            <Button
              key={tutorial.id}
              onClick={() => changeTutorial(tutorial.id)}
              variant={activeTutorial === tutorial.id ? "default" : "outline"}
              className={activeTutorial === tutorial.id 
                ? "bg-[var(--github-primary)] text-white" 
                : "border-[var(--github-border)] bg-[var(--github-surface)] hover:bg-[var(--github-border)] text-[var(--github-text)]"
              }
            >
              {tutorial.title}
            </Button>
          ))}
        </div>

        {/* Tutorial Content */}
        {currentTutorial && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{currentTutorial.title}</h3>
                <p className="text-[var(--github-muted)] mb-4">{currentTutorial.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>Step {currentStep + 1} of {currentTutorial.steps.length}</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>

                <div className="space-y-4">
                  <div className="step">
                    <h4 className="font-medium mb-2 flex items-center">
                      <span className="bg-[var(--github-primary)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        {currentStep + 1}
                      </span>
                      {currentTutorial.steps[currentStep].title}
                    </h4>
                    <p className="text-[var(--github-muted)] mb-4 ml-9">
                      {currentTutorial.steps[currentStep].description}
                    </p>
                    
                    <div className="ml-9">
                      <CodeBlock
                        code={currentTutorial.steps[currentStep].command}
                        title="Terminal"
                        language="bash"
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                  <Button
                    onClick={handleStepBack}
                    disabled={currentStep === 0}
                    variant="outline"
                    className="border-[var(--github-border)] bg-[var(--github-surface)]"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleStepForward}
                    disabled={currentStep === currentTutorial.steps.length - 1}
                    className="bg-[var(--github-primary)] text-white"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Expected Output</h3>
                {currentTutorial.steps[currentStep].output && (
                  <div className="bg-[var(--github-bg)] border border-[var(--github-border)] rounded-lg p-4">
                    <pre className="font-mono text-sm text-[var(--github-muted)]">
                      {currentTutorial.steps[currentStep].output}
                    </pre>
                  </div>
                )}
              </div>

              <div className="bg-[var(--github-surface)] border border-[var(--github-border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Explanation</h3>
                <p className="text-[var(--github-muted)] mb-4">
                  {currentTutorial.steps[currentStep].explanation}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="text-[var(--github-warning)] mt-1 h-4 w-4" />
                    <p className="text-sm text-[var(--github-muted)]">
                      Use <code className="bg-[var(--github-bg)] px-2 py-1 rounded text-[var(--github-text)]">--no-deps</code> to install without dependencies
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Info className="text-[var(--github-primary)] mt-1 h-4 w-4" />
                    <p className="text-sm text-[var(--github-muted)]">
                      UV caches packages for faster subsequent installs
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Rocket className="text-[var(--github-success)] mt-1 h-4 w-4" />
                    <p className="text-sm text-[var(--github-muted)]">
                      Parallel downloads make installation much faster
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
