"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Logo() {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <rect
          width="100"
          height="100"
          rx="12"
          fill="#A6192E"
        />
        <text
          x="50"
          y="68"
          textAnchor="middle"
          fill="white"
          fontSize="48"
          fontWeight="bold"
          fontFamily="IBM Plex Sans, sans-serif"
        >
          7
        </text>
      </svg>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-foreground-light dark:text-foreground-dark leading-tight">
          SEVEN
        </span>
        <span className="text-sm font-medium text-primary leading-tight">
          LETTERS
        </span>
      </div>
    </div>
  );
}
