"use client";

import { useState, useEffect } from "react";
import { cn } from "@/config/utils";
import { Cart, Heart } from "@/assets/icons/Index";
import RatingStar from "./RatingStar";
import Image from "next/image";

type ItemcardProps = {
  id?: number;
  imgUrl?: string;
  title?: string;
  currentPrice?: string;
  previousPrice?: string;
  isFavourite?: boolean;
  rating?: number;
  disabled?: boolean;
  onClick?: (value: boolean | undefined, id: number) => void;
};

const Itemcard = ({
  id = 0,
  imgUrl = "",
  title = "",
  currentPrice = "",
  previousPrice = "",
  isFavourite = false,
  rating = 0,
  disabled = false,
  onClick,
}: ItemcardProps) => {
  const [favorite, setFavorite] = useState(isFavourite);
  const toggleFavorite = () => {
    setFavorite(!favorite);
    onClick && onClick(favorite, id);
  };

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
          <Cart />
        </div>

        <div className={cn("flex justify-between items-center")}>
          <div className={cn("flex items-center")}>
            <p className="text-lg text-yellow-800 font-medium mr-3">
              {currentPrice}
            </p>
            <p className="text-sm text-dark-300 font-normal line-through">
              {previousPrice}
            </p>
          </div>
          <RatingStar rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
