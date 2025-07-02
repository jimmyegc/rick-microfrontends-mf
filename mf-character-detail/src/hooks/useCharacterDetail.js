import { useState, useEffect } from 'react';
import { getCharacterById } from '../services/api';

export function useCharacterDetail(id) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let active = true;
    setLoading(true);
    setError(null);

    getCharacterById(id)
      .then((data) => {
        if (active) {
          setCharacter(data);
        }
      })
      .catch(() => {
        if (active) {
          setError('No se pudo cargar el personaje.');
          setCharacter(null);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [id]);

  return { character, loading, error };
}
