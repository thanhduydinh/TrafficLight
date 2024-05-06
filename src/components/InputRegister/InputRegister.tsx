"use client"
import "./InputRegister.scss"
import React, { ChangeEvent, useState } from "react";
interface InputProps {
    onClickRegister: (value: string) => void;
}

const InputRegister: React.FC<InputProps> = ({ onClickRegister }) => {

    const [email, setEmail] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleRegister = () => {
        onClickRegister(email);
    };

    return (
        <div className="inputregister">
            <input
                type="text"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={handleChange}
            />
            <button onClick={handleRegister}>ĐĂNG KÍ</button>
        </div>
    );
};

export default InputRegister;