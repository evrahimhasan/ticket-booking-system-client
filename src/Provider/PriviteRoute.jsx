import React, { use } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';

const PriviteRoute = ({children}) => {
        const { user, loading } = use(AuthContext)
    const location = useLocation()
    // console.log(location);
    // console.log(user);


    if (loading) {
        return <p>Loading...</p>
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PriviteRoute;