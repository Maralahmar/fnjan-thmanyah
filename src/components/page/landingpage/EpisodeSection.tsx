"use client";

import { useEffect, useState } from "react";
import { Episode, fetchEpisodes } from "@/services/itunes";
import EpisodeGrid from "./EpisodeGrid";
import CardLayoutDropdown, { LayoutOption } from "@/components/ui/card-layout-dropdown";

export default function EpisodeSection() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [layout, setLayout] = useState<LayoutOption>("compact");

  useEffect(() => {
    async function load() {
      const data = await fetchEpisodes("فنجان");
      setEpisodes(data);
    }
    load();
  }, []);

  const layoutOptions: LayoutOption[] = ["scroll", "grid", "list", "compact"];
  const dropdownOptions = layoutOptions
    .filter(opt => opt !== layout)
    .map(value => ({
      label: `Switch layout to ${value.charAt(0).toUpperCase() + value.slice(1)}`,
      value
    }));

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-semibold text-white">Top episodes for فنجان</h2>
        <CardLayoutDropdown value={layout} onChange={setLayout} options={dropdownOptions} />
      </div>
    </section>
  );
}
