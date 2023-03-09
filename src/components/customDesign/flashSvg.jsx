export default function FlashSvg({ clr, textShadowProp }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{
        width: "40px",
        color: clr,
        textShadow: `rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 144, 255) 0px 0px 8px, rgb(255, 144, 255) 0px 0px 12px, rgb(255, 144, 255) 0px 0px 16px, rgb(255, 144, 255) 0px 0px 22px, rgb(255, 144, 255) 0px 0px 30px`,
      }}
    >
      <title>Flash</title>
      <path
        d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="25"
      />
    </svg>
  );
}
