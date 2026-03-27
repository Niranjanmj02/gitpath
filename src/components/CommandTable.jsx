import { useState, useRef } from "react";
import { Search, Copy, Check, Filter } from "lucide-react";
import commands from "../data/commands";

const categories = [
  "All",
  "Setup",
  "Basics",
  "Staging",
  "Branching",
  "Remote",
  "Undoing",
  "Inspection",
  "Stash",
  "Tags",
  "Advanced",
];

export default function CommandTable() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filtered = commands.filter((cmd) => {
    const matchesCategory =
      category === "All" || cmd.category === category;
    const matchesSearch =
      search === "" ||
      cmd.command.toLowerCase().includes(search.toLowerCase()) ||
      cmd.description.toLowerCase().includes(search.toLowerCase()) ||
      cmd.syntax.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b949e]"
          />
          <input
            type="text"
            placeholder="Search commands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#0d1117] border border-[#30363d] rounded-lg
              text-[#e6edf3] text-sm placeholder-[#8b949e] focus:outline-none focus:border-[#2f81f7]
              transition-colors"
          />
        </div>
        <div className="relative">
          <Filter
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b949e] pointer-events-none"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="pl-10 pr-8 py-2.5 bg-[#0d1117] border border-[#30363d] rounded-lg
              text-[#e6edf3] text-sm focus:outline-none focus:border-[#2f81f7]
              transition-colors appearance-none cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-[#8b949e] mb-3">
        Showing {filtered.length} of {commands.length} commands
      </p>

      {/* Table */}
      <div className="border border-[#30363d] rounded-lg overflow-hidden">
        {/* Desktop header */}
        <div className="hidden md:grid grid-cols-[180px_1fr_1fr_50px] bg-[#161b22] border-b border-[#30363d]">
          <div className="px-4 py-3 text-xs font-semibold text-[#8b949e] uppercase tracking-wider">
            Command
          </div>
          <div className="px-4 py-3 text-xs font-semibold text-[#8b949e] uppercase tracking-wider">
            Description
          </div>
          <div className="px-4 py-3 text-xs font-semibold text-[#8b949e] uppercase tracking-wider">
            Example
          </div>
          <div className="px-4 py-3"></div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#21262d]">
          {filtered.map((cmd) => (
            <div
              key={cmd.id}
              className="md:grid md:grid-cols-[180px_1fr_1fr_50px] hover:bg-[#161b22] transition-colors"
            >
              {/* Mobile category label */}
              <div className="md:hidden px-4 pt-3 pb-1">
                <span className="text-[10px] font-semibold text-[#2f81f7] uppercase tracking-wider bg-[#2f81f7]/10 px-2 py-0.5 rounded">
                  {cmd.category}
                </span>
              </div>

              {/* Command */}
              <div className="px-4 py-3 flex items-start gap-2">
                <code className="text-sm font-mono text-[#ff7b72] break-all">
                  {cmd.command}
                </code>
              </div>

              {/* Description */}
              <div className="px-4 py-3 md:py-3">
                <p className="text-sm text-[#e6edf3] mb-1">{cmd.description}</p>
                <p className="text-xs text-[#8b949e] font-mono hidden md:block">
                  {cmd.syntax}
                </p>
              </div>

              {/* Example */}
              <div className="px-4 py-1 md:py-3">
                <code className="text-xs font-mono text-[#a5d6ff] break-all">
                  {cmd.example}
                </code>
              </div>

              {/* Copy */}
              <div className="px-4 py-2 md:py-3 flex items-center justify-end md:justify-center pb-3 md:pb-3">
                <button
                  onClick={() => handleCopy(cmd.syntax, cmd.id)}
                  className="p-1.5 rounded hover:bg-[#30363d] transition-colors"
                  title="Copy command"
                >
                  {copiedId === cmd.id ? (
                    <Check size={14} className="text-[#3fb950]" />
                  ) : (
                    <Copy size={14} className="text-[#8b949e]" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="px-4 py-12 text-center text-[#8b949e]">
            <p className="text-sm">No commands found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
