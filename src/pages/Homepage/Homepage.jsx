import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import StyledHomepage from './Homepage.styles';

function Homepage() {
  return (
    <StyledHomepage>
      <div>
        <Navbar />
      </div>
    </StyledHomepage>
  );
}

export default Homepage;
