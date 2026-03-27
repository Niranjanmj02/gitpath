import CodeBlock from "./CodeBlock";
import { Cloud, Laptop, ArrowLeftRight, GitPullRequest, Shield, GitFork, Copy as CopyIcon, CheckCircle2, ArrowRight } from "lucide-react";

export default function RemoteGitHub() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-3">Remote Repositories & GitHub</h2>
        <p className="text-[#8b949e] text-lg">
          So far, everything has been on your computer. Now let's put your code <span className="text-[#2f81f7]">online</span> — 
          so you can share it, collaborate, and never lose your work.
        </p>
      </div>

      {/* What is GitHub */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">🤔 Git ≠ GitHub</h3>
        <p className="text-[#8b949e] mb-4">Many beginners confuse these. Here's the difference:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <p className="text-2xl mb-2">⚙️</p>
            <h4 className="font-semibold text-[#e6edf3] mb-2">Git</h4>
            <p className="text-sm text-[#8b949e]">A <strong className="text-[#e6edf3]">tool</strong> that runs on your computer. It tracks changes to your files. Works offline. Free and open-source.</p>
          </div>
          <div className="bg-[#161b22] border border-[#2f81f7]/30 rounded-xl p-5">
            <p className="text-2xl mb-2">🌐</p>
            <h4 className="font-semibold text-[#e6edf3] mb-2">GitHub</h4>
            <p className="text-sm text-[#8b949e]">A <strong className="text-[#e6edf3]">website</strong> that stores your Git repos online. It adds features like Pull Requests, Issues, and collaboration. Others: GitLab, Bitbucket.</p>
          </div>
        </div>
        <p className="text-xs text-[#8b949e] mt-3">💡 Think of it like: Git is the camera, GitHub is Instagram. You can take photos without Instagram, but Instagram makes sharing easier.</p>
      </div>

      {/* Local vs Remote Diagram */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">🔗 Local vs Remote</h3>
        <p className="text-[#8b949e] mb-4">Your code lives in two places — your computer and GitHub's server:</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6 text-center w-full md:w-56">
              <Laptop size={36} className="mx-auto text-[#2f81f7] mb-3" />
              <h4 className="font-semibold text-[#e6edf3] mb-1">Your Computer</h4>
              <p className="text-xs text-[#8b949e]">Local Repository</p>
              <p className="text-xs text-[#8b949e]">Where you write code</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-mono text-[#3fb950] bg-[#3fb950]/10 px-2 py-0.5 rounded">git push →</span>
              <ArrowLeftRight size={24} className="text-[#8b949e]" />
              <span className="text-xs font-mono text-[#2f81f7] bg-[#2f81f7]/10 px-2 py-0.5 rounded">← git pull</span>
            </div>
            <div className="bg-[#0d1117] border border-[#2f81f7]/40 rounded-xl p-6 text-center w-full md:w-56">
              <Cloud size={36} className="mx-auto text-[#d29922] mb-3" />
              <h4 className="font-semibold text-[#e6edf3] mb-1">GitHub</h4>
              <p className="text-xs text-[#8b949e]">Remote Repository</p>
              <p className="text-xs text-[#8b949e]">Online backup & sharing</p>
            </div>
          </div>
          <div className="mt-4 space-y-1 text-center">
            <p className="text-xs text-[#8b949e]"><code className="text-[#3fb950]">git push</code> = Upload your commits to GitHub</p>
            <p className="text-xs text-[#8b949e]"><code className="text-[#2f81f7]">git pull</code> = Download new commits from GitHub</p>
            <p className="text-xs text-[#8b949e]"><code className="text-[#d29922]">git fetch</code> = Check for updates (without downloading)</p>
          </div>
        </div>
      </div>

      {/* Step by step: Your First Push */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-2">🚀 Your First Push to GitHub (Step by Step)</h3>
        <p className="text-[#8b949e] mb-6">Let's take a local repo and put it on GitHub:</p>

        <div className="space-y-5">
          <div className="border-l-2 border-[#2f81f7] pl-4">
            <p className="text-sm font-bold text-[#2f81f7] mb-1">Step 1: Create a repo on GitHub</p>
            <p className="text-xs text-[#8b949e] mb-2">Go to <strong className="text-[#e6edf3]">github.com → New repository</strong>. Give it a name, leave everything else default, click Create.</p>
          </div>
          <div className="border-l-2 border-[#3fb950] pl-4">
            <p className="text-sm font-bold text-[#3fb950] mb-1">Step 2: Connect your local repo to GitHub</p>
            <p className="text-xs text-[#8b949e] mb-2">GitHub gives you a URL. Use it to tell your local repo where the remote is:</p>
            <CodeBlock code={`# "origin" is just a nickname for the remote URL\ngit remote add origin https://github.com/YOUR-USERNAME/my-project.git\n\n# Verify it was added:\n$ git remote -v\norigin  https://github.com/YOUR-USERNAME/my-project.git (fetch)\norigin  https://github.com/YOUR-USERNAME/my-project.git (push)`} title="Connect remote" />
          </div>
          <div className="border-l-2 border-[#d29922] pl-4">
            <p className="text-sm font-bold text-[#d29922] mb-1">Step 3: Push your code!</p>
            <p className="text-xs text-[#8b949e] mb-2">Upload all your commits to GitHub:</p>
            <CodeBlock code={`# First time — set upstream tracking:\ngit push -u origin main\n\n# After the first time, just:\ngit push`} title="Push to GitHub" />
            <p className="text-xs text-[#8b949e] mt-2">🎉 Go to your GitHub repo page — your code is online!</p>
          </div>
        </div>
      </div>

      {/* Everyday Commands */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">📅 Daily Remote Commands</h3>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="text-sm font-bold text-[#3fb950] mb-2">git push — "Send my saves to GitHub"</h4>
            <p className="text-xs text-[#8b949e] mb-2">After committing locally, push your commits so the team can see them.</p>
            <CodeBlock code={`git push`} title="Push" />
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="text-sm font-bold text-[#2f81f7] mb-2">git pull — "Get the team's latest changes"</h4>
            <p className="text-xs text-[#8b949e] mb-2">Before starting work, pull to make sure you have the latest code.</p>
            <CodeBlock code={`git pull\n# This downloads AND merges new commits into your branch`} title="Pull" />
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="text-sm font-bold text-[#d29922] mb-2">git fetch — "Just check what's new (don't change anything)"</h4>
            <p className="text-xs text-[#8b949e] mb-2">Safer than pull — it downloads info but doesn't modify your files.</p>
            <CodeBlock code={`git fetch\n# Now you can look at what changed:\ngit log origin/main --oneline\n# Then merge manually if you want:\ngit merge origin/main`} title="Fetch" />
          </div>
        </div>
      </div>

      {/* SSH vs HTTPS */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">🔐 SSH vs HTTPS</h3>
        <p className="text-[#8b949e] mb-4">Two ways to connect to GitHub. As a beginner, <strong className="text-[#e6edf3]">start with HTTPS</strong> — it's simpler.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#161b22] border border-[#3fb950]/30 rounded-xl p-5">
            <h4 className="font-semibold text-[#3fb950] mb-2 flex items-center gap-2"><Shield size={16}/> HTTPS ✅ Start here</h4>
            <CodeBlock code={`git clone https://github.com/user/repo.git`} title="HTTPS" />
            <ul className="text-xs text-[#8b949e] list-disc list-inside space-y-1 mt-2">
              <li>Works immediately — no setup needed</li>
              <li>You'll be asked for username/password (or token)</li>
              <li>Works through firewalls</li>
            </ul>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#2f81f7] mb-2 flex items-center gap-2"><Shield size={16}/> SSH 📚 Set up later</h4>
            <CodeBlock code={`git clone git@github.com:user/repo.git`} title="SSH" />
            <ul className="text-xs text-[#8b949e] list-disc list-inside space-y-1 mt-2">
              <li>Requires one-time SSH key setup</li>
              <li>No password prompts after setup</li>
              <li>More secure — uses key-based auth</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fork vs Clone */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">🍴 Fork vs Clone</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#d29922] mb-2 flex items-center gap-2"><CopyIcon size={16}/> Clone</h4>
            <p className="text-sm text-[#8b949e] mb-2">Downloads a repo to your computer. You clone your <strong className="text-[#e6edf3]">own repos</strong> to work on them locally.</p>
            <CodeBlock code={`git clone https://github.com/YOU/your-repo.git`} title="Clone" />
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#2f81f7] mb-2 flex items-center gap-2"><GitFork size={16}/> Fork</h4>
            <p className="text-sm text-[#8b949e] mb-2">Creates a copy of <strong className="text-[#e6edf3]">someone else's repo</strong> under your GitHub account. Used to contribute to other projects.</p>
            <p className="text-xs text-[#8b949e]">Fork on GitHub → Clone your fork → Make changes → Open a Pull Request</p>
          </div>
        </div>
      </div>

      {/* Pull Requests */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-2 flex items-center gap-2">
          <GitPullRequest size={24} className="text-[#d2a8ff]" /> Pull Requests (PRs)
        </h3>
        <p className="text-[#8b949e] mb-2">
          A Pull Request is a <strong className="text-[#e6edf3]">GitHub feature</strong> (not a Git command). 
          It's how you say: <em className="text-[#2f81f7]">"Hey team, I made some changes — can you review and merge them?"</em>
        </p>
        <p className="text-xs text-[#8b949e] mb-6">This is the standard way professional teams work together on code.</p>

        <div className="space-y-3">
          {[
            { step: 1, title: "Create a branch", desc: "Never work directly on main", code: "git checkout -b add-dark-mode" },
            { step: 2, title: "Make changes & commit", desc: "Write code, add, commit as usual", code: 'git add .\ngit commit -m "Add dark mode toggle"' },
            { step: 3, title: "Push your branch", desc: "Upload the branch to GitHub", code: "git push -u origin add-dark-mode" },
            { step: 4, title: "Open a Pull Request", desc: "On GitHub, click 'Compare & Pull Request' button. Write a description of what you changed and why.", code: null },
            { step: 5, title: "Team reviews your code", desc: "They leave comments, suggest changes, or approve.", code: null },
            { step: 6, title: "Merge!", desc: "Once approved, click the Merge button on GitHub. Done! 🎉", code: null },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2f81f7]/20 text-[#2f81f7] flex items-center justify-center text-sm font-bold shrink-0">{item.step}</div>
              <div className="flex-1">
                <h5 className="text-sm font-semibold text-[#e6edf3] mb-0.5">{item.title}</h5>
                <p className="text-xs text-[#8b949e] mb-2">{item.desc}</p>
                {item.code && <CodeBlock code={item.code} title={`Step ${item.step}`} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Flow Summary */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">🔄 The GitHub Flow (How Teams Work)</h3>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-[550px] justify-center">
            {[
              { label: "Branch", emoji: "🌿", color: "#2f81f7" },
              { label: "Commit", emoji: "💾", color: "#2f81f7" },
              { label: "Push", emoji: "🚀", color: "#d29922" },
              { label: "PR", emoji: "📝", color: "#d29922" },
              { label: "Review", emoji: "👀", color: "#d29922" },
              { label: "Merge", emoji: "✅", color: "#3fb950" },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center w-16">
                  <span className="text-xl mb-1">{step.emoji}</span>
                  <span className="text-[10px] font-semibold" style={{ color: step.color }}>{step.label}</span>
                </div>
                {i < arr.length - 1 && <ArrowRight size={14} className="text-[#30363d] mx-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#3fb950]/5 border border-[#3fb950]/30 rounded-xl p-6 text-center">
        <p className="text-lg text-[#e6edf3] font-semibold mb-2">🌐 You're connected!</p>
        <p className="text-sm text-[#8b949e]">
          Next: <strong className="text-[#2f81f7]">Command Reference</strong> — a searchable cheat sheet of 50+ Git commands.
        </p>
      </div>
    </div>
  );
}
