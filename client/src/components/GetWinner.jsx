import axios from 'axios';
import React from 'react';

export default function GetWinner({ children, type }) {
  return (
    <button
      type={type}
      className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      {children}
    </button>
  );
}
