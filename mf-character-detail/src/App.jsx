import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaTv } from 'react-icons/fa';
import { useCharacterDetail } from './hooks/useCharacterDetail';
import './index.css';

export default function CharacterDetail() {
  const { id } = useParams();
  const { character: char, loading, error } = useCharacterDetail(id);

  if (loading) {
    return <div className="text-center p-10">Cargando...</div>;
  }

  if (error) {
    return (
      <div className="text-center p-4 bg-red-100 text-red-700 rounded shadow mb-4 max-w-2xl mx-auto">
        {error}
      </div>
    );
  }
  
  if (!char) {
    return <div className="text-center p-10">Personaje no encontrado.</div>;
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row">
        <img src={char.image} alt={char.name} className="w-full md:w-1/3 object-cover" />
        <div className="p-6 space-y-3 flex-1">
          <h2 className="text-3xl font-bold text-indigo-800">{char.name}</h2>
          <p><strong>Estado:</strong> {char.status}</p>
          <p><strong>Especie:</strong> {char.species}</p>
          <p><strong>Género:</strong> {char.gender}</p>
          <p><strong>Origen:</strong> {char.origin.name}</p>

          <div className="mt-4">
            <h3 className="font-semibold text-sm text-gray-600 mb-2">Aparece en:</h3>
            <div className="flex flex-wrap gap-2">
              {char.episode.map((url) => {
                const episodeId = Number(url.split('/').pop());
                const color =
                  episodeId <= 10
                    ? 'bg-indigo-100 text-indigo-700'
                    : episodeId <= 20
                    ? 'bg-green-100 text-green-700'
                    : episodeId <= 30
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700';

                return (
                  <button
                    key={url}
                    className={`flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full shadow-sm hover:scale-105 transition ${color}`}
                    title={`Episodio ${episodeId}`}
                  >
                    <FaTv className="text-sm" />
                    Ep. {episodeId}
                  </button>
                );
              })}
            </div>
            <Link
              to="/characters"
              className="mt-4 inline-block text-indigo-700 hover:underline font-medium"
            >
              ← Volver a la lista
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
