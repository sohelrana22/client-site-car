import React from 'react';
import { Container } from 'react-bootstrap';
import Slide from "react-reveal/Slide";
import Car from '../../components/Car/Car';
import useAuth from '../../hooks/useAuth';
import sectionBg from "./../../assets/images/bg.jpg";

const CarItem = () => {
    const {caritem} = useAuth()
    const car = caritem;
    return (
        <div className="py-5"  style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
        >
            <Slide left>
            <h1 className="text-center text-white mb-2">Our All Car</h1>
          </Slide>
          <Slide right>
            <p className="text-muted mb-0 text-center">
              Here you can find our all latest Car Item. Choose some of them and
              try to grow up your daily life.
            </p>
          </Slide>
          <Container>
              <div className="my-3 d-flex flex-wrap justify-content-between">
                  {
                      car.map((car) => (<Car key={car.key}  car={car} />
                        ))}
              </div>
          </Container>
        </div>
    );
};

export default CarItem;