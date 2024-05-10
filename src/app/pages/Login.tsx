"use client";

import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import AuthLayout from "@/components/ui/AuthLayout";
import Input from "@/components/ui/Input";
import { Eye } from "@/assets/icons/Eye";
import { EyeInvisible } from "@/assets/icons/EyeInvisible";
import { Google } from "@/assets/icons/Google";
import Button from "@/components/ui/Button";

export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isRememberAccount, setIsRememberAccount] = useState(false);

  const handleChangeAccount = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleToggle = () => {
    setIsRememberAccount(!isRememberAccount);
  };

  return (
    <AuthLayout title={"Đăng nhập"}>
      <div className="w-[90%] mx-auto flex flex-col gap-[12px]">
        <Input
          label="Email"
          type="text"
          placeholder="Your email"
          className="h-[48px] border border-[#EBF0FF] border-solid"
          error="Vui lòng nhập email"
          onChange={handleChangeAccount}
        />

        <Input
          label="Mật khẩu"
          type={!isShowPassword ? "text" : "password"}
          placeholder="Mật khẩu"
          error="Vui lòng nhập mật khẩu"
          icon={
            isShowPassword ? (
              <EyeInvisible
                style={{ width: "20px", height: "20px", cursor: "pointer", color: "#9098B1" }}
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            ) : (
              <Eye
                style={{ width: "20px", height: "20px", cursor: "pointer", color: "#9098B1" }}
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            )
          }
          className="h-[48px] border border-[#EBF0FF] border-solid"
          onChange={handleChangeAccount}
        />
      </div>

      <div className="flex items-center w-[90%] mx-auto my-[10px]">
        <div className={clsx(
          'inline-block pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out ring-black/20',
          { 'bg-[#B4916C]': isRememberAccount, 'bg-[white]': !isRememberAccount }
        )} onClick={handleToggle}>

          <div className={clsx(
            'h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out',
            { 'translate-x-4': isRememberAccount }
          )}></div>        </div>
        <span className={clsx("text-[14px] ml-[6px]", { 'text-[#B4916C]': isRememberAccount, 'text-[#9098B1]': !isRememberAccount })}>Lưu đăng nhập</span>
      </div>

      <div className="text-center mt-[20px] w-[90%] mx-auto flex flex-col">
        <Button className="w-full h-[57px] mx-auto hover:text-[black] hover:bg-[#e7c49f]">
          <span className="text-[14px] ">Đăng nhập</span>
        </Button>

        <div className="font-bold text-[#9098B1] text-[15px] py-[20px] relative">
          <span className="bg-[white] relative z-10 px-[20px]">Hoặc</span>
          <div className="absolute bottom-[50%] left-0 w-full h-px bg-[#EBF0FF]"></div>
        </div>

        <Button className="bg-[white] w-full h-[57px] mx-auto hover:text-[black] hover:bg-[#e7c49f] mb-[10px] border border-[#EBF0FF] border-solid">
          <Google />
          <span className="text-[14px] text-[#9098B1] w-[80%] font-bold">
            Đăng nhập với Google
          </span>
        </Button>

        <a href="/" className="text-[12px] text-[#B4916C] font-bold mt-[10px]">
          Quên mật khẩu?
        </a>
        <span className="text-[12px] text-[#9098B1] mt-[10px]">
          {`Bạn chưa có tài khoản? `}
          <a href="/" className="text-[#B4916C] font-bold">
            Đăng kí ngay
          </a>
        </span>

      </div>
    </AuthLayout>
  );
}
