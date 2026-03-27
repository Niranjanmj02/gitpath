import CodeBlock from "./CodeBlock";
import { GitBranch, GitMerge, AlertTriangle, Info } from "lucide-react";

export default function BranchingMerging() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-3">Branching & Merging</h2>
        <p className="text-[#8b949e] text-lg">Branches are <span className="text-[#2f81f7]">parallel universes</span> for your code. Work on features in isolation, then merge them back.</p>
      </div>

      {/* Branch Diagram */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-8 overflow-x-auto">
        <h4 className="text-sm font-semibold text-[#8b949e] mb-6 uppercase tracking-wider">Branch Visualization</h4>
        <div className="min-w-[550px] space-y-6">
          {/* Main branch */}
          <div className="flex items-center gap-0">
            <span className="text-xs font-mono text-[#3fb950] w-20 shrink-0">main</span>
            <div className="flex items-center">
              {["C1", "C2", "C3"].map((c, i) => (
                <div key={c} className="flex items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-[#3fb950] bg-[#3fb950]/10 flex items-center justify-center text-xs font-mono text-[#3fb950] font-bold">{c}</div>
                  {i < 2 && <div className="w-12 h-0.5 bg-[#3fb950]/50" />}
                </div>
              ))}
              <div className="w-12 h-0.5 bg-[#30363d] border-dashed" />
              {/* Merge commit */}
              <div className="w-10 h-10 rounded-full border-2 border-[#d2a8ff] bg-[#d2a8ff]/10 flex items-center justify-center text-xs font-mono text-[#d2a8ff] font-bold">M</div>
              <div className="w-8 h-0.5 bg-[#3fb950]/50" />
              <div className="w-10 h-10 rounded-full border-2 border-[#3fb950] bg-[#3fb950]/10 flex items-center justify-center text-xs font-mono text-[#3fb950] font-bold">C6</div>
            </div>
          </div>
          {/* Feature branch line */}
          <div className="flex items-center gap-0">
            <span className="text-xs font-mono text-[#2f81f7] w-20 shrink-0">feature</span>
            <div className="w-10 h-10 opacity-0">.</div>
            <div className="w-12 opacity-0">.</div>
            <div className="w-10 h-10 opacity-0">.</div>
            {/* Branch off point has diagonal connector implied */}
            <div className="w-12 h-0.5 bg-[#2f81f7]/50 -rotate-12 origin-left" />
            {["C4", "C5"].map((c, i) => (
              <div key={c} className="flex items-center">
                <div className="w-10 h-10 rounded-full border-2 border-[#2f81f7] bg-[#2f81f7]/10 flex items-center justify-center text-xs font-mono text-[#2f81f7] font-bold">{c}</div>
                {i < 1 && <div className="w-12 h-0.5 bg-[#2f81f7]/50" />}
              </div>
            ))}
            <div className="w-12 h-0.5 bg-[#2f81f7]/30 rotate-12 origin-left" />
          </div>
        </div>
        <p className="text-xs text-[#8b949e] mt-4">Feature branch diverges at C3, adds commits C4 & C5, then merges back to main at M</p>
      </div>

      {/* Branch Commands */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Branch Commands</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-[#e6edf3] font-semibold mb-1">List all branches</p>
            <CodeBlock code={`$ git branch\n* main\n  feature-login\n  bugfix-header`} title="git branch" />
          </div>
          <div>
            <p className="text-sm text-[#e6edf3] font-semibold mb-1">Create and switch to a new branch</p>
            <CodeBlock code={`# Old way:\ngit checkout -b feature-login\n\n# Modern way (Git 2.23+):\ngit switch -c feature-login`} title="Create branch" />
          </div>
          <div>
            <p className="text-sm text-[#e6edf3] font-semibold mb-1">Merge a branch into main</p>
            <CodeBlock code={`# First, switch to main:\ngit switch main\n\n# Then merge the feature branch:\ngit merge feature-login\n\n# Delete the merged branch:\ngit branch -d feature-login`} title="Merge" />
          </div>
        </div>
      </div>

      {/* Merge vs Rebase */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Merge vs Rebase</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#3fb950] mb-2 flex items-center gap-2"><GitMerge size={16}/> git merge</h4>
            <p className="text-sm text-[#8b949e] mb-3">Creates a new "merge commit" that ties two branches together. Preserves the full history of both branches.</p>
            <p className="text-xs text-[#e6edf3] mb-1 font-semibold">When to use:</p>
            <ul className="text-xs text-[#8b949e] list-disc list-inside space-y-1">
              <li>Merging feature branches into main</li>
              <li>When you want to preserve branch history</li>
              <li>Shared/public branches</li>
            </ul>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#2f81f7] mb-2 flex items-center gap-2"><GitBranch size={16}/> git rebase</h4>
            <p className="text-sm text-[#8b949e] mb-3">Moves your branch's commits on top of another branch, rewriting history for a clean linear timeline.</p>
            <p className="text-xs text-[#e6edf3] mb-1 font-semibold">When to use:</p>
            <ul className="text-xs text-[#8b949e] list-disc list-inside space-y-1">
              <li>Cleaning up local feature branches before merging</li>
              <li>When you want a linear commit history</li>
              <li>Private/local branches only</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fast-forward vs 3-way */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Fast-Forward vs 3-Way Merge</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#d29922] mb-2">⚡ Fast-Forward Merge</h4>
            <p className="text-sm text-[#8b949e] mb-2">Happens when main hasn't changed since you branched off. Git just moves the main pointer forward — no merge commit needed.</p>
            <CodeBlock code={`# main: C1 - C2\n# feature: C1 - C2 - C3 - C4\n# After merge: C1 - C2 - C3 - C4 (main moves to C4)`} title="Fast-forward" />
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#d2a8ff] mb-2">🔀 3-Way Merge</h4>
            <p className="text-sm text-[#8b949e] mb-2">Happens when both branches have new commits. Git creates a merge commit that combines both sets of changes.</p>
            <CodeBlock code={`# main: C1 - C2 - C5\n# feature: C1 - C2 - C3 - C4\n# After merge: creates merge commit M\n# main: C1 - C2 - C5 - M`} title="3-way merge" />
          </div>
        </div>
      </div>

      {/* Merge Conflicts */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4 flex items-center gap-2">
          <AlertTriangle size={24} className="text-[#f85149]" /> Merge Conflicts
        </h3>
        <p className="text-[#8b949e] mb-4">When two branches edit the same lines, Git can't auto-merge and marks the conflict:</p>
        <CodeBlock code={`<<<<<<< HEAD\n<h1>Welcome to our website</h1>\n=======\n<h1>Welcome to my portfolio</h1>\n>>>>>>> feature-redesign`} title="Conflict in index.html" />
        <div className="mt-4 space-y-3">
          <p className="text-sm text-[#e6edf3]"><span className="text-[#2f81f7] font-bold">Step 1:</span> Open the conflicted file and look for the <code className="text-[#ff7b72]">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> markers</p>
          <p className="text-sm text-[#e6edf3]"><span className="text-[#2f81f7] font-bold">Step 2:</span> Decide which version to keep (or combine both). Remove the conflict markers.</p>
          <p className="text-sm text-[#e6edf3]"><span className="text-[#2f81f7] font-bold">Step 3:</span> Stage the resolved file and commit:</p>
          <CodeBlock code={`git add index.html\ngit commit -m "Resolve merge conflict in index.html"`} title="Resolve conflict" />
        </div>
      </div>
    </div>
  );
}
