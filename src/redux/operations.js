import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://655663ce84b36e3a431fb080.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/contacts');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact", 
    async ({name, phone}, thunkAPI) => {
        try {
            const res = await axios.post('/contacts', {name, phone});
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", 
    async (contactId, thunkAPI) => {
        try {
            const res = await axios.delete(`/contacts/${contactId}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);