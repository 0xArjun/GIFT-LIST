import axios from 'axios';
import React from 'react';

export default function GetWinner({ setFetch }) {
  function changeStatus() {
    setFetch(true);
  }
  return (
    <button
      onClick={changeStatus}
      className="mt-5 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      Click Me
    </button>
  );
}
