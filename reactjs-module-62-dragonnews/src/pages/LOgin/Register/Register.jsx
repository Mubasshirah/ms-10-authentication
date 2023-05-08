import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
const Register = () => {
  const [accepted,setAccepted]=useState(false);
    const {createUser}=useContext(AuthContext);
    const handleAccept=event=>{
      setAccepted(event.target.checked);
    }
    const handleRegister=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        const photo=form.photo.value;
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            updateProfileName(user,name,photo);
            console.log(user)
        })
        .catch(err=>{
            console.error(err)
        })
        form.reset()
        
      
    }
    const updateProfileName=(user,name,photo)=>{
        updateProfile(user,{displayName:name,photoUrL:photo})
        .then(()=>{
            console.log('user name updated')
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <Container className='w-25 mx-auto align-items-center'>
        <Form onSubmit={handleRegister}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" name="email" required placeholder="Enter email" />
         
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Name</Form.Label>
         <Form.Control type="text" name="name" required placeholder="Enter name" />
         
       </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Photo URL</Form.Label>
         <Form.Control type="text" name="photo" required placeholder="Enter photoURL" />
         
       </Form.Group> 
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" name="password" required placeholder="Password" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" name="accept" 
         onClick={handleAccept} 
         label={<>Accept <Link to='/terms'>terms and condition</Link></>}/>
       </Form.Group>
       <Button variant="primary" type="submit" disabled={!accepted}>
         Register
       </Button>
       <h6>Already have an account? <Link to='/login'>Login</Link></h6>
     </Form>
      </Container>
    );
};

export default Register;