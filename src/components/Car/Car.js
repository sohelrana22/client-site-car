import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Card, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Car.css'

const Car = ({ car }) => {
  const { img, name, detail, _id, price } = car;
  return (
    <Zoom>
      <Card className="m-2 body-detail col-12" style={{ width: '21rem' }}>
      <Image style={{width: '300px', height: '300px'}} src={img} roundedCircle className="mx-auto" />
        <Card.Body className="text-white">
          <Card.Title> {name}</Card.Title>
          <Card.Title>${price}</Card.Title>
          <Card.Text>{detail}</Card.Text>
          <NavLink to={`/order/${_id}`} className="btn btn-primary">BUY Now</NavLink>

        </Card.Body>
      </Card>
    </Zoom>

  );
};

export default Car;