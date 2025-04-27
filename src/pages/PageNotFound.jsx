import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../components";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
        <div className="text-center p-5" style={{
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          backgroundColor: "#ffffff",
          maxWidth: "600px",
          width: "100%"
        }}>
          <h1 style={{ fontSize: "5rem", fontWeight: "bold", color: "#4169E1" }}>404</h1>
          <h4 className="mb-4" style={{ fontFamily: 'Abril Fatface', color: "#333" }}>
            Oops! Page Not Found
          </h4>
          <p className="mb-4" style={{ color: "#777" }}>
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn btn-primary" style={{ borderRadius: "25px", padding: "10px 30px" }}>
            <i className="fa fa-arrow-left"></i> Retour à l'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
