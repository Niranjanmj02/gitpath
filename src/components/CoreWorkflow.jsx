import CodeBlock from "./CodeBlock";
import { ArrowRight, FolderOpen, PackagePlus, Database, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function CoreWorkflow() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-3">The Core Workflow</h2>
        <p className="text-[#8b949e] text-lg">This is the heart of Git. Learn these steps and you can use Git for any project.</p>
      </div>

      {/* Simple Analogy First */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h3 className="text-xl font-bold text-[#e6edf3] mb-3">🏪 Think of It Like Online Shopping</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <p className="text-3xl mb-2">🛍️</p>
            <p className="text-sm font-semibold text-[#d29922] mb-1">Browse & Pick Items</p>
            <p className="text-xs text-[#8b949e]">You walk around the store and pick things you want</p>
            <p className="text-xs text-[#e6edf3] mt-2 font-mono">= Working Directory</p>
            <p className="text-xs text-[#8b949e]">(You edit your files)</p>
          </div>
          <div className="p-4">
            <p className="text-3xl mb-2">🛒</p>
            <p className="text-sm font-semibold text-[#2f81f7] mb-1">Put in Cart</p>
            <p className="text-xs text-[#8b949e]">You add items to your cart before buying</p>
            <p className="text-xs text-[#e6edf3] mt-2 font-mono">= Staging Area</p>
            <p className="text-xs text-[#8b949e]">(git add)</p>
          </div>
          <div className="p-4">
            <p className="text-3xl mb-2">✅</p>
            <p className="text-sm font-semibold text-[#3fb950] mb-1">Checkout & Pay</p>
            <p className="text-xs text-[#8b949e]">You confirm and buy everything in the cart</p>
            <p className="text-xs text-[#e6edf3] mt-2 font-mono">= Repository</p>
            <p className="text-xs text-[#8b949e]">(git commit)</p>
          </div>
        </div>
      </div>

      {/* 3-Stage Flow Diagram */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">📍 The 3 Stages of Git</h3>
        <p className="text-[#8b949e] mb-6">Every file in Git goes through these 3 places:</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-full md:w-52 bg-[#0d1117] border-2 border-[#d29922]/50 rounded-xl p-5 text-center">
              <FolderOpen size={28} className="mx-auto text-[#d29922] mb-2" />
              <h4 className="font-bold text-[#e6edf3] text-sm mb-1">1. Working Directory</h4>
              <p className="text-xs text-[#8b949e]">Your project folder.</p>
              <p className="text-xs text-[#8b949e]">Where you create & edit files.</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ArrowRight size={24} className="text-[#2f81f7] hidden md:block" />
              <div className="md:hidden w-0.5 h-6 bg-[#2f81f7]" />
              <code className="text-xs text-[#2f81f7] font-mono bg-[#2f81f7]/10 px-2 py-1 rounded font-bold">git add</code>
            </div>
            <div className="w-full md:w-52 bg-[#0d1117] border-2 border-[#2f81f7]/50 rounded-xl p-5 text-center">
              <PackagePlus size={28} className="mx-auto text-[#2f81f7] mb-2" />
              <h4 className="font-bold text-[#e6edf3] text-sm mb-1">2. Staging Area</h4>
              <p className="text-xs text-[#8b949e]">The "shopping cart".</p>
              <p className="text-xs text-[#8b949e]">What will go in the next save.</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ArrowRight size={24} className="text-[#3fb950] hidden md:block" />
              <div className="md:hidden w-0.5 h-6 bg-[#3fb950]" />
              <code className="text-xs text-[#3fb950] font-mono bg-[#3fb950]/10 px-2 py-1 rounded font-bold">git commit</code>
            </div>
            <div className="w-full md:w-52 bg-[#0d1117] border-2 border-[#3fb950]/50 rounded-xl p-5 text-center">
              <Database size={28} className="mx-auto text-[#3fb950] mb-2" />
              <h4 className="font-bold text-[#e6edf3] text-sm mb-1">3. Repository</h4>
              <p className="text-xs text-[#8b949e]">Permanent history.</p>
              <p className="text-xs text-[#8b949e]">Saved forever in .git folder.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why staging exists */}
      <div className="bg-[#d29922]/5 border border-[#d29922]/30 rounded-xl p-6">
        <h4 className="text-lg font-bold text-[#d29922] mb-2">❓ "Why can't I just save directly? Why is there a Staging Area?"</h4>
        <p className="text-sm text-[#8b949e] leading-relaxed">
          Great question! Imagine you changed 5 files, but only 2 of those changes are ready. 
          The staging area lets you <strong className="text-[#e6edf3]">pick exactly which changes</strong> go into the next commit. 
          It's like choosing which items from your cart you actually want to buy — you don't have to buy everything at once!
        </p>
      </div>

      {/* Full Walkthrough */}
      <div>
        <h3 className="text-2xl font-bold text-[#e6edf3] mb-2">🚶 Your First Git Project (Step by Step)</h3>
        <p className="text-[#8b949e] mb-6">Follow along on your own computer! Open a terminal and type each command.</p>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-2 border-[#2f81f7] pl-4">
            <p className="text-sm font-bold text-[#2f81f7] mb-1">Step 1: Create a folder and initialize Git</p>
            <p className="text-xs text-[#8b949e] mb-2">This creates a new folder and tells Git to start tracking it.</p>
            <CodeBlock code={`# Create a new folder\nmkdir my-first-repo\n\n# Go inside it\ncd my-first-repo\n\n# Tell Git: "start tracking this folder"\ngit init`} title="Terminal" />
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 mt-2">
              <p className="text-xs text-[#8b949e] mb-1">📺 You'll see this output:</p>
              <p className="text-xs font-mono text-[#3fb950]">Initialized empty Git repository in /home/you/my-first-repo/.git/</p>
            </div>
            <p className="text-xs text-[#8b949e] mt-2">🎉 Congrats! Your folder is now a Git repository. A hidden <code className="text-[#ff7b72]">.git</code> folder was created inside.</p>
          </div>

          {/* Step 2 */}
          <div className="border-l-2 border-[#d29922] pl-4">
            <p className="text-sm font-bold text-[#d29922] mb-1">Step 2: Create a file</p>
            <p className="text-xs text-[#8b949e] mb-2">Let's create a simple HTML file. You can use any text editor too.</p>
            <CodeBlock code={`# Create a simple file\necho "Hello, World!" > index.html`} title="Terminal" />
          </div>

          {/* Step 3 */}
          <div className="border-l-2 border-[#d29922] pl-4">
            <p className="text-sm font-bold text-[#d29922] mb-1">Step 3: Check the status</p>
            <p className="text-xs text-[#8b949e] mb-2"><code className="text-[#ff7b72]">git status</code> is your best friend. It tells you what's going on. Use it often!</p>
            <CodeBlock code={`git status`} title="Terminal" />
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 mt-2">
              <p className="text-xs text-[#8b949e] mb-1">📺 Output:</p>
              <pre className="text-xs font-mono text-[#e6edf3] whitespace-pre-wrap">
{`On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html

nothing added to commit but untracked files present`}
              </pre>
            </div>
            <p className="text-xs text-[#8b949e] mt-2">
              Git sees <code className="text-[#ff7b72]">index.html</code> but it's <span className="text-[#f85149]">"Untracked"</span> — meaning Git knows the file exists but isn't saving it yet. 
              We need to <strong className="text-[#e6edf3]">add</strong> it first.
            </p>
          </div>

          {/* Step 4 */}
          <div className="border-l-2 border-[#2f81f7] pl-4">
            <p className="text-sm font-bold text-[#2f81f7] mb-1">Step 4: Stage the file (add to cart)</p>
            <p className="text-xs text-[#8b949e] mb-2"><code className="text-[#ff7b72]">git add</code> moves your file to the staging area — like adding it to a shopping cart.</p>
            <CodeBlock code={`# Add one specific file:\ngit add index.html\n\n# Or add ALL files at once:\ngit add .`} title="Terminal" />
            <p className="text-xs text-[#8b949e] mt-2">Now run <code className="text-[#ff7b72]">git status</code> again — the file will show in green as "Changes to be committed".</p>
          </div>

          {/* Step 5 */}
          <div className="border-l-2 border-[#3fb950] pl-4">
            <p className="text-sm font-bold text-[#3fb950] mb-1">Step 5: Commit (save permanently!)</p>
            <p className="text-xs text-[#8b949e] mb-2"><code className="text-[#ff7b72]">git commit</code> takes everything in the staging area and saves it permanently. Always write a message describing what you did.</p>
            <CodeBlock code={`git commit -m "Add index.html with hello world"`} title="Terminal" />
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 mt-2">
              <p className="text-xs text-[#8b949e] mb-1">📺 Output:</p>
              <p className="text-xs font-mono text-[#3fb950]">[main (root-commit) a1b2c3d] Add index.html with hello world</p>
              <p className="text-xs font-mono text-[#8b949e]"> 1 file changed, 1 insertion(+)</p>
            </div>
            <p className="text-xs text-[#8b949e] mt-2">🎉 <strong className="text-[#e6edf3]">You just made your first commit!</strong> Your change is now saved in Git's history forever.</p>
          </div>

          {/* Step 6 */}
          <div className="border-l-2 border-[#d2a8ff] pl-4">
            <p className="text-sm font-bold text-[#d2a8ff] mb-1">Step 6: View your history</p>
            <p className="text-xs text-[#8b949e] mb-2"><code className="text-[#ff7b72]">git log</code> shows you all the commits you've made, newest first.</p>
            <CodeBlock code={`git log --oneline`} title="Terminal" />
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 mt-2">
              <p className="text-xs text-[#8b949e] mb-1">📺 Output:</p>
              <p className="text-xs font-mono text-[#e6edf3]"><span className="text-[#d29922]">a1b2c3d</span> <span className="text-[#3fb950]">(HEAD -> main)</span> Add index.html with hello world</p>
            </div>
            <p className="text-xs text-[#8b949e] mt-2">
              <code className="text-[#d29922]">a1b2c3d</code> is the commit ID (a unique code for this save point). 
              <code className="text-[#3fb950]">HEAD</code> means "you are here".
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cheat Sheet */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h3 className="text-xl font-bold text-[#e6edf3] mb-4">📋 Quick Cheat Sheet: The Basic Loop</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#d29922]/20 text-[#d29922] text-xs font-bold flex items-center justify-center">1</span>
            <p className="text-sm text-[#8b949e]"><strong className="text-[#e6edf3]">Edit files</strong> — work on your code normally</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#2f81f7]/20 text-[#2f81f7] text-xs font-bold flex items-center justify-center">2</span>
            <p className="text-sm text-[#8b949e]"><code className="text-[#ff7b72]">git status</code> — see what changed</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#2f81f7]/20 text-[#2f81f7] text-xs font-bold flex items-center justify-center">3</span>
            <p className="text-sm text-[#8b949e]"><code className="text-[#ff7b72]">git add .</code> — stage your changes</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#3fb950]/20 text-[#3fb950] text-xs font-bold flex items-center justify-center">4</span>
            <p className="text-sm text-[#8b949e]"><code className="text-[#ff7b72]">git commit -m "message"</code> — save permanently</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#d2a8ff]/20 text-[#d2a8ff] text-xs font-bold flex items-center justify-center">5</span>
            <p className="text-sm text-[#8b949e]"><strong className="text-[#e6edf3]">Repeat!</strong> — this is the loop you do every day</p>
          </div>
        </div>
      </div>

      {/* Common Mistake */}
      <div className="bg-[#f85149]/5 border border-[#f85149]/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-[#f85149] mb-3 flex items-center gap-2">
          <AlertTriangle size={20} /> Beginner Mistake: Forgot to "git add" Before Committing
        </h3>
        <p className="text-sm text-[#8b949e] mb-4">
          This is the #1 mistake beginners make. If you changed a file but didn't <code className="text-[#ff7b72]">git add</code> it, Git won't include it in the commit:
        </p>
        <CodeBlock
          code={`# You edited style.css but forgot to add it:\n$ git commit -m "Update styles"\n\nOn branch main\nChanges not staged for commit:\n  modified:   style.css\n\nno changes added to commit\n# ❌ Nothing was committed!`}
          title="The mistake"
        />
        <p className="text-sm text-[#3fb950] mt-4 font-semibold flex items-center gap-2"><CheckCircle2 size={16}/> The fix: Always add before committing!</p>
        <CodeBlock code={`git add style.css\ngit commit -m "Update styles"\n# ✅ Now it works!`} title="The fix" />
      </div>

      <div className="bg-[#3fb950]/5 border border-[#3fb950]/30 rounded-xl p-6 text-center">
        <p className="text-lg text-[#e6edf3] font-semibold mb-2">🎉 You now know the basic Git workflow!</p>
        <p className="text-sm text-[#8b949e]">
          Next up: <strong className="text-[#2f81f7]">Branching & Merging</strong> — learn how to work on features without breaking your main code.
        </p>
      </div>
    </div>
  );
}
