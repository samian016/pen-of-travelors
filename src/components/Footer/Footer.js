import { AppBar, Container, Grid, Link, Typography } from '@mui/material';

import React from 'react';

const Footer = () => {
    return (
        <AppBar position="static" style={{ bottom: 0, background: "#40bf46", paddingBottom: 20 }} >
            <Container style={{}} maxWidth="xxl">
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 20 }}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <h1
                            style={{ fontFamily: 'MonteCarlo, cursive', fontWeight: "bold", fontSize: 40 }}
                            variant="h4"
                            nowrap="true"
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >BlogX-Master.</h1>
                        <h2 style={{ color: '#263238', marginBottom: 0 }} >About BlogX!</h2>
                        <hr color='263238' style={{ height: 3 }} />
                        <Typography style={{ color: '#263238', paddingBottom: 20 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, incidunt soluta totam officia sit iusto provident libero sed culpa nulla possimus eveniet error eum quaerat cupiditate itaque hic reprehenderit doloremque cumque quos similique exercitationem sapiente. Ipsam ipsa eum odio totam doloremque blanditiis soluta tempora dolorum maiores. Aut ad at ipsum.
                        </Typography>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={12}>

                        <div style={{ paddingTop: 30 }}>
                            <h1>Contact</h1>
                            <div style={{ paddingTop: 10, color: '#424242' }}>
                                <p> <span style={{ paddingRight: 15 }}><i className="fas fa-map-marker-alt"></i></span> Dhanmondi Dhaka,Bangladesh</p>
                                <p> <span style={{ paddingRight: 15 }}><i className="fas fa-phone"></i></span> Phone: +8801647849152</p>
                                <p> <span style={{ paddingRight: 15 }}><i className="fas fa-envelope"></i></span> blogx.mastet@gmail.com</p>
                                <p> <span style={{ paddingRight: 15 }}><i className="fab fa-skype"></i></span> Skype: BlogX-Master</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={12}>

                        <div style={{ paddingTop: 30 }}>
                            <h1>Follow</h1>
                            <div style={{ paddingTop: 10, display: 'flex', flexWrap: 'wrap' }}>
                                <Link target={'_blank'} href='https://www.facebook.com/' style={{ textDecoration: 'none', color: '#424242' }}><h1 style={{ paddingRight: 15 }}><i style={{ padding: 20, borderRadius: 4 }} className="fab fa-facebook-f"></i></h1></Link>
                                <Link target={'_blank'} href='https://twitter.com/' style={{ textDecoration: 'none', color: '#424242' }}><h1 style={{ paddingRight: 15 }}><i style={{ padding: 20, borderRadius: 4 }} className="fab fa-twitter"></i></h1></Link>
                                <Link target={'_blank'} href='https://www.linkedin.com/' style={{ textDecoration: 'none', color: '#424242' }}><h1 style={{ paddingRight: 15 }}><i style={{ padding: 20, borderRadius: 4 }} className="fab fa-linkedin-in"></i></h1></Link>
                                <Link target={'_blank'} href='https://www.instagram.com/' style={{ textDecoration: 'none', color: '#424242' }}><h1 style={{ paddingRight: 15 }}><i style={{ padding: 20, borderRadius: 4 }} className="fab fa-instagram"></i></h1></Link>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default Footer;