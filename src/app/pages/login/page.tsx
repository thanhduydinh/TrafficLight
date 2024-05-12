"use client";

import { ChangeEvent, useState } from "react";
import { cn } from "@/config/utils";
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
    <AuthLayout mainTitle="Welcome to E-com" subTitle="Đăng nhập">
      <div className="w-[90%] mx-auto flex flex-col gap-3">
        <Input
          label="Email"
          type="text"
          placeholder="Your email"
          error="Vui lòng nhập email"
          onChange={handleChangeAccount}
        />

        <Input
          label="Mật khẩu"
          type={!isShowPassword ? "text" : "password"}
          placeholder="Mật khẩu"
          error="Vui lòng nhập mật khẩu"
          icon={
            <div
              className="cursor-pointer text-dark-300 select-none"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <EyeInvisible className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </div>
          }
          onChange={handleChangeAccount}
        />
      </div>

      <div className=" w-[90%] flex items-center mx-auto my-2">
        <div className={cn(
          'inline-block pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out ring-black/20 hover:cursor-pointer',
          { 'bg-primary-900': isRememberAccount, 'bg-[white]': !isRememberAccount }
        )} onClick={handleToggle}>
          <div className={cn(
            'h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out',
            { 'translate-x-4': isRememberAccount }
          )}></div>
        </div>
        <span className={cn("text-sm ml-2", { 'text-primary-900': isRememberAccount, 'text-dark-400': !isRememberAccount })}>Lưu đăng nhập</span>
      </div>

      <div className=" w-[90%] text-center mt-5 mx-auto flex flex-col">
        <Button>
          <span>Đăng nhập</span>
        </Button>

        <div className="font-bold text-dark-200 text-sm py-5 relative">
          <span className="bg-white relative z-10 px-5">Hoặc</span>
          <div className="absolute bottom-[50%] left-0 w-full h-px bg-dark-200"></div>
        </div>

        <Button className="bg-white w-full mx-auto hover:bg-white-900 mb-2 border border-dark-200">
          <Google />
          <span className="w-[80%] text-dark-400">
            Đăng nhập với Google
          </span>
        </Button>

        <a href="/" className="text-xs text-primary-900 font-bold mt-2">
          Quên mật khẩu?
        </a>
        <span className="text-xs text-dark-400 mt-2">
          {`Bạn chưa có tài khoản? `}
          <a href="/" className="text-primary-900 font-bold">
            Đăng kí ngay
          </a>
        </span>

      </div>
    </AuthLayout>
  );
}
