import React from 'react';
import { Link } from 'react-router-dom'

const LoginPage = () => (
    <div> 
        Login
        <Link to='/playlist'>Login Successful</Link>
    </div>
);

export default LoginPage;