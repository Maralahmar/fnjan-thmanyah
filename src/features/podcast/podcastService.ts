import { prisma } from "@/lib/prisma";
import { Episode, Podcast } from "@/services/itunes";

export async function storePodcastsWithEpisodes(podcasts: Podcast[], episodes: Episode[]) {
  for (const podcast of podcasts) {
    try {
      await prisma.podcast.upsert({
        where: { trackId: podcast.trackId },
        update: {},
        create: {
          trackId: podcast.trackId,
          name: podcast.trackName ?? null,
          artistName: podcast.artistName ?? null,
          artworkUrl: podcast.artworkUrl600 ?? null,
          feedUrl: podcast.feedUrl ?? null,
          genre: podcast.primaryGenreName ?? null,
          country: podcast.country ?? null,
        },
      });
    } catch (error) {
      console.error("Error saving podcast:", podcast.trackId, error);
    }
  }

  for (const episode of episodes) {
    try {
      await prisma.episode.upsert({
        where: { trackId: episode.trackId },
        update: {},
        create: {
          trackId: episode.trackId,
          name: episode.trackName ?? null,
          artistName: episode.artistName ?? null,
          artworkUrl: episode.artworkUrl600 ?? null,
          description: episode.description ?? null,
          duration: episode.trackTimeMillis ?? null,
        },
      });
    } catch (error) {
      console.error("Error saving episode:", episode.trackId, error);
    }
  }

  return {
    saved: true,
    podcasts: podcasts.length,
    episodes: episodes.length,
  };
}
