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



//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,