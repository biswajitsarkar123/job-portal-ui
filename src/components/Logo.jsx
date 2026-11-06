import { useId } from "react";

const Logo = ({ className = "h-10 w-10" }) => {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="JobPortal logo"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="1" stopColor="#9333ea" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${gradientId})`} />
      <path
        d="M19 15v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect x="10" y="15" width="28" height="20" rx="4" stroke="#fff" strokeWidth="2.5" />
      <path d="M10 23h28" stroke="#fff" strokeWidth="2.5" />
      <path
        d="m19.5 27.5 3 3 6-6"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
