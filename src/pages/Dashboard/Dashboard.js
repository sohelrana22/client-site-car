import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const {AllContexts} = useAuth()
    const {logOut} = AllContexts;
    return (
        <div>
            <h1 className="text-center">WELCOME TO DASHBOARD</h1>
            <hr />
           <Container>
           <Nav defaultActiveKey="/home" className="flex-column w-25">
  <NavLink className="text-decoration-none " to="/pay">Pay Now</NavLink>
  <NavLink className="text-decoration-none " to="/myorder">My Order</NavLink>
  <NavLink className="text-decoration-none " to="/review">Review</NavLink>
  <NavLink className="text-decoration-none " to="/manageallorder">ManageAllOrder</NavLink>
  <NavLink className="text-decoration-none " to="/addproduct">AddProduct</NavLink>
  <NavLink className="text-decoration-none " to="/admin">MakeAdmin</NavLink>
  <NavLink className="text-decoration-none " to="/manageproduct">ManageProduct</NavLink>
</Nav>
<Nav.Link className="text ">
            <button onClick={logOut} className="btn btn-info p-1">Logout</button>
          </Nav.Link>
           </Container>
         
        </div>
    );
};

export default Dashboard;