import React from 'react';
import Header from '../shared/Header/header';
import Footer from '../shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RightNav from '../shared/rightnav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsDetail = () => {
    return (
        <div>
             <Header></Header>
            <Container>
     
         <Row>
     
        <Col lg={9}><Outlet></Outlet></Col>
        <Col lg={3}><RightNav></RightNav></Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsDetail;