import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const name=form.name.value;
        const password=form.password.value;
        console.log(email,name,password);
        createUser(email,password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser);
            form.reset('');
        })
        .catch(error=>
            console.error(error.message));
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Register Now!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <p className='py-6 '><small >Already registered? <Link className='text-blue-600' to='/login'>Login</Link></small></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;