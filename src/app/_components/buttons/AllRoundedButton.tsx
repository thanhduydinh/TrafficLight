import React from "react";

interface AllRoundedButtonProps {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
  variant?: "primary" | "outlined";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  borderRadius?: "sm" | "md" | "lg" | "xl";
  capitalizing?: "uppercase" | "capitalize";
}

const AllRoundedButton: React.FC<AllRoundedButtonProps> = ({
  onClick,
  label,
  icon,
  variant = "primary",
  size = "md",
  capitalizing = "capitalize",
  borderRadius = "md",
}) => {
  const buttonStyles =
    variant === "outlined"
      ? "bg-transparent border border-solid border-[#B4916C] text-[#B4916C] font-medium hover:bg-[#B4916C] hover:text-white"
      : "bg-[#B4916C] text-white font-medium hover:bg-[#FFFFFF] hover:text-[#B4916C] hover:border hover:border-solid hover:border-[#B4916C]";

  let sizeStyles = "";
  if (size === "sm") {
    sizeStyles = "px-[10px] py-[10px] text-sm";
  } else if (size === "lg") {
    sizeStyles = "px-[20px] py-[10px] text-sm";
  } else if (size === "xl") {
    sizeStyles = "px-[151px] py-[11px] text-base";
  } else if (size === "2xl") {
    sizeStyles = "px-[151px] py-[11px] text-lg";
  } else {
    sizeStyles = "px-[16px] py-[10px] text-base";
  }

  const alphaStyles = capitalizing === "uppercase" ? "uppercase" : "capitalize";

  let borderRadiusStyle = "";
  if (borderRadius === "sm") {
    borderRadiusStyle = "rounded-[5px]";
  } else if (borderRadius === "md") {
    borderRadiusStyle = "rounded-[8px]";
  } else if (borderRadius === "lg") {
    borderRadiusStyle = "rounded-[20px]";
  } else {
    borderRadiusStyle = "rounded-[30px]";
  }

  return (
    <button
      className={`${buttonStyles} ${sizeStyles} ${alphaStyles} ${borderRadiusStyle} ${
        icon ? "flex gap-2 items-center" : "items-center content-center"
      }`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default AllRoundedButton;
