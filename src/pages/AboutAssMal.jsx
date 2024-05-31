import React from 'react';
import { Categories, Footer, Navbar } from "../components"; 
import AssM from '../img/AssMal.jpeg'; 
const AboutAssMal = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h2 className="text-center" style={{ fontSize: "3.6rem", color: "#4169E1", fontFamily: 'Abril Fatface' }}>
         C'est quoi l'Assurance Maladie
        </h2>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p className="lead">
            En France, l’assurance maladie est le modèle d'organisation du système de santé. L’assurance, financée par des cotisations assises sur les salaires et gérée par des caisses administrées par des représentants des salariés et des employeurs, passent  contrat avec des professionnels de soins indépendants. Il existe dans le monde deux autres familles d’organisation : le service national de santé dit « beveridgien », universel, financé essentiellement par l’impôt, avec un accès gratuit des résidents à une offre de soins publique et le modèle libéral où la protection contre la maladie de la population est facultative et assurée par des contrats d’assurance privée.
            </p>  
            <p className="lead">  
            </p>
          </div>
          <div className="col-md-6">
            <img src={AssM} alt="Repair Stuff" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutAssMal; 