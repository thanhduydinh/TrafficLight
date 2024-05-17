import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
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
} from "@/assets/icons/";

interface HeaderProps {
  numberOfOrders?: number;
}

const Header: React.FC<HeaderProps> = ({ numberOfOrders }) => {
  const [isFluentListOpen, setIsFluentListOpen] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsFluentListOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <h3 className="text-primary-900 font-medium text-3xl cursor-pointer">
            Furniture
          </h3>
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
            className="w-[300px]"
          />
          <div className="flex flex-row gap-5">
            <Link className="flex flex-col items-center" href="#">
              <Favorite />
              <span className="inline-block text-primary-900">Đã lưu</span>
            </Link>
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

      <div className="mobile--header bg-white xl:hidden flex px-3 py-3 justify-between items-center">
        <FluentList
          onClick={() => {
            handleFluentListOpen();
          }}
          className="cursor-pointer"
        />
        <h3 className="text-primary-900 font-medium text-3xl cursor-pointer">
          Furniture
        </h3>
        <div className="flex gap-2">
          <Link className="flex flex-col items-center" href="#">
            <CartShopping />
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
      <div
        className={`${
          isFluentListOpen ? "max-h-96 opacity-100 px-2" : "max-h-0 opacity-0"
        } transition-all duration-300 ease-in-out overflow-hidden xl:hidden`}
      >
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
    </header>
  );
};

export default Header;
