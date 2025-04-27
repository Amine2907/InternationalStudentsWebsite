import React, { useState, useEffect } from 'react';
import { Footer, Navbar } from '../components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';

const Register = () => {
  const location = useLocation();
  const { alert } = location.state || {};
  const [showAlert, setShowAlert] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7000/register', { name, email, password, repeatPassword })
      .then((result) => {
        console.log(result.data);
        if (result.data === "signup successful") {
          navigate('/login', { state: { alert: { message: 'Signup successful, verify your email.', severity: 'success' } } });
        }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          alert(err.response.data.error);
        } else {
          console.error(err);
          alert('An error occurred. Please try again later.');
        }
      });
  };

  useEffect(() => {
    if (alert) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <>
      <Navbar />
      <MDBContainer fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
        <MDBCard className="p-4" style={{ borderRadius: '25px', maxWidth: '600px', width: '100%', boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" }}>
          <MDBCardBody>
            <h2 className="text-center mb-4" style={{ color: '#4169E1', fontFamily: 'Abril Fatface' }}>
              S'inscrire
            </h2>

            {showAlert && alert && (
              <Alert severity={alert.severity} sx={{ fontSize: '0.9rem', marginBottom: 2 }}>
                {alert.message}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput label="Votre Nom" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput label="Votre Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput label="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput label="Répéter Mot de Passe" type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required />
              </div>
              <div className="text-center">
                <button className="btn btn-primary w-75" style={{ borderRadius: '20px' }} type="submit">
                  S'inscrire
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <p style={{ color: "#777" }}>
                Déjà un compte ? <Link to="/login" className="text-decoration-underline text-info">Se connecter</Link>
              </p>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default Register;
