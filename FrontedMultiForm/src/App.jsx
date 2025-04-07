import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Signup from './Components/Signup';
import Login from './Components/Login';
import MultiPartForm from './Components/MultiPartForm';
import Dashboard from "./Page's/dashboard";
import Multiupdate from './Components/multiupdate';
import './App.css';
import  ViewForm  from "./Components/viewform";
import PrivateRoute from './privateroute/PrivateRoute';


function App() {
  return (
    <div className='flex justify-center'>
      {/* The Routes component wraps the paths */}
      <Routes>
        <Route path="/" element={
        
          <Signup />
          } />
        <Route path="/view/:id" element={
        
          <ViewForm/>
          } />


        <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
        
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/multipart-form" element={
          <PrivateRoute>
            <MultiPartForm />
        </PrivateRoute>
       
          } />
        <Route path="/updateform/:id" element={
           <PrivateRoute>
           <Multiupdate/>
       </PrivateRoute>
      
          
          } />

      </Routes>
    </div>
  );
}

export default App;


// import React from 'react';
// import { useForm } from 'react-hook-form';

// const App = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const submit = handleSubmit((data) => {
//     console.log(data);
//   });

//   return (
//     <div className='flex flex-col bg-green-300 items-center justify-center h-screen'>
//       <h1>Form</h1>

//       <form onSubmit={submit} className='flex flex-col gap-4'>
//         <label htmlFor="name">Name</label>
//         <input type="text" {...register("name",{required:true}) } className='border p-2 rounded-2xl' />
//         {errors.firstName?.type === true  && <span className='text-red-500'>This field is required</span>}
        
//         <label htmlFor="caste">Caste</label>
//         <input type="text" {...register("caste")} className='border p-2 rounded-2xl' />
        
//         <button type="submit" className='mt-4 p-2 bg-blue-500 text-white rounded-lg'>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;