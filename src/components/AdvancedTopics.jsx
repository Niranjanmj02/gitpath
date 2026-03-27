import CodeBlock from "./CodeBlock";
import { Archive, Scissors, CherryIcon, Search, LifeBuoy, FileX2, Tag, Settings, FolderTree } from "lucide-react";

const topics = [
  {
    id: "stash",
    icon: <Archive size={20} className="text-[#2f81f7]" />,
    title: "git stash",
    subtitle: "Put your changes in a drawer",
    description: "Temporarily save uncommitted changes when you need to switch branches but aren't ready to commit.",
    useCase: "You're halfway through a feature when an urgent bug comes in. Stash your work, fix the bug, then pop your changes back.",
    code: `# Save current changes to stash\ngit stash\n\n# See all stashed changes\n$ git stash list\nstash@{0}: WIP on feature: a1b2c3d Add navbar\nstash@{1}: WIP on main: d4e5f6g Fix footer\n\n# Restore the latest stash and remove it from list\ngit stash pop\n\n# Restore a specific stash without removing\ngit stash apply stash@{1}\n\n# Delete a stash\ngit stash drop stash@{0}`,
  },
  {
    id: "rebase-i",
    icon: <Scissors size={20} className="text-[#d2a8ff]" />,
    title: "git rebase -i (Interactive Rebase)",
    subtitle: "Rewrite history like an editor",
    description: "Squash, reorder, edit, or drop commits. Perfect for cleaning up messy commit history before merging.",
    useCase: "You made 5 commits for one feature ('wip', 'fix typo', 'actually fix', 'ok now it works', 'final'). Squash them into 1 clean commit.",
    code: `# Interactive rebase last 3 commits\ngit rebase -i HEAD~3\n\n# Your editor opens with:\npick a1b2c3d Add user authentication\npick d4e5f6g Fix typo in auth\npick g7h8i9j Add tests for auth\n\n# Change to squash the last 2 into the first:\npick a1b2c3d Add user authentication\nsquash d4e5f6g Fix typo in auth\nsquash g7h8i9j Add tests for auth\n\n# Save and close — Git combines them into 1 commit`,
  },
  {
    id: "cherry-pick",
    icon: <CherryIcon size={20} className="text-[#f85149]" />,
    title: "git cherry-pick",
    subtitle: "Pick specific commits from any branch",
    description: "Apply the changes from one specific commit onto your current branch — without merging the entire branch.",
    useCase: "A bugfix was committed on the dev branch, but you need it on main right now without merging everything else.",
    code: `# Find the commit hash you want\n$ git log --oneline dev\na1b2c3d Fix critical payment bug\nd4e5f6g Add new dashboard (not ready)\n\n# Cherry-pick just the bugfix onto main\ngit switch main\ngit cherry-pick a1b2c3d\n\n# Done! Only the bugfix is applied to main`,
  },
  {
    id: "bisect",
    icon: <Search size={20} className="text-[#d29922]" />,
    title: "git bisect",
    subtitle: "Binary search for bugs",
    description: "Efficiently find which commit introduced a bug by doing a binary search through your commit history.",
    useCase: "The app was working in v1.0 but is broken now, 200 commits later. Bisect finds the bad commit in ~8 steps instead of checking all 200.",
    code: `# Start bisecting\ngit bisect start\n\n# Mark current commit as bad (has the bug)\ngit bisect bad\n\n# Mark a known good commit\ngit bisect good v1.0\n\n# Git checks out a middle commit. Test it:\n# If it has the bug:\ngit bisect bad\n\n# If it's fine:\ngit bisect good\n\n# Repeat until Git finds the exact commit!\n# Bisecting: found the first bad commit:\n# commit a1b2c3d — "Refactor database queries"\n\n# Done — reset back to normal\ngit bisect reset`,
  },
  {
    id: "reflog",
    icon: <LifeBuoy size={20} className="text-[#3fb950]" />,
    title: "git reflog",
    subtitle: "Your safety net",
    description: "Records every change to HEAD — even ones not in git log. If you 'lose' commits via reset or rebase, reflog remembers them.",
    useCase: "You accidentally ran git reset --hard and lost work. Reflog lets you find and recover the 'lost' commit.",
    code: `$ git reflog\na1b2c3d (HEAD -> main) HEAD@{0}: commit: Add search feature\nd4e5f6g HEAD@{1}: reset: moving to HEAD~2\nf7g8h9i HEAD@{2}: commit: Add dark mode\nj0k1l2m HEAD@{3}: commit: Add user profiles\n\n# Oh no, I reset and lost 2 commits! Recover them:\ngit reset --hard f7g8h9i\n\n# All commits are back!`,
  },
  {
    id: "gitignore",
    icon: <FileX2 size={20} className="text-[#8b949e]" />,
    title: ".gitignore",
    subtitle: "Tell Git what to ignore",
    description: "A special file that tells Git which files/folders to never track. Essential for keeping secrets and junk out of your repo.",
    useCase: "You don't want node_modules, .env files, or build artifacts in your repository.",
    code: `# .gitignore for a Node.js project\n\n# Dependencies\nnode_modules/\n\n# Environment variables (SECRETS!)\n.env\n.env.local\n\n# Build output\ndist/\nbuild/\n\n# OS files\n.DS_Store\nThumbs.db\n\n# IDE settings\n.vscode/\n.idea/\n\n# Logs\n*.log\nnpm-debug.log*\n\n# Coverage\ncoverage/`,
  },
  {
    id: "tags",
    icon: <Tag size={20} className="text-[#d29922]" />,
    title: "Git Tags",
    subtitle: "Bookmark important commits",
    description: "Tags mark specific commits as important — typically used for release versions (v1.0, v2.0).",
    useCase: "You just shipped version 1.0 and want to mark that exact commit forever.",
    code: `# Lightweight tag (just a pointer)\ngit tag v1.0\n\n# Annotated tag (recommended — has metadata)\ngit tag -a v1.0 -m "Release version 1.0"\n\n# List all tags\ngit tag\n\n# See tag details\ngit show v1.0\n\n# Push tags to remote\ngit push origin --tags\n\n# Checkout a specific tag\ngit checkout v1.0`,
  },
  {
    id: "hooks",
    icon: <Settings size={20} className="text-[#79c0ff]" />,
    title: "Git Hooks",
    subtitle: "Automate tasks on Git events",
    description: "Scripts that run automatically before or after Git events like commit, push, or merge.",
    useCase: "Automatically lint your code before every commit to prevent bad code from entering the repo.",
    code: `# Create a pre-commit hook\n# File: .git/hooks/pre-commit\n\n#!/bin/sh\n# Run linter before committing\nnpm run lint\n\n# If lint fails (exit code != 0), the commit is blocked\nif [ $? -ne 0 ]; then\n  echo "Lint failed! Fix errors before committing."\n  exit 1\nfi\n\n# Make it executable:\nchmod +x .git/hooks/pre-commit`,
  },
  {
    id: "monorepos",
    icon: <FolderTree size={20} className="text-[#2f81f7]" />,
    title: "Monorepos",
    subtitle: "One repo to rule them all",
    description: "A single repository that contains multiple projects/packages. Used by Google, Meta, and many open-source projects.",
    useCase: "Your company has a frontend, backend, and shared library — all in one repo for easier code sharing and atomic changes.",
    code: `# Typical monorepo structure:\nmy-monorepo/\n├── packages/\n│   ├── frontend/          # React app\n│   │   └── package.json\n│   ├── backend/           # Node.js API\n│   │   └── package.json\n│   └── shared/            # Shared utilities\n│       └── package.json\n├── package.json           # Root config\n└── turbo.json             # Build orchestration\n\n# Tools: Turborepo, Nx, Lerna, pnpm workspaces`,
  },
];

export default function AdvancedTopics() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-3">Advanced Topics</h2>
        <p className="text-[#8b949e] text-lg">Level up your Git skills with these powerful techniques.</p>
      </div>

      <div className="space-y-6">
        {topics.map((topic) => (
          <div key={topic.id} className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#30363d]/80 transition-colors">
            <div className="p-5 md:p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-0.5">{topic.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#e6edf3]">{topic.title}</h3>
                  <p className="text-sm text-[#2f81f7]">{topic.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-[#8b949e] mb-3">{topic.description}</p>
              <div className="bg-[#d29922]/5 border border-[#d29922]/20 rounded-lg px-4 py-2.5 mb-4">
                <p className="text-xs text-[#d29922]">
                  <span className="font-semibold">Real-world use case: </span>{topic.useCase}
                </p>
              </div>
              <CodeBlock code={topic.code} title={topic.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
