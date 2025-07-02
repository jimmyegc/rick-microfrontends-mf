import React from 'react'
import { Link } from "react-router-dom";
import LogoHeader from '../assets/logo_header.png'

export const Navbar = () => {
  return (
    <nav className="bg-indigo-800 text-white shadow px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={LogoHeader}
              alt="Logo"
              className="w-32 md:w-40"
            />          
          </Link>
        </div>
        <div className="space-x-4 text-sm sm:text-base">
          <Link to="/" className="hover:text-lime-300 transition">Inicio</Link>
          <Link to="/characters" className="hover:text-lime-300 transition">Personajes</Link>
        </div>
      </div>
    </nav>
  );
}
