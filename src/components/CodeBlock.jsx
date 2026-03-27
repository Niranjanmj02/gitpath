import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";

export default function CodeBlock({ code, language = "bash", title }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const range = document.createRange();
      range.selectNodeContents(codeRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Basic syntax highlighting via regex
  const highlightSyntax = (text) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      // Comments
      if (line.trimStart().startsWith("#") || line.trimStart().startsWith("//")) {
        return (
          <div key={i} className="code-line">
            <span className="text-[#8b949e]">{line}</span>
          </div>
        );
      }
      // Output lines (starting with hints or special chars)
      if (line.trimStart().startsWith("$")) {
        return (
          <div key={i} className="code-line">
            <span className="text-[#3fb950]">$ </span>
            <span className="text-[#e6edf3]">{line.slice(line.indexOf("$") + 2)}</span>
          </div>
        );
      }

      // Apply keyword highlighting
      let highlighted = line;
      // Git commands
      highlighted = highlighted.replace(
        /\b(git)\b/g,
        '<span class="text-[#ff7b72]">git</span>'
      );
      // Sub-commands
      highlighted = highlighted.replace(
        /\b(init|clone|add|commit|push|pull|fetch|merge|rebase|branch|checkout|switch|status|log|diff|stash|tag|remote|reset|revert|cherry-pick|bisect|reflog|show|blame|rm|mv|restore|config)\b/g,
        '<span class="text-[#d2a8ff]">$1</span>'
      );
      // Flags
      highlighted = highlighted.replace(
        /(\s)(--?\w[\w-]*)/g,
        '$1<span class="text-[#79c0ff]">$2</span>'
      );
      // Strings
      highlighted = highlighted.replace(
        /(&quot;[^"]*&quot;|"[^"]*")/g,
        '<span class="text-[#a5d6ff]">$1</span>'
      );
      // Conflict markers
      highlighted = highlighted.replace(
        /(&lt;&lt;&lt;&lt;&lt;&lt;&lt;|=======|&gt;&gt;&gt;&gt;&gt;&gt;&gt;|<<<<<<<|=======|>>>>>>>)/g,
        '<span class="text-[#f85149] font-bold">$&</span>'
      );

      return (
        <div key={i} className="code-line">
          <span dangerouslySetInnerHTML={{ __html: highlighted }} />
        </div>
      );
    });
  };

  return (
    <div className="rounded-lg border border-[#30363d] overflow-hidden my-4 group">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
        <span className="text-xs text-[#8b949e] font-mono">
          {title || language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check size={14} className="text-[#3fb950]" />
              <span className="text-[#3fb950]">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {/* Code content */}
      <div className="bg-[#0d1117] p-4 overflow-x-auto">
        <pre
          ref={codeRef}
          className="font-mono text-sm text-[#e6edf3] leading-relaxed whitespace-pre"
        >
          {highlightSyntax(code)}
        </pre>
      </div>
    </div>
  );
}
