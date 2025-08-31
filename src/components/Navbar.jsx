import React from "react";
import { Moon, Sun, Save } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between p-4 border-b border-gray-300 dark:border-gray-700">
      <h1 className="text-xl font-bold">Options Payoff Builder</h1>
      <div className="flex gap-4">
        <button
          className="flex items-center gap-2 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
          onClick={() => alert("Save functionality here")}
        >
          <Save size={18} /> Save
        </button>
        <button
          className="p-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
}
