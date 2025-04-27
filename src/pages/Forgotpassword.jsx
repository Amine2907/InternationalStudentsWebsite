import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import axios from 'axios'; 

const FotgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7000/Forgotpassword', { email })
      .then(result => {
        console.log('Result from server:', result.data); 
        setMessage(result.data); 
      })
      .catch(err => console.error('Error during password reset:', err.response.data));
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div 
            className="col-md-8 col-lg-6 col-sm-10 p-5"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 
              className="text-center mb-4"
              style={{
                fontSize: "2.5rem",
                color: "#4169E1",
                fontFamily: 'Abril Fatface'
              }}
            >
              Réinitialiser votre mot de passe
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group my-3">
                <label htmlFor="email" className="form-label">Entrez votre adresse e-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Votre adresse e-mail"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="my-3 text-center">
                <Link to="/login" className="text-decoration-underline text-info">
                  <i className="fa fa-arrow-left"></i> Retour à la Connexion
                </Link>
              </div>

              <div className="text-center">
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
                  Envoyer
                </button>
              </div>

              {message && (
                <div className="alert alert-info text-center mt-4" role="alert">
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FotgotPassword;
