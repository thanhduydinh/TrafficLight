import { cn } from "../config/utils";
import { getTodos } from "../services";
import Count2 from "./_components/Count";

export default async function Home() {
  const todo = await getTodos();
  console.log("data: ", todo);

  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-between",
        todo?.length > 0 && "p-24"
      )}
    >
      <Count2 />
      TODOs
      <div>
        {todo?.map((d: any) => (
          <p key={d.id}>{d.title}</p>
        ))}
      </div>
    </main>
  );
}
