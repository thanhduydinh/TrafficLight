import React from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Facebook, Instagram, Twitter } from "@/assets/icons";
import Link from "next/link";
const Footer: React.FC = () => {
  const aboutCategories = [
    { name: "Trang chủ", link: "#" },
    { name: "Sản phẩm", link: "#" },
    { name: "Tin tức", link: "#" },
    { name: "Voucher", link: "#" },
    { name: "Combo giảm giá", link: "#" },
  ];

  const customerSupportCategories = [
    { name: "Điều khoản - Điều kiện", link: "#" },
    { name: "Chính sách đổi trả", link: "#" },
    { name: "Chính sách hỗ trợ", link: "#" },
    { name: "Chính sách bảo mật", link: "#" },
  ];

  return (
    <footer className="bg-primary-100">
      <div className="py-5 xs:px-5">
        <div className="w-4/5 items-center flex xl:mx-auto xl:gap-40 xl:flex-row xs:gap-8 xs:flex-col xs:items-start">
          <div className="flex items-start flex-col gap-5">
            <h3 className="text-primary-900 font-medium text-3xl">Furniture</h3>
            <div className="flex">
              <Input
                type="text"
                placeholder="Enter your email"
                className="w-59 border-none h-12 rounded-r-none rounded-l-xl md:w-80 transition-width duration-500"
              />
              <Button className="h-12 rounded-r-xl rounded-l-none md:w-40 text-sm xs:w-28 transition-width duration-500">
                ĐĂNG KÝ
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Liên hệ với chúng tôi</p>
              <p className="text-primary-900 font-medium">
                Địa chỉ: Số 8 Phạm Hùng, Mai Dịch, Cầu Giấy, Hà Nội
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm">Theo dõi chúng tôi tại</p>
              <div className="flex gap-3">
                <Facebook />
                <Instagram />
                <Twitter />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:gap-14 md:flex-row md:items-start">
            <div className="flex flex-col gap-5 xs:gap-3">
              <div className="font-medium text-sm xs:text-base">
                Về chúng tôi
              </div>
              <div className="flex flex-col gap-3 text-primary-900">
                {aboutCategories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.link}
                    className="text-sm inline-block cursor-pointer"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5 xs:gap-3">
              <div className="font-medium text-sm xs:text-base">
                Hỗ trợ khách hàng
              </div>
              <div className="flex flex-col gap-3 text-primary-900">
                {customerSupportCategories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.link}
                    className="text-sm inline-block cursor-pointer"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-t-[3px] border-b-0 border-l-0 border-r-0 border-solid border-white z-100">
        <div className="md:w-4/5 xs:px-3 xs:gap-7 mx-auto flex justify-between items-center py-3">
          <p className="font-medium text-primary-900 md:text-sm sm:text-sm xs:text-sm">
            For any support or help, you can contact us via our Live Chat
          </p>
          <p className="font-medium text-primary-900 xs:text-sm">
            @2022Furniture.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
