"use client";

import { useState } from "react";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

export default function ZadaciPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  const addTask = () => {
    if (title.trim() === "") return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title,
      done: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setTitle("");
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };
  const unfinishedCount = tasks.filter((task) => !task.done).length;

  return (
    <main>
      <h1>Zadaci</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Novi zadatak..."
      />
      <button onClick={addTask}>Dodaj</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              textDecoration: task.done ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.title}
          </li>
        ))}
      </ul>
      <p>Nedovršenih zadataka: {unfinishedCount}</p>
    </main>
  );
}
