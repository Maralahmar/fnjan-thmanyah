"use client";

import React from "react";
import { LayoutOption } from "@/components/ui/card-layout-dropdown";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Episode {
  id: number;
  name: string;
  artistName: string;
  artworkUrl: string;
  description?: string;
  duration?: string;
}

interface EpisodeGridProps {
  episodes?: Episode[];
  layout: LayoutOption;
}

export default function EpisodeGrid({ episodes = [], layout }: EpisodeGridProps) {
  const baseCardClass = "rounded-lg p-4 bg-[#2a2d47] hover:bg-[#3a3d57] transition-colors";

  if (layout === "scroll") {
    return (
      <div className="flex justify-between items-center p-[5px] mb-[2px] bg-[#00061a] rounded-sm">
        {episodes.map(episode => (
          <div key={episode.id} className={`min-w-[250px] ${baseCardClass}`}>
            <div className="text-sm font-medium text-white tracking-[-0.5px] mb-1">{episode.name}</div>
            <div className="text-xs font-semibold text-[#ff78c9] tracking-[-0.5px]">{episode.artistName}</div>
          </div>
        ))}
      </div>
    );
  }

  if (layout === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {episodes.map(episode => (
          <div key={episode.id} className={baseCardClass}>
            <div className="text-white font-medium mb-1">{episode.name}</div>
            <div className="text-sm text-[#b4bcd0]">{episode.artistName}</div>
          </div>
        ))}
      </div>
    );
  }

  if (layout === "list") {
    return (
      <div className="space-y-3">
        {episodes.map(episode => (
          <div key={episode.id} className={`flex gap-3 ${baseCardClass}`}>
            <div className="w-16 h-16 shrink-0 bg-[#1a1d35] rounded-lg overflow-hidden">
              <img src={episode.artworkUrl} alt={episode.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="text-white font-medium">{episode.name}</div>
              <div className="text-[#f1c0e8] text-sm">{episode.artistName}</div>
              <div className="text-[#b4bcd0] text-sm mt-1 line-clamp-2">{episode.description || "(لا يوجد وصف)"}</div>
              <div className="text-xs text-[#8b9dc3] mt-1" />
            </div>
            <Button variant="ghost" size="icon" className="text-white/60 hover:bg-black/10">
              <MoreVertical size={16} />
            </Button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {episodes.map(episode => (
        <div key={episode.id} className={`flex gap-3 items-center ${baseCardClass}`}>
          <div className="w-[56px] h-[56px] shrink-0 rounded">
            <img src={episode.artworkUrl} alt={episode.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-white text-sm truncate">{episode.name}</div>
            <div className="text-xs text-[#b4bcd0] truncate">{episode.artistName}</div>
          </div>
          <Button variant="ghost" size="icon" className="text-white/60 hover:bg-black/10">
            <MoreVertical size={16} />
          </Button>
        </div>
      ))}
    </div>
  );
}
