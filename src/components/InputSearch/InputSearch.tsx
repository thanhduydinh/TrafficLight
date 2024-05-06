"use client"

import "./InputSearch.scss";
import clsx from "clsx";
import React from "react"

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const InputSearch: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  className,
  disabled,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
      <div className="inputsearch">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <img src="/search.svg"/>
      </div>
  );
};
