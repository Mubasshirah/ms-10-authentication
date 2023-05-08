import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const NavigationBar = () => {
    const {user,logOutUser}=useContext(AuthContext);
  
    const handleLogOut=()=>{
        logOutUser()
        .then()
        .catch(error=>console.log(error))
    }
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" >
                <Container className='my-2'>
                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-secondary me-4' to="/">Home</Link>
                            <Link className='text-decoration-none text-secondary me-4' to="/">About</Link>
                            <Link className='text-decoration-none text-secondary' to="/">Career</Link>
                        
                            
                        </Nav>
                        <Nav className='align-items-center'>
                          
                            { user ?
                                
                                <Button variant="secondary" onClick={handleLogOut}>Logout</Button>
                                :
                                <Link  to="/login">
                                <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;