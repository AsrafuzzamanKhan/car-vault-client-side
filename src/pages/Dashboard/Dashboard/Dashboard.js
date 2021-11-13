import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyBookings from '../MyBookings/MyBookings';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddCar from '../../../ManageCar/AddCar/AddCar';
import AddReview from '../../Home/Reviews/AddReview/AddReview';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageReview from '../../Home/Reviews/ManageReview/ManageReview';
import ManageCar from '../../../ManageCar/ManageCar/ManageCar';
import AllBookings from '../AllBookings/AllBookings';

const drawerWidth = 180;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}> <Button color='inherit'>Home</Button> </Link><br />
            <Link to={`${url}`} style={{ textDecoration: 'none', color: 'black' }}> <Button color='inherit'>My Orders</Button> </Link><br />
            <Link to={`${url}/addReview`} style={{ textDecoration: 'none', color: 'black' }}> <Button color='inherit'>Add Review</Button> </Link>
            {
                admin && <Box>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'black' }}> <Button color='inherit'>Make Admin</Button> </Link><br />
                    <Link to={`${url}/addCar`} style={{ textDecoration: 'none', color: 'black' }}> <Button color='inherit'>Add Car</Button> </Link>
                    <Link to={`${url}/manageCar`} style={{ textDecoration: 'none', color: 'black' }}> <Button color='inherit'>Manage Car</Button> </Link>
                    <Link to={`${url}/manageAllOrder`} style={{ textDecoration: 'none', color: 'black' }}> <Button color='inherit'>Manage All Order</Button> </Link>
                    <Link to={`${url}/manageReview`} style={{ textDecoration: 'none', color: 'black' }}> <Button color='inherit'>Manage Review</Button> </Link>
                </Box>
            }
            <Divider />
            <Typography variant="h6">
                <Button onClick={logOut} color="inherit">Logout</Button>
            </Typography>



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute path={`${path}/manageCar`}>
                        <ManageCar></ManageCar>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrder`}>
                        <AllBookings></AllBookings>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageReview`}>
                        <ManageReview></ManageReview>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addCar`}>
                        <AddCar></AddCar>
                    </AdminRoute>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
