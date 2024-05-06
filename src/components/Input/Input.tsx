"use client"

import React, { ChangeEvent, useState } from "react";
import './Input.scss'

interface InputProps{
    name: string;
    placeholder: string;
    errorMessage: string;
    errors?: any;
    onChange: (value: { name: string, value: string }) => void;
}

export default function Input({
    name,
    placeholder,
    errorMessage,
    onChange
  }: InputProps) {

    const [valueInput,setValueInput] = useState("");
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange({name: event.target.name,value: event.target.value});
      setValueInput(event.target.value);
    }
  
    return (
      <>
        <div className="inputinfor">
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            name={name}
          />
        </div>
        {valueInput.length >0 || <p className="err">{errorMessage}</p>}
      </>
    )
  }
  