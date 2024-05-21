import { SVGAttributes } from "react";

export default function Search(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="currentColor"
      {...props}
    >
      <path
        d="M18.2656 16.6895L13.1934 11.6172C13.9805 10.5996 14.4062 9.35547 14.4062 8.04688C14.4062 6.48047 13.7949 5.01172 12.6895 3.9043C11.584 2.79687 10.1113 2.1875 8.54688 2.1875C6.98242 2.1875 5.50977 2.79883 4.4043 3.9043C3.29687 5.00977 2.6875 6.48047 2.6875 8.04688C2.6875 9.61133 3.29883 11.084 4.4043 12.1895C5.50977 13.2969 6.98047 13.9062 8.54688 13.9062C9.85547 13.9062 11.0977 13.4805 12.1152 12.6953L17.1875 17.7656C17.2024 17.7805 17.22 17.7923 17.2395 17.8004C17.2589 17.8084 17.2797 17.8126 17.3008 17.8126C17.3218 17.8126 17.3427 17.8084 17.3621 17.8004C17.3815 17.7923 17.3992 17.7805 17.4141 17.7656L18.2656 16.916C18.2805 16.9011 18.2923 16.8835 18.3004 16.864C18.3084 16.8446 18.3126 16.8238 18.3126 16.8027C18.3126 16.7817 18.3084 16.7609 18.3004 16.7414C18.2923 16.722 18.2805 16.7043 18.2656 16.6895ZM11.6406 11.1406C10.8125 11.9668 9.71484 12.4219 8.54688 12.4219C7.37891 12.4219 6.28125 11.9668 5.45312 11.1406C4.62695 10.3125 4.17188 9.21484 4.17188 8.04688C4.17188 6.87891 4.62695 5.7793 5.45312 4.95312C6.28125 4.12695 7.37891 3.67188 8.54688 3.67188C9.71484 3.67188 10.8145 4.125 11.6406 4.95312C12.4668 5.78125 12.9219 6.87891 12.9219 8.04688C12.9219 9.21484 12.4668 10.3145 11.6406 11.1406Z"
        fill="#B4916C"
      />
    </svg>
  );
}
