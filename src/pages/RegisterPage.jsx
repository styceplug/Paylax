import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';  // Adjust the import path as necessary

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [errors, setErrors] = useState({ email: false, password: false });
  const navigate = useNavigate();

  // Password validation function
  const isPasswordValid = (password) => {
    const minLength = password.length >= 7;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumberOrSpecial = /[0-9!@#$%^&*]/.test(password);
    
    return minLength && hasUpper && hasLower && hasNumberOrSpecial;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasErrors = false;

    // Validation
    const emailError = email === '';
    const passwordError = !isPasswordValid(password);

    setErrors({ email: emailError, password: passwordError });

    if (emailError || passwordError) {
      hasErrors = true;
    }

    if (!hasErrors) {
      try {
        setIsLoading(true); // Start loading
        // Create user with email and password using Firebase Auth
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/'); // Navigate to the homepage after successful registration
      } catch (err) {
        // Handle potential Firebase registration errors (optional)
        console.error(err.message);
      } finally {
        setIsLoading(false); // Stop loading
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create an account on Paylax.box</h2>

        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <label>Please enter your email address <span>*</span></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: errors.email ? 'red' : '' }} // Turn border red if error
            required
          />
        </div>

        <div className={`form-group ${errors.password ? 'error' : ''}`}>
          <label>Please enter your password <span>*</span></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: errors.password ? 'red' : '' }} // Turn border red if error
            required
          />
        </div>

        <div className="password-requirements">
          <label>Strong passwords have:</label>
          <ul>
            <li>At least 7 characters</li>
            <li>At least one UPPER case and one lower case character</li>
            <li>At least one number or special character</li>
          </ul>
        </div>

        <div className="button-container">
          <button type="submit" className="btn-login" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Sign up'}
          </button>

          <p>By registering you agree to the Escrow.com's Terms of Using the Escrow Platform and Privacy Policy</p>

          <Link to='/login' className='log-link'>LOGIN TO PAYLAX.BOX</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;



