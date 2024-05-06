"use client"

import { cn } from "../config/utils";
import { getTodos } from "../services";
import Count2 from "./_components/Count";
import { InputSearch } from "@/components/InputSearch/InputSearch";
import InputRegister from "@/components/InputRegister/InputRegister";
import InputTextArea from "@/components/InputTextArea/InputTextArea";
import Input from "@/components/Input/Input";
import { useState } from "react";
export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [inforShip,setInforShip] = useState({
    name: "",
    phone: "",
    addressdetail: "",
    note: ""
  })

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };
  
  const handleRegister = (value: string) => {
    console.log(value)
  }

  const handleChangeInforShip = (value: { name: string, value: string }) => {
    setInforShip({...inforShip,[value.name]: value.value})
  }

  return (
    <main>
      <InputSearch
        name="search"
        type="text"
        placeholder="Tìm kiếm sản phẩm"
        className="input"
        disabled={false}
        value={searchValue}
        onChange={handleSearchChange}
      />
      
      <InputRegister onClickRegister={handleRegister}/>

      <Input name="name" placeholder="Họ tên" errorMessage={`Vui lòng nhập họ tên của bạn`} onChange={handleChangeInforShip}/>
      <Input name="phone" placeholder="Số điện thoại" errorMessage={`Vui lòng nhập số điện thoại của bạn`} onChange={handleChangeInforShip}/>
      <Input name="address" placeholder="Địa chỉ chi tiết" errorMessage={`Vui lòng nhập địa chỉ chi tiết của bạn`} onChange={handleChangeInforShip}/>
      <InputTextArea name="note" placeholder="Ghi chú" onChange={handleChangeInforShip}/>
    </main>
  );
}
