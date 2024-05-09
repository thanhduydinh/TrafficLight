"use client";

import { CartPlus } from "@/assets/icons/CartPlus";
import { Search } from "@/assets/icons/Search";
import Input from "@/components/ui/Input";
import { cn } from "@/config/utils";
import Button from "../../components/ui/Button";

export default function UIKits() {
  return (
    <main className={cn("p-10 space-y-4")}>
      <h1>Buttons</h1>
      <Button
        variant="outlined"
        onClick={() => {
          console.log("baodang");
        }}
      >
        <CartPlus /> Outlined Button
      </Button>
      <Button className="ml-2">
        <CartPlus /> Primary Button
      </Button>
      <Button disabled>
        <CartPlus /> Disabled Primary Button
      </Button>
      <Button disabled className="ml-2" variant="outlined">
        <CartPlus /> Disabled Outlined Button
      </Button>

      <h1>Inputs</h1>
      <Input
        type="text"
        placeholder="Outlined Input"
        error="Sample error"
        icon={<Search />}
      />
      <Input type="text" placeholder="Outlined Input" icon={<Search />} />
      <Input type="text" disabled placeholder="Disabled Input" />
      <Input
        type="text"
        variant={"standard"}
        placeholder="Standard Input"
        error="Sample error"
        icon={<Search />}
      />
      <Input type="text" variant={"filled"} placeholder="Filled Input" />
    </main>
  );
}
