
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../useFirebase/hooks/useAuth';
const CreatePost = () => {

    const [rating, setRating] = useState(1);
    const { user, admin } = useAuth();
    const history = useHistory();
    const [post, setPost] = useState({ ownerName: user.displayName, ownerEmail: user.email, Rating: rating, isApproved: admin, ownerProfile: user.photoURL });

    const setRate = (num) => {
        setRating(num);
    }


    const postdemo = (e) => {
        const demoPost = { ...post };
        const fieldName = e.target.name;
        demoPost[fieldName] = e.target.value;

        setPost(demoPost);
        // console.log(demoPost);
        // console.log(fieldName);
        // console.log(e.target.value);
    }
    // console.log(rating);
    // console.log(post);

    const Post = (e) => {
        e.preventDefault();
        post.Rating = rating;
        console.log(post);
        const form = document.getElementById('formPost');
        form.reset();
        fetch("https://fierce-shelf-26334.herokuapp.com/blogs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        }).then(() => {
            history.push("/");
        });
    }

    return (

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center", alignItems: "center" }}>

            <Box sx={{ width: { xs: "80%", sm: "40%" } }} style={{ textAlign: "center", marginRight: "5%", margin: { xs: "auto" } }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className=''><Typography sx={{ color: '#40bf46', fontSize: { xs: "50px", sm: "50px", md: "70px", lg: "90px" }, fontWeight: "bold", fontFamily: " Neonderthaw, cursive" }}>Share your exprience here..</Typography></div>
            </Box>
            <Box sx={{ width: { xs: "80%", sm: "40%" } }} >

                <div style={{ marginTop: '5%', marginBottom: '5%', borderRadius: 10 }}>
                    <form onSubmit={Post} validate="true" id='formPost' style={{ textAlign: 'left' }} autoComplete="off"> <br />
                        <TextField onBlur={postdemo} name='Heading' style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='heading' required type='text' label="Heading " /> <br />
                        <TextField onBlur={postdemo} style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='description' required name='TourDescription' type='text' label="Description" /> <br />
                        <label htmlFor="travelDate">Date:</label>
                        <TextField onBlur={postdemo} style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='travelDate' name='DateOfTravel' required type='date' /> <br />
                        <label htmlFor="travelTime">Time:</label>

                        <TextField onBlur={postdemo} style={{ width: '100%', marginTop: 10, marginBottom: 10 }} id='travelTime' name='TimeOfTravel' required type='time' /> <br />
                        <TextField onBlur={postdemo} style={{ width: '100%', marginTop: 10 }} required type='text' name='Location' id='location' label="Location" /> <br />
                        <TextField onBlur={postdemo} style={{ width: '100%', marginTop: 10 }} required type='text' name='Url' id='url' label="Image Url" /> <br />
                        <TextField onBlur={postdemo} style={{ width: '100%', marginTop: 10 }} required type='number' id='cost' name='Total Cost' label="TotalCost" /> <br />
                        <Typography>Rating:</Typography>
                        <input onChange={() => setRate(1)} type="radio" id="star1" name="star" value="1" />
                        <label htmlFor="star1">1</label>


                        <input onChange={() => setRate(2)} type="radio" id="star2" name="star" value="2" />
                        <label htmlFor="star2">2</label>


                        <input onChange={() => setRate(3)} type="radio" id="star3" name="star" value="3" />
                        <label htmlFor="star3">3</label>


                        <input onChange={() => setRate(4)} type="radio" id="star4" name="star" value="4" />
                        <label htmlFor="star4">4</label>


                        <input onChange={() => setRate(5)} type="radio" id="star5" name="star" value="5" />
                        <label htmlFor="star5">5</label> <br />
                        {/* <Link style={{ textDecoration: 'none', color: '#40bf46' }} to='/signin' >Already registered ?</Link> <br /> */}
                        <Button id='submit' style={{ marginTop: 10, marginBottom: 10, border: '2px solid #fbc02d', color: 'white', background: '#fbc02d', borderRadius: 10 }} type='submit'>Post</Button> <br />
                    </form>
                    <Link to="/" style={{ textDecoration: "none" }}> <Button style={{ marginTop: 10, marginBottom: 10, border: '2px solid #40bf46', color: 'white', background: '#40bf46', borderRadius: 10 }} type='button'>Back to Home</Button> </Link>

                </div>

            </Box>

        </Box>
    );
};

export default CreatePost;