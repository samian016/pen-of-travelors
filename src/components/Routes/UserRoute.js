import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../useFirebase/hooks/useAuth';

const UserRoute = ({ children, ...rest }) => {
    const { user, isLogged, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div style={{ margin: "auto",padding:"10%", width: "50%", textAlign: "center" }}>
                <CircularProgress style={{ margin: "auto" }} />
            </div>
        )
    }
        console.log(user.email,"gg");
        return (
            <Route {...rest}
                render={({ location }) =>
                    (!isLogged && !user.email) ? children : <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }} />} />

        )

};

export default UserRoute;