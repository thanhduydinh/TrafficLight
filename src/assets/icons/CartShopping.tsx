import { SVGAttributes } from "react";

export default function CartShopping(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12.5" r="12" fill="#B4916C" fillOpacity="0.08" />
      <g clipPath="url(#clip0_1_14153)">
        <path
          d="M10.5 17.5C10.7761 17.5 11 17.2761 11 17C11 16.7239 10.7761 16.5 10.5 16.5C10.2239 16.5 10 16.7239 10 17C10 17.2761 10.2239 17.5 10.5 17.5Z"
          stroke="#B4916C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17.5C16.2761 17.5 16.5 17.2761 16.5 17C16.5 16.7239 16.2761 16.5 16 16.5C15.7239 16.5 15.5 16.7239 15.5 17C15.5 17.2761 15.7239 17.5 16 17.5Z"
          stroke="#B4916C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 7H8.5L9.84 13.695C9.88572 13.9252 10.011 14.132 10.1938 14.2791C10.3766 14.4263 10.6053 14.5045 10.84 14.5H15.7C15.9347 14.5045 16.1634 14.4263 16.3462 14.2791C16.529 14.132 16.6543 13.9252 16.7 13.695L17.5 9.5H9"
          stroke="#B4916C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_14153">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(6 6.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
