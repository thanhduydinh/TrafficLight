"use client";

import axios from "axios";
import Button from "./_components/buttons/Button";
import { useEffect, useState } from "react";
import { cn } from "@/config/utils";
import { CartPlus } from "@/assets/icons/CartPlus";

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
        <CartPlus /> Click me
      </Button>
    </main>
  );
}
