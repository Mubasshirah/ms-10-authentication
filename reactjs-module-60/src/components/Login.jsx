import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {signInUser}=useContext(AuthContext);
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        
        const password=form.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            form.reset('');
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-2/5">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
             
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
                <button className="btn btn-primary">Login</button>
                <p className='py-6 '><small >Have not registered? <Link className='text-blue-600' to='/register'>Register</Link></small></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;