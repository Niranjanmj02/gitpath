import CodeBlock from "./CodeBlock";
import { GitBranch, Clock, Database, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

export default function WhatIsGit() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero */}
      <div className="text-center py-12 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2f81f7]/10 border border-[#2f81f7]/30 rounded-full text-sm text-[#2f81f7] mb-6">
          <Clock size={14} /> Version Control System
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-4">
          Git is a <span className="text-[#2f81f7]">time machine</span> for your code
        </h2>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
          Git tracks every change you make, lets you travel back in time to any previous version,
          and enables multiple people to work on the same project without conflicts.
        </p>
      </div>

      {/* 3 Key Concepts — Flip Cards */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-6">3 Key Concepts</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: <Database size={28} className="text-[#2f81f7]" />,
              title: "Repository",
              front: "A folder that Git is tracking — your project's home base.",
              back: "Think of it like a project folder with a hidden .git diary that remembers every change ever made. It contains your files AND the entire history.",
            },
            {
              icon: <CheckCircle2 size={28} className="text-[#3fb950]" />,
              title: "Commit",
              front: "A snapshot of your project at a specific point in time.",
              back: "Like pressing 'Save' in a video game. Each commit is a checkpoint you can return to. It records who changed what, when, and why (via the commit message).",
            },
            {
              icon: <Lightbulb size={28} className="text-[#d29922]" />,
              title: "Snapshot",
              front: "Git stores the state of ALL files, not just the changes.",
              back: "Unlike some systems that store diffs, Git takes a full photo of your entire project each commit. Unchanged files are referenced, not duplicated — so it's efficient.",
            },
          ].map((card) => (
            <div key={card.title} className="group [perspective:1000px]">
              <div className="relative h-56 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                  {card.icon}
                  <h4 className="text-lg font-semibold text-[#e6edf3] mt-3 mb-2">{card.title}</h4>
                  <p className="text-sm text-[#8b949e]">{card.front}</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#1c2333] border border-[#2f81f7]/40 rounded-xl p-6 flex items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-sm text-[#e6edf3] leading-relaxed">{card.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#8b949e] mt-3 text-center">Hover over each card to learn more</p>
      </div>

      {/* Commit History Diagram */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Linear Commit History</h3>
        <p className="text-[#8b949e] mb-6">Each circle is a commit — a saved snapshot of your project:</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 overflow-x-auto">
          <div className="flex items-center gap-0 min-w-[500px] justify-center">
            {[
              { hash: "C1", msg: "Initial commit", color: "#2f81f7" },
              { hash: "C2", msg: "Add homepage", color: "#2f81f7" },
              { hash: "C3", msg: "Add styles", color: "#2f81f7" },
              { hash: "C4", msg: "Fix navbar", color: "#3fb950" },
            ].map((c, i, arr) => (
              <div key={c.hash} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-xs font-mono font-bold text-white"
                    style={{ borderColor: c.color, backgroundColor: `${c.color}20` }}
                  >
                    {c.hash}
                  </div>
                  <p className="text-xs text-[#8b949e] mt-2 max-w-[80px] text-center">{c.msg}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-16 h-0.5 bg-[#30363d] mx-1 mt-[-20px]">
                    <div className="w-full h-full bg-[#2f81f7]/50" />
                  </div>
                )}
              </div>
            ))}
            <div className="ml-2 mt-[-20px]">
              <span className="text-xs text-[#3fb950] font-mono bg-[#3fb950]/10 px-2 py-1 rounded">← HEAD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Git vs No Git */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Why Git vs No Git?</h3>
        <div className="border border-[#30363d] rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-[#161b22] border-b border-[#30363d]">
            <div className="px-4 py-3 text-xs font-semibold text-[#8b949e] uppercase">Scenario</div>
            <div className="px-4 py-3 text-xs font-semibold text-[#f85149] uppercase text-center">Without Git</div>
            <div className="px-4 py-3 text-xs font-semibold text-[#3fb950] uppercase text-center">With Git</div>
          </div>
          {[
            ["Undo a mistake", "Pray you have a backup", "git revert or git reset"],
            ["Collaborate", "Email zip files around", "Push/Pull from shared remote"],
            ["Track who changed what", "Ask everyone", "git blame shows author per line"],
            ["Experiment safely", "Copy entire folder", "Create a branch in seconds"],
            ["Version your project", "project_final_v2_REAL.zip", "Automatic commit history"],
          ].map(([scenario, bad, good]) => (
            <div key={scenario} className="grid grid-cols-3 border-b border-[#21262d] last:border-0">
              <div className="px-4 py-3 text-sm text-[#e6edf3]">{scenario}</div>
              <div className="px-4 py-3 text-sm text-[#f85149]/80 text-center">{bad}</div>
              <div className="px-4 py-3 text-sm text-[#3fb950]/80 text-center">{good}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Install Git */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Installing Git</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-2">🪟 Windows</h4>
            <CodeBlock code={`# Download from git-scm.com or use winget:\nwinget install Git.Git\n\n# Verify installation:\ngit --version`} title="Windows" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-2">🍎 macOS</h4>
            <CodeBlock code={`# Using Homebrew:\nbrew install git\n\n# Or install Xcode CLI tools:\nxcode-select --install\n\n# Verify:\ngit --version`} title="macOS" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-2">🐧 Linux</h4>
            <CodeBlock code={`# Debian/Ubuntu:\nsudo apt install git\n\n# Fedora:\nsudo dnf install git\n\n# Verify:\ngit --version`} title="Linux" />
          </div>
        </div>
      </div>
    </div>
  );
}
