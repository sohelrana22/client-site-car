import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import sectionBg from './../../assets/images/bg.jpg';

const Dashboard = () => {
    const { AllContexts } = useAuth()
    const {admin} = useFirebase()
    console.log(admin)
    const { logOut } = AllContexts;
    return (
        <div
            style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }} className="py-5"
        >
            <h1 className="text-center text-white">WELCOME TO DASHBOARD</h1>
            <hr />
            <Container>
                <Nav defaultActiveKey="/home" className="flex-column w-25">
                    <NavLink className="text-decoration-none text-white " to="/pay">Pay Now</NavLink>
                    <NavLink className="text-decoration-none text-white " to="/myorder">My Order</NavLink>
                    <NavLink className="text-decoration-none text-white " to="/review">Review</NavLink>
                    {admin && 
                    <>
                    <NavLink className="text-decoration-none text-white " to="/manageallorder">ManageAllOrder</NavLink>
                    <NavLink className="text-decoration-none text-white " to="/addproduct">AddProduct</NavLink>
                    <NavLink className="text-decoration-none text-white " to="/admin">MakeAdmin</NavLink>
                    <NavLink className="text-decoration-none text-white " to="/manageproduct">ManageProduct</NavLink>
                    </>
                    }
                </Nav>
                <Nav.Link className="text ">
                    <button onClick={logOut} className="btn btn-info p-1">Logout</button>
                </Nav.Link>
            </Container>

        </div>
    );
};

export default Dashboard;