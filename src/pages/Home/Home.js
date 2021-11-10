import React from "react";
import bgImage from "./../../assets/images/bg.jpg";
import banner from "./../../assets/images/banner.jpeg"
import slider1 from "./../../assets/images/slider1.jpg"
import slider2 from "./../../assets/images/slider2.jpg"
import slider from "./../../assets/images/slider.jpg"
import { Container, Row, Carousel, Accordion, Image, Col } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Zoom from 'react-reveal/Zoom';
import { NavLink } from "react-router-dom";
import './Home.css'
import useAuth from "../../hooks/useAuth";
import Car from "../../components/Car/Car";
import t1 from "./../../assets/images/t1.jpg"
import t2 from "./../../assets/images/t2.jpg"
import t3 from "./../../assets/images/t3.jpg"
import t4 from "./../../assets/images/t4.jpg"
import './Home.css'

const Home = () => {
  const {caritem} = useAuth()
  const car = caritem.slice(0, 6);
  
  return (
    <div>
      
      <div
        style={{
          background: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text">Well come to Car House Platform</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text fs-5">
                Inaugurated in 1993 “Car House Limited” has been a strong seller of both brand new and reconditioned vehicles. With the grace of Almighty Allah Car House can boast a strong sales and after sales service record in the heart of customers.
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to='/caritem'
                  className="rounded-pill fs-5 btn btn-primary py-2 px-4">
                  View More
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
      >
        <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div>
        <Zoom top>
        <h2 className="text-white mt-5 mb-4 d-flex justify-content-center">Car Gallery</h2>
        </Zoom>
          <hr />
        </div>
        <div className="d-flex">
          <img className="w-25" src={t1} alt="" />
          <img className="w-25" src={t2} alt="" />
          <img className="w-25" src={t3} alt="" />
          <img className="w-25" src={t4} alt="" />
        </div>
        <div>
          <h2 className="text-white d-flex justify-content-center mt-5">Our Mission & Vision</h2>
          </div>
       <div className="d-flex mt-5 ">
 <Col xs={12} md={6}>
 <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>About Car House Platform. Which People Question?</Accordion.Header>
    <Accordion.Body>
    Inaugurated in 1993 “Car House Limited” has been a strong seller of both brand new and reconditioned vehicles. With the grace of Almighty Allah Car House can boast a strong sales and after sales service record in the heart of customers.With the grace of Almighty Allah Car House can boast a strong sales and after sales service record in the heart of customersCar House Limited” a leading name in car business is founded by Mr. Anwar Hossain. Initially the showroom consisted of a space which allowed 15 vehicles to be displayed but with time we have increased our display space to 40 vehicles inside the showroom and 20 vehicles outside.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Car House History in Bangladesh:</Accordion.Header>
    <Accordion.Body>
    High Line Car House was built in 1873 as a car house and horse barn for Columbus’ streetcar system. Even when the last horse car line was electrified in 1892, the streetcar company still had use for horses. They were used for pulling construction wagons and over-head electrical line repair wagons. Columbus’ High Street streetcar line operated until 1947 when it was converted into a diesel trolly bus line - a precursor to today's COTA bus transit system. The name High Line Car House pays homage to Columbus' streetcar system and the important High Street line.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Why Car House. Our 1st recommendation?</Accordion.Header>
    <Accordion.Body>
    The top Car House in Bangladesh is Car House by Google reviews and Facebook reviews. They are the number one IATA honest car agent who gets many awards from our contry and GDS companies. Most attractive part of an online car agent. They recommend the world’s top car agents and suggest those companies for your best price and deal.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
 </Col>

<Col xs={12} md={6}>
      <Image className='img-fluid w-100' src="https://i.pinimg.com/originals/62/a3/95/62a395d860cb5fbe52e84405201a3016.jpg" rounded />
    </Col>

       </div>
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-white mb-2">Featured Destinations</h2>
          </Slide>
          <Slide right>
            <p className="text-muted text-center">
              Here you can find our all latest car related information. Choose some of them and
              try to grow up your daily life.
            </p>
          </Slide>
         <div className="my-3 d-flex flex-wrap justify-content-between">
         <Row className="home-service">
            {car?.map((car) => (
              <Car car={car} key={car.key}></Car>
            ))}
          </Row>
         </div>
         <Slide left>
            <h2 className="text-center text-white mb-2">Reviews</h2>
          </Slide>
        </Container>
      </div>
    </div>
    
  );
};

export default Home;