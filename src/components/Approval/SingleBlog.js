import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const SingleBlog = (props) => {
    // console.log("came");
    const { blog, setApprove, deletePost } = props;
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={blog.Url}
                style={{ background:"black"}}
            />  
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {blog.Heading}
                </Typography>
                <Typography>
                   Posted By: {blog.ownerName}
                </Typography>
                <Typography>
                   Email: {blog.ownerEmail}
                </Typography>
                <Typography variant="body2" color="text.secondary">{blog.TourDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => setApprove(blog._id)} size="small">Approve</Button>
                <Button onClick={() => deletePost(blog._id)} size="small">Delete</Button>
            </CardActions>
        </Card>
    );
};

export default SingleBlog;