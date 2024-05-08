import React from "react";
import { cn } from "@/config/utils";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  content: string;
  icon: React.ReactNode;
  variant?: "primary" | "outlined";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  content,
  icon,
  variant = "primary",
  disabled = false,
}) => {
  const buttonStyles =
    variant === "outlined"
      ? "h-12 bg-transparent border border-solid border-primary text-primary font-medium hover:bg-primary hover:text-white"
      : "h-12 bg-primary text-white font-medium hover:bg-white hover:text-primary hover:border hover:border-solid hover:border-primary";

  return (
    <button
      className={cn(
        `${buttonStyles} ${
          icon
            ? "flex gap-2 items-center content-center"
            : "items-center content-center"
        }`,
        disabled && "bg-red-900 pointer-events-none",
        className,
      )}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {content}
    </button>
  );
};

export default Button;
