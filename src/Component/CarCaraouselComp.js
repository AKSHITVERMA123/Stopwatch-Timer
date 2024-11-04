import React from 'react'
import {Button,Carousel} from 'react-bootstrap';
import data from '../shared/constant/constantData';
const CarCaraouselComp = () => {
    return (
        
        <div>
            {/* <h2>This is My Carousel Component</h2> */}
            {/* <Button>React Button</Button>{" "} */}
            {/* <Button variant='success'>React Button</Button> */}
            <hr/>
            <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={data.TataNexon} alt="" style={{width: "100%", height: "300px"}}></img>
        <Carousel.Caption>
          <h3>First car</h3>
          <p>This is TATA Nexon Car , is one of the very famous cars in India.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={data.TataNexonCar} alt="" style={{width: "100%", height: "300px"}}></img>
        <Carousel.Caption>
          <h3>Second car</h3>
          <p>This is TATA Nexon Car , is one of the very popular cars in India.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={data.TataNexonCar2} alt="" style={{width: "100%", height: "300px"}}></img>
        <Carousel.Caption>
          <h3>Third car</h3>
          <p>
          This is TATA Nexon Car , is one of the most buying cars in India.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={data.TATAPunch} alt="" style={{width: "100%", height: "300px"}}></img>
        <Carousel.Caption>
          <h3>Fourth car</h3>
            <p>
          This is TATA Punch Car , is one of the very famous cars in India.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={data.TATAPunch1} alt="" style={{width: "100%", height: "300px"}}></img>
        <Carousel.Caption>
          <h3>Fifth Car</h3>
          <p>
          This is TATA Punch Car , is one of the very popular cars in India.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        
    )
}

export default CarCaraouselComp;
