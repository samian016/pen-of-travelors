import { Box } from '@mui/material';
import React from 'react';
import ApprovedBlog from '../ApprovedBlog/ApprovedBlog';
import Review from '../Review/Review';
import SimpleSlider from '../SimpleSlider/SimpleSlider';

const Home = () => {
    return (
        <Box>

            <SimpleSlider></SimpleSlider>
            <ApprovedBlog></ApprovedBlog>  
            <Review></Review>
        </Box>
    );
};

export default Home;