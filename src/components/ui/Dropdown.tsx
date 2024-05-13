"use client";

import { ChevronDown } from "@/assets/icons/ChevronDown";
import { cn } from "@/config/utils";
import useClickOutside from "@/hooks/useClickOutside";
import { useState, useRef, useMemo, useEffect } from "react";

interface DropdownItem {
  label: string;
  value: string | number;
}

type DropdownProps = {
  size?: "sm" | "lg";
  placeholder?: string;
  options: DropdownItem[];
  disabled?: boolean;
  className?: string;
  defaultValue?: DropdownItem | null;
  searchEnabled?: boolean;
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
  defaultValue = null,
  value,
  className,
  disabled = false,
  onChange,
  searchEnabled = false,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownTop, setIsDropdownTop] = useState(false);
  const [selectedValue, setSelectedValue] = useState<DropdownItem | null>(
    defaultValue
  );
  const [searchTerm, setSearchTerm] = useState("");
  const mainValue = value !== undefined ? value : selectedValue;

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => {
    const dropdownEl = dropdownRef.current;
    if (dropdownEl && !isOpen) {
      const rect = dropdownEl.getBoundingClientRect();
      setIsDropdownTop(window.innerHeight - rect.bottom < 300);
    }
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item: DropdownItem) => {
    toggleDropdown();
    setSelectedValue(item);
    onChange?.(item);
    setSearchTerm("");
  };

  const filteredOptions = useMemo(
    () =>
      searchEnabled
        ? options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : options,
    [searchTerm, options, searchEnabled]
  );

  useEffect(() => {
    if (isOpen && searchEnabled) {
      inputRef.current?.focus();
    }
  }, [isOpen, searchEnabled]);

  return (
    <div className={cn("relative w-fit h-fit")} ref={dropdownRef}>
      <div
        className={cn(
          "flex items-center text-base select-none cursor-pointer border border-dark-300 hover:border-primary",
          {
            "px-2 py-0.5 rounded": size === "sm",
            "px-3.5 py-2.5 rounded-xl": size === "lg",
            "text-dark-400 font-light": !selectedValue,
            "opacity-75 pointer-events-none": disabled,
          },
          className
        )}
        onClick={toggleDropdown}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={mainValue?.label || placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={cn(
            searchEnabled || disabled ? "inline-block" : "hidden",
            "w-full border-none outline-none focus:ring-0"
          )}
        />
        {!searchEnabled && (mainValue?.label || placeholder)}
        <ChevronDown className="ml-2 my-auto" />
      </div>

      {isOpen && (
        <div
          className={cn(
            "absolute max-h-[300px] w-full py-1 z-10 mt-2 rounded-md bg-white shadow-lg border border-dark-300 cursor-pointer scrollbarStyle",
            isDropdownTop
              ? "bottom-full mb-2 animate-[fadeInUp_0.2s]"
              : "top-full mt-2 animate-[fadeInDown_0.2s]"
          )}
        >
          {filteredOptions.map((item) => (
            <div
              key={item.value}
              onClick={() => handleSelectItem(item)}
              className={cn(
                "text-dark",
                item.value === mainValue?.value
                  ? "bg-white-200 font-medium"
                  : "hover:bg-white-200",
                {
                  "px-3 py-1": size === "sm",
                  "px-4 py-3": size === "lg",
                }
              )}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
