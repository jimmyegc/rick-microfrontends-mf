import React from 'react'
import portalGif from '../assets/loading.gif'
export const Loading = () => {
  return (
     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-all animate-fade">
      <img
        src={portalGif}
        alt="Loading portal"
        className="w-52 h-52 mb-4 animate-spin-slow"
      />
      <h1 className="text-3xl font-bold text-lime-400 animate-pulse">Loading...</h1>
    </div>
  )
}

