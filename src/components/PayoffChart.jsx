import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export default function PayoffChart({ options = [] }) {
  const chartData = Array.from({ length: 11 }, (_, i) => {
    const price = 80 + i * 5;
    let payoff = 0;

    options.forEach((opt) => {
      const intrinsic =
        opt.type === "call"
          ? Math.max(price - opt.strike, 0)
          : Math.max(opt.strike - price, 0);

      payoff += opt.side === "buy" ? intrinsic - opt.premium : opt.premium - intrinsic;
    });

    return { price, payoff };
  });

  const minPayoff = Math.min(...chartData.map(d => d.payoff));
  const maxPayoff = Math.max(...chartData.map(d => d.payoff));
  const range = maxPayoff - minPayoff;
  const zeroOffset = maxPayoff === minPayoff
    ? 0
    : ((maxPayoff) / range) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Payoff Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="payoffGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset={`${zeroOffset}%`} stopColor="#4ade80" stopOpacity={0.7} />
              <stop offset={`${zeroOffset}%`} stopColor="#f87171" stopOpacity={0.7} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="price"
            label={{value: "Underlying Price", position: "insideBottom", offset: -1 , style: { fontSize: 12, fontWeight: "bold" }}}
          />
          <YAxis
            label={{ value: "Profit/Loss", angle: -90, position: "insideLeft", style: { fontSize: 12, fontWeight: "bold" } }}
          />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" strokeWidth={1.5} />

          <Area
            type="stepafter"
            dataKey="payoff"
            stroke="#111827"
            fill="url(#payoffGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
