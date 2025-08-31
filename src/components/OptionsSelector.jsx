import React, { useState } from "react";

export default function OptionsSelector({ options, setOptions, darkMode }) {
  const [newOption, setNewOption] = useState({
    type: "call",
    strike: "",
    side: "buy",
    premium: "",
  });

  const addOption = () => {
    if (!newOption.strike || !newOption.premium) return;
    setOptions([
      ...options,
      {
        ...newOption,
        strike: parseFloat(newOption.strike),
        premium: parseFloat(newOption.premium),
      },
    ]);
    setNewOption({ type: "call", strike: "", side: "buy", premium: "" });
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Add Option</h2>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <select
          value={newOption.type}
          onChange={(e) => setNewOption({ ...newOption, type: e.target.value })}
          className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"} p-1 rounded`}
        >
          <option value="call">Call</option>
          <option value="put">Put</option>
        </select>

        <select
          value={newOption.side}
          onChange={(e) => setNewOption({ ...newOption, side: e.target.value })}
          className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"} p-1 rounded`}
        >
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>

        <input
          type="number"
          placeholder="Strike"
          value={newOption.strike}
          onChange={(e) => setNewOption({ ...newOption, strike: e.target.value })}
          className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"} p-1 rounded`}
        />

        <input
          type="number"
          placeholder="Premium"
          value={newOption.premium}
          onChange={(e) => setNewOption({ ...newOption, premium: e.target.value })}
          className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"} p-1 rounded`}
        />
      </div>

      <button
        className={`px-3 py-1 rounded mb-2 ${darkMode ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-blue-500 text-white hover:bg-blue-400"}`}
        onClick={addOption}
      >
        Add
      </button>

      <h3 className="mt-4 font-semibold">Options List</h3>

      <table className={`w-full text-sm mt-2 border ${darkMode ? "border-gray-600" : "border-gray-300"}`}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Side</th>
            <th>Strike</th>
            <th>Premium</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {options.map((opt, i) => (
            <tr key={i} className={`text-center ${darkMode ? "border-t border-gray-600" : "border-t border-gray-300"}`}>
              <td>{opt.type}</td>
              <td>{opt.side}</td>
              <td>{opt.strike}</td>
              <td>{opt.premium}</td>
              <td>
                <button
                  className="bg-red-500 text-white px-2 py-0.5 rounded"
                  onClick={() => removeOption(i)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
