import React from "react";


const STRATEGIES = [
    {
      name: "Straddle",
      image: "/images/straddle.png",
      options: [
        { type: "call", strike: 100, side: "buy", premium: 5 },
        { type: "put", strike: 100, side: "buy", premium: 5 },
      ],
    },
    {
      name: "Strangle",
      image: "/images/strangle.png",
      options: [
        { type: "call", strike: 105, side: "buy", premium: 4 },
        { type: "put", strike: 95, side: "buy", premium: 3 },
      ],
    },
    {
      name: "Butterfly Call",
      image: "/images/butterfly.png",
      options: [
        { type: "call", strike: 95, side: "buy", premium: 8 },
        { type: "call", strike: 100, side: "sell", premium: 5 },
        { type: "call", strike: 100, side: "sell", premium: 5 },
        { type: "call", strike: 105, side: "buy", premium: 3 },
      ],
    },
    {
      name: "Iron Condor",
      image: "/images/iron-condor.png",
      options: [
        { type: "call", strike: 110, side: "sell", premium: 3 },
        { type: "call", strike: 115, side: "buy", premium: 1 },
        { type: "put", strike: 90, side: "sell", premium: 2 },
        { type: "put", strike: 85, side: "buy", premium: 1 },
      ],
    },
  {
    name: "Long Call",
    image: "/images/long-call.png",
    options: [{ type: "call", strike: 100, side: "buy", premium: 5 }],
  },
  {
    name: "Short Call",
    image: "/images/short-call.png",
    options: [{ type: "call", strike: 100, side: "sell", premium: 5 }],
  },
  {
    name: "Long Put",
    image: "/images/long-put.png",
    options: [{ type: "put", strike: 100, side: "buy", premium: 5 }],
  },
  {
    name: "Short Put",
    image: "/images/short-put.png",
    options: [{ type: "put", strike: 100, side: "sell", premium: 5 }],
  },
  {
    name: "Bull Call Spread",
    image: "/images/bull-call.png",
    options: [
      { type: "call", strike: 100, side: "buy", premium: 5 },
      { type: "call", strike: 110, side: "sell", premium: 2 },
    ],
  },
  {
    name: "Bear Put Spread",
    image: "/images/bear-put.png",
    options: [
      { type: "put", strike: 100, side: "buy", premium: 5 },
      { type: "put", strike: 90, side: "sell", premium: 2 },
    ],
  },
];


export default function StrategiesPanel({ setOptions, darkMode = false }) {
  return (
    <div className={`mt-4 p-4 rounded-2xl shadow ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h2 className="font-semibold mb-2">Predefined Strategies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {STRATEGIES.map((strategy, idx) => (
          <div
            key={idx}
            className={`cursor-pointer p-2 rounded border ${darkMode ? "border-gray-600 hover:border-gray-400" : "border-gray-300 hover:border-gray-500"} text-center`}
            onClick={() => setOptions(strategy.options)}
          >
            <span className="font-medium">{strategy.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
