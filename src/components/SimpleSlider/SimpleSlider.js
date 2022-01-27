import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SimpleSlider = () => {
    return (


        <Container maxWidth="xl" id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div   className="carousel-item active">
                    <img src="https://c0.wallpaperflare.com/preview/263/479/659/boat-bangladesh-saint-martin-island-golden-hour.jpg" className="d-block w-100" alt="..."/>
                </div>
                
                <div  className="carousel-item">
                    <img src="https://c0.wallpaperflare.com/preview/263/479/659/boat-bangladesh-saint-martin-island-golden-hour.jpg" className="d-block w-100 " alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </Container>
    );
};

export default SimpleSlider;