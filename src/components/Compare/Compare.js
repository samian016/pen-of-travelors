import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CompareWith from './CompareWith';

const Compare = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
const [firstB, setFirstB] = useState({});
    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:5000/blogs/approved")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                data.find((blog) => {
                    if (id === blog._id) {
                        setFirstB(blog);
                        // console.log("found",blog._id,id);
                    }
                })
                setIsLoading(false);
            }).finally(() => {
                setIsLoading(false);

            })
    }, []);
    // console.log(id);
    if (isLoading) {
        return (
            <div style={{ margin: "auto", padding: "10%", width: "50%", textAlign: "center" }}>
                <CircularProgress style={{ margin: "auto" }} />
            </div>
        )
    }
    else {
        return (
            <Container sx={{ my: "5%" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        blogs.map((blog) => (

                            <Grid
                                key={blog._id}
                                item xs={12} sm={6}>
                                <CompareWith
                                    firstB={firstB}
                                    blog={blog}
                                // setApprove={setApprove}
                                // deletePost={deletePost}
                                ></CompareWith>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        )
    }
};

export default Compare;