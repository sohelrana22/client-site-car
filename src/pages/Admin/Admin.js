import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import sectionBg from './../../assets/images/bg.jpg';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://peaceful-earth-75110.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                alert('Admin Create Successful')
                console.log(data)
                setEmail('');
                setSuccess(true);
            }
            
        })
        e.preventDefault()
    }
    return (
        <div
        style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }} className="py-5"
        >
            <h2 className="text-center mt-5 text-white">Make An Admin</h2>
            <Form onSubmit={handleAdminSubmit} className="w-50 mx-auto p-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white">Email address</Form.Label>
                    <Form.Control type="email"
                    onBlur={handleOnBlur} 
                    placeholder="Enter email" />
                </Form.Group>
                <Button className="btn btn-info" variant="primary" type="submit">
                    Make Admin
                </Button>
            </Form>
        </div>
    );
};

export default Admin;