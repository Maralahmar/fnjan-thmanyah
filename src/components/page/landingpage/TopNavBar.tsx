"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, MoreVertical } from "lucide-react";
import React from "react";

interface TopNavBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TopNavBar({ value, onChange }: TopNavBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 bg-[#1a1d35] border-b border-[#2a2d47]">
      {/* Logo + Search for Mobile */}
      <div className="flex items-center gap-3 md:hidden w-full">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm" />
        </div>
        <Input
          className="flex-1 bg-[#2a2d47] text-white placeholder:text-[#8b9dc3] border-none rounded-full px-4 py-2 focus:bg-[#3a3d57] transition-colors"
          placeholder="Search"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-[#2a2d47] hover:bg-[#3a3d57] text-white/60">
          <MoreVertical size={16} />
        </Button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-[#2a2d47] hover:bg-[#3a3d57] text-white/60">
            <ArrowLeft size={16} />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-[#2a2d47] hover:bg-[#3a3d57] text-white/60">
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Search Input Desktop */}
        <div className="flex-1 mx-8 max-w-2xl">
          <Input
            className="w-full bg-[#2a2d47] text-white placeholder:text-[#8b9dc3] border-none rounded-full px-4 py-2 focus:bg-[#3a3d57] transition-colors"
            placeholder="Search through over 70 million podcasts and episodes..."
            value={value}
            onChange={e => onChange(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <Button className="px-4 py-2 h-auto bg-[#4f46e5] text-white text-sm font-medium hover:bg-[#4338ca] rounded-full">
            Log in
          </Button>
          <Button className="px-4 py-2 h-auto bg-[#4f46e5] text-white text-sm font-medium hover:bg-[#4338ca] rounded-full">
            Sign up
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-[#2a2d47] hover:bg-[#3a3d57] text-white/60">
            <MoreVertical size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
