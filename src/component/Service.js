import React from 'react';
import Card from './Card';
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.webp'
import card3 from '../images/card3.png'
import card4 from '../images/card4.jpg'
import card5 from '../images/card5.jpg'
import card6 from '../images/card6.jpg'
const Service = () => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Web development" src={card1}/>
              <Card title="App development" src={card2}/>
              <Card title="Software development" src={card3}/>
              <Card title="Digital Marketing" src={card4}/>
              <Card title="Android development" src={card5}/>
              <Card title="System design" src={card6}/>
            </div>
          </div>

        </div>

      </div>
    </>

  )
}

export default Service
