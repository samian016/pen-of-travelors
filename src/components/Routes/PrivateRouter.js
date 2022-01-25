import React from 'react';
import useAuth from '../../useFirebase/hooks/useAuth'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) return 'loading';
    return (
        <Route {...rest}
            render={({ location }) =>
                user.email ? children : <Redirect
                    to={{
                        pathname: "/signup",
                        state: { from: location }
                    }} />} />

    )
};

export default PrivateRoute;