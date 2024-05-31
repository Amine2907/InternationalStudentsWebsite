import React from 'react';
import { Categories, Footer, Navbar } from "../components";
import Visa from '../img/Visa.jpg'; 

const AboutVisa = () => {
  return ( 
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h2 className="text-center" style={{ fontSize: "3.6rem", color: "#4169E1", fontFamily: 'Abril Fatface' }}>
          Validation Visa (VLS-TS)  
        </h2>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p className="lead"> 
            <h2>Étapes de validation du visa VLS-TS</h2>
    <ol>
        <li>Arrivée en France : Une fois arrivé en France, l'étudiant doit se rendre à l'Office Français de l'Immigration et de l'Intégration (OFII) dans les trois mois suivant son arrivée sur le territoire français.</li>
        <li>Dossier d'inscription : L'étudiant doit fournir un dossier d'inscription à l'OFII comprenant certains documents tels que le formulaire de demande de visa, le passeport avec le visa VLS-TS, une preuve de domicile en France, une preuve de ressources financières suffisantes, etc.</li>
        <li>Rendez-vous à l'OFII : Une fois le dossier soumis, l'étudiant recevra une convocation pour un rendez-vous à l'OFII. Il doit se présenter à ce rendez-vous avec tous les documents requis.</li>
        <li>Visite médicale : L'OFII peut exiger une visite médicale pour vérifier l'état de santé de l'étudiant. Cette visite peut inclure des examens médicaux de base et des tests de dépistage de certaines maladies.</li>
        <li>Paiement de la taxe OFII : Une fois la visite médicale terminée, l'étudiant devra payer la taxe OFII. Le montant de cette taxe varie en fonction du type de visa et de la durée du séjour en France.</li>
        <li>Recevoir le timbre OFII : Une fois la taxe payée, l'étudiant recevra un timbre OFII apposé sur son passeport, confirmant ainsi la validation de son visa VLS-TS.</li>
    </ol>
    <p>Il est important de suivre scrupuleusement les instructions de l'OFII et de respecter les délais pour éviter tout problème lié à la régularisation de son séjour en France.</p>
            </p> 
            <p className="lead"> 
            </p>
          </div>
          <div className="col-md-6">
            <img src={Visa} alt="Repair Stuff" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutVisa  ;    