import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
    phoneNumber: "",
    alternativePhoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    postalcode: "",
    country: "",
    isLoading: false,
    isError: false,
    apiResponse: null, // Store API response (optional)
};


// Create a user profile
export const contactSubmit = createAsyncThunk(
    "contact/create",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:3000/api/userprofile", data);
            return response.data;
        } catch (error) {
            console.error("Error creating user profile:", error.message);
            return rejectWithValue(error.response?.data);
        }
    }
);

// Get the user profile
export const contactGet = createAsyncThunk(
    "contact/get",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:3000/api/userprofile");
            return response.data;
        } catch (error) {
            console.error("Error fetching user profile:", error.message);
            return rejectWithValue(error.response?.data);
        }
    }
);

// Update the user profile
export const contactUpdate = createAsyncThunk(
    "contact/update",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.put("http://localhost:3000/api/userprofile", data);
            return response.data;
        } catch (error) {
            console.error("Error updating user profile:", error.message);
            return rejectWithValue(error.response?.data);
        }
    }
);

// Delete the user profile
export const contactDelete = createAsyncThunk(
    "contact/delete",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.delete("http://localhost:3000/api/userprofile", { data });
            return response.data;
        } catch (error) {
            console.error("Error deleting user profile:", error.message);
            return rejectWithValue(error.response?.data);
        }
    }
);

// Slice definition
const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        updateContactField: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(contactSubmit.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(contactSubmit.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.apiResponse = action.payload;
            })
            .addCase(contactSubmit.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.error("Error creating user profile:", action.payload || action.error.message);
            })
            .addCase(contactGet.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(contactGet.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                const { phoneNumber, alternativePhoneNumber, address1, address2, city, postalcode, country } = action.payload;
                Object.assign(state, { phoneNumber, alternativePhoneNumber, address1, address2, city, postalcode, country });
            })
            .addCase(contactGet.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.error("Error fetching user profile:", action.payload || action.error.message);
            })
            .addCase(contactUpdate.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(contactUpdate.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.apiResponse = action.payload;
            })
            .addCase(contactUpdate.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.error("Error updating user profile:", action.payload || action.error.message);
            })
            .addCase(contactDelete.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(contactDelete.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;
                Object.assign(state, initialState);
                console.log("User profile deleted successfully.");
            })
            .addCase(contactDelete.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.error("Error deleting user profile:", action.payload || action.error.message);
            });
    },
});

export const { updateContactField } = contactSlice.actions;

export default contactSlice.reducer;