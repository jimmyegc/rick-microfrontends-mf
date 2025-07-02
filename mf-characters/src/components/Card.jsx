import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../index.css'
export const Card = ({ char }) => {  
  const navigate = useNavigate();

  return (
    <div
      key={char.id}
      onClick={() => navigate(`/detail/${char.id}`)}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer group border-4"
    >
      <div className="relative">
        <img
          src={char.image}
          alt={char.name}
          className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
        />
        <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          ID: {char.id}
        </div>
      </div>

      <div className="p-4 text-white space-y-2">
        <h3 className="text-xl font-bold mb-1">{char.name}</h3>
        <p className="text-sm text-gray-400">
          {char.gender} · {char.species}
        </p>
        <div className="flex justify-between items-center text-sm">
          <span
            className={`px-2 py-0.5 rounded-full font-semibold ${
              char.status === 'Alive'
                ? 'bg-green-500 text-white'
                : char.status === 'Dead'
                ? 'bg-red-500 text-white'
                : 'bg-gray-500 text-white'
            }`}
          >
            {char.status}
          </span>
          <span className="text-gray-400 text-xs">🌍 {char.origin.name}</span>
        </div>
      </div>
    </div>
  )
}
