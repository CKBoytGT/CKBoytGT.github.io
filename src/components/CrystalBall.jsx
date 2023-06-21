// import { useState } from "react";
import "../assets/css/crystal-ball.css"

const CrystalBall = ( { style } ) => {
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
      style={style}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <title>Glowing green and purple crystal ball with a floating code symbol inside.</title>
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
            d="m361.77,637.9c0-3.06.68-5.94,2.04-8.67l131.57-320.76c2.72-6.8,7.65-10.2,14.79-10.2h63.23c5.43,0,8.16,2.55,8.16,7.65,0,2.38-.51,5.1-1.53,8.16l-131.57,320.76c-2.72,6.81-7.82,10.2-15.3,10.2h-62.72c-5.78,0-8.67-2.37-8.67-7.14Z"
          />
          <path
            style={styles.contentColor}
            d="m111.54,500.22c-3.4-1.35-5.7-3.06-6.88-5.1-1.2-2.04-1.79-4.92-1.79-8.67v-30.6c0-3.74.59-6.63,1.79-8.67,1.19-2.04,3.48-3.74,6.88-5.1l224.89-100.97c2.04-.68,3.57-1.02,4.59-1.02,4.41,0,6.63,2.38,6.63,7.14v56.09c0,4.08-.6,6.88-1.78,8.41-1.2,1.53-3.49,2.98-6.88,4.33l-134.12,54.56,134.12,54.56c3.39,1.36,5.69,2.8,6.88,4.33,1.19,1.53,1.78,4.33,1.78,8.41v57.11c0,4.76-2.21,7.14-6.63,7.14-2.04,0-3.57-.34-4.59-1.02l-224.89-100.97Z"
          />
          <path
            style={styles.contentColor}
            d="m601.8,602.21c-4.08,0-6.12-2.37-6.12-7.14v-52.52c0-3.74.59-6.45,1.78-8.16,1.19-1.7,3.48-3.23,6.88-4.59l137.18-59.15-137.18-59.15c-3.4-1.35-5.7-2.88-6.88-4.59-1.19-1.7-1.78-4.41-1.78-8.16v-51.51c0-4.76,2.04-7.14,6.12-7.14,1.02,0,2.55.34,4.59,1.02l225.4,100.97c3.06,1.36,5.27,3.06,6.63,5.1,1.35,2.04,2.04,4.93,2.04,8.67v30.6c0,3.74-.69,6.63-2.04,8.67-1.36,2.04-3.57,3.75-6.63,5.1l-225.4,100.97c-2.04.68-3.57,1.02-4.59,1.02Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default CrystalBall;
