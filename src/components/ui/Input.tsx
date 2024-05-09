"use client"

import React, { ChangeEvent } from "react";
import clsx from "clsx";

interface InputProps {
  label?: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  error?: string;
  disabled: boolean;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  className,
  onChange,
  value,
  error,
  disabled = false,
  children
}) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <>
      {label && <label className='block text-sm mb-1'>{label}</label>}
      <div className={clsx("mb-2", className)}>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInputChange}
          className='appearance-none border-none w-full text-sm placeholder-[#B9B9B9] focus:outline-none'
        />
        {children}
      </div>
      {error && <p className='text-red text-sm'>{error}</p>}
    </>
  );
};

export default Input;

