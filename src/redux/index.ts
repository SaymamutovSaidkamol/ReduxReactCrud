import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./features/student.slice";
export const store = configureStore({
   reducer: {
      studentSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;