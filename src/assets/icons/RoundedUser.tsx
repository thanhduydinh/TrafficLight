import { SVGAttributes } from "react";

export default function RoundedUser(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12.5" r="12" fill="#B4916C" fillOpacity="0.1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7808 14.1074C9.74151 14.1074 8 14.4158 8 15.6506C8 16.8854 9.73046 17.2048 11.7808 17.2048C13.8201 17.2048 15.5611 16.8959 15.5611 15.6616C15.5611 14.4273 13.8311 14.1074 11.7808 14.1074Z"
        stroke="#B4916C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7809 12.3464C13.1192 12.3464 14.2038 11.2612 14.2038 9.92295C14.2038 8.58468 13.1192 7.5 11.7809 7.5C10.4426 7.5 9.35744 8.58468 9.35744 9.92295C9.35292 11.2567 10.4306 12.3419 11.7638 12.3464H11.7809Z"
        stroke="#B4916C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
