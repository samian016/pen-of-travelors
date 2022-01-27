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
import { Button, Container, Modal } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
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
const CompareWith = (props) => {
    const { user } = useAuth();
    // console.log(user);
    // console.log(user.photoURL);
    const { blog, firstB } = props;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60%",
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };




    return (<>
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
                    <Button onClick={handleOpen} variant="contained">
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
                    <Typography paragraph>Location: {blog.Location}</Typography>
                    <Typography paragraph>
                        cost: {blog.TotalCost}
                    </Typography>
                    <Typography paragraph>
                        {blog.TourDescription}
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography style={{textAlign:"center"}} id="keep-mounted-modal-title" variant="h6" component="h2">
                        Comparesion
                    </Typography>
                    <Container maxWidth="xl">
                        <Box sx={{display:{xs:"block",sm:"flex", justifyContent:"space-around",alignItems:"center",alignContent:"center"}}}>
                            <Box>
                                <Typography variant="h6" color="black">First Blog</Typography>
                                <Typography>Author: { firstB.ownerName}</Typography>
                                <Typography>Heading: { firstB.Heading}</Typography>
                                <Typography>Cost: { firstB.TotalCost}</Typography>
                                <Typography>Rating: { firstB.Rating}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="black">Second Blog</Typography>
                                <Typography>Author: { blog.ownerName}</Typography>
                                <Typography>Heading: { blog.Heading}</Typography>
                                <Typography>Cost: { blog.TotalCost}</Typography>
                                <Typography>Rating: {blog.Rating}</Typography>
                            </Box>
                        </Box>

                        <Link to={`/`}><Button variant="contained">
                            Home
                        </Button></Link>

                    </Container>
                    {/* <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                </Box>
            </Modal>
        </div>
        </>
    );
};

export default CompareWith;