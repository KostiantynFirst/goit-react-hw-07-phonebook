import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

// const actions = [fetchContacts];

// const initialState = {
//     contacts: {
//         items: [],
//         isLoading: false,
//         error: null
//       },
//       filter: ""
// }

 export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    // reducers: {
    //     addContact: {
    //     reducer(state, action){
    //         state.contacts.push(action.payload);
    //     },
    //     },
    //     deleteContact (state, action){
    //         //return state.contacts.filter(contact => contact.id !== action.payload);
    //         const index = state.contacts.findIndex(contact => contact.id === action.payload);
    //         state.contacts.splice(index, 1);
    //     },
    //     setFilter(state, action){
    //         state.filter = action.payload;
    //     }
        
    // },
    extraReducers: {
        [fetchContacts.pending](state) {
        state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
    // extraReducers: builder => 
    // builder
    //     .addCase(fetchContacts.fulfilled, (state, action) => {
    //         state.contacts.items = action.payload;
    //         state.contacts.isLoading = false;
    //         state.contacts.error = null;
    //     })
});

export const {addContact, deleteContact, setFilter} = contactSlice.actions