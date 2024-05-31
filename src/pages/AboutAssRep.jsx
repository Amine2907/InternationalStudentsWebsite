import React from 'react';
import { Categories, Footer, Navbar } from "../components"; 
import AssRep from '../img/AssRespCV.jpg';
const AboutAssrep = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h2 className="text-center" style={{ fontSize: "3.6rem", color: "#4169E1", fontFamily: 'Abril Fatface' }}>
          C'est quoi l'Assurance responsabilité civile 
        </h2>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p className="lead">
            La responsabilité civile est l'obligation de réparer les dommages causés à autrui. En matière d'assurance habitation, il s'agit de réparer les dommages causés par un élément de votre logement : fuite d'eau, chute d'arbre, chute de mur, incendie, etc... Vous pouvez vous protéger en souscrivant la garantie responsabilité civile dans votre contrat d'assurance habitation. L'assurance prendra alors en charge la réparation du dommage causé par votre logement. Mais il y a des exception
            Il faut vérifier dans votre contrat les personnes couvertes par la garantie, car tous les assureurs ne les considèrent pas de la même façon.
            Certains dommages ne sont pas couverts par la garantie responsabilité civile de l'assurance. Il s'agit principalement des dommages suivants : 
            Dommage que vous vous causez ou que vous causez à vos proches
            Dommage que vous causez intentionnellement
            Dommage causé par votre chien, s'il est considéré comme un chien dangereux
            Dommage causé par un véhicule à moteur (assurance spéciale auto)
            Dommage liés à vos activités professionnelles exercées à domicile (assurances spéciales).
            Si vous vous retrouvez dans une de ces situations, vous devrez personnellement réparer le préjudice. 
            Cependant, certaines de ces exclusions peuvent faire l'objet d'un contrat spécifique. Ainsi, par exemple, vous pouvez garantir votre responsabilité civile professionnelle.
            </p>
            <p className="lead"> 
            </p> 
          </div>
          <div className="col-md-6">
            <img src={AssRep} alt="Repair Stuff" className="img-fluid" />
          </div> 
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutAssrep;  