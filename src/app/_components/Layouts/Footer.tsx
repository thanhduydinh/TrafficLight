import React from "react";
import { Facebook } from "@/assets/icons/Facebook";
import { Instagram } from "@/assets/icons/Instagram";
import { Twitter } from "@/assets/icons/Twitter";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Footer: React.FC = () => {
  const aboutCategories = [
    "Trang chủ",
    "Sản phẩm",
    "Tin tức",
    "Vouncher",
    "Combo giảm giá",
  ];

  const customerSupportCategories = [
    "Điều khoản - Điều kiện",
    "Chính sách đổi trả",
    "Chính sách hỗ trợ",
    "Chính sách bảo mật",
  ];

  return (
    <footer className="bg-primary-100 w-full xs:w-full">
      <div className="w-full py-5 xs:px-5">
        <div className=" xl:w-4/5 md:w-full xl:mx-auto flex xl:gap-40 md:gap-10 md:flex-col sm:gap-10 xs:gap-8 items-center xl:flex-row md:items-start sm:flex-col sm:items-start xs:flex-col xs:items-start xs:w-full">
          <div className="flex items-start flex-col gap-5">
            <h3 className="text-primary-900 font-medium text-3xl">Furniture</h3>
            <div className="flex">
              <Input
                type="text"
                placeholder="Enter your email"
                className=" h-12 lg:w-[350px] md:w-[350px] rounded-r-none rounded-l-xl xs:max-w-[350px] xs:w-64 transition-width duration-500"
              />
              <Button className="h-12 rounded-r-xl rounded-l-none md:w-40 text-sm xs:w-28 transition-width duration-500">
                ĐĂNG KÝ
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Liên hệ với chúng tôi</p>
              <p className="text-primary-900 font-medium">
                Địa chỉ: Số 8 Phạm Hùng, Mai Dịch, Cầu Giấy, Hà Nội
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium">Theo dõi chúng tôi tại</p>
              <div className="flex gap-3">
                <Facebook />
                <Instagram />
                <Twitter />
              </div>
            </div>
          </div>

          <div className="flex lg:gap-20 xl:gap-30 lg:flex lg:flex-row md:gap-14 md:flex-row md:items-start xs:flex-col xs:gap-5">
            <div className="flex flex-col gap-5 xs:gap-3">
              <div className="font-medium text-sm xs:text-base">
                Về chúng tôi
              </div>
              <div className="flex flex-col gap-3 text-primary-900">
                {aboutCategories.map((category, index) => (
                  <span
                    key={index}
                    className="text-sm inline-block cursor-pointer font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5 xs:gap-3">
              <div className="font-medium text-sm xs:text-base">
                Hỗ trợ khách hàng
              </div>
              <div className="flex flex-col gap-3 text-primary-900">
                {customerSupportCategories.map((category, index) => (
                  <span
                    key={index}
                    className="text-sm inline-block cursor-pointer font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border border-t-[3px] border-b-0 border-l-0 border-r-0 border-solid border-white z-100">
        <div className="lg:w-4/5 md:w-4/5 xs:w-full xs:px-3 mx-auto flex justify-between items-center py-3 xs:gap-7">
          <p className="font-medium text-primary-900 md:text-sm sm:text-sm xs:text-sm">
            For any support or help, you can contact us via our Live Chat
          </p>
          <p className="font-medium text-primary-900 md:text-sm sm:text-sm xs:text-sm">
            @2022Furniture.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
