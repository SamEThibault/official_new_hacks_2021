import { configureStore } from "@reduxjs/toolkit";
import noteDataSliceReducer from "../features/noteDataSlice";
export const store = configureStore({
  reducer: {
    noteData: noteDataSliceReducer,
  },
});
