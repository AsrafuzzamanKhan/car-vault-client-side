import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Booking from './pages/Booking/Booking';
import AddCar from './ManageCar/AddCar/AddCar';
import AllCars from './pages/Cars/AllCars/AllCars';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddReview from './pages/Home/Reviews/AddReview/AddReview';
import ManageCar from './ManageCar/ManageCar/ManageCar';
import ManageReview from './pages/Home/Reviews/ManageReview/ManageReview';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import HomeCar from './pages/Cars/HomeCar/HomeCar';
import HomeCarDisplay from './pages/Cars/HomeCarDisplay/HomeCarDisplay';


function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/homeCar">
              <HomeCar></HomeCar>
            </Route>
            <Route path="/homeCarDisplay">
              <HomeCarDisplay></HomeCarDisplay>
            </Route>
            <Route path="/cars">
              <AllCars></AllCars>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/manageCar">
              <ManageCar></ManageCar>
            </PrivateRoute>
            <PrivateRoute path="/manageReview">
              <ManageReview></ManageReview>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
