import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email,setEmail]=useState('');
    const handleEmail=(event)=>{
// console.log(event.target.value)
    } 
    const handlePassword=(event)=>{
        // console.log(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password)
    }
    return (
        <div>
             <h1>please register</h1>
             <form onSubmit={handleSubmit} className='w-50 mx-auto '>
                <div><input onChange={handleEmail} type="email" name='email' id='email' placeholder='your email' /></div>
                <div><input onBlur={handlePassword} type="password" name='password' id='password' placeholder='your password' /></div>
                <div><input type="submit" value="register" /></div>
             </form>

             <Form onSubmit={handleSubmit} className='w-50 mx-auto border rounded my-5 p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p><small>New to this wibsite? please <Link to="/login">Login</Link></small></p>

    </Form>

        </div>
    );
};

export default Register;