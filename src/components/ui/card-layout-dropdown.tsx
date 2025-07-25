"use client";

import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export type LayoutOption = "scroll" | "grid" | "list" | string;

interface CardLayoutDropdownProps {
  value: LayoutOption;
  onChange: (value: LayoutOption) => void;
  options: { label: string; value: LayoutOption }[];
  className?: string;
}

export default function CardLayoutDropdown({ value, onChange, options, className }: CardLayoutDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`w-8 h-8 rounded-full bg-[#2a2d47] hover:bg-[#3a3d57] text-white/60 ${className}`}
        >
          <MoreVertical size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#2a2d47] text-white border-[#3a3d57] rounded-lg shadow-lg min-w-[160px]">
        {options.map(option => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`cursor-pointer px-4 py-2 text-sm hover:bg-[#3a3d57] ${
              value === option.value ? "bg-[#3a3d57] font-semibold" : ""
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
