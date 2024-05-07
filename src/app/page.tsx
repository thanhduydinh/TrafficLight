"use client";

import axios from "axios";
import Count2 from "./_components/Count";
import AllRoundedButton from "./_components/buttons/AllRoundedButton";
import RoundedRightButton from "./_components/buttons/RoundedRightButton";
import { useEffect, useState } from "react";
import { cn } from "@/config/utils";

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
      className={cn(
        "flex min-h-screen flex-col items-center justify-between",
        todo?.length > 0 && "p-24"
      )}
    >
      <Count2 />
      <AllRoundedButton
        variant="primary"
        content="baodang"
        onClick={() => {
          console.log("baodang");
        }}
        width={40}
      />
      TODOs
      <div>
        {todo?.map((d: any) => (
          <p key={d.id}>{d.title}</p>
        ))}
      </div>
    </main>
  );
}
