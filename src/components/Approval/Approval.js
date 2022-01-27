import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleBlog from './SingleBlog';

const Approval = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://fierce-shelf-26334.herokuapp.com/blogs")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            }).finally(() => {
                setLoading(false);

            })
    }, []);
    const setApprove = (id) => {
        const bool = { status: true };
        fetch(`https://fierce-shelf-26334.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bool),
        }).then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Blog Approved");
                    const remainingBlogs = blogs.filter((blog) => blog._id !== id);
                    setBlogs(remainingBlogs);
                }
            });

    }
    const deletePost = (id) => {
        const confirmation = window.confirm("are you sure want to delete?");
        if (confirmation) {
            const url = `https://fierce-shelf-26334.herokuapp.com/blogs/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Order Canceled");
                        const reBlogs = blogs.filter((blog) => blog._id !== id);
                        setBlogs(reBlogs);
                    }
                });
        } else {
            return;
        }
    }
    if (loading) {
        return (
            <div style={{ margin: "auto", padding: "10%", width: "50%", textAlign: "center" }}>
                <CircularProgress style={{ margin: "auto" }} />
            </div>
        )
    }
    else {
        return (
            <Container sx={{ my: "5%" }}>
                <Typography variant="h3" style={{ color: "#40bf46", borderBottom: "3px solid #40bf46" }} gutterBottom component="div">
                    Need Approval
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        blogs.map((blog) => (

                            <Grid
                                key={blog._id}
                                item xs={12} sm={6}>
                                <SingleBlog

                                    blog={blog}
                                    setApprove={setApprove}
                                    deletePost={deletePost}
                                ></SingleBlog>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        );
    }
};

export default Approval;