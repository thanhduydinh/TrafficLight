import { getTodos } from "../services";
import Count2 from "./_components/Count";

export default async function Home() {
  const todo = await getTodos();
  console.log("data: ", todo);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
