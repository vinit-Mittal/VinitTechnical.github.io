import React from 'react';
import Common from './Common';
import web from '../images/project1.png';
const Home = () => {
  return (
    <>
      <Common name="Grow your business with " 
      imgsrc={web} 
      visit='/service' 
      btname='Get Started'/>
    </>
  );
};

export default Home
