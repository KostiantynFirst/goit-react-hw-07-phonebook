import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const actions = [fetchContacts, addContact, deleteContact];

const handleFetchContacts = (state, action) => {
    state.items = action.payload;
}

const handleAddContact = (state, action) => {
    state.items.push(action.payload);  
}

const handleDeleteContact = (state, action) => {
    const idx = state.items.findIndex(item => item.id === action.payload.id);
    state.items.splice(idx, 1);
}

// const handlePending = state => {
//     state.isLoading = true;
// }

// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// }

 const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    // extraReducers: {
    //     [fetchContacts.pending]: handlePending,
    //     [fetchContacts.fulfilled](state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.items = action.payload;
    //     },
    //     [fetchContacts.rejected]: handleRejected,
    //     [addContact.pending]: handlePending,
    //     [addContact.fulfilled](state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.items.push(action.payload);
    //     },
    //     [addContact.rejected]: handleRejected,
    //     [deleteContact.pending]: handlePending,
    //     [deleteContact.fulfilled](state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         const idx = state.items.findIndex(
    //             contact => contact.id === action.payload.id
    //         );
    //         state.items.splice(idx, 1);
    //     },
    //     [deleteContact.rejected]: handleRejected,
    // }
    extraReducers: builder => 
    builder
        .addCase(fetchContacts.fulfilled, handleFetchContacts)
        .addCase(addContact.fulfilled, handleAddContact)
        .addCase(deleteContact.fulfilled, handleDeleteContact)
        .addMatcher(
            isAnyOf(...actions.map(action => action.fulfilled)),
            state => {
                state.isLoading = false;
                state.error = null;
            }
        )
        .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
            state.isLoading = true;
          })
          .addMatcher(
            isAnyOf(...actions.map(action => action.rejected)),
            (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            }
          ),
});

export const contactsReducer = contactSlice.reducer;

