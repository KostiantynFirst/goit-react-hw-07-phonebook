import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlices";

const reducers = combineReducers({
  contacts: contactsReducer,
})

export const store = configureStore({
    reducers: reducers,
});
