// redux/formSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {

//   userProfile: {
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//     dateOfBirth: "",
//   },
//   contactInfo: {
//     phoneNumber: "",
//     alternatePhoneNumber: "",
//     address1: "",
//     address2: "",
//     city: "",
//     postalcode: "",
//     country: ""
//   },
//   employmentInfo: {
//     jobTitle: "",
//     employmentStatus: "",
//     companyName: "",
//     experience: "",
//     resume: null,
//     monthlyIncome: "",
//   },
//   financialInfo:
//   {
//     loanStatus: "",
//     loanAmount: "",
//     creditScore: "",
//   },
//   preferences: {
//     hobbies: [],
//     newsletter: false,
//   },

//   currentStep: 1,
//   isLoading: false,
//   isError: false,
//   apiResponse: null, // Store API response (optional)
// };

// Async thunk to handle form submission
const initialState = {
  data:{
    userProfile: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      dateOfBirth: "",
    },
    contactInfo: {
      phoneNumber: "",
      alternatePhoneNumber: "",
      address1: "",
      address2: "",
      city: "",
      postalcode: "",
      country: "",
    },
    employmentInfo: {
      jobTitle: "",
      employmentStatus: "",
      companyName: "",
      experience: "",
      resume: null,
      monthlyIncome: "",
    },
    financialInfo: {
      loanStatus: "",
      loanAmount: "",
      creditScore: "",
    },
    preferences: {
      hobbies: [],
      newsletter: false,
    },
    currentStep: 1,
    isLoading: false,
    isError: false,
    apiResponse: null,
  },
 
};



export const submitForm = createAsyncThunk(
  "form/submit",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/userprofile", data);
      return response.data;
    } catch (error) {
      console.error("Error submitting form:", error.message);
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice definition
// const formSlice = createSlice({
//   name: "formss",
//   initialState,
//   reducers: {
//     updateField: (state, action) => {
//       state[action.payload.field] = action.payload.value;
//     },
//     setStep: (state, action) => {
//       state.currentStep = action.payload;
//     },
//     resetForm: () => initialState,
//   },
//   extraReducers: (builder) => {
//     // Submit Form
//     builder.addCase(submitForm.pending, (state) => {
//       state.isLoading = true;
//       state.isError = false;
//     });
//     builder.addCase(submitForm.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.isError = false;
//       state.apiResponse = action.payload;
//       console.log("Form submitted successfully:", action.payload);
//     });
//     builder.addCase(submitForm.rejected, (state, action) => {
//       state.isLoading = false;
//       state.isError = true;
//       console.error("Error submitting form:", action.payload || action.error.message);
//     });
//   },
// });
const formSlice = createSlice({
  name: "formss",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      const keys = field.split('.');  // Split by dot to handle nested fields
      let nestedState = state;
      
      keys.slice(0, -1).forEach(key => {
        nestedState = nestedState[key];  // Traverse to the nested object
      });

      nestedState[keys[keys.length - 1]] = value;  // Update the specific field
    },
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(submitForm.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(submitForm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.apiResponse = action.payload;
      console.log("Form submitted successfully:", action.payload);
    });
    builder.addCase(submitForm.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error("Error submitting form:", action.payload || action.error.message);
    });
  },
});


export const { updateField, setStep, resetForm } = formSlice.actions;

export default formSlice.reducer;
