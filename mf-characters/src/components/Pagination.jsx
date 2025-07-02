import React from 'react'
export const Pagination = ({ page, totalPages, onChange }) => {
  return (
    <div className="flex justify-center items-center mt-10 gap-4">
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded disabled:opacity-50"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        ← Anterior
      </button>
      <span className="font-medium text-gray-700">
        Página {page} de {totalPages}
      </span>
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded disabled:opacity-50"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Siguiente →
      </button>
    </div>
  );
}
