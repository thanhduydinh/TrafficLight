import React from "react";
import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import { cn } from "@/config/utils";
import {
  Envelope,
  Phone,
  User,
  Search,
  Favorite,
  CartShopping,
  DownAngle,
  FluentList,
  RoundedUser,
  LogoFurniture,
} from "@/assets/icons/";

const headerDetailList = [
  {
    name: "Trang chủ",
    link: "#",
  },
  {
    name: "Sản phẩm",
    link: "#",
    icon: <DownAngle />,
  },
  {
    name: "Tin tức",
    link: "#",
  },
  {
    name: "Vouncher",
    link: "#",
  },
  {
    name: "Combo tặng thưởng",
    link: "#",
  },
];

const Header = () => {
  const [isFluentListOpen, setIsFluentListOpen] = useState(false);
  const handleFluentListOpen = () => {
    setIsFluentListOpen(!isFluentListOpen);
  };

  return (
    <header>
      <div className="bg-primary-900 text-white py-4 top-0 z-10 xl:block hidden">
        <div className="flex justify-between items-center">
          <div className="w-4/5 mx-auto flex justify-between">
            <div className="flex gap-20 items-center">
              <Link href="#" className="text-sm flex gap-1 items-center">
                <Envelope /> Ecommerce@gmail.com
              </Link>
              <Link href="#" className="text-sm flex gap-1 items-center">
                <Phone /> 0974659677
              </Link>
            </div>
            <div className="flex gap-1 items-center">
              <User />{" "}
              <div className="flex text-white text-sm gap-1">
                <Link href="#" className="hover:underline">
                  Đăng nhập
                </Link>
                <div>/</div>
                <Link href="#" className="hover:underline">
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden py-2 bg-white xl:block">
        <nav className="md:w-4/5 px-3 lg:px-0 mx-auto flex justify-between items-center">
          <Link href="#">
            <LogoFurniture />
          </Link>
          <div className="hidden gap-5 xl:flex">
            {headerDetailList.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex gap-2 items-center"
              >
                {item.name}
                {item.icon && item.icon}
              </Link>
            ))}
          </div>
          <Input
            type="text"
            variant={"standard"}
            placeholder="Tìm kiếm sản phẩm"
            error=""
            icon={<Search />}
            className="w-[200px] xxl:w-[300px]"
          />
          <div className="flex gap-5">
            <Link className="flex flex-col items-center" href="#">
              <Favorite />
              <span className="text-primary-900">Đã lưu</span>
            </Link>
            <div>
              <Link className="flex flex-col items-center" href="#">
                <CartShopping />
                <span className="text-primary-900">Giỏ hàng</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="bg-white xl:hidden flex px-3 py-3 justify-between items-center">
        <FluentList
          onClick={() => {
            handleFluentListOpen();
          }}
          className="cursor-pointer"
        />
        <Link href="#">
          <LogoFurniture />
        </Link>
        <div className="flex gap-2">
          <Link href="#">
            <CartShopping />
          </Link>
          <RoundedUser />
        </div>
      </div>
      <div
        className={cn(
          "transition-all duration-500 ease-in-out overflow-hidden xl:hidden",
          {
            "absolute z-50 bg-primary-100 left-0 w-full opacity-100 shadow-lg rounded-lg":
              isFluentListOpen,
            "max-h-0 opacity-0": !isFluentListOpen,
          }
        )}
      >
        {headerDetailList.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex justify-between items-center py-2 px-4 border-b-primary-700 border-b-2 hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
          >
            {item.name}
            {item.icon && <span className="ml-2">{item.icon}</span>}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
