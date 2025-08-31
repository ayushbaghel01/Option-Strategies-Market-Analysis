import React from "react";

export default function OptionTable({ options = [], setOptions, darkMode }) {
  const handleRemove = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  return (
    <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-2xl shadow`}>
      <h2 className="font-semibold mb-2">Options Table</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="border-b border-gray-300 dark:border-gray-600">
            <th className="px-2 py-1 text-left">Type</th>
            <th className="px-2 py-1 text-left">Strike</th>
            <th className="px-2 py-1 text-left">Side</th>
            <th className="px-2 py-1 text-left">Premium</th>
            <th className="px-2 py-1 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {options.map((opt, index) => (
            <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-2 py-1">{opt.type}</td>
              <td className="px-2 py-1">{opt.strike}</td>
              <td className="px-2 py-1">{opt.side}</td>
              <td className="px-2 py-1">{opt.premium}</td>
              <td className="px-2 py-1">
                <button
                  onClick={() => handleRemove(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          {options.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-2">
                No options added
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
