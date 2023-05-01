import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub, FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../qzone/QZone';

const RightNav = () => {
    return (
        <div>
            <h4>Login with </h4>
            <div>
                <Button variant="outline-primary" className='mb-2'><FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub/> Login with Github</Button>
        </div>
            <h5>Find us on</h5>
            <div>
            <ListGroup>
      <ListGroup.Item><FaFacebook/>  Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/>  Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/>  Instagram</ListGroup.Item>
      
    </ListGroup>
            </div>
            <QZone></QZone>
        </div >
    );
};

export default RightNav;