import React from 'react'
import { Card } from './Card';

export const CharacterGrid = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.length > 0 ? (
        characters.map((char) => <Card key={char.id} char={char} />)
      ) : (
        <p className="text-center col-span-full text-gray-700">
          No se encontraron personajes.
        </p>
      )}
    </div>
  );
}
