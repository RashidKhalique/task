import React, { use, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { login, updateLoginField, viewloginForm } from '../Redux/slice/Auth Slice/login';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const formData = useSelector((state) => state.Login); // Access Redux state
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleInputChange = (field, value) => {
        dispatch(updateLoginField({ field, value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(viewloginForm({ field: 'email', value: formData.email }));
        dispatch(login(formData))

        if (formData.apiResponse.success) {
            localStorage.setItem('token',formData.apiResponse.token);
            localStorage.setItem('userdata',formData.apiResponse.user);
            console.log(formData.apiResponse);
            navigate('/dashboard')
            toast.success(`Login Successful! Welcome, ${formData.apiResponse.user.name}`); // Show alert with API data
        }
        if (formData.isError) {
            toast.error('Login Failed! Please check your credentials.');
        }
    }
    // useEffect(() => {
    //     if (formData.apiResponse) {
    //         console.log(formData.apiResponse);
            
    //         alert(`Login Successful! Welcome, ${formData.apiResponse.user.name}`); // Show alert with API data
    //     }
    //     if (formData.isError) {
    //         alert('Login Failed! Please check your credentials.');
    //     }
    // }, [formData.apiResponse, formData.isError]);
    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className='  p-10 rounded-lg shadow-lg'>
                <h1 className='text-2xl font-bold'>Login Now</h1>
                <p className='text-gray-400'>Login to access our services</p>
                <br />
                <form className='space-y-2 w-80 flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" className='border border-gray-400 rounded-full py-2 px-6'
                        onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input type="password" className='border border-gray-400 rounded-full py-2 px-6'

                        onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                    <br />
                    <button type='submit' className='rounded-full bg-blue-600 text-white py-2'>Login</button>
                    <button onClick={()=>{navigate('/')}} className='rounded-full bg-blue-600 text-white py-2'>Signup</button>
                </form>
            </div>
            <br />
            <ToastContainer/>
        </div>
    )
}

export default Login
