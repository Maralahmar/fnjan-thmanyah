"use client";

import { useState } from "react";
import Sidebar from "@/components/page/landingpage/Sidebar";
import TopNavBar from "@/components/page/landingpage/TopNavBar";
import PodcastGrid from "@/components/page/landingpage/PodcastGrid";
import EpisodeGrid from "@/components/page/landingpage/EpisodeGrid";
import CardLayoutDropdown, { LayoutOption } from "@/components/ui/card-layout-dropdown";
import { useSearch } from "@/hook/useSearch";

export default function HomePage() {
  const [podcastLayout, setPodcastLayout] = useState<LayoutOption>("scroll");
  const [episodeLayout, setEpisodeLayout] = useState<LayoutOption>("compact");
  const [term, setTerm] = useState("فنجان");
  const { results, loading } = useSearch(term);

  return (
    <div className="flex h-screen bg-[#0f1419]">
      {/* Sidebar */}
      <aside className="hidden md:block">
        <Sidebar className="hidden md:flex" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <TopNavBar value={term} onChange={setTerm} />

        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-6 md:px-8 md:py-8 space-y-10">
            {/* Loading indicator */}
            {loading && <div className="text-white">جاري التحميل...</div>}

            {/* Podcast Section */}
            {!loading && results.podcasts.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg md:text-xl font-semibold text-white">Top podcasts for {term}</h2>
                  <CardLayoutDropdown
                    value={podcastLayout}
                    onChange={setPodcastLayout}
                    options={[
                      { label: "Scroll Layout", value: "scroll" },
                      { label: "Grid Layout", value: "grid" },
                      { label: "List Layout", value: "list" }
                    ]}
                  />
                </div>
                <PodcastGrid
                  layout={podcastLayout}
                  data={results.podcasts.map((p: any) => ({
                    title: p.trackName,
                    publisher: p.artistName,
                    image: p.artworkUrl600
                  }))}
                />
              </div>
            )}

            {/* Episodes Section */}
            {!loading && results.episodes.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg md:text-xl font-semibold text-white">Top episodes for {term}</h2>
                  <CardLayoutDropdown
                    value={episodeLayout}
                    onChange={setEpisodeLayout}
                    options={[
                      { label: "Scroll Layout", value: "scroll" },
                      { label: "Grid Layout", value: "grid" },
                      { label: "List Layout", value: "list" },
                      { label: "Compact Layout", value: "compact" }
                    ]}
                  />
                </div>
                <EpisodeGrid
                  layout={episodeLayout}
                  episodes={results.episodes.map((e: any) => ({
                    id: e.trackId,
                    name: e.trackName,
                    artistName: e.artistName,
                    artworkUrl: e.artworkUrl600,
                    duration: e.trackTimeMillis,
                    description: e.description
                  }))}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
