import React from 'react';
import { Categories, Footer, Navbar } from "../components";
import CVEC from '../img/CVEC.jpg'; 
const AboutCVEC = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h2 className="text-center" style={{ fontSize: "3.6rem", color: "#4169E1", fontFamily: 'Abril Fatface' }}>
        Contribution à la vie étudiante et de campus 
        </h2>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p className="lead">
            La contribution à la vie étudiante sur le campus est un élément crucial de l'expérience universitaire. Les étudiants qui s'engagent activement dans les activités parascolaires et les initiatives de vie étudiante enrichissent non seulement leur propre parcours universitaire, mais également celui de leurs pairs. En participant à des clubs, des organisations étudiantes, des événements culturels et sportifs, ainsi qu'à des projets communautaires, les étudiants élargissent leurs horizons, développent des compétences interpersonnelles et renforcent leur sens de la communauté.
            </p>
            <p className="lead"> 
            </p>
          </div>
          <div className="col-md-6">
            <img src={CVEC} alt="Repair Stuff" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutCVEC ;  