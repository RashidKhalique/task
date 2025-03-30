import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slice/Auth Slice/signup.js';
import loginReducer from './slice/Auth Slice/login.js'; // Import the login reducer
import userProfileReducer from './slice/Multiformdata/userprofile.js'
import contactSlice from './slice/Multiformdata/contact.js'
import formSlice from './slice/Multiformdata/formdata.js'

const store = configureStore({
    reducer: {
        form: formReducer, 
        Login: loginReducer,    
        userProfile: userProfileReducer,
        contact : contactSlice,
        formss:formSlice
    },
});

export default store;