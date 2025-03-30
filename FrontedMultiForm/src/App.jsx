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
