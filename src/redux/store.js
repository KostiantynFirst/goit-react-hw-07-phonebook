import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./contactSlices";

export const store = configureStore({
    reducer: contactSlice.reducer,
});
