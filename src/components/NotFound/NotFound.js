import React from 'react';
import { Container } from '@mui/material';
import imge from "../../images/download.png"
const NotFound = () => {
    return (
        <Container >
            <img style={{width:"100%"}} src={ imge } alt=''></img>
        </Container>
    );
};

export default NotFound;