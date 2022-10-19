import React from 'react';
import RegisterReactBootstrap from './RegisterReactBootstrap';

const Register = () => {
    return (
        <div>

            <RegisterReactBootstrap></RegisterReactBootstrap>
            {/* <form onSubmit={handleRegister}>
                <input onBlur={handleEmailChange} type="email" name="email" id="" placeholder="Your Email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder="Your Password" />
                <br />
                <button type="submit">Register</button>

            </form> */}
        </div>
    );
};

export default Register;