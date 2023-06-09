import React from 'react';
import Header from '../shared/Header/header';
import Footer from '../shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../shared/leftnav/LeftNav';
import RightNav from '../shared/rightnav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../shared/navigation/NavigationBar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
     
      <Row>
        <Col lg={3}><LeftNav></LeftNav></Col>
        <Col lg={6}><Outlet></Outlet></Col>
        <Col lg={3}><RightNav></RightNav></Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;