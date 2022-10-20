import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container' >
            <h2 className='form-title'>Sign Up</h2>
            <form >
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input type="name" name="" id="" />
                </div>
                <div className='form-control'>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="" id="" />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password </label>
                    <input type="password" name="" id="" />
                </div>

                <input className='btn-submit' type="submit" value="Login" />

            </form>
            <p>Sign Up <Link to='/login'>Alreay Have an Account</Link></p>
        </div>
    );
};

export default SignUp;