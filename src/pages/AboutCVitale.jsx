import React from 'react';
import { Categories, Footer, Navbar } from "../components";
import CVitale from '../img/CarteVitale.webp'; 

const AboutCVitale = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h2 className="text-center" style={{ fontSize: "3.6rem", color: "#4169E1", fontFamily: 'Abril Fatface' }}>
          C'est quoi la carte vitale
        </h2>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p className="lead"> 
            La carte Vitale est un élément essentiel du système de sécurité sociale en France. Il s'agit d'une carte à puce personnelle qui contient des informations médicales et administratives permettant aux professionnels de santé de facturer directement les services médicaux à l'Assurance Maladie. La carte Vitale facilite le remboursement des frais médicaux, pharmaceutiques et hospitaliers en permettant une transmission électronique des informations entre le professionnel de santé et l'organisme d'assurance maladie.
            </p>
            <p className="lead"> 
            </p>
          </div>
          <div className="col-md-6">
            <img src={CVitale} alt="Repair Stuff" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutCVitale  ;   