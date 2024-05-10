"use client";

import { cn } from "@/config/utils";

export default function Home() {
  return (
    <main className={cn("p-10")}>
      <Button
        variant="outlined"
        onClick={() => {
          console.log("baodang");
        }}
        className="w-40"
      >
        <CartPlus /> Click me.
      </Button>
    </main>
  );
}
