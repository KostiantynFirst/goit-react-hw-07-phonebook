import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

// const actions = [fetchContacts];

// const initialState = {
//     contacts: {
//         items: [],
//         isLoading: false,
//         error: null
//       },
//       filter: ""
// }

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

 const contactSlice = createSlice({
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
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const idx = state.items.findeIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(idx, 1);
        },
        [deleteContact.rejected]: handleRejected,
    }
    // extraReducers: builder => 
    // builder
    //     .addCase(fetchContacts.fulfilled, (state, action) => {
    //         state.contacts.items = action.payload;
    //         state.contacts.isLoading = false;
    //         state.contacts.error = null;
    //     })
});

export const contactsReducer = contactSlice.reducer;

// export const {addContact, deleteContact, setFilter} = contactSlice.actions