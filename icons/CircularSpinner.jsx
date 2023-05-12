const CircularSpinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 96 96" style={{whiteSpace: "pre"}}>
        <style>
          {`
            @keyframes a0_t {
                0% {
                    transform: translate(48px, 48px) rotate(-90deg);
                }
                100% {
                    transform: translate(48px, 48px) rotate(620deg);
                }
            }
            @keyframes a0_da {
                0% {
                    stroke-dasharray: 24px 276px;
                    animation-timing-function: cubic-beizer(0.42,0,0.539934,0.829909);
                }
                33.33% {
                    stroke-dasharray: 198px 276px;
                }
                66.6667% {
                    stroke-dasharray: 99px 276px;
                    animation-timing-function: cubic-beizer(0.499609,0.546752,0.58,1);
                }
                100% {
                    stroke-dasharray: 24px 276px;
                }
            }
          `}
        </style>
        <ellipse rx="44" ry="44" fill="none" strokeLinejoin="round" stroke="#e5e5e5" strokeWidth="4" transform="translate(48,48)" />
        <ellipse rx="44" ry="44" fill="none" strokeLinejoin="miter" stroke="#e60000" strokeWidth="4" strokeDasharray="24 276" strokeLinecap="butt" transform="translate(48,48) rotate(-90)" style={{animation: "3s linear infinite both a0_t, 3s linear infinite both a0_da"}} />
      </svg>
    )
}

export default CircularSpinner;