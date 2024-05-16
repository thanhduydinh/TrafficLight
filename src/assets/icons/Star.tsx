import { SVGAttributes } from "react";

interface StarProps extends SVGAttributes<SVGSVGElement> {
  color?: string;
}

export function Star({ color = "#F5CF05", ...props }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className="inline-block flex-shrink-0"
    >
      <g clip-path="url(#clip0_1_13544)">
        <path
          d="M5.00065 0.833984L6.28815 3.44232L9.16732 3.86315L7.08398 5.89232L7.57565 8.75899L5.00065 7.40482L2.42565 8.75899L2.91732 5.89232L0.833984 3.86315L3.71315 3.44232L5.00065 0.833984Z"
          fill={color}
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_13544">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
