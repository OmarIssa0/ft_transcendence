"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function SocialPanel() {
  // 1. Correctly destructure state array
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`
        hidden lg:flex lg:flex-col shrink-0 bg-slate-950 border-l border-slate-800 p-4 overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-16" : "w-80"}
      `}
    >
      <div
        className={`flex w-full mb-4 ${isCollapsed ? "justify-center" : "justify-start"}`}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-slate-400 hover:bg-slate-900 hover:text-slate-200 p-1.5 rounded-lg border border-slate-800/80 transition-colors cursor-pointer"
          title={isCollapsed ? "Expand panel" : "Collapse panel"}
        >
          {isCollapsed ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <h2
        className={`
          text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 transition-all duration-200 origin-left whitespace-nowrap
          ${isCollapsed ? "opacity-0 scale-95 pointer-events-none h-0 m-0" : "opacity-100 scale-100"}
        `}
      >
        Friends Activity
      </h2>

      <div className="space-y-4 w-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`
              flex items-center gap-3 p-2 rounded-lg bg-slate-900/50 border border-slate-800/60 transition-all duration-200
              ${isCollapsed ? "justify-center" : ""}
            `}
          >
            <div className="w-8 h-8 rounded-full bg-indigo-500 shrink-0 relative flex items-center justify-center">
              <span className="text-[10px] text-white font-bold select-none">
                {i + 1}
              </span>
            </div>

            <div
              className={`
                flex-1 min-w-0 transition-all duration-200 origin-left
                ${isCollapsed ? "opacity-0 scale-95 w-0 pointer-events-none hidden" : "opacity-100 scale-100"}
              `}
            >
              <p className="text-sm font-medium text-slate-200 truncate">
                Friend_User
              </p>
              <p className="text-xs text-emerald-400 truncate">Playing Match</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export { SocialPanel };
