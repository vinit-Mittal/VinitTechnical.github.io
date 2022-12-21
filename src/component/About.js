import React from 'react'
import web from '../images/project2.jfif';
import Common from './Common';
const About = () => {
  return (
    <>
      <Common name="Welcome to About page" 
      imgsrc={web} 
      visit='/contact' 
      btname='Contact Now'/>
    </>
  );
};

export default About

