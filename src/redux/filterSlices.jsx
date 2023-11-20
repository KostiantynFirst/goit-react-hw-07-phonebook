import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        filter: ''
    },
    reducers: {
        setFilter: {
            reducer(state, action) {
                state.filter = action.payload;
            },
        },
    },
});

export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;