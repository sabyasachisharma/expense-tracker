import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../auth/authService';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const user = await signUp(email, password);  
            if (user) {
                setMessage('You have successfully registered. Redirecting...');
                setTimeout(() => {
                    navigate('/login');
                }, 50);
            }  
        } catch (error) {
            setMessage('There was a problem registering: ' + error.message);
        }

        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1>Register</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
                <br />
                Already have an account? <a href="/login">Login</a> 
                
            </form>
        </div>
    );
}

export default Register;
