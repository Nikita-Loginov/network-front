import { createSlice } from "@reduxjs/toolkit";

type themeType = {
  theme: "dark" | "light";
};

const storedTheme = localStorage.getItem("theme");

const initialState: themeType = {
  theme:
    storedTheme === "dark" || storedTheme === "light" ? storedTheme : "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newThema = state.theme === "dark" ? "light" : "dark";
      state.theme = newThema;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
