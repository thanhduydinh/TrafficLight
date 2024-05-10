"use client";

import { ChevronDown } from "@/assets/icons/ChevronDown";
import { cn } from "@/config/utils";
import { useState, useEffect, useRef } from "react";

interface DropdownItem {
  label: string;
  value: string;
}

type DropdownProps = {
  size?: "sm" | "lg";
  placeholder?: string;
  options: DropdownItem[];
  disabled?: boolean;
  className?: string;
} & (
  | {
      value: DropdownItem | null;
      onChange: (selectedItem: DropdownItem) => void;
    }
  | { value?: undefined; onChange?: undefined }
);

const Dropdown = ({
  size = "sm",
  placeholder,
  options,
  value,
  className,
  disabled = false,
  onChange,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const mainValue = value !== undefined ? value : selectedItem;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectItem = (item: DropdownItem) => {
    toggleDropdown();
    setSelectedItem(item);
    onChange?.(item);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !dropdownRef.current?.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={cn("relative h-fit")}>
      <div
        ref={inputRef}
        className={cn(
          "flex justify-between w-fit text-base border-2 select-none border-dark-300 cursor-pointer text-dark",
          {
            "px-2 py-0.5 rounded": size === "sm",
            "px-3.5 py-2.5 rounded-xl": size === "lg",
            "text-dark-400": mainValue === null,
            "opacity-75 pointer-events-none": disabled,
          },
          className
        )}
        onClick={toggleDropdown}
      >
        {mainValue?.label || placeholder}
        <ChevronDown className="ml-2 my-auto" />
      </div>

      <div
        ref={dropdownRef}
        className={cn(
          "absolute max-h-60 overflow-auto w-fit py-1 z-10 mt-2 mb-4 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 cursor-pointer focus:outline-none animate-[fadeInDown_0.2s]",
          isOpen ? "block" : "hidden"
        )}
      >
        {options.map((item) => (
          <div
            key={item.value}
            onClick={() => handleSelectItem(item)}
            className={cn("text-sm text-dark select-none hover:bg-white-700", {
              "bg-dark-200 hover:bg-dark-200": item.value === mainValue?.value,
              "px-3 py-1": size === "sm",
              "px-4 py-2": size === "lg",
            })}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
