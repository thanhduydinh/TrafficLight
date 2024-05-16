"use client";

import { Star } from "@/assets/icons/Star";

type RatingStarProps = {
  rating?: number;
};

const RatingStar = ({ rating }: RatingStarProps) => {
  const LIST = [1, 2, 3, 4, 5];
  const widthPercentage = rating ? `${(rating / 5) * 100}%` : "100%";
  const renderList = (color: string) =>
    LIST.map((i) => <Star key={i} color={color || "transparent"} />);

  return (
    <div className="relative inline-block">
      <span
        className="flex absolute flex-shrink-0 top-0 left-0 right-0 whitespace-nowrap overflow-hidden z-10"
        style={{ width: widthPercentage }}
      >
        {renderList("#F5CF05")}
      </span>
      <span className="flex relative" style={{ display: "flex" }}>
        {renderList("#ccc")}
      </span>
    </div>
  );
};

export default RatingStar;
