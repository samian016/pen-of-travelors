import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../useFirebase/hooks/useAuth';

const Sitereview = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(1);
    const cmnt = useRef();
    const history = useHistory();

    const reviewRating = (num) => {
        setRating(num);
    }
    const postreview = (e) => {
        e.preventDefault();
        const comment = cmnt.current.value;
        const review = {
            user: user.displayName,
            photo: user.photoURL,
            comment,
            rating,
        }
        fetch("https://fierce-shelf-26334.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        }).then(() => {
            const form = document.getElementById('reviewForm');
            form.reset();
            history.push("/");
        });
    }
    return (
        <Container>
            <Typography variant="h3" style={{ color: "#40bf46", borderBottom: "3px solid #40bf46" }} gutterBottom component="div">
                Review
            </Typography>
            <form name='reviewFrom' id='reviewForm' onSubmit={postreview} style={{ textAlign: 'left' }} autoComplete="off"> <br />
                <TextField inputRef={cmnt} style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='comment' required type='text' label="Add Your Comment" /> <br />
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