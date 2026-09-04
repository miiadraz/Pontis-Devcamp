"use client";

import { useUnfinishedCount } from "@/hooks/useUnfinishedCount";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

export default function UnfinishedCounter({ tasks }: { tasks: Task[] }) {
  const count = useUnfinishedCount(tasks);

  return <p>Nedovršenih zadataka: {count}</p>;
}
