import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlices";
import { filterReducer } from "./filterSlices";

const reducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

export const store = configureStore({
    reducer: reducers,
});
