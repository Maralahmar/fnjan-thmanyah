export interface Podcast {
  trackId: number;
  trackName: string | null;
  artistName: string | null;
  artworkUrl600: string | null;
  feedUrl: string | null;
  primaryGenreName: string | null;
  country: string | null;
}

export interface Episode {
  trackId: number;
  trackName: string | null;
  artistName: string | null;
  artworkUrl600: string | null;
  description: string | null;
  trackTimeMillis: number | null;
  collectionId?: number;
}

export async function fetchPodcastsFromItunes(term: string): Promise<Podcast[]> {
  const response = await fetch(`https://itunes.apple.com/search?media=podcast&term=${term}&limit=20`);
  const json = await response.json();

  return json.results.map((item: any) => ({
    trackId: item.trackId,
    trackName: item.trackName ?? null,
    artistName: item.artistName ?? null,
    artworkUrl600: item.artworkUrl600 ?? null,
    feedUrl: item.feedUrl ?? null,
    primaryGenreName: item.primaryGenreName ?? null,
    country: item.country ?? null,
  }));
}

export async function fetchEpisodes(term: string): Promise<Episode[]> {
  const response = await fetch(`https://itunes.apple.com/search?media=podcast&entity=podcastEpisode&term=${term}&limit=60`);
  const json = await response.json();

  return json.results.map((item: any) => ({
    trackId: item.trackId,
    trackName: item.trackName ?? null,
    artistName: item.artistName ?? null,
    artworkUrl600: item.artworkUrl600 ?? null,
    description: item.description ?? null,
    trackTimeMillis: item.trackTimeMillis ?? null,
    collectionId: item.collectionId,
  }));
}
