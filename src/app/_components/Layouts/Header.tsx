import React from "react";
import { useEffect, useState } from "react";
import { Envelope } from "@/assets/icons/Envelope";
import { Phone } from "@/assets/icons/Phone";
import { User } from "@/assets/icons/User";
import Input from "@/components/ui/Input";
import { Search } from "@/assets/icons/Search";
import { Favorite } from "@/assets/icons/Favorite";
import { CartShopping } from "@/assets/icons/CartShopping";
import { DownAngle } from "@/assets/icons/DownAngle";
import { FluentList } from "@/assets/icons/FluentList";
import { RoundedUser } from "@/assets/icons/RoundedUser";
import Link from "next/link";

interface HeaderProps {
  numberOfOrders?: number;
}

const Header: React.FC<HeaderProps> = ({ numberOfOrders }) => {
  return (
    <>
      <header className="bg-primary-900 text-white py-4 max-w-full top-0 z-10 lg:block xs:hidden">
        <div className="flex justify-between items-center">
          <div className="w-4/5 mx-auto flex justify-between">
            <div className="flex gap-20 items-center">
              <Link href="#">
                <div className="text-sm flex gap-1 items-center content-center cursor-pointer">
                  <Envelope /> Ecommerce@gmail.com
                </div>
              </Link>
              <Link href="#">
                <div className="text-sm flex gap-1 items-center content-center cursor-pointer">
                  <Phone /> 0974659677
                </div>
              </Link>
            </div>
            <div className="flex gap-1 items-center content-center">
              <User />{" "}
              <div className="flex text-white text-sm gap-1">
                <Link href="#">
                  <div className="cursor-pointer hover:underline">Log in</div>
                </Link>
                <div>/</div>
                <Link href="#">
                  <div className="cursor-pointer hover:underline">Sign up</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="w-full py-2 bg-[#f5f5f5] md:block xs:hidden">
        <nav className="md:w-4/5 xs:w-full xs:px-3 lg:px-0 mx-auto flex justify-between items-center">
          <h3 className="text-primary-900 font-medium text-3xl cursor-pointer">
            Furniture
          </h3>
          <FluentList className="xs:block lg:hidden" />
          <div className="lg:flex gap-5 text-[3F3F3F] xs:hidden">
            <span className="inline-block cursor-pointer">
              <Link href="#">Trang chủ</Link>
            </span>
            <span className="inline-block cursor-pointer">
              <Link href="#" className="flex gap-1 items-center">
                Sản phẩm <DownAngle />{" "}
              </Link>
            </span>
            <span className="inline-block cursor-pointer">
              <Link href="#">Tin tức</Link>
            </span>
            <span className="inline-block cursor-pointer">
              <Link href="#">Vouncher</Link>
            </span>
            <span className="inline-block cursor-pointer">
              <Link href="#">Combo tặng thưởng</Link>
            </span>
          </div>
          <Input
            type="text"
            variant={"standard"}
            placeholder="Tìm kiếm sản phẩm"
            error=""
            icon={<Search />}
            className="w-[300px] xs:hidden lg:block"
          />
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-2 items-center cursor-pointer">
              <Link className="flex flex-col items-center" href="#">
                <Favorite />
                <span className="inline-block text-primary-900">Đã lưu</span>
              </Link>
            </div>
            <div className="flex flex-col gap-2 items-center cursor-pointer relative">
              <Link className="flex flex-col items-center" href="#">
                <CartShopping />
                <span className="inline-block text-primary-900">Giỏ hàng</span>
              </Link>
              {numberOfOrders && (
                <div className="number_of_orders absolute size-3 top-[-5px] left-8 bg-red rounded-full text-white content-center">
                  <span className="absolute text-black text-xs left-[3px] top-[-2px] content-center">
                    {numberOfOrders}
                  </span>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
      <div className="mobile--header w-full md:hidden xs:flex px-3 py-3 justify-between items-center">
        <FluentList />
        <h3 className="text-primary-900 font-medium text-3xl cursor-pointer">
          Furniture
        </h3>
        <div className="flex gap-2">
          <Link className="flex flex-col items-center" href="#">
            <CartShopping/>
          </Link>
          {numberOfOrders && (
            <div className="number_of_orders absolute size-3 top-[-5px] left-8 bg-red rounded-full text-white content-center">
              <span className="absolute text-black text-xs left-[3px] top-[-2px] content-center">
                {numberOfOrders}
              </span>
            </div>
          )}
          <RoundedUser />
        </div>
      </div>
    </>
  );
};

export default Header;
