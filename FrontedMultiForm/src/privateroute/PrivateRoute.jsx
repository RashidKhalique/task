import React, { Children } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const PrivateRoute = ({ children }) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
 
   useEffect(()=>{
    if(!token){
        navigate("/login")
    } 
   })

    return <>{children}</>
};

export default PrivateRoute;