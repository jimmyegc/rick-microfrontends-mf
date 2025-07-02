import React from 'react';

export function CharacterFilters({ filters, setFilters, onChange }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        name="name"
        placeholder="Buscar por nombre"
        value={filters.name}
        onChange={(e) => onChange('name', e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />

      <select
        name="status"
        value={filters.status}
        onChange={(e) => onChange('status', e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <option value="">Estado</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>

      <select
        name="species"
        value={filters.species}
        onChange={(e) => onChange('species', e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <option value="">Especie</option>
        <option value="human">Humano</option>
        <option value="alien">Alien</option>
        <option value="robot">Robot</option>
        <option value="mythological">Mitológica</option>
        <option value="animal">Animal</option>
        <option value="unknown">Desconocida</option>
      </select>
      <button
        onClick={() => setFilters({ name: '', status: '', species: '' })}
        className="ml-auto bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded"
      >
        Limpiar filtros
      </button>
    </div>
  );
}
