"use client";

import axios from "axios";
import Count2 from "./_components/Count";
import AllRoundedButton from "./_components/buttons/AllRoundedButton";
import RoundedRightButton from "./_components/buttons/RoundedRightButton";
import "@fortawesome/fontawesome-free/css/all.min.css";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Home() {
  const handleClick = () => {
    console.log("button clicked!");
  };
  const [todo, setTodo] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main
      className={classNames(
        "flex min-h-screen flex-col items-center justify-between",
        todo?.length > 0 && "p-24"
      )}
    >
      <Count2 />
      <AllRoundedButton
        onClick={handleClick}
        label="Click me"
        icon={<i className="fa fa-plus"></i>}
        variant="primary"
        size="sm"
        capitalizing="uppercase"
        borderRadius="sm"
      />
      {/* <SubscribeButton
        onClick={() => {
          handleClick();
        }}
        label="Subscribe"
      /> */}
    </main>
  );
}
