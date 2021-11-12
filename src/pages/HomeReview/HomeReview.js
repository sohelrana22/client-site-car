import { useEffect, useState } from "react";


const HomeReview = () => {
    const [review, setReview] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then((data) => setReview(data))
    },[]);

    return (
        <div>
            <h2>hello</h2>
        </div>
    )
};

export default HomeReview;