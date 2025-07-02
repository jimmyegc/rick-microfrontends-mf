import { useState, useEffect } from 'react';
import { getCharacters } from '../services/api';

export function useCharacters(filters, page) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getCharacters(filters, page)
      .then((data) => {
        if (active) {
          setCharacters(data.results || []);
          setInfo(data.info || null);
        }
      })
      .catch(() => {
        if (active) {
          setCharacters([]);
          setInfo(null);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [filters, page]);

  return { characters, info, loading };
}
