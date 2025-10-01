interface VetLedgerLogoProps {
  className?: string;
}

export const VetLedgerLogo = ({ className = "w-10 h-10" }: VetLedgerLogoProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Book/Ledger base */}
      <rect
        x="20"
        y="25"
        width="60"
        height="50"
        rx="4"
        fill="currentColor"
        opacity="0.9"
      />
      
      {/* Book spine detail */}
      <rect
        x="20"
        y="25"
        width="8"
        height="50"
        rx="4"
        fill="currentColor"
        opacity="0.7"
      />
      
      {/* Veterinary cross */}
      <g transform="translate(50, 50)">
        {/* Vertical bar of cross */}
        <rect
          x="-3"
          y="-15"
          width="6"
          height="30"
          rx="2"
          fill="white"
        />
        {/* Horizontal bar of cross */}
        <rect
          x="-12"
          y="-3"
          width="24"
          height="6"
          rx="2"
          fill="white"
        />
        {/* Small heart accent */}
        <circle
          cx="0"
          cy="-8"
          r="2"
          fill="white"
          opacity="0.8"
        />
      </g>
      
      {/* Ledger lines accent */}
      <line
        x1="32"
        y1="35"
        x2="42"
        y2="35"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="32"
        y1="42"
        x2="42"
        y2="42"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  );
};
