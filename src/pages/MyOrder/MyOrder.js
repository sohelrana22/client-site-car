import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import Dashboard from '../Dashboard/Dashboard';
import sectionBg from './../../assets/images/bg.jpg';
import './MyOrder.css';

const MyOrder = () => {
    const { user } = useFirebase()
    const { email } = user;
    const [order, setOrder] = useState([])
    console.log(email);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [email])
    const handleDelete = email => {
      const proceed = window.confirm('Are you sure, You want to cancel Order?');
      if(proceed) {
        const url = `http://localhost:5000/orders/${email}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('canceled')
                    const remaining = order.filter(single => single?.email !== email);
                    setOrder(remaining)
                }

            })
      }
    }
    return (
        <div
        style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
        >
            <Row>
                <Col className="md-3">
                <Dashboard></Dashboard>
                </Col>
            </Row>
            <Row>
                <Col className="md-9">
                <h2 className="order pt-3">My Order:{order.length}</h2>
            <div>
                {
                    order.map(single => <div className="pt-3" key={single._id}>
                        <Container className="bg-info">
                            <Row>
                                <Col>
                                    <img className="img-fluid" src={single.img} alt="" />
                                </Col>
                                <Col>
                                    <h1>{single.name}</h1>
                                    <h2>Price: ${single.price}</h2>
                                    <h3>{single.detail}</h3>
                                    <button className="px-3 bg-danger" onClick={() => handleDelete(single.email)}>Cancel Order</button>
                                </Col>
                            </Row>
                        </Container>

                    </div>)

                }
            </div>
                </Col>
            </Row>
        </div>
    );
};

export default MyOrder;