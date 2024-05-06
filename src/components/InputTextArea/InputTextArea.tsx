"use client"

import React, { ChangeEvent } from "react";
import "./InputTextArea.scss";

interface InputProps{
    name: string;
    placeholder: string;
    onChange: (value: { name: string, value: string }) => void;
}

export default function InputTextArea({
    name,
    placeholder,
    onChange
  }: InputProps) {

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange({name: event.target.name,value: event.target.value});
    }
  
    return (
      <>
          <textarea
            className="textarea"
            placeholder={placeholder}
            onChange={handleChange}
            name={name}
            rows={4}
            cols={50}
          />
      </>
    )
  }
  