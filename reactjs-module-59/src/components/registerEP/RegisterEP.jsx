import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


const RegisterEP = () => {
    const auth=getAuth(app);
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        setSuccess('');
        setError('');
        const email=event.target.email.value;
        const password=event.target.password.value;
        const name=event.target.name.value;
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('password must have uppercase');
            return;
        }
        else if(!/(?=.*[!@#$&*])/.test(password)){
            setError('password must have special letter');
            return;
        }
        else if(password.length<8){
            setError('password must have more than eight character');
            return;
        }
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password,name)
        .then(result=>{
            const user=result.user;
            console.log(user);
            sendVerification(result.user);
            updateProfileName(result.user,name);
            setSuccess('seccessfully signed up')
            event.target.reset();
        })
        .catch(err=>{
            console.error(err.message);
            setError(err.message);
           
        })
    }
    const sendVerification=user=>{
           sendEmailVerification(user)
           .then(result=>{
            console.log(result);
            alert('pls verify email');
           })
           .catch(err=>{
            console.error(err)
           })
             
    }
    const updateProfileName=(user,name)=>{
        updateProfile(user,{displayName:name})
        .then(()=>{
            console.log('user name updated')
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div>
           <form onSubmit={handleSubmit} className='w-50 mx-auto '>
                <div><input  type="text" name='name' id='name' placeholder='your name' required/></div>
                <div><input  type="email" name='email' id='email' placeholder='your email' required/></div>
                <div><input  type="password" name='password' id='password' placeholder='your password' required /></div>
                <div><input type="submit" value="register" /></div>
                <div className='text-danger'>{error}</div>
                <div className='text-success'>{success}</div>
             </form> 
        </div>
    );
};

export default RegisterEP;