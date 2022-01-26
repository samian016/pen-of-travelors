import { Button, Container, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../useFirebase/hooks/useAuth';

const SignUp = () => {
    const [isMatched, setIsMatched] = useState(false);
    const [btnMessage, setBtnMessage] = useState('Sign Up');
    
    const first = useRef();
    const second = useRef();
    const name = useRef();
    const email = useRef();
    
    const location = useLocation();
    const history = useHistory();
    const url = location.state?.form?.pathname  || '/';
    const { signUsingGoogle, createUsingEmail, message } = useAuth();
    const finlalPass = (e) => {
        const pass1 = first.current.value;
        const pass2 = second.current.value;
        if (pass1 === pass2) {
            setIsMatched(true);
            setBtnMessage('Sign Up');
            // console.log(history);
        }
        else {
            setIsMatched(false);
            setBtnMessage('Password not matched');

        }
    }

    const submit = (e) => {
        e.preventDefault();
        const namef = name.current.value;
        const emailf = email.current.value;
        const pass = first.current.value;

        if (isMatched) {
            createUsingEmail(emailf, pass, namef, history, url);
            const form = document.getElementById('formUp');
            form.reset();
        }
    }



    return (
        <div>
            <Container className='fullWidth' style={{ marginTop: '5%', marginBottom: '5%', border: '5px solid #40bf46', borderRadius: 10 }} >
                <div>
                    <h1 style={{ textAlign: 'left', color: '#40bf46', marginBottom: 0 }}> Sign Up</h1>
                    <form onSubmit={submit} validate="true" id='formUp' style={{ textAlign: 'left' }} autoComplete="off"> <br />
                        <TextField inputRef={name} style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='name' required type='text' label="Name " /> <br />
                        <TextField inputRef={email} style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='email' required type='email' label="Email Address" /> <br />
                        <TextField onChange={finlalPass} inputRef={first} style={{ width: '100%', marginTop: 10 }} required type='password' id='pass' label="Password" /> <br />
                        <TextField onChange={finlalPass} inputRef={second} style={{ width: '100%', marginTop: 10 }} required type='password' id='pass2' label="Re-type Password" /> <br />
                        <Link style={{ textDecoration: 'none', color: '#40bf46' }} to='/signin' >Already registered ?</Link> <br />
                        <Button id='submit' disabled={!isMatched} style={{ marginTop: 10, marginBottom: 10, border: '2px solid #fbc02d', color: 'white', background: '#fbc02d', borderRadius: 10 }} type='submit'> {btnMessage} </Button> <br />
                    </form>
                    <Button onClick={signUsingGoogle} style={{ marginTop: 10, marginBottom: 10, border: '2px solid #40bf46', color: 'white', background: '#40bf46', borderRadius: 10 }} type='button'> <span style={{ marginRight: '5px', fontSize: "20px", color: "#F4B400" }}><i className="fab fa-google"></i> </span> Google SignIn</Button>
                    <p>{message }</p>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;