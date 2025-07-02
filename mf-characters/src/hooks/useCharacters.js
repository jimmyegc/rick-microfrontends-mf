import { useState, useEffect } from 'react';

export function useCharacters(filters, page) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams({ ...filters, page }).toString();
        const res = await fetch(`https://rickandmortyapi.com/api/character?${query}`, {
          signal: controller.signal,
        });
        const data = await res.json();

        setCharacters(data.results || []);
        setInfo(data.info || null);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching characters:', error);
        }
        setCharacters([]);
        setInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
    return () => controller.abort();
  }, [filters, page]);

  return { characters, info, loading };
}
