import * as React from "react";

export interface SbIconProps {
  id?: string;
  fill?: string;
  className?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export default function SbSvg({
  id = "",
  className = "",
  width,
  height,
  onClick
}: SbIconProps): JSX.Element {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 120 84"
      id={id}
      width={width}
      height={height}
      className={className}
      onClick={() => onClick?.() } >
      <defs>
        <linearGradient id="sbLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1A40" />
          <stop offset="50%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#9F1239" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="108" height="72" rx="24" fill="url(#sbLogoGrad)" />
      <path d="M37 29 C35.5 28 33 29.2 33 31.2 L33 52.8 C33 54.8 35.5 56 37 55 L53 44.2 C54.5 43.2 54.5 40.8 53 39.8 Z" fill="#ffffff" />
      <path d="M57 29 C55.5 28 53 29.2 53 31.2 L53 52.8 C53 54.8 55.5 56 57 55 L73 44.2 C74.5 43.2 74.5 40.8 73 39.8 Z" fill="#ffffff" />
    </svg>
  );
}