import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";

// Simple tokenizer — splits a line into colored segments
function tokenizeLine(line) {
  const tokens = [];
  let remaining = line;

  while (remaining.length > 0) {
    let matched = false;

    // Try each pattern in order
    const patterns = [
      // Strings in double quotes
      { regex: /^"[^"]*"/, color: "#a5d6ff" },
      // Strings in single quotes
      { regex: /^'[^']*'/, color: "#a5d6ff" },
      // Conflict markers
      { regex: /^(<<<<<<<|=======|>>>>>>>)(\s.*)?/, color: "#f85149", bold: true },
      // Flags (--something or -x)
      { regex: /^(\s)(--?[\w][\w-]*)/, prefix: true, color: "#79c0ff" },
      // Git keyword
      { regex: /^(git)(?=\s|$)/, color: "#ff7b72" },
      // Git subcommands
      {
        regex: /^(init|clone|add|commit|push|pull|fetch|merge|rebase|branch|checkout|switch|status|log|diff|stash|tag|remote|reset|revert|cherry-pick|bisect|reflog|show|blame|rm|mv|restore|config|pop|apply|drop|list|start|bad|good)(?=\s|$|\.)/,
        color: "#d2a8ff",
      },
    ];

    for (const pat of patterns) {
      const match = remaining.match(pat.regex);
      if (match) {
        if (pat.prefix) {
          // The first capture group is the prefix (whitespace)
          tokens.push({ text: match[1], color: null });
          tokens.push({ text: match[2], color: pat.color, bold: pat.bold });
        } else {
          tokens.push({ text: match[0], color: pat.color, bold: pat.bold });
        }
        remaining = remaining.slice(match[0].length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      // Take one character as plain text
      const lastToken = tokens[tokens.length - 1];
      if (lastToken && !lastToken.color) {
        lastToken.text += remaining[0];
      } else {
        tokens.push({ text: remaining[0], color: null });
      }
      remaining = remaining.slice(1);
    }
  }

  return tokens;
}

export default function CodeBlock({ code, language = "bash", title }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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

  const renderLine = (line, lineIndex) => {
    const trimmed = line.trimStart();

    // Comment lines
    if (trimmed.startsWith("#") || trimmed.startsWith("//")) {
      return (
        <div key={lineIndex} className="code-line">
          <span style={{ color: "#8b949e" }}>{line}</span>
        </div>
      );
    }

    // Prompt lines
    if (trimmed.startsWith("$")) {
      const afterDollar = line.slice(line.indexOf("$") + 2);
      const tokens = tokenizeLine(afterDollar);
      return (
        <div key={lineIndex} className="code-line">
          <span style={{ color: "#3fb950" }}>$ </span>
          {tokens.map((t, i) =>
            t.color ? (
              <span key={i} style={{ color: t.color, fontWeight: t.bold ? "bold" : "normal" }}>{t.text}</span>
            ) : (
              <span key={i} style={{ color: "#e6edf3" }}>{t.text}</span>
            )
          )}
        </div>
      );
    }

    // Regular lines with syntax highlighting
    const tokens = tokenizeLine(line);
    return (
      <div key={lineIndex} className="code-line">
        {tokens.map((t, i) =>
          t.color ? (
            <span key={i} style={{ color: t.color, fontWeight: t.bold ? "bold" : "normal" }}>{t.text}</span>
          ) : (
            <span key={i} style={{ color: "#e6edf3" }}>{t.text}</span>
          )
        )}
      </div>
    );
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
          {code.split("\n").map((line, i) => renderLine(line, i))}
        </pre>
      </div>
    </div>
  );
}
