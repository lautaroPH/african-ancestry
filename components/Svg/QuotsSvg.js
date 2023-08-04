const QuotsSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={173}
      height={160}
      fill="none"
    >
      <g filter="url(#a)">
        <path
          fill="#FFBB0B"
          d="M61.54 59.873 69.94 89H56.906L43 56.67V29h30.706v30.874H61.54Zm42.293 0L112.234 89H99.198L85.294 56.67V29H116v30.874h-12.167Z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={173}
          height={160}
          x={0}
          y={-0.001}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={7} dy={21} />
          <feGaussianBlur stdDeviation={25} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.28167 0 0 0 0 0.168437 0 0 0 0 0.525 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3201_129"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_3201_129"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default QuotsSvg;
