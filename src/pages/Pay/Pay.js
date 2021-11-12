import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard';
import sectionBg from './../../assets/images/bg.jpg';

const Pay = () => {
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
          <h1 className="text-center p-5 text-white mb-0">Payment System Coming Soon</h1>
            <Button  variant="info" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
      className="d-flex justify-content-center align-items-center"
    />
    Loading...
  </Button>
          </Col>
        </Row>
        </div>
    );
};

export default Pay;