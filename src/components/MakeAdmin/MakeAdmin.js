import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';

const MakeAdmin = () => {
    const Email = useRef();
    const makeAdmin = (e) => {
        const email = Email.current.value;
        const user = {
            email
        }; fetch("https://fierce-shelf-26334.herokuapp.com/make/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    alert("admin created");
                    document.getElementById("mailForm").value = "";
                } else {
                    alert("admin not created");
                    document.getElementById("mail").value = "";
                }
            });
        e.preventDefault();
    };
    return (
        <Container>
            <Typography variant="h3" style={{ color: "#40bf46", borderBottom: "3px solid #40bf46" }} gutterBottom component="div">
                Make Admin
            </Typography>
            <form name='mailFrom' onSubmit={makeAdmin} style={{ textAlign: 'left' }} autoComplete="off"> <br />
                <TextField inputRef={Email} style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='comment' required type='email' label="Admins Email" /> <br />

                <Button id='signIn' style={{ marginTop: 10, marginBottom: 10, border: '2px solid #fbc02d', color: 'white', background: '#fbc02d', borderRadius: 10 }} type='submit'> Make Admin</Button> <br />
            </form>

        </Container>
    );
};

export default MakeAdmin;