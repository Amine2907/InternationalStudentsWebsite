import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from "../components";

const EmailVerification = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const [verificationMessage, setVerificationMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.patch(`http://localhost:7000/email_verify/${token}`);
        setVerificationMessage(response.data.message);
      } catch (error) {
        console.error(error);
        setVerificationMessage('Une erreur est survenue lors de la vérification de l\'email.');
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div 
            className="col-md-8 col-lg-6 col-sm-10 text-center p-5"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 
              className="mb-4" 
              style={{
                fontSize: "2.5rem", 
                color: "#4169E1",
                fontFamily: 'Abril Fatface'
              }}
            >
              {verificationMessage}
            </h2>

            <Link 
              to="/login" 
              className="btn btn-primary mt-4 px-5 py-2"
              style={{
                borderRadius: "25px",
                fontWeight: "600",
                fontSize: "1.1rem",
                transition: "0.3s",
              }}
              onMouseEnter={e => e.target.style.backgroundColor = "#27408B"}
              onMouseLeave={e => e.target.style.backgroundColor = "#4169E1"}
            >
              <i className="fa fa-arrow-left"></i> Retour à la Connexion
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
