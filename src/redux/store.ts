import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import themeReducer  from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath] : api.reducer,
    theme : themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;