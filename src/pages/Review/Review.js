import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import sectionBg from './../../assets/images/bg.jpg';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://peaceful-earth-75110.herokuapp.com/review',data)
      .then(res =>{
          if(res.data.insertedId){
              alert('added successfully')
              reset();
          }
      })
    };
    return (
        <div
        style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }} className="py-5"
        >
           <h2 className="text-center mt-3 mb-3 text-white">Please Add A Review</h2>
           <div className="add-service">
           <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("detail")} placeholder="Review" />
      <input {...register("rating")} placeholder="rating" />
      <input type="submit" />
    </form>
           </div>
        </div>
    );
};

export default Review;