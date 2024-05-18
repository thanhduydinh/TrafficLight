"use client";

import { Star } from "@/assets/icons/Icon";

type RatingStarProps = {
  rating?: number;
};

const RatingStar = ({ rating }: RatingStarProps) => {
  const LIST = [1, 2, 3, 4, 5];
  const widthPercentage = rating ? `${(rating / 5) * 100}%` : "100%";

  return (
    <div className="relative inline-block">
      <span
        className="flex absolute flex-shrink-0 top-0 left-0 z-10 whitespace-nowrap overflow-hidden"
        style={{ width: widthPercentage }}
      >
        {LIST.map((i) => (
          <Star key={i} color="#F5CF05" />
        ))}
      </span>
      <span className="flex">
        {LIST.map((i) => (
          <Star key={i} color="#ccc" />
        ))}
      </span>
    </div>
  );
};

export default RatingStar;
