import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export default function CodeBlock({ code, language = "bash", title, className = "" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        description: "Copied to clipboard!",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        description: "Failed to copy code",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`bg-[var(--github-surface)] border border-[var(--github-border)] rounded-lg overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--github-border)]">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[var(--github-danger)] rounded-full"></div>
          <div className="w-3 h-3 bg-[var(--github-warning)] rounded-full"></div>
          <div className="w-3 h-3 bg-[var(--github-success)] rounded-full"></div>
        </div>
        {title && <span className="text-sm text-[var(--github-muted)]">{title}</span>}
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="text-[var(--github-muted)] hover:text-[var(--github-text)] h-auto p-1"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <div className="p-6">
        <pre className="font-mono text-sm text-[var(--github-text)] overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
