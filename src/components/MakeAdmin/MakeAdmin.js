import { Button, Container, TextField } from '@mui/material';
import React, { useRef } from 'react';

const MakeAdmin = () => {
    const email = useRef();
    const makeAdmin = (e) => {
        e.preventDefault();
        const Email = email.current.value;
        const user = {
            Email,
        }
    }
    return (
        <Container>
            <form name='loginFrom' onSubmit={makeAdmin} style={{ textAlign: 'left' }} autoComplete="off"> <br />
                <TextField inputRef={email} style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='comment' required type='email' label="Admins Email" /> <br />

                <Button id='signIn' style={{ marginTop: 10, marginBottom: 10, border: '2px solid #fbc02d', color: 'white', background: '#fbc02d', borderRadius: 10 }} type='submit'> Make Admin</Button> <br />
            </form>

        </Container>
    );
};

export default MakeAdmin;