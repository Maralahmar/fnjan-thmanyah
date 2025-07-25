"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardLayoutDropdown, { LayoutOption } from "@/components/ui/card-layout-dropdown";
import PodcastGrid from "./PodcastGrid";
import { Podcast } from "@/services/itunes";

type PodcastSectionProps = {
  podcasts: Podcast[];
};

export default function PodcastSection({ podcasts }: PodcastSectionProps) {
  const [layout, setLayout] = useState<LayoutOption>("scroll");

  return (
    <section className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold text-white">Top podcasts for فنجان</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-[#2a2d47] hover:bg-[#3a3d57] text-white/60">
              <ChevronLeft size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-[#2a2d47] hover:bg-[#3a3d57] text-white/60">
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>

        {/* Layout Switcher */}
        <CardLayoutDropdown
          value={layout}
          onChange={setLayout}
          options={[
            { label: "Scroll Layout", value: "scroll" },
            { label: "Grid Layout", value: "grid" },
            { label: "List Layout", value: "list" }
          ]}
        />
      </div>

      {/* Display Podcasts */}
      <PodcastGrid
  layout={"scroll"}
  data={podcasts.map(p => ({
    title: p.trackName ?? "Untitled",
    publisher: p.artistName ?? "Unknown Publisher",
    image: p.artworkUrl600 ?? null
  }))}
/>

    </section>
  );
}
