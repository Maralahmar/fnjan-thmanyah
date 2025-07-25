import { NextRequest, NextResponse } from "next/server";
import { fetchPodcastsFromItunes, fetchEpisodes } from "@/services/itunes";
import { storePodcastsWithEpisodes } from "@/features/podcast/podcastService";
import type { Episode } from "@/services/itunes";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const term = searchParams.get("term");

  if (!term) {
    return NextResponse.json({ error: "Missing search term" }, { status: 400 });
  }

  console.log(" Term:", term);

  const podcasts = await fetchPodcastsFromItunes(term);
  let episodes: Episode[] = [];

  try {
    episodes = await fetchEpisodes(term);
  } catch (err) {
    console.error(" Failed to fetch episodes", err);
  }

  console.log(" Podcasts fetched:", podcasts.length);
  console.log(" Episodes fetched:", episodes.length);
  console.log(" Saving to DB...");

  try {
    await storePodcastsWithEpisodes(podcasts, episodes);
    return NextResponse.json({
      podcasts,
      episodes,
    });
  } catch (err) {
    console.error(" Error in saving to DB:", err);
    return NextResponse.json(
      { error: "Failed to save data", details: (err as Error).message },
      { status: 500 }
    );
  }
}
