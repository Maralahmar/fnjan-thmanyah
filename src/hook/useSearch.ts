"use client";

import { useEffect, useState } from "react";
import { Podcast, Episode } from "@/services/itunes";

interface SearchResult {
  podcasts: Podcast[];
  episodes: Episode[];
}

export function useSearch(term: string) {
  const [results, setResults] = useState<SearchResult>({ podcasts: [], episodes: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!term) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/test-podcast?term=${encodeURIComponent(term)}`);
        const text = await res.text();

        try {
          const data = JSON.parse(text);
          setResults({
            podcasts: Array.isArray(data.podcasts) ? data.podcasts : [],
            episodes: Array.isArray(data.episodes) ? data.episodes : [],
          });
        } catch (jsonErr) {
          console.error(" Failed to parse JSON:", jsonErr, "Raw response:", text);
          setResults({ podcasts: [], episodes: [] });
        }

      } catch (err) {
        console.error(" Search error:", err);
        setResults({ podcasts: [], episodes: [] });
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [term]);

  return { results, loading };
}
