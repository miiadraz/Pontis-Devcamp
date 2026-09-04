import { getTasks } from "@/data/tasks";
import { addTask } from "./actions";
import UnfinishedCounter from "@/components/unfinishedCouner";

export default async function Domaci2Page() {
  const tasks = await getTasks();

  return (
    <main>
      <h1>Zadaci</h1>

      <form action={addTask}>
        <input name="title" placeholder="Novi zadatak..." required />
        <button type="submit">Dodaj</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <UnfinishedCounter tasks={tasks} />
    </main>
  );
}
