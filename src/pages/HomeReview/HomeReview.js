import React, { useEffect, useState } from "react";
import ShowReview from "../ShowReview/ShowReview";


const HomeReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        fetch('https://peaceful-earth-75110.herokuapp.com/review')
        .then(res => res.json())
        .then((data) => setReviews(data))
    },[]);

    return (
        <div className="d-flex flex-wrap justify-content-between ">
            {
                reviews.map(review => <ShowReview key={review._id}  review={review}></ShowReview>)
            }
        </div>
    )
};

export default HomeReview;