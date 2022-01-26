import { Button, Container, FormLabel, Input, TextField } from '@mui/material';
import './SignIn.css'
import React, { useRef } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../useFirebase/hooks/useAuth';

const SignIn = () => {
    const location = useLocation();
    const history = useHistory();
    const url = location.state?.form?.pathname || '/';
    // console.log(location.state.form);
    // console.log(url);
    const { signUsingGoogle, signUsingEmail, message } = useAuth();
    const mail = useRef();
    const pass = useRef();

    const login = (e) => {
        e.preventDefault();
        console.log("clicking");
        const email = mail.current.value;
        const password = pass.current.value;
        signUsingEmail(email, password, history, url);
        const form = document.getElementsByName('loginFrom')[0];
        form.reset();
    }
    const googlelogin = () => {
        // console.log(history);
        signUsingGoogle(url, history);
    }

    return (
        <div>
            <Container className='fullWidth' style={{ marginTop: '5%', marginBottom: '5%', border: '5px solid #40bf46', borderRadius: 10 }} >
                <div>
                    <h1 style={{ textAlign: 'left', color: '#40bf46', marginBottom: 0 }}> Sign In</h1>
                    <form name='loginFrom' onSubmit={login} style={{ textAlign: 'left' }} autoComplete="off"> <br />
                        <TextField inputRef={mail} style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='name1' required type='email' label="Email Address" /> <br />
                        <TextField inputRef={pass} style={{ width: '100%', marginTop: 10 }} id='pass2' required type='password' label="Password" /> <br />
                        <Link style={{ textDecoration: 'none', color: '#40bf46' }} to='/signup'>not registered ?</Link> <br />
                        <Button id='signIn' style={{ marginTop: 10, marginBottom: 10, border: '2px solid #fbc02d', color: 'white', background: '#fbc02d', borderRadius: 10 }} type='submit'> Sign In </Button> <br />
                    </form>
                    <Button onClick={googlelogin} style={{ marginTop: 10, marginBottom: 10, border: '2px solid #40bf46', color: 'white', background: '#40bf46', borderRadius: 10 }} type='button'> <span style={{ marginRight: '5px', fontSize: "20px", color: "#F4B400" }}><i className="fab fa-google"></i> </span> Google SignIn</Button> <br />
                    <p>{message}</p>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;