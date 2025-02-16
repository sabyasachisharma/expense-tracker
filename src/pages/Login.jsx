import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../auth/authService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
      e.preventDefault();
      setMessage('');

      try {
          const user = await signIn(email, password);  
          if (user) {
              setMessage('You have successfully Logged In. Redirecting...');
              setTimeout(() => {
                  navigate('/Dashboard');
              }, 1000);
          }  
      } catch (error) {
          setMessage('There was a problem logging in: ' + error.message);
      }

      setEmail('');
      setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <br />
      {message && <p>{message}</p>}
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default Login;
