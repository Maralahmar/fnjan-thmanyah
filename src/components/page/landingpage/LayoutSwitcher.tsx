"use client";

import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type LayoutOption = "scroll" | "grid" | "list";

interface LayoutSwitcherProps {
  value: LayoutOption;
  onChange: (value: LayoutOption) => void;
}

export default function LayoutSwitcher({ value, onChange }: LayoutSwitcherProps) {
  const options: { label: string; value: LayoutOption }[] = [
    { label: "Switch layout to Scroll", value: "scroll" },
    { label: "Switch layout to Grid", value: "grid" },
    { label: "Switch layout to List", value: "list" }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-[#2a2d47] hover:bg-[#3a3d57] text-white/60">
          <MoreVertical size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#2a2d47] text-white border-[#3a3d57] rounded-lg shadow-lg">
        {options.map(option => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`cursor-pointer px-4 py-2 text-sm hover:bg-[#3a3d57] ${
              value === option.value ? "bg-[#3a3d57] font-medium" : ""
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
