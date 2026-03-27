import { useState, useEffect, useRef } from "react";
import {
  GitBranch,
  GitCommitHorizontal,
  GitMerge,
  Cloud,
  Terminal,
  Rocket,
  HelpCircle,
  Heart,
  Menu,
  X,
} from "lucide-react";

import WhatIsGit from "./components/WhatIsGit";
import CoreWorkflow from "./components/CoreWorkflow";
import BranchingMerging from "./components/BranchingMerging";
import RemoteGitHub from "./components/RemoteGitHub";
import CommandTable from "./components/CommandTable";
import AdvancedTopics from "./components/AdvancedTopics";
import Quiz from "./components/Quiz";

const tabs = [
  { id: "what-is-git", label: "What is Git?", icon: <GitBranch size={16} /> },
  { id: "core-workflow", label: "Core Workflow", icon: <GitCommitHorizontal size={16} /> },
  { id: "branching", label: "Branching & Merging", icon: <GitMerge size={16} /> },
  { id: "remote", label: "Remote & GitHub", icon: <Cloud size={16} /> },
  { id: "commands", label: "Command Reference", icon: <Terminal size={16} /> },
  { id: "advanced", label: "Advanced Topics", icon: <Rocket size={16} /> },
  { id: "quiz", label: "Quiz", icon: <HelpCircle size={16} /> },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("what-is-git");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contentRef = useRef(null);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderTab = () => {
    switch (activeTab) {
      case "what-is-git": return <WhatIsGit />;
      case "core-workflow": return <CoreWorkflow />;
      case "branching": return <BranchingMerging />;
      case "remote": return <RemoteGitHub />;
      case "commands": return (
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold text-[#e6edf3] mb-3">Command Reference</h2>
          <p className="text-[#8b949e] text-lg mb-8">50 essential Git commands, searchable and organized by category.</p>
          <CommandTable />
        </div>
      );
      case "advanced": return <AdvancedTopics />;
      case "quiz": return (
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold text-[#e6edf3] mb-3 text-center">Test Your Knowledge</h2>
          <p className="text-[#8b949e] text-lg mb-8 text-center">10 questions covering everything from basics to advanced Git concepts.</p>
          <Quiz />
        </div>
      );
      default: return <WhatIsGit />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#161b22]/95 backdrop-blur-md border-b border-[#30363d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <GitBranch size={24} className="text-[#2f81f7]" />
              <h1 className="text-lg font-bold text-[#e6edf3]">
                Git<span className="text-[#2f81f7]">Learn</span>
              </h1>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#21262d] transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop tabs */}
          <nav className="hidden md:flex items-center gap-0.5 -mb-px overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium whitespace-nowrap
                  border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-[#2f81f7] text-[#e6edf3]"
                      : "border-transparent text-[#8b949e] hover:text-[#e6edf3] hover:border-[#30363d]"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#161b22] border-t border-[#30363d] animate-fade-in">
            <nav className="flex flex-col p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#2f81f7]/10 text-[#2f81f7]"
                      : "text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d]"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main ref={contentRef} className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {renderTab()}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-6 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs text-[#8b949e]">
            Made with <Heart size={10} className="inline text-[#f85149] fill-[#f85149] mx-0.5" /> by{" "}
            <span className="text-[#e6edf3] font-semibold">Niranjan</span> • Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
