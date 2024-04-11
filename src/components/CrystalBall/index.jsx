/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./index.css";

const CrystalBall = (props) => {
  // // use this if you want to set up an effect on hover
  // const [isHover, setIsHover] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // }

  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };

  return (
    <svg
      id="cb-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080 1080"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <radialGradient
          id="grad-glow-med"
          cx={540}
          cy={540}
          r={540}
          fx={540}
          fy={540}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="rgb(var(--light))" stopOpacity={1} />
          <stop offset={0.7} stopColor="rgb(var(--light))" stopOpacity={0.8} />
          <stop offset={1} stopColor="rgb(var(--light))" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="grad-glow-light"
          cx={540}
          cy={540}
          r={540}
          fx={540}
          fy={540}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.64} stopColor="rgb(var(--accent))" stopOpacity={1} />
          <stop
            offset={0.88}
            stopColor="rgb(var(--accent))"
            stopOpacity={0.1}
          />
          <stop
            offset={0.92}
            stopColor="rgb(var(--accent))"
            stopOpacity={0.02}
          />
          <stop offset={0.96} stopColor="rgb(var(--accent))" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="grad-ball-shade"
          cx={540}
          cy={539.93}
          r={418.73}
          fx={423.55}
          fy={338.57}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.76} stopColor="rgb(var(--light))" stopOpacity={0} />
          <stop offset={1} stopColor="rgb(var(--light))" />
        </radialGradient>
        <linearGradient
          id="grad-stand-top"
          x1={299.17}
          x2={780.83}
          y1={923.4}
          y2={923.4}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="rgb(var(--accent))" />
          <stop offset={1} stopColor="rgb(var(--dark))" />
        </linearGradient>
        <linearGradient
          id="grad-stand-edge"
          x1={265.32}
          x2={814.68}
          y1={1000.35}
          y2={1000.35}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="rgb(var(--accent))" />
          <stop offset={1} stopColor="rgb(var(--dark))" />
        </linearGradient>
        <linearGradient
          id="grad-ball-color"
          x1={540}
          x2={540}
          y1={958.07}
          y2={121.79}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="rgb(var(--light))" />
          <stop offset={1} stopColor="rgb(var(--accent))" />
        </linearGradient>
      </defs>
      <ellipse
        cx={540}
        cy={923.4}
        rx={240.83}
        ry={55.5}
        style={{
          fill: "url(#grad-stand-top)",
          strokeWidth: 0,
        }}
      />
      <path
        d="M780.83 920.69c0 30.65-107.82 56.78-240.83 56.78s-240.83-26.13-240.83-56.78l-33.85 96c0 34.96 122.98 63.3 274.68 63.3s274.68-28.34 274.68-63.3l-33.85-96Z"
        style={{
          fill: "url(#grad-stand-edge)",
          strokeWidth: 0,
        }}
      />
      <g id="cb-glow">
        <circle
          id="cb-glow-med"
          cx={540}
          cy={540}
          r={540}
          style={{
            fill: "url(#grad-glow-med)",
            strokeWidth: 0,
          }}
        />
        <circle
          id="cb-glow-light"
          cx={540}
          cy={540}
          r={540}
          style={{
            fill: "url(#grad-glow-light)",
            strokeWidth: 0,
          }}
        />
      </g>
      <g id="cb-ball">
        <circle
          cx={540}
          cy={539.93}
          r={418.14}
          style={{
            fill: "url(#grad-ball-color)",
            strokeWidth: 0,
          }}
        />
        <circle
          cx={540}
          cy={539.93}
          r={418.73}
          style={{
            fill: "url(#grad-ball-shade)",
            strokeWidth: 0,
          }}
        />
        <path
          id="cb-content"
          d="m408.69 642.83-162.61-84.56-1.22-28.46 163.43-92.69 19.11 35.77-121.15 67.89.41 2.44 121.55 62.2-19.51 37.4ZM502.19 712.91l-42.69-17.48 125.21-328.48 41.87 18.29-124.4 327.67ZM671.31 642.83l-19.92-37.4 121.96-62.2.41-2.44-121.15-67.89 19.11-35.77 163.43 92.69-1.63 28.46-162.21 84.56Z"
          style={{
            fill: "rgb(var(--dark))",
            strokeWidth: 0,
          }}
        />
      </g>
    </svg>
  );
};

export default CrystalBall;
