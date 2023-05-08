import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
   if(loading){
    return <Spinner animation="grow" variant="secondary" className='align-items-center' />;
   }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace> </Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;