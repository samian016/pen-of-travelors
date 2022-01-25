import { Container } from '@mui/material';
import React from 'react';

const CreatePost = () => {
    return (
        
        <Container maxWidth="xl">
            <div style={{background:"green",display: "flex", justifyContent:"space-evenly"}}>
                <div style={{border:"2px solid red",width:"45%"}}><h1>one</h1></div>
                <div style={{ border: "2px solid red", width: "45%" }}><h1>two</h1></div>
                </div>
            </Container>        
    );
};

export default CreatePost;