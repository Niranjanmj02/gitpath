import CodeBlock from "./CodeBlock";
import { GitBranch, GitMerge, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function BranchingMerging() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-3">Branching & Merging</h2>
        <p className="text-[#8b949e] text-lg">
          Branches let you work on new features without touching the main code. 
          Think of them as <span className="text-[#2f81f7]">parallel universes</span> for your project.
        </p>
      </div>

      {/* Simple Analogy */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h3 className="text-xl font-bold text-[#e6edf3] mb-3">🎨 The Notebook Analogy</h3>
        <p className="text-sm text-[#8b949e] leading-relaxed mb-4">
          Imagine you have a finished drawing in your notebook. You want to try coloring it, but you're not sure it'll look good.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#f85149]/5 border border-[#f85149]/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-[#f85149] mb-1">❌ Without branches</p>
            <p className="text-xs text-[#8b949e]">You color directly on the original drawing. If it looks bad, you've ruined it.</p>
          </div>
          <div className="bg-[#3fb950]/5 border border-[#3fb950]/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-[#3fb950] mb-1">✅ With branches</p>
            <p className="text-xs text-[#8b949e]">You photocopy the drawing, color on the copy. If it looks good, you replace the original. If not, throw the copy away. The original stays safe!</p>
          </div>
        </div>
      </div>

      {/* What is a Branch */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">🌿 What Is a Branch?</h3>
        <p className="text-[#8b949e] mb-4">
          A <strong className="text-[#e6edf3]">branch</strong> is a separate copy of your project where you can make changes 
          without affecting the main code. Every repo starts with one branch called <code className="text-[#3fb950]">main</code>.
        </p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-8 overflow-x-auto">
          <p className="text-xs text-[#8b949e] uppercase font-semibold tracking-wider mb-6">How Branches Work</p>
          <div className="min-w-[480px] space-y-8">
            {/* Main branch */}
            <div className="flex items-center gap-0">
              <span className="text-xs font-mono text-[#3fb950] w-16 shrink-0 font-bold">main</span>
              <div className="flex items-center">
                {["C1", "C2", "C3"].map((c, i) => (
                  <div key={c} className="flex items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-[#3fb950] bg-[#3fb950]/10 flex items-center justify-center text-xs font-mono text-[#3fb950] font-bold">{c}</div>
                    {i < 2 && <div className="w-12 h-0.5 bg-[#3fb950]/40" />}
                  </div>
                ))}
                <div className="w-20 h-0.5 bg-[#30363d]" />
                <div className="w-10 h-10 rounded-full border-2 border-[#d2a8ff] bg-[#d2a8ff]/10 flex items-center justify-center text-[10px] font-mono text-[#d2a8ff] font-bold">M</div>
                <div className="w-8 h-0.5 bg-[#3fb950]/40" />
                <div className="w-10 h-10 rounded-full border-2 border-[#3fb950] bg-[#3fb950]/10 flex items-center justify-center text-xs font-mono text-[#3fb950] font-bold">C6</div>
                <span className="text-[10px] text-[#3fb950] ml-2 bg-[#3fb950]/10 px-1.5 py-0.5 rounded">HEAD</span>
              </div>
            </div>
            {/* Feature branch */}
            <div className="flex items-center gap-0">
              <span className="text-xs font-mono text-[#2f81f7] w-16 shrink-0 font-bold">feature</span>
              <div className="w-10 opacity-0">.</div><div className="w-12 opacity-0">.</div>
              <div className="w-10 opacity-0">.</div>
              <div className="w-12 h-0.5 bg-[#2f81f7]/40 origin-left" />
              {["C4", "C5"].map((c, i) => (
                <div key={c} className="flex items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-[#2f81f7] bg-[#2f81f7]/10 flex items-center justify-center text-xs font-mono text-[#2f81f7] font-bold">{c}</div>
                  {i < 1 && <div className="w-12 h-0.5 bg-[#2f81f7]/40" />}
                </div>
              ))}
              <div className="w-8 h-0.5 bg-[#2f81f7]/30" />
            </div>
          </div>
          <div className="mt-6 space-y-1">
            <p className="text-xs text-[#8b949e]">📌 C1-C3 are on <span className="text-[#3fb950]">main</span> — the stable code</p>
            <p className="text-xs text-[#8b949e]">📌 C4-C5 are on <span className="text-[#2f81f7]">feature</span> — new work, separate from main</p>
            <p className="text-xs text-[#8b949e]">📌 <span className="text-[#d2a8ff]">M</span> is the merge commit — feature gets combined back into main</p>
          </div>
        </div>
      </div>

      {/* Branch Commands Step by Step */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">🛠️ Branch Commands (Step by Step)</h3>

        <div className="space-y-6">
          <div className="border-l-2 border-[#2f81f7] pl-4">
            <p className="text-sm font-bold text-[#2f81f7] mb-1">1. See all branches</p>
            <p className="text-xs text-[#8b949e] mb-2">The * shows which branch you're currently on.</p>
            <CodeBlock code={`$ git branch\n* main\n  feature-login\n  bugfix-header`} title="List branches" />
          </div>

          <div className="border-l-2 border-[#3fb950] pl-4">
            <p className="text-sm font-bold text-[#3fb950] mb-1">2. Create a new branch AND switch to it</p>
            <p className="text-xs text-[#8b949e] mb-2">This is the command you'll use most:</p>
            <CodeBlock code={`# Create + switch in one command:\ngit checkout -b feature-login\n\n# Or the newer way (Git 2.23+):\ngit switch -c feature-login\n\n# Both do the same thing!\n# You're now on the "feature-login" branch`} title="Create branch" />
          </div>

          <div className="border-l-2 border-[#d29922] pl-4">
            <p className="text-sm font-bold text-[#d29922] mb-1">3. Switch between branches</p>
            <p className="text-xs text-[#8b949e] mb-2">Go back to main or any other branch:</p>
            <CodeBlock code={`# Switch to main branch:\ngit switch main\n# or: git checkout main\n\n# Switch to feature branch:\ngit switch feature-login`} title="Switch branches" />
          </div>

          <div className="border-l-2 border-[#d2a8ff] pl-4">
            <p className="text-sm font-bold text-[#d2a8ff] mb-1">4. Merge a branch into main</p>
            <p className="text-xs text-[#8b949e] mb-2">When your feature is done, merge it back:</p>
            <CodeBlock code={`# First, go to main:\ngit switch main\n\n# Then merge your feature branch into main:\ngit merge feature-login\n# ✅ All changes from feature-login are now in main!\n\n# Clean up — delete the branch (it's merged, you don't need it):\ngit branch -d feature-login`} title="Merge" />
          </div>
        </div>
      </div>

      {/* Merge vs Rebase */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">🔀 Merge vs Rebase (Don't Worry, It's Simple)</h3>
        <p className="text-[#8b949e] mb-4">There are two ways to combine branches. As a beginner, <strong className="text-[#e6edf3]">just use merge</strong>. Learn rebase later.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#161b22] border border-[#3fb950]/30 rounded-xl p-5">
            <h4 className="font-semibold text-[#3fb950] mb-2 flex items-center gap-2"><GitMerge size={16}/> git merge ✅ Use this!</h4>
            <p className="text-sm text-[#8b949e] mb-3">Combines branches by creating a "merge commit". Like putting two puzzle pieces together — you can still see both pieces.</p>
            <ul className="text-xs text-[#8b949e] list-disc list-inside space-y-1">
              <li>Safe and simple</li>
              <li>Preserves full history</li>
              <li>Best for beginners</li>
            </ul>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#2f81f7] mb-2 flex items-center gap-2"><GitBranch size={16}/> git rebase 📚 Learn later</h4>
            <p className="text-sm text-[#8b949e] mb-3">Moves your branch's commits on top of the other branch, creating a straight line history. Rewrites history.</p>
            <ul className="text-xs text-[#8b949e] list-disc list-inside space-y-1">
              <li>Clean, linear history</li>
              <li>More advanced</li>
              <li>Don't use on shared branches</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fast-forward vs 3-way */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Two Types of Merges</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#d29922] mb-2">⚡ Fast-Forward Merge</h4>
            <p className="text-sm text-[#8b949e] mb-2">When main hasn't changed since you branched. Git just slides the main pointer forward. No extra merge commit.</p>
            <p className="text-xs text-[#8b949e]">Like: "No one else has committed to main, so I'll just add yours on top."</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h4 className="font-semibold text-[#d2a8ff] mb-2">🔀 3-Way Merge</h4>
            <p className="text-sm text-[#8b949e] mb-2">When both branches have new commits. Git creates a merge commit to combine them.</p>
            <p className="text-xs text-[#8b949e]">Like: "Both sides changed, let me create a new commit that brings everything together."</p>
          </div>
        </div>
      </div>

      {/* Merge Conflicts */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4 flex items-center gap-2">
          <AlertTriangle size={24} className="text-[#f85149]" /> Merge Conflicts (Don't Panic!)
        </h3>
        <p className="text-[#8b949e] mb-4">
          A merge conflict happens when <strong className="text-[#e6edf3]">two branches change the same line</strong> in the same file. 
          Git doesn't know which version to keep, so it asks you to decide.
        </p>
        
        <p className="text-sm text-[#e6edf3] font-semibold mb-2">This is what a conflict looks like inside a file:</p>
        <CodeBlock code={`<<<<<<< HEAD\n<h1>Welcome to our website</h1>\n=======\n<h1>Welcome to my portfolio</h1>\n>>>>>>> feature-redesign`} title="Conflict in index.html" />
        
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 mt-4 space-y-2">
          <p className="text-xs text-[#8b949e]">Let's break it down:</p>
          <p className="text-xs text-[#8b949e]">• Everything between <code className="text-[#ff7b72]">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> and <code className="text-[#ff7b72]">=======</code> is <strong className="text-[#e6edf3]">your version</strong> (main)</p>
          <p className="text-xs text-[#8b949e]">• Everything between <code className="text-[#ff7b72]">=======</code> and <code className="text-[#ff7b72]">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> is <strong className="text-[#e6edf3]">their version</strong> (feature branch)</p>
        </div>

        <div className="mt-4 space-y-3">
          <p className="text-sm font-semibold text-[#3fb950] flex items-center gap-2"><CheckCircle2 size={16}/> How to fix it (3 easy steps):</p>
          <div className="border-l-2 border-[#3fb950] pl-4 space-y-3">
            <div>
              <p className="text-sm text-[#e6edf3] font-semibold">Step 1: Open the file</p>
              <p className="text-xs text-[#8b949e]">Find the conflict markers and decide which version to keep (or combine both).</p>
            </div>
            <div>
              <p className="text-sm text-[#e6edf3] font-semibold">Step 2: Remove the markers and keep what you want</p>
              <CodeBlock code={`<h1>Welcome to my portfolio</h1>`} title="After fixing" />
            </div>
            <div>
              <p className="text-sm text-[#e6edf3] font-semibold">Step 3: Stage and commit the fix</p>
              <CodeBlock code={`git add index.html\ngit commit -m "Resolve merge conflict in heading"`} title="Resolve" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#3fb950]/5 border border-[#3fb950]/30 rounded-xl p-6 text-center">
        <p className="text-lg text-[#e6edf3] font-semibold mb-2">🌿 Branching mastered!</p>
        <p className="text-sm text-[#8b949e]">
          Next: <strong className="text-[#2f81f7]">Remote & GitHub</strong> — learn how to put your code online and collaborate with others.
        </p>
      </div>
    </div>
  );
}
