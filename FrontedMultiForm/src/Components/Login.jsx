import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, updateLoginField, viewloginForm } from '../Redux/slice/Auth Slice/login';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.Login); // from Redux slice

  const onSubmit = (data) => {
    dispatch(viewloginForm({ field: 'email', value: data.email }));
    dispatch(login(data));
  };

  useEffect(() => {
    if (formData.apiResponse?.success) {
      localStorage.setItem('token', formData.apiResponse.token);
      localStorage.setItem('userdata', JSON.stringify(formData.apiResponse.user));
      navigate('/dashboard');
      toast.success(`Login Successful! Welcome, ${formData.apiResponse.user.name}`);
    } else if (formData.isError) {
      toast.error('Login Failed! Please check your credentials.');
    }
  }, [formData.apiResponse, formData.isError, navigate]);

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Login Now</h1>
        <p className="text-gray-400">Login to access our services</p>
        <br />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-80 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="border border-gray-400 rounded-full py-2 px-6"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="border border-gray-400 rounded-full py-2 px-6"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <br />
          <button type="submit" className="rounded-full bg-blue-600 text-white py-2">
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-full bg-gray-500 text-white py-2"
          >
            Signup
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
