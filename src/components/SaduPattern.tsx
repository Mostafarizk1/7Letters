"use client";

interface SaduPatternProps {
  className?: string;
}

export default function SaduPattern({ className = "" }: SaduPatternProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="sadu-pattern"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 30 L15 15 L30 30 L15 45 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M30 30 L45 15 L60 30 L45 45 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M15 0 L30 15 L15 30 L0 15 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M45 0 L60 15 L45 30 L30 15 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M15 30 L30 45 L15 60 L0 45 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M45 30 L60 45 L45 60 L30 45 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="30"
            x2="60"
            y2="30"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="30"
            y1="0"
            x2="30"
            y2="60"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sadu-pattern)" />
    </svg>
  );
}
