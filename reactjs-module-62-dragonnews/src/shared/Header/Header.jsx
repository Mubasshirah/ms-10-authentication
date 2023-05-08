import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <h6 className='text-secondary'>Journalism Without Fear or Favour</h6>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={50} pauseOnHover={true} className='text-light'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
           
        </Container>
    );
};

export default Header;