import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from './NavbarLogo/logo-png.png';

const Navbar = () => {
  const state = useSelector(state => state.handleCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/');
  };

  const navLinkStyle = {
    margin: '0 25px',
    fontFamily: 'Abril Fatface, cursive',
    fontSize: '20px',
    textDecoration: 'none',
    color: '#000',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center fw-bold fs-4" to="/">
          <img 
            src={logo} 
            alt="Logo" 
            style={{ height: '100px', width: '100px' }} 
            className="ms-2"
          />
          <span style={{ color: '#4169E1', marginLeft: '10px' }}>ETUDEX</span>
        </NavLink>

        {/* Toggler for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto text-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" exact style={navLinkStyle}>
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs" className="nav-link" style={navLinkStyle}>
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" style={navLinkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="buttons text-center">
            {localStorage.getItem('userId') ? (
              <>
                <NavLink 
                  to={`/profile?id=${localStorage.getItem('userId')}`} 
                  className="btn btn-outline-dark m-2"
                >
                  Profil
                </NavLink>
                <button 
                  onClick={handleLogout} 
                  className="btn btn-outline-dark m-2"
                >
                  Se déconnecter
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-dark m-2">
                  <i className="fa fa-sign-in-alt mr-1"></i> Se connecter
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark m-2">
                  <i className="fa fa-user-plus mr-1"></i> S'inscrire
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
