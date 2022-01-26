import React from 'react';
import useAuth from '../../useFirebase/hooks/useAuth'
import { Route, Redirect } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div style={{ margin: "auto", padding: "10%", width: "50%", textAlign: "center" }}>
                <CircularProgress style={{ margin: "auto" }} />
            </div>
        )
    }
        console.log(user.email);
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{ pathname: "/signin", state: { form: location } }}
                        ></Redirect>
                    )
                }
            ></Route>

        )
    
};

export default PrivateRoute;