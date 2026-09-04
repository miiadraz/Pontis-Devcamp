"use client";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

export function useUnfinishedCount(tasks: Task[]) {
  return tasks.filter((t) => !t.done).length;
}
