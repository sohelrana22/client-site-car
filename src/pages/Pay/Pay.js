import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import sectionBg from './../../assets/images/bg.jpg';

const Pay = () => {
    return (
        <div
        style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
        >
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
        </div>
    );
};

export default Pay;