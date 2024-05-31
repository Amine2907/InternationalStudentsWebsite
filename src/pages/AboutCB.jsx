import React from 'react';
import { Categories, Footer, Navbar } from "../components"; 
import CB from '../img/CompteB.jpg'; 
const AboutCB = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h2 className="text-center" style={{ fontSize: "3.6rem", color: "#4169E1", fontFamily: 'Abril Fatface' }}>
          Comment choisir le compte bancaire 
        </h2>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p className="lead"> 
            Choisir le bon compte bancaire lorsqu'on est étudiant en France est essentiel pour gérer ses finances de manière efficace. De nombreux établissements proposent des offres spécialement conçues pour les étudiants, avec des avantages tels que des frais réduits voire nuls, des services en ligne pratiques, et parfois même des offres promotionnelles attractives. Il est judicieux de comparer les différentes options disponibles, en tenant compte des frais, des services inclus, de la facilité d'accès aux agences physiques ou aux services en ligne, ainsi que des éventuels avantages liés à la durée de la souscription. Opter pour un compte bancaire adapté aux besoins spécifiques des étudiants peut contribuer à simplifier la gestion financière et à optimiser ses ressources pendant les années d'études.
            </p>
            <p className="lead"> 
            </p>
          </div>
          <div className="col-md-6">
            <img src={CB} alt="Repair Stuff" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutCB;  