import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleApproved from './SingleApproved';


const ApprovedBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/blogs/approved")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            }).finally(() => {
                setLoading(false);

            })
    }, []);
    // const setApprove = (id) => {
    //     const bool = { status: true };
    //     fetch(`http://localhost:5000/update/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(bool),
    //     }).then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 alert("Blog Approved");
    //                 const remainingBlogs = blogs.filter((blog) => blog._id !== id);
    //                 setBlogs(remainingBlogs);
    //             }
    //         });

    // }
    // const deletePost = (id) => {
    //     const confirmation = window.confirm("are you sure want to delete?");
    //     if (confirmation) {
    //         const url = `http://localhost:5000/blogs/${id}`;
    //         fetch(url, {
    //             method: "DELETE",
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 if (data.deletedCount > 0) {
    //                     alert("Order Canceled");
    //                     const reBlogs = blogs.filter((blog) => blog._id !== id);
    //                     setBlogs(reBlogs);
    //                 }
    //             });
    //     } else {
    //         return;
    //     }
    // }
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
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        blogs.map((blog) => (

                            <Grid
                                key={blog._id}
                                item xs={12} sm={6}>
                                <SingleApproved

                                    blog={blog}
                                    // setApprove={setApprove}
                                    // deletePost={deletePost}
                                ></SingleApproved>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        );
    }
};

export default ApprovedBlog;