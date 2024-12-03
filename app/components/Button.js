'use client';

export default function Button({ label, onClick }) {
  return (
    <button
      className="px-6 py-3 bg-blue-500 text-white rounded text-lg hover:bg-blue-600 transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
