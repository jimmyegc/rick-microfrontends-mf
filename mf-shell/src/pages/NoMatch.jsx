import React from 'react';
import peaceImage from '../assets/peace.jpg'
export const NoMatch = () => {
  return (
    <div className="min-h-screen mt-5 flex flex-col justify-center items-center md:mt-[-10px] bg-gray-900 p-6">
      <h2 className="text-[30px] text-gray-100 text-center font-bold drop-shadow-md md:text-[36px] md:mb-6">
        I'm in peace...{' '}
        <span className="hidden md:inline-block">'cause nobody's here</span>
      </h2>

      <img
        src={peaceImage}
        alt="Character Not Found"
        title="Character Not Found"
        className="w-full max-w-[90%] md:max-w-[60%] shadow-lg rounded-xl"
      />

      <h2 className="text-[30px] text-gray-100 text-center font-bold drop-shadow-md mt-5 md:hidden">
        'cause nobody's here
      </h2>
    </div>
  );
};