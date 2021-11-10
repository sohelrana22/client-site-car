import React from 'react';
import notFound from './../../assets/images/404.png';

const PageNotFound = () => {
    return (
        <div>
           <img className=" w-100 h-100" src={notFound}  alt="" />
        </div>
    );
};

export default PageNotFound;