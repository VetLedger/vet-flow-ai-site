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
      {/* Rounded square frame */}
      <path
        d="M 15 25 
           L 15 25
           Q 15 15, 25 15
           L 75 15
           Q 85 15, 85 25
           L 85 75
           Q 85 85, 75 85
           L 25 85
           Q 15 85, 15 75
           Z"
        stroke="currentColor"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Medical cross */}
      <g transform="translate(35, 35)">
        {/* Vertical bar */}
        <rect
          x="-4"
          y="-12"
          width="8"
          height="24"
          rx="2"
          fill="currentColor"
        />
        {/* Horizontal bar */}
        <rect
          x="-12"
          y="-4"
          width="24"
          height="8"
          rx="2"
          fill="currentColor"
        />
      </g>
      
      {/* Checkmark */}
      <path
        d="M 32 52 L 45 68 L 78 28"
        stroke="currentColor"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
