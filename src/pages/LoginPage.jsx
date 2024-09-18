import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import Firebase auth configuration

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setIsLoading(true); // Set loading state to true

    try {
      // Log in the user using Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Navigate to the homepage on successful login
    } catch (err) {
      setError('Invalid email or password'); // Display error message
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="form-container">
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Login to Paylax.box</h2>

        {error && <p className="error-message">{error}</p>} {/* Display error message */}

        <div className="form-group">
          <label>Please enter your email address <span>*</span></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
            style={{ borderColor: error ? 'red' : '' }} // Add red border if there's an error
          />
        </div>

        <div className="form-group">
          <label>Please enter your password <span>*</span></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
            style={{ borderColor: error ? 'red' : '' }} // Add red border if there's an error
          />
        </div>

        <div className="button-container">
          <div className="buttons">
            <button className='btn-login' type="submit" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Secure Login'} {/* Show spinner while loading */}
            </button>
            <button className="btn-recover" type="button">
              Recover your password
            </button>
          </div>

          <span>-OR-</span>

          <Link to='/register'>
            <button className="btn-register" type="button">Register an Account</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

