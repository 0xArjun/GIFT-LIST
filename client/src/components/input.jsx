import React from 'react';

export default function UserInput({ changeValue, placeholder, htmlForInput }) {
  return (
    <div>
      <label
        style={{ marginTop: '2em' }}
        htmlFor={htmlForInput}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Name
      </label>
      <input
        id={htmlForInput}
        type="text"
        onChange={changeValue}
        className="border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
