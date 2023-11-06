/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./index.css"

const CrystalBall = () => {
  // const [isHover, setIsHover] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // }

  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };

  const styles = {
    main: {
      height: "25em",
      width: "auto",
      overflow: "visible",
    },
    contentColor: {
      fill: "rgb(var(--dark))",
    },
    standEdge: {
      fill: "url(#stand-edge-grad)",
    },
    standTop: {
      fill: "url(#stand-top-grad)",
    },
    shade: {
      fill: "url(#shade-grad)",
    },
    color: {
      fill: "url(#color-grad)",
    }
  };

  return (
    <svg
      viewBox="0 0 943.32 1080"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      style={{
        height: "32rem",
        width: "auto",
        overflow: "visible",
        padding: "2.5rem 5rem 0 5rem",
      }}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <title>
        Glowing green and purple crystal ball with a floating code symbol
        inside.
      </title>
      <defs>
        <linearGradient
          id="stand-edge-grad"
          x1="162.26"
          y1="991.8"
          x2="781.06"
          y2="991.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(var(--accent))" />
          <stop offset="1" stopColor="rgb(var(--dark))" />
        </linearGradient>
        <linearGradient
          id="stand-top-grad"
          x1="200.39"
          y1="903.6"
          x2="742.93"
          y2="903.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(var(--accent))" />
          <stop offset="1" stopColor="rgb(var(--dark))" />
        </linearGradient>
        <radialGradient
          id="shade-grad"
          cx="471.66"
          cy="471.66"
          fx="340.49"
          fy="244.85"
          r="471.66"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".76" stopColor="rgb(var(--light))" stopOpacity="0" />
          <stop offset="1" stopColor="rgb(var(--light))" />
        </radialGradient>
        <linearGradient
          id="color-grad"
          x1="471.66"
          y1="943.32"
          x2="471.66"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(var(--light))" />
          <stop offset="1" stopColor="rgb(var(--accent))" />
        </linearGradient>
      </defs>
      <g id="stand">
        <g id="top">
          <ellipse
            style={styles.standTop}
            cx="471.66"
            cy="903.6"
            rx="271.27"
            ry="62.52"
          />
        </g>
        <g id="edge">
          <path
            style={styles.standEdge}
            d="m742.93,900.56c0,34.53-121.45,63.96-271.27,63.96s-271.27-29.43-271.27-63.96l-38.13,108.14c0,39.38,138.52,71.3,309.4,71.3s309.4-31.92,309.4-71.3l-38.13-108.14Z"
          />
        </g>
      </g>
      <g id="ball" style={styles.ball}>
        <circle
          id="color"
          style={styles.color}
          cx="471.66"
          cy="471.66"
          r="470"
        />
        <circle
          id="shade"
          style={styles.shade}
          cx="471.66"
          cy="471.66"
          r="471.66"
        />
        <g id="content">
          <path
            style={styles.contentColor}
            d="M324.1,587.6l-183.2-95.2l-1.4-32.1l184.1-104.4l21.5,40.3l-136.5,76.5l0.5,2.7l136.9,70.1L324.1,587.6z"
          />
          <path
            style={styles.contentColor}
            d="M429.4,666.5l-48.1-19.7l141-370l47.2,20.6L429.4,666.5z"
          />
          <path
            style={styles.contentColor}
            d="M619.9,587.6l-22.4-42.1l137.4-70.1l0.5-2.7l-136.5-76.5l21.5-40.3l184.1,104.4l-1.8,32.1L619.9,587.6z"
          />
        </g>
      </g>
    </svg>
  );
};

export default CrystalBall;
