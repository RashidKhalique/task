import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormField, submitForm, viewForm, signup } from '../Redux/slice/Auth Slice/signup.js';

const Form = () => {
    const formData = useSelector((state) => state.form); // Access Redux state
    const dispatch = useDispatch();

    const handleInputChange = (field, value) => {
        dispatch(updateFormField({ field, value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(submitForm()); // Dispatch the submitForm action
        dispatch(viewForm({ field: 'name', value: formData.name })); // Example of modifying state
        // console.log('Updated State:', formData); // Log the state using useSelector

     const value =   dispatch(signup(formData));
     console.log(value);
     
    };

    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <div className="  p-10 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold">Register</h1>
                <p className="text-gray-400">Register to access our services</p>
                <br />
                <form onSubmit={handleSubmit} className="space-y-2 w-80 flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border border-gray-400 rounded-full py-2 px-6"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border border-gray-400 rounded-full py-2 px-6"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="border border-gray-400 rounded-full py-2 px-6"
                    />
                    <br />
                    <button type="submit" className="rounded-full bg-blue-600 text-white py-2">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;