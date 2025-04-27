import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar } from "../components";
import axios from 'axios';

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSelectedValue = (value) => {
    setSelectedValue(value);
  };
  
  const isLoggedIn = () => {
    return !!localStorage.getItem('userId'); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn()) {
      const loggedInUserEmail = localStorage.getItem('email');

      if (email === loggedInUserEmail) {
        axios.post('http://localhost:7000/contact', { email , selectedValue , message}) 
          .then((result) => {
            console.log(result.data);
            setEmail("");
            setMessage("");
            setSelectedValue([]);
            setSuccessMessage("Message envoyé avec succès !");
            setTimeout(() => {
              setSuccessMessage("");
            }, 5000);
          })
          .catch((err) => {
            if (err.response && err.response.data && err.response.data.error) {
              alert(err.response.data.error);
            } else {
              console.error(err);
              alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            }
          });
      } else {
        alert('Veuillez saisir votre propre adresse e-mail.');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 
          className="text-center mb-5" 
          style={{ 
            fontSize: "3rem", 
            color: "#4169E1", 
            fontFamily: 'Abril Fatface' 
          }}
        >
          Contactez-Nous
        </h2>
        
        <div className="row justify-content-center">
          <div 
            className="col-md-6 col-lg-5 col-sm-8"
            style={{
              backgroundColor: "#ffffff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            {successMessage && (
              <div className="alert alert-success text-center">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group my-3">
                <label htmlFor="Email" style={{ fontWeight: "600" }}>Adresse Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="Votre adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Future select input (for subject) */}
              {/* <div className="form-group my-3">
                <SelectAutoWidth onSelect={handleSelectedValue} />
              </div> */}

              <div className="form-group my-4">
                <label htmlFor="Message" style={{ fontWeight: "600" }}>Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Écrivez votre message ici..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  style={{ resize: "none" }}
                />
              </div>

              <div className="text-center">
                <button 
                  className="btn btn-primary px-5 py-2"
                  type="submit"
                  style={{
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "0.3s",
                  }}
                  onMouseEnter={e => e.target.style.backgroundColor = "#27408B"}
                  onMouseLeave={e => e.target.style.backgroundColor = "#4169E1"}
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
