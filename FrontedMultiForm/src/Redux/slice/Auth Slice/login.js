import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    email: "",
    password: "",
    isloading: false,
    isError: false,
};
export const login = createAsyncThunk("counter/login", async (data) => {
    const response = await axios.post("http://localhost:3000/api/login", data);
    return response.data;
})

export const counterSlice = createSlice({
    name:"Login",
    initialState,
    reducers:{
        updateLoginField:(state,action)=>{
            state[action.payload.field] = action.payload.value;
        },
        viewloginForm:(state,action)=>{
           return state[action.payload]
        }
    },
    extraReducers:(builder)=>{
         builder.addCase(login.pending,(state,action)=>{
            state.isloading = true;
            console.log(state.isloading)
    })

        builder.addCase(login.fulfilled, (state, action) => {
            state.isloading = false;
            state.isError = false;
            state.email = action.payload.email; // Example update
            state.password = action.payload.password; // Clear password field
            state.apiResponse = action.payload;
            console.log(action.payload);
            
        });
    // Handle rejected case
    builder.addCase(login.rejected,(state,action)=>{
        state.isloading= false;
        state.isError = true;
        console.log("Login failed:", action.error.message);
    })
    }
})

export const { updateLoginField, viewloginForm } = counterSlice.actions
export default counterSlice.reducer