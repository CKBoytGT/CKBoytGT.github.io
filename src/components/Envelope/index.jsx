import "./index.css";

const Envelope = () => {
  return (
    <svg
      viewBox="0 0 1082 641"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      style={{
        maxHeight: "28rem",
        width: "auto",
        flex: "1 1 50%",
      }}
    >
      <title>
        Green and purple envelope with a purple wax seal bearing the C. K. Boyt
        logo.
      </title>
      <defs>
        <clipPath id="clippath">
          <path
            style={{ fill: "none" }}
            d="m1081,32.67v574.67c0,2.87-.37,5.65-1.07,8.29l-440.2-295.63L1079.93,24.37c.69,2.65,1.07,5.43,1.07,8.3ZM459.87,313.75l66.98,44.98c8.6,5.77,19.7,5.77,28.3,0l67-45s.02-.02.04-.02L1072.83,11.07c-5.99-6.79-14.74-11.07-24.5-11.07H33.67C23.91,0,15.15,4.29,9.17,11.07l450.64,302.64s.04.03.07.04Zm103.64,57.44c-6.84,4.59-14.68,6.89-22.51,6.89s-15.67-2.3-22.51-6.89l-62.77-42.15L9.17,628.93c5.99,6.79,14.74,11.07,24.5,11.07h1014.67c9.76,0,18.51-4.29,24.5-11.07l-446.55-299.89-62.77,42.15ZM2.07,24.37c-.69,2.65-1.07,5.43-1.07,8.3v574.67c0,2.87.37,5.65,1.07,8.29l440.2-295.63L2.07,24.37Z"
          />
        </clipPath>
        <linearGradient
          id="grad-envelope-right"
          x1="2674.4"
          y1="177.59"
          x2="2279.63"
          y2="481.03"
          gradientTransform="translate(3541.27) rotate(-180) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(var(--accent))" />
          <stop offset=".31" stopColor="#93bdd8" />
          <stop offset="1" stopColor="rgb(var(--light))" />
        </linearGradient>
        <linearGradient
          id="grad-envelope-top"
          x1="471.01"
          y1="-100.93"
          x2="781.3"
          y2="395.64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(var(--accent))" />
          <stop offset=".13" stopColor="#9ae0de" />
          <stop offset=".32" stopColor="#96cedb" />
          <stop offset=".53" stopColor="#90b0d5" />
          <stop offset=".77" stopColor="#8786cd" />
          <stop offset="1" stopColor="rgb(var(--light))" />
        </linearGradient>
        <linearGradient
          id="grad-envelope-bottom"
          x1="444.29"
          y1="544.3"
          x2="914.96"
          y2="957.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(var(--accent))" />
          <stop offset="1" stopColor="rgb(var(--light))" />
        </linearGradient>
        <linearGradient
          id="grad-envelope-left"
          x1="45.69"
          y1="322.67"
          x2="430.24"
          y2="638.96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(var(--accent))" />
          <stop offset=".13" stopColor="#9ae0de" />
          <stop offset=".32" stopColor="#96cddb" />
          <stop offset=".54" stopColor="#90add5" />
          <stop offset=".79" stopColor="#8782cd" />
          <stop offset="1" stopColor="rgb(var(--light))" />
        </linearGradient>
        <linearGradient
          id="grad-shadow-top-flap-right"
          x1="2705.17"
          y1="139.53"
          x2="2410.9"
          y2="544.55"
          gradientTransform="translate(3541.27) rotate(-180) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(var(--light))" />
          <stop offset=".04" stopColor="rgb(var(--light))" stopOpacity=".84" />
          <stop offset=".1" stopColor="rgb(var(--light))" stopOpacity=".64" />
          <stop offset=".17" stopColor="rgb(var(--light))" stopOpacity=".47" />
          <stop offset=".24" stopColor="rgb(var(--light))" stopOpacity=".32" />
          <stop offset=".32" stopColor="rgb(var(--light))" stopOpacity=".2" />
          <stop offset=".41" stopColor="rgb(var(--light))" stopOpacity=".11" />
          <stop offset=".52" stopColor="rgb(var(--light))" stopOpacity=".05" />
          <stop offset=".67" stopColor="rgb(var(--light))" stopOpacity=".01" />
          <stop offset="1" stopColor="rgb(var(--light))" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="grad-shadow-top-flap-left"
          x1="2063.84"
          y1="143.1"
          x2="1769.57"
          y2="548.12"
          gradientTransform="translate(-1820.53)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(var(--light))" stopOpacity=".5" />
          <stop offset=".02" stopColor="rgb(var(--light))" stopOpacity=".47" />
          <stop offset=".1" stopColor="rgb(var(--light))" stopOpacity=".32" />
          <stop offset=".2" stopColor="rgb(var(--light))" stopOpacity=".2" />
          <stop offset=".31" stopColor="rgb(var(--light))" stopOpacity=".11" />
          <stop offset=".44" stopColor="rgb(var(--light))" stopOpacity=".05" />
          <stop offset=".61" stopColor="rgb(var(--light))" stopOpacity=".01" />
          <stop offset="1" stopColor="rgb(var(--light))" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="grad-shadow-seal"
          cx="541"
          cy="324.42"
          fx="541"
          fy="324.42"
          r="393.04"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(var(--light))" />
          <stop offset=".03" stopColor="rgb(var(--light))" stopOpacity=".95" />
          <stop offset=".22" stopColor="rgb(var(--light))" stopOpacity=".66" />
          <stop offset=".41" stopColor="rgb(var(--light))" stopOpacity=".43" />
          <stop offset=".58" stopColor="rgb(var(--light))" stopOpacity=".24" />
          <stop offset=".74" stopColor="rgb(var(--light))" stopOpacity=".11" />
          <stop offset=".89" stopColor="rgb(var(--light))" stopOpacity=".03" />
          <stop offset="1" stopColor="rgb(var(--light))" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g id="envelope-clipped">
        <g style={{ clipPath: "url(#clippath)" }}>
          <path
            id="envelope-right"
            style={{ fill: "url(#grad-envelope-right)" }}
            d="m1079.93,24.37c.69,2.65,1.07,5.43,1.07,8.3v574.67c0,2.87-.37,5.65-1.07,8.29l-440.2-295.63L1079.93,24.37Z"
          />
          <path
            id="envelope-top"
            style={{ fill: "url(#grad-envelope-top)" }}
            d="m459.8,313.71s.04.03.07.04l66.98,44.98c8.6,5.77,19.7,5.77,28.3,0l67-45s.02-.02.04-.02L1072.83,11.07c-5.99-6.79-14.74-11.07-24.5-11.07H33.67C23.91,0,15.15,4.29,9.17,11.07l450.64,302.64Z"
          />
          <path
            id="envelope-bottom"
            style={{ fill: "url(#grad-envelope-bottom)" }}
            d="m626.28,329.03l-62.77,42.15c-6.84,4.59-14.68,6.89-22.51,6.89s-15.67-2.3-22.51-6.89l-62.77-42.15L9.17,628.93c5.99,6.79,14.74,11.07,24.5,11.07h1014.67c9.76,0,18.51-4.29,24.5-11.07l-446.55-299.89Z"
          />
          <path
            id="envelope-left"
            style={{ fill: "url(#grad-envelope-left)" }}
            d="m2.07,24.37c-.69,2.65-1.07,5.43-1.07,8.3v574.67c0,2.87.37,5.65,1.07,8.29l440.2-295.63L2.07,24.37Z"
          />
          <path
            id="shadow-top-flap-right"
            style={{ fill: "url(#grad-shadow-top-flap-right)" }}
            d="m637.94,320L1080.55,22.76l.36,1.36c.73,2.78,1.1,5.66,1.1,8.55v574.67c0,2.89-.37,5.76-1.1,8.55l-.36,1.36-442.61-297.24Z"
          />
          <path
            id="shadow-top-flap-left"
            style={{ fill: "url(#grad-shadow-top-flap-left)" }}
            d="m1.1,615.88c-.73-2.78-1.1-5.66-1.1-8.55V32.67c0-2.89.37-5.76,1.1-8.55l.36-1.36,442.61,297.24L1.45,617.24l-.36-1.36Z"
          />
          <path
            id="shadow-seal"
            style={{ fill: "url(#grad-shadow-seal)" }}
            d="m33.67,641c-9.65,0-18.85-4.16-25.25-11.41l-.75-.86,448.06-300.9,63.33,42.53c6.54,4.39,14.14,6.72,21.95,6.72s15.41-2.32,21.96-6.72l63.33-42.53,448.06,300.9-.75.86c-6.4,7.25-15.6,11.41-25.25,11.41H33.67Z"
          />
        </g>
      </g>
      <g id="seal">
        <path
          id="seal-blob"
          style={{ fill: "rgb(var(--light))" }}
          d="m668,321.76c0-22.28-5.85-43.2-16.08-61.31-2.69-34.91-31.85-62.41-67.45-62.41-2.94,0-5.82.21-8.66.57-14.45-7.13-30.71-11.14-47.91-11.14-59.86,0-108.38,48.52-108.38,108.38,0,2.58.1,5.13.27,7.67-.2,1.39-.38,2.78-.54,4.19-5.87,10.02-9.25,21.68-9.25,34.14,0,26.91,15.71,50.15,38.45,61.05,22.88,26.7,56.85,43.63,94.78,43.63,11.86,0,23.33-1.65,34.19-4.74,2.83.33,5.71.51,8.63.51,41.17,0,74.55-33.38,74.55-74.55,0-1.12-.04-2.23-.08-3.34,4.84-13.31,7.49-27.68,7.49-42.66Z"
        />
        <circle
          id="seal-drip-large"
          style={{ fill: "rgb(var(--light))" }}
          cx="606.5"
          cy="438.5"
          r="34.5"
        />
        <circle
          id="seal-drip-small"
          style={{ fill: "rgb(var(--light))" }}
          cx="671"
          cy="431"
          r="16"
        />
        <path
          id="seal-logo"
          style={{
            fill: "rgb(var(--dark))",
            opacity: "0.5",
          }}
          d="m629.38,354.91h0c-.21-1.46-.49-2.95-.84-4.46-.41-1.74-1.02-3.27-1.81-4.55l-.41-.66c2.35-8.02,3.62-16.49,3.62-25.25s-1.29-17.34-3.66-25.4l.33-.59c1.03-1.84,1.81-4,2.33-6.43.31-1.45.47-2.84.53-4.17l12.78-7.5c.76-.44.99-1.44.5-2.17l-3.1-4.63c-.49-.73-1.49-.9-2.19-.37l-11.49,8.73c-.62-.25-1.29-.48-2.02-.69h0c-1.41-.41-2.88-.76-4.4-1.06-.48-.09-.95-.16-1.41-.22-14.99-26.28-42.82-44.33-74.89-45.53l.81-9.54c.08-.89-.63-1.66-1.52-1.66h-5.45c-.89,0-1.6.77-1.52,1.66l.81,9.54c-46.93,1.79-84.77,39.64-86.54,86.58l-9.16-1.1c-.91-.11-1.71.6-1.71,1.52v6.04c0,.92.8,1.63,1.71,1.52l9.16-1.1c1.77,46.93,39.61,84.79,86.54,86.58l-.81,9.54c-.08.89.63,1.66,1.52,1.66h5.45c.89,0,1.6-.77,1.52-1.66l-.81-9.54c32.12-1.2,59.98-19.3,74.96-45.64,1.09-.09,2.21-.25,3.36-.5,1.65-.36,3.16-.84,4.55-1.43l11.39,8.58c.7.53,1.7.36,2.19-.37l3.02-4.52c.49-.73.26-1.72-.49-2.16l-12.69-7.52c-.04-.5-.09-1.01-.16-1.55Zm-92.99,21.44c-13.83-15.05-22.02-35.02-22.02-56.35s8.19-41.31,22.02-56.35v112.71Zm0-122.44c-18.01,16.72-28.9,40.5-28.9,66.09s10.88,49.37,28.9,66.09v17.05c-43.14-1.78-77.9-36.55-79.66-79.7l9.47,1.11c.91.11,1.7-.6,1.7-1.52v-6.05c0-.91-.8-1.62-1.7-1.52l-9.47,1.11c1.76-43.14,36.52-77.91,79.66-79.7v17.04Zm77.49,92.07l-38.02-25.43c-.45-.3-.45-.97,0-1.27l37.81-25.29c.49.17,1.01.33,1.56.48,1.36.36,2.73.64,4.1.84,2.43,7.8,3.76,16.09,3.76,24.69s-1.31,16.82-3.73,24.6c-.48.07-.97.15-1.47.26-1.37.3-2.71.68-4,1.12Zm9.52-62.95c-.04,1.03-.18,2.13-.43,3.29-.24,1.15-.56,2.2-.94,3.15-.42-.03-.87-.07-1.35-.13-1.29-.16-2.59-.42-3.88-.76-.46-.12-.89-.26-1.29-.4.1-1.23.28-2.49.55-3.75.23-1.1.53-2.07.88-2.9.45.03.93.09,1.44.19,1.34.26,2.64.58,3.88.94.41.12.79.24,1.13.37Zm-80.14-46.16c5.18.21,10.23.89,15.13,2.01-5.39,2.6-10.45,5.71-15.13,9.26v-11.26Zm0,166.27v-11.26c4.68,3.55,9.74,6.65,15.13,9.26-4.89,1.12-9.95,1.8-15.13,2.01Zm25.45-5.08c-9.49-3.51-18.06-8.65-25.45-15.03v-126.04c7.39-6.38,15.96-11.52,25.45-15.03,18.19,6.75,33.4,19.68,43.06,36.23-.72,1.43-1.29,3.09-1.69,4.98-.39,1.82-.62,3.64-.72,5.43l-44.93,30.05c-.9.6-.9,1.93,0,2.54l44.95,30.07c.02.91.11,1.87.28,2.92.26,1.6.63,3.17,1.09,4.68.34,1.09.69,2.04,1.07,2.87-9.66,16.6-24.88,29.57-43.11,36.33Zm51.57-40.15c-1.15.25-2.24.39-3.26.43-.15-.39-.29-.82-.43-1.28-.38-1.23-.68-2.53-.89-3.85-.08-.47-.13-.92-.17-1.34,1.17-.41,2.38-.76,3.64-1.03,1.1-.24,2.11-.37,3-.38.16.42.3.89.41,1.39.31,1.33.56,2.65.74,3.93.06.42.1.82.13,1.19-.95.38-2.01.7-3.17.96Z"
        />
      </g>
    </svg>
  );
};

export default Envelope;
