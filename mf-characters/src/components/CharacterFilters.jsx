import React from 'react'
export const CharacterFilters = ({ onChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 max-w-7xl mx-auto">
      <input
        placeholder="Nombre"
        className="border rounded px-4 py-2 w-full md:w-1/3"
        onChange={(e) => onChange('name', e.target.value)}
      />
      <input
        placeholder="Estado"
        className="border rounded px-4 py-2 w-full md:w-1/3"
        onChange={(e) => onChange('status', e.target.value)}
      />
      <input
        placeholder="Especie"
        className="border rounded px-4 py-2 w-full md:w-1/3"
        onChange={(e) => onChange('species', e.target.value)}
      />
    </div>
  );
}
