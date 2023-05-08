import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
const Login = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const from=location?.state?.from?.pathname || '/category/0';
    const {signInUser}=useContext(AuthContext);
    const handdleSignIn=event=>{
      
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signInUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from,{replace:true});
        })
        .catch(err=>{
            console.error(err)
        })
        form.reset()
    }
    return (
       <Container className='w-25 mx-auto align-items-center'>
         <Form onSubmit={handdleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <h6>Don't have an account? <Link to='/register'>Register</Link></h6>
      </Form>
       </Container>
    );
};

export default Login;