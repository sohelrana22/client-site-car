import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import sectionBg from './../../assets/images/bg.jpg';
import './MyOrder.css';

const MyOrder = () => {
    const { user } = useFirebase()
    const { email } = user;
    const [order, setOrder] = useState([])
    console.log(email);
    useEffect(() => {
        fetch(`https://peaceful-earth-75110.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [email])
    const handleDelete = email => {
      const proceed = window.confirm('Are you sure, You want to cancel Order?');
      if(proceed) {
        const url = `https://peaceful-earth-75110.herokuapp.com/orders/${email}`;
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
        </div>
    );
};

export default MyOrder;