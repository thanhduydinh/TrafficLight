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
      ? "h-12 bg-transparent border border-solid border-primary text-primary font-medium hover:bg-primary hover:text-white"
      : "h-12 bg-primary text-white font-medium hover:bg-white hover:text-primary hover:border hover:border-solid hover:border-primary";

  const widthClass = width ? `w-${width}` : "";
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
