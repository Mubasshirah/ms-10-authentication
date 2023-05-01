import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
  <a className="btn btn-ghost normal-case text-xl">Auth Test</a>
            <div className='flex justify-end'>
            <Link className=" normal-case text-lg mr-3" to="/">Home</Link>
            <Link className=" normal-case text-lg mr-3" to="/login">Login</Link>
            <Link className=" normal-case text-lg" to="/register">Register</Link>
            </div>
</div>

        </div>
    );
};

export default Header;