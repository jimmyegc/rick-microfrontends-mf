import { useState, useEffect } from 'react';

export function useCharacterDetail(id) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching character:', error);
        }
        setCharacter(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();

    return () => controller.abort();
  }, [id]);

  return { character, loading };
}
