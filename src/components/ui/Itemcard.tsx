"use client";

import { useState } from "react";
import { cn } from "@/config/utils";
import { Cart, Heart } from "@/assets/icons/index";
import RatingStar from "./RatingStar";
import Image from "next/image";

type ItemCardProps = {
  id?: number;
  imgUrl?: string;
  title?: string;
  currentPrice?: number;
  discount?: number;
  isFavourite?: boolean;
  rating?: number;
  disabled?: boolean;
  onClick?: (value: boolean | undefined, id: number) => void;
};

const ItemCard = ({
  id = 0,
  imgUrl = "",
  title = "",
  currentPrice = 0,
  isFavourite = false,
  rating = 0,
  discount = 0,
  disabled = false,
  onClick,
}: ItemCardProps) => {
  const [favorite, setFavorite] = useState(isFavourite);
  const toggleFavorite = () => {
    setFavorite(!favorite);
    onClick?.(favorite, id);
  };
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
  };
  const previousPrice =
  discount > 0 && currentPrice
  ? parseFloat((currentPrice / (1 - discount / 100)).toFixed(0))
  : null;

  return (
    <div
      className={cn("w-full mx-4 hover:shadow-md duration-300", {
        "opacity-50 pointer-events-none": disabled,
      })}
    >
      <div className={cn("relative cursor-pointer")}>
        {imgUrl && (
          <Image
            src={imgUrl}
            alt={title}
            width={280}
            height={280}
            className={cn("w-full h-[280px] object-cover rounded-t-xl")}
          />
        )}
        {discount > 0 && (
          <div
            className={cn(
              "absolute top-0 left-0 px-4 py-1 font-[Kanit] text-white bg-dark-500 rounded-tl-xl rounded-br-xl"
            )}
          >
            -{discount}%
          </div>
        )}

        <div
          className={cn(
            "absolute top-3 right-3 bg-dark-200 p-1 rounded-full hover:bg-dark-300 cursor-pointer"
          )}
          onClick={toggleFavorite}
          aria-label="Toggle favorite"
        >
          <Heart className={favorite ? "text-yellow-800" : "text-dark-100"} />
        </div>
      </div>

      <div className={cn("px-3 py-2 bg-white-100")}>
        <div className={cn("flex justify-between items-center")}>
          <h3 className="flex-1 text-base text-gray-400 line-clamp-2 text-ellipsis">
            {title}
          </h3>
          <Cart className="ml-5 cursor-pointer hover:opacity-80"/>
        </div>

        <div className={cn("flex justify-between items-center")}>
          <div className={cn("flex items-center")}>
            <p className="text-lg text-yellow-800 font-medium mr-3">
              {formatPrice(currentPrice)}
            </p>
            {previousPrice && (
              <p className="text-sm text-dark-300 font-normal line-through">
                {formatPrice(previousPrice)}
              </p>
            )}
          </div>
          <RatingStar rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
