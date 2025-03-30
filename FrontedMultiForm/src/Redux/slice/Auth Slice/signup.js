import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const  signup = createAsyncThunk(
  'counter/signup', async (data) => {
    const response = await axios.post('http://localhost:3000/api/signup', data);
    return response.data;
  }
);
const initialState = {
  name: '',
    email: '',
    password: '',
    isloading: false,
    isError : false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateFormField(state, action) {
        state[action.payload.field] = action.payload.value;
    },
    viewForm(state,action){
        return state[action.payload]
    }
    
  },
  extraReducers:(builder)=>{
    builder.addCase(signup.pending, (state, action) => {
      state.isloading = true;
      console.log(action.payload);
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isloading = false;
      console.log(action.payload);
    });
    builder.addCase(signup.rejected,(state,action)=>{
      state.isloading =false;
      state.isError= true;
    })
  }
})

// Action creators are generated for each case reducer function
export const { updateFormField , submitForm, viewForm } = counterSlice.actions

export default counterSlice.reducer