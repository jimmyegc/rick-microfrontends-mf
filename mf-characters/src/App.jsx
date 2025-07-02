import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useCharacters } from './hooks/useCharacters';
import { Loading } from './components/Loading';
import { CharacterFilters } from './components/CharacterFilters';
import { CharacterGrid } from './components/CharacterGrid';
import { Pagination } from './components/Pagination';
import './index.css';

export default function Characters() {
  const [filters, setFilters] = useState({ name: '', status: '', species: '' });
  const [debouncedFilters] = useDebounce(filters, 500);
  const [page, setPage] = useState(1);
  const { characters, info, loading } = useCharacters(debouncedFilters, page);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => setPage(1), [debouncedFilters]);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setShowLoading(false), 1500);
    }
  }, [loading]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-1000 ease-in-out ${
        loading ? 'bg-black' : 'bg-gradient-to-br from-gray-100 to-emerald-100'
      }`}
    >
      {showLoading && <Loading />}

      {!loading && (
        <div className="pt-6 px-4">
          <CharacterFilters onChange={handleFilterChange} />

          <section className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Personajes</h2>
            <CharacterGrid characters={characters} />
            {info && (
              <Pagination page={page} totalPages={info.pages} onChange={setPage} />
            )}
          </section>
        </div>
      )}
    </div>
  );
}
