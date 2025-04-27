import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { Footer, Navbar } from '../components';
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';

const NewLoginPage = () => {
  const location = useLocation();
  const { alert } = location.state || {};
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (alert) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:7000/login', { email, password })
      .then((result) => {
        console.log('Result from server:', result.data);
        const { userId } = result.data;
        if (userId) {
          localStorage.setItem('userId', userId);
          localStorage.setItem('email', email);
          navigate('/', {
            state: { alert: { message: 'Login successful', severity: 'success' } },
          });
        }
      })
      .catch((err) => console.error('Error during login:', err.response?.data || err));
  };

  return (
    <>
      <Navbar />
      <MDBContainer fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
        <MDBCard className="p-4" style={{ maxWidth: "700px", width: "100%", borderRadius: "25px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" }}>
          <MDBCardBody>
            <h2 className="text-center mb-4" style={{ fontFamily: 'Abril Fatface', color: '#4169E1' }}>
              Se connecter
            </h2>

            {showAlert && alert && (
              <Alert severity={alert.severity} sx={{ fontSize: '0.9rem', mb: 2 }}>
                {alert.message}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4 d-flex align-items-center">
                <MDBIcon fas icon="envelope" className="me-3" size="lg" />
                <MDBInput
                  label="Votre Email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4 d-flex align-items-center">
                <MDBIcon fas icon="lock" className="me-3" size="lg" />
                <MDBInput
                  label="Mot de passe"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="text-center mb-3">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2"
                  style={{
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    transition: "0.3s",
                  }}
                  onMouseEnter={e => e.target.style.backgroundColor = "#27408B"}
                  onMouseLeave={e => e.target.style.backgroundColor = "#4169E1"}
                >
                  Se connecter
                </button>
              </div>
            </form>

            <div className="text-center">
              <p className="mb-1">
                Nouveau utilisateur ?{" "}
                <Link to="/register" className="text-decoration-underline text-info">
                  S'inscrire
                </Link>
              </p>
              <p>
                Oublié votre mot de passe ?{" "}
                <Link to="/forgotpassword" className="text-decoration-underline text-info">
                  Réinitialiser
                </Link>
              </p>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default NewLoginPage;
