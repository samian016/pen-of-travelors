import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://fierce-shelf-26334.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setIsLoading(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    if (isLoading) {
        return (
            <div style={{ margin: "auto", padding: "10%", width: "50%", textAlign: "center" }}>
                <CircularProgress style={{ margin: "auto" }} />
            </div>
        )
    }
    else {
        return (
            <Container style={{ marginBottom: "5%" }}>
                <Typography variant="h3" style={{ color: "#40bf46", borderBottom: "3px solid #40bf46" }} gutterBottom component="div">
                    User Review
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        reviews.map(review => (
                            <Grid
                                key={review._id}
                                item xs={12} sm={4}>
                                <SingleReview
                                    review={review}
                                ></SingleReview>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        );
    }
};

export default Review;