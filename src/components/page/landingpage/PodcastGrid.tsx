"use client";

import type { LayoutOption } from "@/components/ui/card-layout-dropdown";

interface Podcast {
  title: string;
  publisher: string;
  image: string | null;
}

interface PodcastGridProps {
  layout: LayoutOption;
  data: Podcast[]; 
}

export default function PodcastGrid({ layout, data }: PodcastGridProps) {
  const isScroll = layout === "scroll";

  return (
    <div
      className={`${
    isScroll
      ? "flex overflow-x-auto scroll-smooth gap-4 px-2 pb-2"
      : "grid grid-cols-2 md:grid-cols-4 gap-4"
  } h-[305px]`}
    >
      {data.map((podcast, index) => (
        <div
          key={index}
         className="shrink-0 w-[210px] bg-[#1a1d35] rounded-md p-2 text-left"
        >
          {podcast.image ? (
            <img
              src={podcast.image}
              alt={podcast.title ?? "Podcast"}
              className="w-[170px] h-[170px] object-cover rounded-md mx-auto"
            />
          ) : (
            <div className="w-[170px] h-[170px] bg-gray-700 rounded-md mx-auto" />
          )}
          <h3 className="text-white text-sm font-semibold tracking-[-0.5px] mt-3 line-clamp-1">
            {podcast.title}
          </h3>
          <p  className="text-[#ff78c9] text-xs font-semibold tracking-[-0.5px] mt-1 line-clamp-1">{podcast.publisher}</p>
        </div>
      ))}
    </div>
  );
}
