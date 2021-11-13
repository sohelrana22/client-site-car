import React from "react";
import bgImage from "./../../assets/images/bg.jpg";
import banner from "./../../assets/images/banner3.jpg"
import slider1 from "./../../assets/images/slider1.jpg"
import slider2 from "./../../assets/images/slider2.jpg"
import slider from "./../../assets/images/slider.jpg"
import { Container, Row, Carousel } from "react-bootstrap";
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
import HomeReview from "../HomeReview/HomeReview";

const Home = () => {
  const { caritem } = useAuth()
  const car = caritem.slice(0, 6);

  return (
    <div>
      <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Get your offer</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h2>Come get paid</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h2>Make an appointment</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

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
            className="d-flex justify-content-center"
          >
            
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text">Well come to Car House Platform</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
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
          <Zoom top>
            <h2 className="text-white pt-5 mb-4 d-flex justify-content-center">Car Gallery</h2>
          </Zoom>
          <hr />
        </div>
        <div className="row">
          <div className="col-12 col-lg-3"><img className="w-100" src={t1} alt="" /></div>
          <div className="col-12 col-lg-3"><img className="w-100" src={t2} alt="" /></div>
          <div className="col-12 col-lg-3"><img className="w-100" src={t3} alt="" /></div>
          <div className="col-12 col-lg-3"><img className="w-100" src={t4} alt="" /></div>
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
              {car?.map((car) => (
                <Car car={car} key={car._id}></Car>
              ))}
          </div>
          <Slide top>
            <h2 className="text-center text-white mb-2">Reviews</h2>
            <HomeReview></HomeReview>
          </Slide>
        </Container>
      
      </div>
      
    </div>

  );
};

export default Home;