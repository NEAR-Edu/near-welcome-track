import React from 'react';

const CornerGradient: React.FC<
  {
    colorA: string;
    colorB: string;
  } & React.SVGProps<SVGSVGElement>
> = ({ colorA, colorB, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg width="814" height="688" viewBox="0 0 814 688" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" {...props}>
    <g filter="url(#filter0_f_27_130)">
      <ellipse cx="301.5" cy="191.5" rx="296.5" ry="312.5" transform="rotate(-90 301.5 191.5)" fill="url(#paint0_linear_27_130)" />
    </g>
    <defs>
      <filter id="filter0_f_27_130" x="-211" y="-305" width="1025" height="993" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_27_130" />
      </filter>
      <linearGradient id="paint0_linear_27_130" x1="559.091" y1="283.057" x2="134.056" y2="235.026" gradientUnits="userSpaceOnUse">
        <stop stopColor={colorA} />
        <stop offset="1" stopColor={colorB} />
      </linearGradient>
    </defs>
  </svg>
);

export default CornerGradient;
