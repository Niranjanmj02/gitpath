import CodeBlock from "./CodeBlock";
import { ArrowRight, FolderOpen, PackagePlus, Database, AlertTriangle } from "lucide-react";

export default function CoreWorkflow() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-3">The Git Workflow</h2>
        <p className="text-[#8b949e] text-lg">Every Git operation revolves around three stages. Master these and you master Git.</p>
      </div>

      {/* 3-Stage Flow Diagram */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Working Directory */}
          <div className="w-full md:w-48 bg-[#0d1117] border border-[#d29922]/40 rounded-xl p-5 text-center">
            <FolderOpen size={28} className="mx-auto text-[#d29922] mb-2" />
            <h4 className="font-semibold text-[#e6edf3] text-sm mb-1">Working Directory</h4>
            <p className="text-xs text-[#8b949e]">Where you edit files</p>
          </div>

          {/* Arrow 1 */}
          <div className="flex flex-col items-center gap-1 text-center">
            <ArrowRight size={24} className="text-[#2f81f7] hidden md:block" />
            <div className="md:hidden w-0.5 h-6 bg-[#2f81f7]" />
            <code className="text-xs text-[#2f81f7] font-mono bg-[#2f81f7]/10 px-2 py-0.5 rounded">git add</code>
          </div>

          {/* Staging Area */}
          <div className="w-full md:w-48 bg-[#0d1117] border border-[#2f81f7]/40 rounded-xl p-5 text-center">
            <PackagePlus size={28} className="mx-auto text-[#2f81f7] mb-2" />
            <h4 className="font-semibold text-[#e6edf3] text-sm mb-1">Staging Area</h4>
            <p className="text-xs text-[#8b949e]">What will be in the next commit</p>
          </div>

          {/* Arrow 2 */}
          <div className="flex flex-col items-center gap-1 text-center">
            <ArrowRight size={24} className="text-[#3fb950] hidden md:block" />
            <div className="md:hidden w-0.5 h-6 bg-[#3fb950]" />
            <code className="text-xs text-[#3fb950] font-mono bg-[#3fb950]/10 px-2 py-0.5 rounded">git commit</code>
          </div>

          {/* Repository */}
          <div className="w-full md:w-48 bg-[#0d1117] border border-[#3fb950]/40 rounded-xl p-5 text-center">
            <Database size={28} className="mx-auto text-[#3fb950] mb-2" />
            <h4 className="font-semibold text-[#e6edf3] text-sm mb-1">Local Repository</h4>
            <p className="text-xs text-[#8b949e]">Permanent history</p>
          </div>
        </div>
      </div>

      {/* Stage Details */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h4 className="font-semibold text-[#d29922] mb-2 flex items-center gap-2"><FolderOpen size={16}/> Working Directory</h4>
          <p className="text-sm text-[#8b949e] mb-3">This is your project folder — the files you see and edit. Any change here is "untracked" or "modified" until you stage it.</p>
          <p className="text-xs text-[#8b949e]"><span className="text-[#e6edf3] font-semibold">Commands:</span> You just edit files normally with your editor.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h4 className="font-semibold text-[#2f81f7] mb-2 flex items-center gap-2"><PackagePlus size={16}/> Staging Area</h4>
          <p className="text-sm text-[#8b949e] mb-3">A "loading dock" where you prepare exactly which changes go into the next commit. You can stage individual files or all at once.</p>
          <p className="text-xs text-[#8b949e]"><span className="text-[#e6edf3] font-semibold">Commands:</span> git add, git reset HEAD, git diff --staged</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h4 className="font-semibold text-[#3fb950] mb-2 flex items-center gap-2"><Database size={16}/> Local Repository</h4>
          <p className="text-sm text-[#8b949e] mb-3">The .git directory storing your entire commit history. Once committed, changes are safe and can be recovered even if you mess up.</p>
          <p className="text-xs text-[#8b949e]"><span className="text-[#e6edf3] font-semibold">Commands:</span> git commit, git log, git show</p>
        </div>
      </div>

      {/* Full Walkthrough */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Full Walkthrough: Your First Commit</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-[#8b949e] mb-2"><span className="text-[#2f81f7] font-semibold">Step 1:</span> Create a project and initialize Git</p>
            <CodeBlock code={`mkdir my-website\ncd my-website\ngit init`} title="Step 1: Init" />
            <p className="text-xs text-[#8b949e]">Output: <code className="text-[#a5d6ff]">Initialized empty Git repository in /my-website/.git/</code></p>
          </div>
          <div>
            <p className="text-sm text-[#8b949e] mb-2"><span className="text-[#2f81f7] font-semibold">Step 2:</span> Create a file</p>
            <CodeBlock code={`echo "<h1>Hello World</h1>" > index.html`} title="Step 2: Create file" />
          </div>
          <div>
            <p className="text-sm text-[#8b949e] mb-2"><span className="text-[#2f81f7] font-semibold">Step 3:</span> Check the status — your file is untracked</p>
            <CodeBlock code={`$ git status\nOn branch main\n\nNo commits yet\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n        index.html\n\nnothing added to commit but untracked files present`} title="git status" />
          </div>
          <div>
            <p className="text-sm text-[#8b949e] mb-2"><span className="text-[#3fb950] font-semibold">Step 4:</span> Stage the file</p>
            <CodeBlock code={`git add index.html`} title="Step 4: Stage" />
          </div>
          <div>
            <p className="text-sm text-[#8b949e] mb-2"><span className="text-[#3fb950] font-semibold">Step 5:</span> Commit with a message</p>
            <CodeBlock code={`git commit -m "Add homepage"`} title="Step 5: Commit" />
            <p className="text-xs text-[#8b949e]">Output: <code className="text-[#a5d6ff]">[main (root-commit) a1b2c3d] Add homepage</code></p>
          </div>
          <div>
            <p className="text-sm text-[#8b949e] mb-2"><span className="text-[#2f81f7] font-semibold">Step 6:</span> View commit history</p>
            <CodeBlock code={`$ git log --oneline\na1b2c3d (HEAD -> main) Add homepage`} title="git log" />
          </div>
        </div>
      </div>

      {/* Common Mistake */}
      <div className="bg-[#f85149]/5 border border-[#f85149]/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-[#f85149] mb-3 flex items-center gap-2">
          <AlertTriangle size={20} /> Common Mistake: Committing Without Staging
        </h3>
        <p className="text-sm text-[#8b949e] mb-4">
          If you try to commit without staging first, Git will tell you there's nothing to commit:
        </p>
        <CodeBlock
          code={`# You edited style.css but forgot to git add\n$ git commit -m "Update styles"\n\nOn branch main\nChanges not staged for commit:\n  modified:   style.css\n\nno changes added to commit`}
          title="Error"
        />
        <p className="text-sm text-[#3fb950] mt-4 font-semibold">Fix: Stage first, then commit:</p>
        <CodeBlock code={`git add style.css\ngit commit -m "Update styles"`} title="Fix" />
      </div>
    </div>
  );
}
