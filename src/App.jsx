import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PayoffChart from "./components/PayoffChart";
import OptionsSelector from "./components/OptionsSelector";
import StrategiesPanel from "./components/StrategiesPanel";

export default function App() {
  const [options, setOptions] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="grid grid-cols-2 gap-4 p-4">
          <PayoffChart options={options} />
          <OptionsSelector options={options} setOptions={setOptions} darkMode={darkMode} />
        </div>
        <StrategiesPanel setOptions={setOptions} darkMode={darkMode} />
      </div>
    </div>
  );
}
