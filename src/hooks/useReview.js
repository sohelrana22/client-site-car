import { useEffect, useState } from "react";


const useReview = () => {
    const [review, setReview] = useState([]);
    useEffect(()=> {
        fetch('https://peaceful-earth-75110.herokuapp.com/review')
        .then(res => res.json())
        .then((data) => setReview(data))
    },[]);

    return {review, setReview};
};

export default useReview;