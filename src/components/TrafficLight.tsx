"use client";

import { useState, useEffect } from "react";

type TrafficState = {
  duration: number;
  next: string;
  backgroundColor: string;
};

type TrafficLightProps = {
  trafficStates: { [key: string]: TrafficState };
};

type BackgroundColor = string | undefined;

const TrafficLight = ({ trafficStates = {} }: TrafficLightProps) => {
  const [currentColor, setCurrentColor] = useState<string>("green");

  useEffect(() => {
    const { duration, next } = trafficStates[currentColor] || {};

    if (duration && next) {
      const timerId = setTimeout(() => {
        setCurrentColor(next);
      }, duration);

      return () => {
        clearTimeout(timerId);
      };
    }
    console.log(next, currentColor);
  }, [currentColor, trafficStates]);

  return (
    <div className=" bg-dark w-28 rounded flex flex-col px-2.5 gap-2.5 pl-4 py-6">
      {Object.keys(trafficStates).map((color) => (
        <div
          key={color}
          className=" bg-dark-500 rounded-full h-20 w-20"
          style={{
            backgroundColor:
              color === currentColor
                ? (trafficStates[color]?.backgroundColor as BackgroundColor)
                : undefined,
          }}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;
