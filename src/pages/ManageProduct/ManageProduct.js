import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import Dashboard from '../Dashboard/Dashboard';
import sectionBg from './../../assets/images/bg.jpg';

const ManageProduct = () => {
    const { user } = useFirebase()
    const { name } = user;
    const [allProduct, setAllProduct] = useState([])
    console.log(name);
    useEffect(() => {
        fetch('http://localhost:5000/caritem')
            .then(res => res.json())
            .then(data => setAllProduct(data));
    }, [name])
    const handleDelete = name => {
        const proceed = window.confirm('Are you sure, You want to cancel Order?');
        if(proceed) {
          const url = `http://localhost:5000/caritem/${name}`;
          fetch(url, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.deletedCount) {
                    alert('canceled')
                    const remaining = allProduct.filter(single => single?.name !== name);
                    setAllProduct(remaining)
                }
  
              })
        }
      }
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
            <div className="admin-section ">
          <div className='text-center fw-bold'>
            <h1 className='pt-3 text-white'>MANAGE PRODUCT</h1>
             <h4 className='pt-2 pb-2 text-white'>TOTAL PRODUCT:  { allProduct.length}</h4>
          </div>
          <div className='container'>
             <Table striped bordered hover
     responsive="sm" className='my-3'>
        <thead>
          <tr>
                        {Array.from({ length: 1 }).map((_, index) => (
                                    <th key={index} className="text-white">
                                      Name</th>
                        ))}
                
                        {Array.from({ length: 1 }).map((_, index) => (
                                    <th key={index} className="text-white"> ORDER ID </th>
                        ))}
                
    
                        {Array.from({ length: 1 }).map((_, index) => (
                          <th key={index}className="text-white">PRICE</th>
                        ))}
                
                        {Array.from({ length: 1 }).map((_, index) => (
                                    <th key={index}className="text-white">STATUS</th>
                        ))}
                        {Array.from({ length: 1 }).map((_, index) => (
                                    <th key={index}className="text-white">CONFIRM</th>
                        ))}
                        {Array.from({ length: 1 }).map((_, index) => (
                                    <th key={index}className="text-white">
                                      CANCEL</th>
                        ))}
              </tr>
              
            </thead>
            {
              allProduct.map(allProduct=>(<tbody>
        
        <tr>
          
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold text-white' key={index}>{ allProduct?.name}</td>
          ))}
                  
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold text-white' key={index}>{ allProduct?._id}</td>
          ))}
                  
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold text-white' key={index}>{ allProduct?.price}</td>
          ))}
                  
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold text-white' key={index}>Panding{ allProduct?.status}</td>
          ))}
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold text-white' key={index}>Approve{ allProduct?.status}</td>
          ))}
          {Array.from({ length: 1 }).map((_, index) => (
            <td  key={index}><button className="px-3 bg-danger" onClick={() => handleDelete(allProduct.name)}>Delete</button></td>
          ))}
          {Array.from({ length: 1 }).map((_, index) => (
            <td  key={index}></td>
          ))}
                  
                  
    
                  
        </tr>
        
    </tbody>))
            }
        </Table>
       </div>
    
        </div>
            </Col>
          </Row>
        </div>
      );
    };

export default ManageProduct;