import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >      
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
     
      <div className="relative z-10 max-w-4xl text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
          Explora el <span className="text-green-400">Multiverso</span><br />
          con <span className="text-purple-400">Rick & Morty</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Viaja entre dimensiones, conoce personajes únicos<br />
          y descubre los secretos del universo más caótico de todos.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/characters"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
          >
            Ver Personajes
          </Link>
        </div>
      </div>
    </section>

  );
}