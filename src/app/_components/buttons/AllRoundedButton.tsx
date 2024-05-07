import React from "react";

interface AllRoundedButtonProps {
  onClick: () => void;
  content: string;
  icon: React.ReactNode;
  variant?: "primary" | "outlined";
  width?: number;
}

const AllRoundedButton: React.FC<AllRoundedButtonProps> = ({
  onClick,
  content,
  icon,
  variant = "primary",
  width,
}) => {
  const buttonStyles =
    variant === "outlined"
      ? "h-12 bg-transparent border border-solid border-[#B4916C] text-[#B4916C] font-medium hover:bg-[#B4916C] hover:text-white"
      : "h-12 bg-[#B4916C] text-white font-medium hover:bg-[#FFFFFF] hover:text-[#B4916C] hover:border hover:border-solid hover:border-[#B4916C]";

  const widthClass = width ? `w-[${width}px]` : "";
  return (
    <button
      className={`${buttonStyles} ${widthClass} ${
        icon
          ? "flex gap-2 items-center content-center"
          : "items-center content-center"
      }`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {content}
    </button>
  );
};

export default AllRoundedButton;
