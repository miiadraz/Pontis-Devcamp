"use server";

import { addTaskToDb } from "@/data/tasks";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
  const title = formData.get("title") as string;

  if (!title?.trim()) return;

  await addTaskToDb(title.trim());
  revalidatePath("/domaci2");
}
