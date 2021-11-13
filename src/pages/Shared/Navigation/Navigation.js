import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { Button, Divider } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


export default function Navigation() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const { user, logOut } = useAuth();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >

        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem>
                <Typography variant="h6">
                    <Link to="/home"
                        style={{ textDecoration: 'none', color: 'black' }}
                    ><Button color="inherit">Home</Button>
                    </Link>
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography variant="h6">
                    <Link to="/cars"
                        style={{ textDecoration: 'none', color: 'black' }}
                    >  <Button color="inherit">Cars</Button>
                    </Link>
                </Typography>
            </MenuItem>

            <MenuItem>
                {
                    user?.email ? <Box>
                        <Typography variant="h5">
                            <Link to='/dashboard' style={{ textDecoration: 'none', color: 'black' }}> <Button color="inherit">Dashboard</Button></Link>

                        </Typography>
                        <Typography variant="h5">

                            <Button style={{ color: 'black' }}>{user.displayName}</Button>
                        </Typography>
                        <Divider />
                        <Typography variant="h6">
                            <Button onClick={logOut} color="inherit">Logout</Button>
                        </Typography>
                    </Box>
                        :
                        <Typography variant="h6">
                            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}> <Button color="inherit">Login</Button></Link>
                        </Typography>
                }
            </MenuItem>


        </Menu >
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Car Vault
                    </Typography>


                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}> <Button color="inherit">Home</Button></Link>
                        <Link underline="none" to="/cars" style={{ textDecoration: 'none', color: 'white' }}> <Button color="inherit">Cars</Button></Link>
                        {
                            user?.email ? <Box>

                                <Typography variant="p">
                                    <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}> <Button color="inherit">Dashboard</Button></Link>

                                </Typography>
                                <Typography variant="p">
                                    {user.displayName}
                                </Typography>
                                <Button onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                                : <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}> <Button color="inherit">Login</Button></Link>
                        }


                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};

