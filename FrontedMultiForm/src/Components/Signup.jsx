import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { viewForm, signup } from '../Redux/slice/Auth Slice/signup.js';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    dispatch(viewForm({ field: 'name', value: data.name }));
    dispatch(signup(data));
  };

  useEffect(() => {
    if (formData.apiResponse?.success) {
      toast.success(`Signup Successful! Welcome, ${formData.apiResponse.user.name}`);
      reset(); // clear form
    } else if (formData.isError) {
      toast.error('Signup Failed! Please check your information.');
    }
  }, [formData.apiResponse, formData.isError, reset]);

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="text-gray-400">Register to access our services</p>
        <br />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="border border-gray-400 rounded-full py-2 px-6 w-full"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email'
                }
              })}
              className="border border-gray-400 rounded-full py-2 px-6 w-full"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="border border-gray-400 rounded-full py-2 px-6 w-full"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="rounded-full bg-blue-600 text-white py-2 hover:bg-blue-700 transition"
          >
            Signup
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
