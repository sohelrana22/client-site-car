import { useEffect, useState } from "react";


const useServices = () => {
    const [caritem, setCaritem] = useState([]);
    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then((data) => setCaritem(data))
    },[]);

    return {caritem, setCaritem};
};

export default useServices;