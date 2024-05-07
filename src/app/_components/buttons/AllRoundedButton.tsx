import React from "react";

interface AllRoundedButtonProps {
  onClick: () => void;
  content: string;
  icon: React.ReactNode;
  variant?: "primary" | "outlined";
}

const AllRoundedButton: React.FC<AllRoundedButtonProps> = ({
  onClick,
  content,
  icon,
  variant = "primary",
}) => {
  const buttonStyles =
    variant === "outlined"
      ? "bg-transparent border border-solid border-[#B4916C] text-[#B4916C] font-medium hover:bg-[#B4916C] hover:text-white"
      : "bg-[#B4916C] text-white font-medium hover:bg-[#FFFFFF] hover:text-[#B4916C] hover:border hover:border-solid hover:border-[#B4916C]";

  return (
    <button
      className={`${buttonStyles} ${
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
