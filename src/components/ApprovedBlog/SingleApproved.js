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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useAuth from '../../useFirebase/hooks/useAuth'
import Rating from 'react-rating';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
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
const SingleApproved = (props) => {
    const { user } = useAuth();
    // console.log(user);
    // console.log(user.photoURL);
    const { blog, setApprove, deletePost } = props;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar src={blog.ownerProfile} sx={{ bgcolor: red[500] }} aria-label="recipe">
                        
                    </Avatar>
                }
                
                title={blog.ownerName}
                subheader={blog.DateOfTravel}
            />
            
            
            <CardMedia

                onClick={handleExpandClick}
                component="img"
                height="194"
                image={blog.Url}
                alt="Paella dish"
            />
            <CardContent onClick={handleExpandClick} >
                <Typography variant="h6" color="black">
                 {blog.Heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Author Email: {blog.ownerEmail}
                </Typography>
            </CardContent>
            <CardActions
                  disableSpacing>
                <IconButton aria-label="add to favorites">
                    {/* <FavoriteIcon /> */}
                    <Rating
                        readonly
                        initialRating={blog.Rating}
                        emptySymbol="far fa-star icon"
                        fullSymbol="fas fa-star icon"
                        ></Rating>
                    </IconButton>
                    <IconButton>
                        <Button variant="contained">
                Compare
            </Button>
                    </IconButton>
                <ExpandMore
                    onClick={handleExpandClick}
                    expand={expanded}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Location: { blog.Location }</Typography>
                    <Typography paragraph>
                        cost: {blog.TotalCost}
                    </Typography>
                    <Typography paragraph>
                        {blog.TourDescription}
                    </Typography>
                    
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default SingleApproved;