import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../useFirebase/hooks/useAuth';

const Nevigation = () => {

    const { logOut, user, isLogged } = useAuth();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = () => {
        handleCloseUserMenu();
        logOut();
    }

    return (
        <AppBar style={{ background: "#40bf46" }} position="static">
            <Container  maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        style={{ fontFamily: 'MonteCarlo, cursive', fontWeight: "bold" }}
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >BlogX-Master.</Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link style={{ textDecoration: 'none' }} to='/'>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#0091ea', display: 'block' }}
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/createpost'>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#0091ea', display: 'block' }}
                                >
                                    post
                                </Button>
                            </Link>

                            {!isLogged && <div><Link style={{ textDecoration: 'none' }} to='/signin'>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#0091ea', display: 'block' }}
                                >
                                    Sign In
                                </Button>
                            </Link>
                                <Link style={{ textDecoration: 'none' }} to='/signup'>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: '#0091ea', display: 'block' }}
                                    >
                                        Sign Up
                                    </Button>
                                </Link></div>}

                        </Menu>
                    </Box>
                    <Typography
                        style={{ fontFamily: 'MonteCarlo, cursive', fontWeight: "bold" }}
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >BlogX-Master.</Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/createpost'>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Post
                            </Button>
                        </Link>

                        {!isLogged && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link style={{ textDecoration: 'none' }} to='/signin'>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Sign In
                                </Button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/signup'>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </Box> }
                    </Box>

                    {isLogged && <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Dashboard</Typography>
                            </MenuItem>

                            <MenuItem onClick={logout}>
                                <Typography textAlign="center">Log Out</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Nevigation;