import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import './login.css';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
const Login = () => {
    const auth=getAuth(app);
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const [show,setShow]=useState(false);
    const emailRef=useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        setError('');
        setSuccess('');
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setSuccess('succesfully logged in')
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
        })
    }
    const handlePasswordChange=()=>{
      const email=emailRef.current.value;
      console.log(email);
      sendPasswordResetEmail(auth,email)
      .then(()=>
      alert('check your email'))
      .catch(error=>{
        console.log(error.message);
        setError(error.message);
      })
    }
    const handlepasswordShow=()=>{
      setShow(!show);
    }
    
    return (
        <div>
            <h1>please login</h1>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto border rounded my-5 p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' ref={emailRef} placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 passcontainer" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Label className='showPass' onClick={handlepasswordShow}>{show? "hide" : "show"}</Form.Label>
        <Form.Control type={show ? "text":"password"} name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Show password"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p><small>New to this wibsite? please <Link to="/register">Register</Link></small></p>
      <p><small>forget passsword? <button onClick={handlePasswordChange} className='btn btn-link'>reset password</button></small></p>
      <div className='text-danger'>{error}</div>
      <div className='text-success'>{success}</div>
    </Form>
        </div>
    );
};

export default Login;