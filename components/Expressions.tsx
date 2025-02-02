"use client";
import { expressionColors, isExpressionColor } from "@/utils/expressionColors";
import { expressionLabels } from "@/utils/expressionLabels";
import { motion } from "framer-motion";
import { CSSProperties } from "react";
import * as R from "remeda";

export default function Expressions({
  values,
}: {
  values: Record<string, number>;
}) {
  // Get the top 3 expressions by value
  const top3 = R.pipe(
    values,
    R.entries(),
    R.sortBy(R.pathOr([1], 0)),
    R.reverse(),
    R.take(3)
  );

  // Calculate the total value for the top 3
  const total = top3.reduce((acc, [, val]) => acc + val, 0);

  // Calculate each segment's percentage value
  const segments = top3.map(([key, value]) => {
    // Clamp each percentage between 0 and 100
    const percent = total > 0 ? (value / total) * 100 : 0;
    return { key, value, percent };
  });

  return (
    <div className="w-full p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      {/* Combined Bar */}
      <div className="relative h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        {segments.map(({ key, percent }, index) => (
          <motion.div
            key={key}
            className="h-full"
            style={{
              background: isExpressionColor(key)
                ? expressionColors[key]
                : "#aaa",
              width: 0,
            } as CSSProperties}
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {segments.map(({ key, value, percent }) => (
          <div
            key={key}
            className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: isExpressionColor(key)
                  ? expressionColors[key]
                  : "#aaa",
              }}
            />
            <div className="flex-1 text-sm font-medium text-gray-800 dark:text-gray-100 truncate">
              {expressionLabels[key]}
            </div>
            <div className="text-xs font-mono text-gray-600 dark:text-gray-300">
              {percent.toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
