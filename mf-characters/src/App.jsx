import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useCharacters } from './hooks/useCharacters';
import { CharacterFilters } from './components/CharacterFilters';
import { CharacterGrid } from './components/CharacterGrid';
import { Pagination } from './components/Pagination';
import { NoResults } from './components/NoResults';
import './index.css';

export default function Characters() {
  const [filters, setFilters] = useState({ name: '', status: '', species: '' });
  const [debouncedFilters] = useDebounce(filters, 500);
  const [page, setPage] = useState(1);
  const { characters, info, loading } = useCharacters(debouncedFilters, page);

  useEffect(() => setPage(1), [debouncedFilters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-1000 ease-in-out ${
        loading ? 'bg-black' : 'bg-gradient-to-br from-gray-100 to-emerald-100'
      }`}
    >
      <div className="pt-6 px-4">

        <CharacterFilters filters={filters} setFilters={setFilters} onChange={handleFilterChange} />

        <section className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Personajes</h2>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-64 bg-gray-300 animate-pulse rounded-lg shadow"
                />
              ))}
            </div>
          ) : characters.length === 0 ? (
            <NoResults />
          ) : (
            <>
              <CharacterGrid characters={characters} />
              {info && (
                <Pagination page={page} totalPages={info.pages} onChange={setPage} />
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
