"use client";

import axios from "axios";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import { cn } from "@/config/utils";
import { CartPlus } from "@/assets/icons/CartPlus";
import { Search } from "@/assets/icons/Search";
import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <main className={cn("px-10")}>
      {/* <Button
        variant="outlined"
        onClick={() => {
          console.log("baodang");
        }}
        className="w-40"
      >
        <CartPlus /> Click me
      </Button> */}
      <Input
        label="Phong"
        type="text"
        placeholder="Tìm kiếm sản phẩm"
        className="w-full border-b-[1px] py-[5px] flex items-center border-b-[#B4916C]"
        onChange={(value: string) => {
          console.log(value);
        }}
        disabled={false}
      >
        <Search />
      </Input>

      <Input
        type="text"
        placeholder="Họ tên"
        className="border border-[#666666] px-[20px] py-[10px] rounded-[10px]"
        onChange={(value: string) => {
          console.log(value);
        }}
        error="Lỗi"
        disabled={false}
      />
    </main>
  );
}
