import CodeBlock from "./CodeBlock";
import { Cloud, Laptop, ArrowLeftRight, GitPullRequest, Shield, Copy as CopyIcon, GitFork, CheckCircle2 } from "lucide-react";

export default function RemoteGitHub() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-3">Remote Repositories & GitHub</h2>
        <p className="text-[#8b949e] text-lg">Connect your local work to the cloud. Collaborate with anyone, anywhere.</p>
      </div>

      {/* Local vs Remote Diagram */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6 text-center w-full md:w-56">
            <Laptop size={36} className="mx-auto text-[#2f81f7] mb-3" />
            <h4 className="font-semibold text-[#e6edf3] mb-1">Your Machine</h4>
            <p className="text-xs text-[#8b949e]">Local Repository</p>
            <p className="text-xs text-[#8b949e]">Working Dir + .git</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#3fb950] bg-[#3fb950]/10 px-2 py-0.5 rounded">git push →</span>
            </div>
            <ArrowLeftRight size={24} className="text-[#8b949e]" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#2f81f7] bg-[#2f81f7]/10 px-2 py-0.5 rounded">← git pull</span>
            </div>
          </div>
          <div className="bg-[#0d1117] border border-[#2f81f7]/40 rounded-xl p-6 text-center w-full md:w-56">
            <Cloud size={36} className="mx-auto text-[#d29922] mb-3" />
            <h4 className="font-semibold text-[#e6edf3] mb-1">GitHub (Remote)</h4>
            <p className="text-xs text-[#8b949e]">Remote Repository</p>
            <p className="text-xs text-[#8b949e]">origin/main</p>
          </div>
        </div>
      </div>

      {/* Remote Commands */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Essential Remote Commands</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-[#e6edf3] font-semibold mb-1">Connect your local repo to GitHub</p>
            <CodeBlock code={`# Add a remote named "origin"\ngit remote add origin https://github.com/username/my-project.git\n\n# Verify the remote\ngit remote -v\n# origin  https://github.com/username/my-project.git (fetch)\n# origin  https://github.com/username/my-project.git (push)`} title="git remote" />
          </div>
          <div>
            <p className="text-sm text-[#e6edf3] font-semibold mb-1">Push your code to GitHub</p>
            <CodeBlock code={`# First push — set upstream tracking\ngit push -u origin main\n\n# Subsequent pushes — just:\ngit push`} title="git push" />
          </div>
          <div>
            <p className="text-sm text-[#e6edf3] font-semibold mb-1">Pull latest changes from remote</p>
            <CodeBlock code={`# Fetch AND merge in one step:\ngit pull origin main\n\n# Or fetch first, review, then merge:\ngit fetch origin\ngit log origin/main --oneline\ngit merge origin/main`} title="git pull vs fetch" />
          </div>
        </div>
      </div>

      {/* SSH vs HTTPS */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">SSH vs HTTPS</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#2f81f7] mb-2 flex items-center gap-2"><Shield size={16}/> HTTPS</h4>
            <CodeBlock code={`git clone https://github.com/user/repo.git`} title="HTTPS" />
            <ul className="text-xs text-[#8b949e] list-disc list-inside space-y-1 mt-2">
              <li>Easier to set up — works immediately</li>
              <li>Requires entering credentials (or token)</li>
              <li>Works through most firewalls</li>
              <li>Best for: quick start, corporate networks</li>
            </ul>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#3fb950] mb-2 flex items-center gap-2"><Shield size={16}/> SSH</h4>
            <CodeBlock code={`git clone git@github.com:user/repo.git`} title="SSH" />
            <ul className="text-xs text-[#8b949e] list-disc list-inside space-y-1 mt-2">
              <li>Requires SSH key setup (one-time)</li>
              <li>No password prompts after setup</li>
              <li>More secure — uses key-based auth</li>
              <li>Best for: daily use, frequent pushes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fork vs Clone */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Fork vs Clone</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#d29922] mb-2 flex items-center gap-2"><GitFork size={16}/> Fork</h4>
            <p className="text-sm text-[#8b949e] mb-2">Creates a <strong className="text-[#e6edf3]">copy of someone else's repo</strong> under your GitHub account. Used for contributing to open-source projects.</p>
            <p className="text-xs text-[#8b949e]">Fork → Clone your fork → Make changes → Open PR to original repo</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#2f81f7] mb-2 flex items-center gap-2"><CopyIcon size={16}/> Clone</h4>
            <p className="text-sm text-[#8b949e] mb-2">Downloads a <strong className="text-[#e6edf3]">local copy of any repo</strong> to your machine. You can clone your own repos or any public repo.</p>
            <p className="text-xs text-[#8b949e]">Clone → Edit → Push (if you have permission)</p>
          </div>
        </div>
      </div>

      {/* Pull Requests */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4 flex items-center gap-2">
          <GitPullRequest size={24} className="text-[#d2a8ff]" /> Pull Requests
        </h3>
        <p className="text-[#8b949e] mb-6">A Pull Request (PR) is how you propose changes on GitHub. Here's the step-by-step flow:</p>
        <div className="space-y-3">
          {[
            { step: 1, title: "Create a feature branch", desc: "Branch off from main to isolate your work.", code: "git checkout -b feature-dark-mode" },
            { step: 2, title: "Make changes & commit", desc: "Write code, stage, and commit.", code: 'git add .\ngit commit -m "Add dark mode toggle"' },
            { step: 3, title: "Push to GitHub", desc: "Upload your branch to the remote.", code: "git push -u origin feature-dark-mode" },
            { step: 4, title: "Open a PR on GitHub", desc: "Go to your repo on GitHub → 'Compare & pull request' → Write a description → Submit.", code: null },
            { step: 5, title: "Code review", desc: "Team members review your code, leave comments, request changes.", code: null },
            { step: 6, title: "Merge & clean up", desc: "Once approved, merge the PR and delete the branch.", code: "git switch main\ngit pull\ngit branch -d feature-dark-mode" },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2f81f7]/20 text-[#2f81f7] flex items-center justify-center text-sm font-bold shrink-0">{item.step}</div>
              <div className="flex-1">
                <h5 className="text-sm font-semibold text-[#e6edf3] mb-1">{item.title}</h5>
                <p className="text-xs text-[#8b949e] mb-2">{item.desc}</p>
                {item.code && <CodeBlock code={item.code} title={`Step ${item.step}`} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Flow */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">GitHub Flow</h3>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 overflow-x-auto">
          <div className="flex items-center gap-3 min-w-[600px] justify-center">
            {["Create Branch", "Add Commits", "Open PR", "Review", "Merge", "Deploy"].map((step, i, arr) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-xs font-semibold text-center p-1
                    ${i < 2 ? "bg-[#2f81f7]/10 border border-[#2f81f7]/40 text-[#2f81f7]" : ""}
                    ${i >= 2 && i < 4 ? "bg-[#d29922]/10 border border-[#d29922]/40 text-[#d29922]" : ""}
                    ${i >= 4 ? "bg-[#3fb950]/10 border border-[#3fb950]/40 text-[#3fb950]" : ""}
                  `}>
                    {step}
                  </div>
                </div>
                {i < arr.length - 1 && <div className="w-8 h-0.5 bg-[#30363d] mx-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
