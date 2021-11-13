import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';

const ShowReview = (props) => {
    const {name, detail, rating} = props.review;
    return (
        <div>
            <div>
            <div>
            <Card className="m-2 review-detail text-white " style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Subtitle className="mb-2">{rating} <Rating
    initialRating={rating}
    emptySymbol="far fa-star icon-color"
    fullSymbol="fas fa-star icon-color"
    readonly></Rating> </Card.Subtitle>
    <Card.Text>{detail}</Card.Text>
  </Card.Body>
</Card>
            </div>
            </div>
        </div>
    );
};

export default ShowReview;