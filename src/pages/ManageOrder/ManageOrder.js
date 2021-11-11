import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import sectionBg from './../../assets/images/bg.jpg';

const ManageOrder = () => {
    const { user } = useFirebase()
    const { id } = user;
    const [allOrder, setAllOrder] = useState([])
    console.log(id);
    useEffect(() => {
        fetch('https://peaceful-earth-75110.herokuapp.com/manageorder/')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [id])
    const handleDelete = email => {
        const proceed = window.confirm('Are you sure, You want to cancel Order?');
        if(proceed) {
          const url = `https://peaceful-earth-75110.herokuapp.com/manageorder/${email}`;
          fetch(url, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.deletedCount) {
                    alert('canceled')
                    const remaining = allOrder.filter(single => single?.email !== email);
                    setAllOrder(remaining)
                }
  
              })
        }
      }
    return (
        <div
        style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }} className="py-5"
        >
          <div className="admin-section p-5">
          <div className='text-center fw-bold'>
            <h1 className='pt-3 text-white'>ADMIN DASHBOARD</h1>
             <h4 className='pt-2 pb-2 text-white'>TOTAL ORDERS:  { allOrder.length}</h4>
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
              allOrder.map(allOrder=>(<tbody>
        
        <tr>
          
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold ' key={index}className="text-white">{ allOrder?.name}</td>
          ))}
                  
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold ' key={index}className="text-white">{ allOrder?._id}</td>
          ))}
                  
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold ' key={index}className="text-white">{ allOrder?.price}</td>
          ))}
                  
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold ' key={index}className="text-white">Panding{ allOrder?.status}</td>
          ))}
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold ' key={index}className="text-white">Approve{ allOrder?.status}</td>
          ))}
          {Array.from({ length: 1 }).map((_, index) => (
            <td  key={index}><button className="px-3 bg-danger" onClick={() => handleDelete(allOrder.email)}>Delete</button></td>
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
        </div>
      );
    };

export default ManageOrder;