type Task = {
  id: string;
  title: string;
  done: boolean;
};

let tasks: Task[] = [{ id: "1", title: "Naučiti Server Actions", done: false }];

export async function getTasks() {
  return tasks;
}

export async function addTaskToDb(title: string) {
  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    done: false,
  };
  tasks = [...tasks, newTask];
  return newTask;
}
