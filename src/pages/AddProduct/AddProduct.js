import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Dashboard from '../Dashboard/Dashboard';
import sectionBg from './../../assets/images/bg.jpg';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://peaceful-earth-75110.herokuapp.com/caritem',data)
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
           <Row>
               <Col className="md-3">
               <Dashboard></Dashboard>
               </Col>
           </Row>
           <Row>
               <Col className="md-9">
               <h2 className="text-center mt-3 mb-3 text-white">Please Add A Product</h2>
           <div className="add-service">
           <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("detail")} placeholder="Detail" />
      <input {...register("price")} placeholder="price" />
      <input {...register("img")} placeholder="image-url" />
      <input type="submit" />
    </form>
           </div>
               </Col>
           </Row>
        </div>
    );
};

export default AddProduct;