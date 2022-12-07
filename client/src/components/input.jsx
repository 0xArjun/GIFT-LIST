import React from 'react';

export default function UserInput({ name, setName }) {
  console.log(name);
  function changeValue(e) {
    const name = e.target.value;
    e.preventDefault();
    setName(name);
  }
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Name
      </label>
      <input
        type="text"
        onChange={changeValue}
        className="border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Arjun"
        required
      />
    </div>
  );
}
