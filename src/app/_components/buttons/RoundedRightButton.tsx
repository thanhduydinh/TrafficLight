import React from "react";

interface RoundedRightButtonProps {
  onClick: () => void;
  label: string;
  variant?: "primary" | "outlined";
}

const RoundedRightButton: React.FC<RoundedRightButtonProps> = ({
  onClick,
  label,
  variant = "primary",
}) => {
  const buttonStyles =
    variant === "outlined"
      ? "mt-6 px-7 py-4 bg-button-color-white rounded-r-xl text-sm text-white font-bold uppercase"
      : "mt-6 px-7 py-4 bg-button-color-brown rounded-r-xl text-sm text-white font-bold uppercase";

  return (
    <button onClick={onClick} className={`${buttonStyles}`}>
      {label}
    </button>
  );
};

export default RoundedRightButton;
