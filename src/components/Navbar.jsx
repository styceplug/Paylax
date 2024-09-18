import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase'; // Firebase config
import { useNavigate } from 'react-router-dom';
import menu from '../assets/images/menu.svg';
import close from '../assets/images/clo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false); // Control visibility of the dropdown
  const navigate = useNavigate();

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle the user info dropdown
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Listen for Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // User is signed in
      } else {
        setUser(null); // No user is signed in
      }
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user state after logout
      setDropdownVisible(false); // Hide dropdown on logout
      navigate('/');

    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Get the first letter of the user's displayName or email
  const getFirstLetter = () => {
    if (user) {
      if (user.displayName) {
        return user.displayName.charAt(0).toUpperCase();
      }
      if (user.email) {
        return user.email.charAt(0).toUpperCase();
      }
    }
    return '';
  };

  return (
    <nav>
      <div className="navigate">
        <div className="logo">
        <NavLink to="/"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397.23 78.68"><title>paylax-logo-inline</title><path d="M42.71,31.66a19.52,19.52,0,1,1-5.38.77,19.22,19.22,0,0,1,5.38-.77m0-7.57a27,27,0,1,0,26,19.6A27.06,27.06,0,0,0,42.71,24.09Z" fill="#92e22b"></path><path d="M39.36,7.57a31.79,31.79,0,1,1-8.78,1.24,31.79,31.79,0,0,1,8.78-1.24m0-7.57a39.33,39.33,0,1,0,37.8,28.5A39.34,39.34,0,0,0,39.36,0Z" fill="#0073e5"></path><path d="M37.29.28V7.86a24.4,24.4,0,0,1,0,48.8,24.4,24.4,0,0,1,0-48.79V.28m0,0a32,32,0,0,0,0,64,32,32,0,0,0,0-63.95Z" fill="#0073e5"></path><path d="M122.11,45.83h-9.88V64.28H101.05V13.74h20.84c10.68,0,17.72,6.24,17.72,16.27C139.62,39.15,131.77,45.83,122.11,45.83Zm-.79-22.07h-9.08V35.81h9.36c3.71,0,6.69-2.32,6.69-6,0-4.06-2.52-6-7-6Zm57.37,40.52L174.91,54H158L154.2,64.28H142.44l19.61-50.54h8.74L190.4,64.28Zm-9.2-25.56-3-10h-.3l-2.9,9.88-1.89,6h9.95Zm47.89,4.86v20.7H206.67V43.58L190.41,13.74h12l5.16,10.89,4.35,9.8h.3l4.28-9.73,5.23-11h12Zm27.53,20.7V13.74h11.17V54.27h24.55v10Zm77.56,0L318.69,54h-17l-3.79,10.31H286.17l19.61-50.54h8.79l19.61,50.54Zm-9.19-25.56-3-10H310l-2.9,9.88-1.89,6h9.95Zm65.49,20L365.25,38.47l16.19-24.69H368.73l-9.08,15.14-9-15.18h-12.7l16.19,24.68L337,64.28h12.63l10-16.41,10.1,16.41Z" fill="#000040"></path><path d="M387.75,18.54a4.74,4.74,0,1,1,4.74,4.74A4.74,4.74,0,0,1,387.75,18.54Zm1.18,0a3.57,3.57,0,0,0,7.11.67,3.75,3.75,0,0,0,0-.67,3.53,3.53,0,0,0-3.3-3.75h-.25a3.59,3.59,0,0,0-3.56,3.62Zm5.76,1.58a2.3,2.3,0,0,1-4.45-.79V17.94a2.3,2.3,0,0,1,4.45-.79l-1.23.44a.93.93,0,0,0-1-.72.9.9,0,0,0-.95.85v1.7a.91.91,0,0,0,.83,1h.12a.92.92,0,0,0,1-.72Z"></path></svg></NavLink>
        </div>

        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <button className="btn-close" onClick={toggleMenu}>
            <img src={close} alt="Close Menu" />
          </button>
          <ul>
            <li>Marketplaces</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li><NavLink to="/about-us">About us</NavLink></li>
            {/* Conditionally render login/sign-up links or user-related menu */}
            {user ? (
              <>
                {/* User Initials in Mobile Menu */}
                <li className="user-initial mobile" onClick={toggleDropdown}>
                  {getFirstLetter()}
                </li>

                {/* Dropdown Menu */}
                {dropdownVisible && (
                  <div className={`user-dropdown ${dropdownVisible ? 'visible' : ''}`}>
                    <div className="user-name">
                      <div className="user"><p>{getFirstLetter()}</p></div>
                      <p>{user.email}</p>
                    </div>
                    <button className="btn-logout" onClick={handleLogout}>Logout</button>
                  </div>
                )}

                <li><NavLink to="/start"><button className="btn-transaction mobile">Start new transaction</button></NavLink></li>
              </>
            ) : (
              <>
                <li><NavLink to="/login mobile">Login</NavLink></li>
                <li><NavLink to="/register mobile">Sign up</NavLink></li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="right">
        <div className="lang">
          <ul>
            {user ? (
              <>
                {/* User Initials */}
                <li className="user-initial desktop" onClick={toggleDropdown}>
                  {getFirstLetter()}
                </li>

                {/* Dropdown Menu */}
                {dropdownVisible && (
                  <div className={`user-dropdown ${dropdownVisible ? 'visible' : ''}`}>
                    <div className="user-name">
                      <div className="user"><p>{getFirstLetter()}</p></div>
                      <p>{user.email}</p>
                    </div>
                    <button className="btn-logout" onClick={handleLogout}>Logout</button>
                  </div>
                )}

                <li><NavLink to="/start"><button className="btn-transaction desktop">Start new transaction</button></NavLink></li>
              </>
            ) : (
              <>
                <li className='desktop'><NavLink to="/login">Login</NavLink></li>
                <li className='desktop'><NavLink to="/register">Sign up</NavLink></li>
              </>
            )}
          </ul>
        </div>

        <button className="btn-menu" onClick={toggleMenu}>
          <img src={menu} alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;




