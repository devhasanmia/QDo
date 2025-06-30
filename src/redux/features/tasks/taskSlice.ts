import type { ITask } from "@/interfaces/task.interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ITask[] = [{
    id: 1,
    title: "Design Landing Page",
    description: "Create a responsive landing page using React and Tailwind CSS.",
    priority: "medium",
    dueDate: "2025-07-05",
    completed: false,
  }
]

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.push(action.payload);
    },
    update: (state, action: PayloadAction<ITask>) => {
      
    }
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
