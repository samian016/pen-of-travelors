import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../useFirebase/hooks/useAuth';

const Sitereview = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(1);
    const comment = useRef();
    const history = useHistory();

    const reviewRating = (num) => {
        setRating(num);
    }
    const postreview = (e) => {
        e.preventDefault();
        const review = {
            user: user.displayName,
            comment,
            rating,
        }
    }
    return (
        <Container>
            <form name='loginFrom' onSubmit={postreview} style={{ textAlign: 'left' }} autoComplete="off"> <br />
                <TextField inputRef={comment} style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='comment' required type='text' label="Add Your Comment" /> <br />
                <Typography>Rating:</Typography>
                <input onChange={() => reviewRating(1)} type="radio" id="star1" name="star" value="1" />
                <label htmlFor="star1">1</label>


                <input onChange={() => reviewRating(2)} type="radio" id="star2" name="star" value="2" />
                <label htmlFor="star2">2</label>


                <input onChange={() => reviewRating(3)} type="radio" id="star3" name="star" value="3" />
                <label htmlFor="star3">3</label>


                <input onChange={() => reviewRating(4)} type="radio" id="star4" name="star" value="4" />
                <label htmlFor="star4">4</label>


                <input onChange={() => reviewRating(5)} type="radio" id="star5" name="star" value="5" />
                <label htmlFor="star5">5</label> <br />
                <Button id='signIn' style={{ marginTop: 10, marginBottom: 10, border: '2px solid #fbc02d', color: 'white', background: '#fbc02d', borderRadius: 10 }} type='submit'> Post review</Button> <br />
            </form>
        </Container>
    );
};

export default Sitereview;