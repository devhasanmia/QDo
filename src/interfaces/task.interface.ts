export type TPriority = "high" | "medium" | "low";

export interface ITask {
  id: number;
  title: string;
  description: string;
  priority: TPriority;
  dueDate: string;
  completed: boolean;
}
