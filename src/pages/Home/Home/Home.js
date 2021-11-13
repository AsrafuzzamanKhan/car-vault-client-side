import React from 'react';
import HomeCar from '../../Cars/HomeCar/HomeCar';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import MiddlePart from '../MiddlePart/MiddlePart';
import DisplayReview from '../Reviews/DisplayReview/DisplayReview';
import UpcomingCar from '../UpcomingCar/UpcomingCar';



const Home = () => {
    return (
        <div>

            <Navigation></Navigation>
            <Banner></Banner>
            <HomeCar></HomeCar>
            <UpcomingCar></UpcomingCar>
            <MiddlePart></MiddlePart>
            <DisplayReview></DisplayReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;