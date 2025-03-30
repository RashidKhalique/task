import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    isLoading: false,
    isError: false,
    apiResponse: null, // Store API response (optional)
};

// Async thunks for user profile operations

// Create a user profile
export const userprofile = createAsyncThunk(
    "userProfile/create",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:3000/api/userprofile", data);
            return response.data;
        } catch (error) {
            console.error("Error creating user profile:", error.message);
            return rejectWithValue(error.response.data);
        }
    }
);

// Get the user profile
export const userprofileget = createAsyncThunk(
    "userProfile/get",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:3000/api/userprofile");
            return response.data;
        } catch (error) {
            console.error("Error fetching user profile:", error.message);
            return rejectWithValue(error.response.data);
        }
    }
);

// Update the user profile
export const userprofileupdate = createAsyncThunk(
    "userProfile/update",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.put("http://localhost:3000/api/userprofile", data);
            return response.data;
        } catch (error) {
            console.error("Error updating user profile:", error.message);
            return rejectWithValue(error.response.data);
        }
    }
);

// Delete the user profile
export const userprofiledelete = createAsyncThunk(
    "userProfile/delete",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.delete("http://localhost:3000/api/userprofile", { data });
            return response.data;
        } catch (error) {
            console.error("Error deleting user profile:", error.message);
            return rejectWithValue(error.response.data);
        }
    }
);

// Slice definition
const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        updateUserField: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
        viewUserProfile: (state, action) => {
            return state[action.payload]
        },
    },
    extraReducers: (builder) => {
        // Create User Profile
        builder.addCase(userprofile.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(userprofile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.apiResponse = action.payload;
        });
        builder.addCase(userprofile.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error("Error creating user profile:", action.payload || action.error.message);
        });

        // Get User Profile
        builder.addCase(userprofileget.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(userprofileget.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            // Update state with the fetched data
            const { fullName, email, gender, dateOfBirth } = action.payload;
            state.fullName = fullName;
            state.email = email;
            state.gender = gender;
            state.dateOfBirth = dateOfBirth;
        });
        builder.addCase(userprofileget.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error("Error fetching user profile:", action.payload || action.error.message);
        });

        // Update User Profile
        builder.addCase(userprofileupdate.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(userprofileupdate.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.apiResponse = action.payload;
        });
        builder.addCase(userprofileupdate.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error("Error updating user profile:", action.payload || action.error.message);
        });

        // Delete User Profile
        builder.addCase(userprofiledelete.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(userprofiledelete.fulfilled, (state) => {
            state.isLoading = false;
            state.isError = false;
            state.fullName = "";
            state.email = "";
            state.password = "";
            state.confirmPassword = "";
            state.gender = "";
            state.dateOfBirth = "";
            console.log("User profile deleted successfully.");
        });
        builder.addCase(userprofiledelete.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error("Error deleting user profile:", action.payload || action.error.message);
        });
    },
});

export const { updateUserField, viewUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;