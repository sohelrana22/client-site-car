import { useEffect, useState } from "react";


const useServices = () => {
    const [caritem, setCaritem] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/caritem')
        .then(res => res.json())
        .then((data) => setCaritem(data))
    },[]);

    return {caritem, setCaritem};
};

export default useServices;