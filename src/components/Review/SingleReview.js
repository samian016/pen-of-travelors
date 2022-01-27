import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Rating from 'react-rating';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const SingleReview = (props) => {
    // console.log(user);
    // console.log(user.photoURL);
    const { review } = props;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar src={review.photo} sx={{ bgcolor: red[500] }} aria-label="recipe">

                    </Avatar>
                }

                title={review.user}
            />


            <CardMedia

            />
            <CardContent onClick={handleExpandClick} >
                <Typography variant="h6" color="black">
                    {review.comment}
                </Typography>
            </CardContent>
            <CardActions
                disableSpacing>
                <IconButton aria-label="add to favorites">
                    {/* <FavoriteIcon /> */}
                    <Rating
                        readonly
                        initialRating={review.rating}
                        emptySymbol="far fa-star icon"
                        fullSymbol="fas fa-star icon"
                    >

                    </Rating>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>


                </CardContent>
            </Collapse>
        </Card>
    );
};

export default SingleReview; 