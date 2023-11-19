import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    contacts: [],
    filter: "",
}

 const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
        reducer(state, action){
            state.contacts.push(action.payload);
        },
        // prepare(name, number) {
        //     return {
        //         payload: {
        //             id: nanoid(),
        //             name: name,
        //             number: number,
        //         },
        //     };
        // },
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

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
};

export const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);


export const {addContact, deleteContact, setFilter} = contactSlice.actions