"use client";

import React from "react";
import { Home, Compass, List, Clock, Mic } from "lucide-react";
import clsx from "clsx";

const Sidebar = ({ className = "" }: { className?: string }) => {
  return (
    <aside className={clsx("w-64 h-screen bg-[#1a1d35] text-white flex flex-col", className)}>
      {/* Logo */}
      <div className="p-6 ">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <h1 className="text-xl font-bold">Fnjan</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <div className="space-y-2 mb-8">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-white bg-[#2a2d47] font-medium">
            <Home size={20} />
            Home
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#8b9dc3] hover:text-white hover:bg-[#2a2d47] transition-colors"
          >
            <Compass size={20} />
            Discover
          </a>
        </div>

        {/* Your Stuff Section */}
        <div>
          <h3 className="text-[#8b9dc3] text-xs font-semibold uppercase tracking-wider mb-3">Your Stuff</h3>
          <div className="space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#8b9dc3] hover:text-white hover:bg-[#2a2d47] transition-colors"
            >
              <List size={20} />
              My Queue
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#8b9dc3] hover:text-white hover:bg-[#2a2d47] transition-colors"
            >
              <Mic size={20} />
              My Podcasts
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#8b9dc3] hover:text-white hover:bg-[#2a2d47] transition-colors"
            >
              <Clock size={20} />
              Recents
            </a>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-[#2a2d47] text-xs text-[#8b9dc3]">
        <p>Podbay v2.9.6 by Fancy Soups.</p>
        <div className="flex gap-4 mt-2">
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            All Podcasts
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
