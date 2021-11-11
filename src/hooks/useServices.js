import { useEffect, useState } from "react";


const useServices = () => {
    const [caritem, setCaritem] = useState([]);
    useEffect(()=> {
        fetch('https://peaceful-earth-75110.herokuapp.com/caritem')
        .then(res => res.json())
        .then((data) => setCaritem(data))
    },[]);

    return {caritem, setCaritem};
};

export default useServices;