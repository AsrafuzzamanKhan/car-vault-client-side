import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Cars from '../Cars/Cars';

const AllCars = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Cars></Cars>
      <Footer></Footer>
    </div>
  );
};

export default AllCars;
