import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // contacts: [],
    // filter: "",
    contacts: {
        items: [],
        isLoading: false,
        error: null
      },
      filter: ""
}

 export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
        reducer(state, action){
            state.contacts.push(action.payload);
        },
        },
        deleteContact (state, action){
            // return state.contacts.filter(contact => contact.id !== action.payload);
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1);
        },
        setFilter(state, action){
            state.filter = action.payload;
        }
        
    }
});

export const {addContact, deleteContact, setFilter} = contactSlice.actions