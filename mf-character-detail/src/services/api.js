const API_BASE = 'https://rickandmortyapi.com/api';

export const getCharacters = async (filters, page = 1) => {
  const query = new URLSearchParams({ ...filters, page }).toString();
  const response = await fetch(`${API_BASE}/character?${query}`);
  if (!response.ok) throw new Error('Error al obtener personajes');
  return await response.json();
};

export const getCharacterById = async (id) => {
  const response = await fetch(`${API_BASE}/character/${id}`);
  if (!response.ok) throw new Error('Error al obtener personaje');
  return await response.json();
};
