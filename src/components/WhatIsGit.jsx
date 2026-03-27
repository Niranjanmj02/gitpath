import CodeBlock from "./CodeBlock";
import { GitBranch, Clock, Database, AlertTriangle, CheckCircle2, Lightbulb, HardDrive, FolderOpen, FileText } from "lucide-react";

export default function WhatIsGit() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero */}
      <div className="text-center py-8 md:py-12 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2f81f7]/10 border border-[#2f81f7]/30 rounded-full text-sm text-[#2f81f7] mb-6">
          <Clock size={14} /> Let's start from zero
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#e6edf3] mb-4">
          What is <span className="text-[#2f81f7]">Git</span>?
        </h2>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
          Before we learn Git, let's understand the problem it solves.
        </p>
      </div>

      {/* The Problem */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">😰 The Problem (Without Git)</h3>
        <p className="text-[#8b949e] mb-4">Have you ever done something like this?</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="font-mono text-sm space-y-1">
            <p className="text-[#f85149]">📁 my-project/</p>
            <p className="text-[#8b949e] pl-4">├── report.docx</p>
            <p className="text-[#8b949e] pl-4">├── report_final.docx</p>
            <p className="text-[#8b949e] pl-4">├── report_final_v2.docx</p>
            <p className="text-[#8b949e] pl-4">├── report_FINAL_FINAL.docx</p>
            <p className="text-[#8b949e] pl-4">├── report_DONT_TOUCH.docx</p>
            <p className="text-[#d29922] pl-4">└── report_THIS_ONE_I_SWEAR.docx 😅</p>
          </div>
        </div>
        <p className="text-sm text-[#8b949e] mt-4">
          This gets messy fast. You lose track of which version is latest, what changed, and you can't undo things easily.
          Now imagine doing this with <strong className="text-[#e6edf3]">code</strong> — with hundreds of files and a team of people. Chaos!
        </p>
      </div>

      {/* What is Version Control */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">🤔 What is Version Control?</h3>
        <p className="text-[#8b949e] mb-4">
          <strong className="text-[#e6edf3]">Version Control</strong> is a system that records changes to files over time. 
          Think of it like this:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <p className="text-3xl mb-2">📱</p>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-1">Like Phone Photos</h4>
            <p className="text-xs text-[#8b949e]">Your phone's photo gallery shows every picture you took — you can scroll back to any moment. Git does this for code.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <p className="text-3xl mb-2">🎮</p>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-1">Like Game Save Points</h4>
            <p className="text-xs text-[#8b949e]">In a video game, you save before a boss fight. If you lose, you reload. Git lets you "save" your code at any point.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <p className="text-3xl mb-2">📝</p>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-1">Like Google Docs History</h4>
            <p className="text-xs text-[#8b949e]">Google Docs keeps a "version history" — you can see who changed what. Git does the same, but for entire projects.</p>
          </div>
        </div>
      </div>

      {/* So What is Git */}
      <div className="bg-[#2f81f7]/5 border border-[#2f81f7]/30 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-3">💡 So, What is Git?</h3>
        <p className="text-[#8b949e] leading-relaxed">
          <strong className="text-[#e6edf3]">Git</strong> is a <strong className="text-[#2f81f7]">free, open-source version control system</strong>. 
          It was created in 2005 by Linus Torvalds (the same person who created Linux).
        </p>
        <p className="text-[#8b949e] leading-relaxed mt-3">
          In simple words: <strong className="text-[#e6edf3]">Git is a time machine for your code.</strong> It remembers 
          every change you make, who made it, and when. You can go back to any previous version at any time.
        </p>
        <p className="text-[#8b949e] leading-relaxed mt-3">
          Git runs <strong className="text-[#e6edf3]">on your computer</strong> (locally). It doesn't need the internet 
          to work. GitHub, GitLab, etc. are websites that store your Git projects online — we'll learn about those later.
        </p>
      </div>

      {/* 3 Key Words */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-2">📖 3 Words You Must Know</h3>
        <p className="text-[#8b949e] mb-6">These are the building blocks of Git. Everything else builds on these.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: <FolderOpen size={28} className="text-[#2f81f7]" />,
              title: "Repository (Repo)",
              analogy: "📦 Think: A project folder with superpowers",
              explanation: "A repository is just a folder that Git is watching. Inside it, there's a hidden .git folder where Git stores all the history. When you say 'create a repo', you're saying 'start tracking this folder'.",
            },
            {
              icon: <CheckCircle2 size={28} className="text-[#3fb950]" />,
              title: "Commit",
              analogy: "💾 Think: Pressing 'Save Game'",
              explanation: "A commit is a snapshot of your project at one moment. Each commit has a message describing what changed (like 'Fixed the login bug'). You can have hundreds of commits — they form your project's history.",
            },
            {
              icon: <GitBranch size={28} className="text-[#d29922]" />,
              title: "Branch",
              analogy: "🌿 Think: A parallel universe",
              explanation: "A branch lets you work on something new without affecting the main code. When you're done, you merge it back. The default branch is called 'main' (or 'master' in older repos).",
            },
          ].map((card) => (
            <div key={card.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#2f81f7]/40 transition-colors">
              <div className="flex items-center gap-2 mb-3">{card.icon}<h4 className="text-lg font-semibold text-[#e6edf3]">{card.title}</h4></div>
              <p className="text-xs text-[#2f81f7] bg-[#2f81f7]/10 px-2 py-1 rounded mb-3 inline-block">{card.analogy}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{card.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How a Commit History Looks */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">📜 What Does Commit History Look Like?</h3>
        <p className="text-[#8b949e] mb-4">Each circle below is one commit (one "save point"). They form a chain — newest on the right:</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-8 overflow-x-auto">
          <div className="flex items-center gap-0 min-w-[500px] justify-center">
            {[
              { hash: "C1", msg: "Start project", time: "Mon 9am" },
              { hash: "C2", msg: "Add homepage", time: "Mon 2pm" },
              { hash: "C3", msg: "Add about page", time: "Tue 10am" },
              { hash: "C4", msg: "Fix typo", time: "Tue 3pm" },
            ].map((c, i, arr) => (
              <div key={c.hash} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#2f81f7] bg-[#2f81f7]/10 flex items-center justify-center text-xs font-mono font-bold text-[#2f81f7]">{c.hash}</div>
                  <p className="text-xs text-[#e6edf3] mt-2 max-w-[80px] text-center font-medium">{c.msg}</p>
                  <p className="text-[10px] text-[#8b949e] mt-0.5">{c.time}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-12 md:w-16 h-0.5 bg-[#2f81f7]/40 mx-1 mt-[-28px]" />
                )}
              </div>
            ))}
            <div className="ml-3 mt-[-28px]">
              <span className="text-xs text-[#3fb950] font-mono bg-[#3fb950]/10 px-2 py-1 rounded">← You are here (HEAD)</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-[#8b949e] mt-4">
          Each commit remembers: <strong className="text-[#e6edf3]">what changed</strong>, <strong className="text-[#e6edf3]">who changed it</strong>, and <strong className="text-[#e6edf3]">when</strong>. 
          You can jump back to any commit at any time!
        </p>
      </div>

      {/* Git vs No Git Comparison */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">⚖️ With Git vs Without Git</h3>
        <div className="border border-[#30363d] rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-[#161b22] border-b border-[#30363d]">
            <div className="px-4 py-3 text-xs font-semibold text-[#8b949e] uppercase">What you want to do</div>
            <div className="px-4 py-3 text-xs font-semibold text-[#f85149] uppercase text-center">Without Git 😩</div>
            <div className="px-4 py-3 text-xs font-semibold text-[#3fb950] uppercase text-center">With Git 🎉</div>
          </div>
          {[
            ["Undo a mistake", "Cry and start over", "Go back to any previous save point"],
            ["See what changed", "Compare files manually", "git diff shows exact changes"],
            ["Work with a team", "Email zip files back and forth", "Everyone pushes/pulls from shared repo"],
            ["Try something risky", "Copy the entire folder first", "Create a branch (takes 1 second)"],
            ["Track versions", "project_v2_final_REAL.zip", "Clean commit history with messages"],
            ["Find who broke it", "Ask everyone on the team", "git blame shows who changed each line"],
          ].map(([scenario, bad, good]) => (
            <div key={scenario} className="grid grid-cols-3 border-b border-[#21262d] last:border-0">
              <div className="px-4 py-3 text-sm text-[#e6edf3]">{scenario}</div>
              <div className="px-4 py-3 text-sm text-[#f85149]/70 text-center">{bad}</div>
              <div className="px-4 py-3 text-sm text-[#3fb950]/80 text-center">{good}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Install Git */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-2">⬇️ Step 1: Install Git</h3>
        <p className="text-[#8b949e] mb-4">Before doing anything else, you need Git installed on your computer. Pick your OS:</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-2">🪟 Windows</h4>
            <CodeBlock code={`# Option 1: Download installer from\n# https://git-scm.com/download/win\n\n# Option 2: Using winget (Windows 10+)\nwinget install Git.Git\n\n# After installing, open Command Prompt:\ngit --version\n# git version 2.43.0`} title="Windows" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-2">🍎 macOS</h4>
            <CodeBlock code={`# Option 1: Install via Homebrew\nbrew install git\n\n# Option 2: Xcode Command Line Tools\nxcode-select --install\n\n# Verify it works:\ngit --version\n# git version 2.43.0`} title="macOS" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-2">🐧 Linux</h4>
            <CodeBlock code={`# Ubuntu / Debian:\nsudo apt update\nsudo apt install git\n\n# Fedora:\nsudo dnf install git\n\n# Verify it works:\ngit --version\n# git version 2.43.0`} title="Linux" />
          </div>
        </div>
      </div>

      {/* First-time Setup */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-2">⚙️ Step 2: First-Time Setup</h3>
        <p className="text-[#8b949e] mb-4">After installing Git, tell it who you are. This info gets attached to every commit you make:</p>
        <CodeBlock code={`# Set your name (use your real name)\ngit config --global user.name "Your Name"\n\n# Set your email (use the same email as your GitHub account)\ngit config --global user.email "you@example.com"\n\n# Check your settings:\ngit config --list\n# user.name=Your Name\n# user.email=you@example.com`} title="One-time setup" />
        <p className="text-xs text-[#8b949e] mt-2">
          💡 The <code className="text-[#ff7b72]">--global</code> flag means this applies to ALL your repos on this computer. You only need to do this once.
        </p>
      </div>

      {/* What's Next */}
      <div className="bg-[#3fb950]/5 border border-[#3fb950]/30 rounded-xl p-6 text-center">
        <p className="text-lg text-[#e6edf3] font-semibold mb-2">✅ You're all set!</p>
        <p className="text-sm text-[#8b949e]">
          Git is installed and configured. Head to the <strong className="text-[#2f81f7]">Core Workflow</strong> tab 
          to learn your first Git commands!
        </p>
      </div>
    </div>
  );
}
