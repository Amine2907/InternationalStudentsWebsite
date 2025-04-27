import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import MediaCard from "./Cards/card";
import Visa from "./cards_images/ValidationEtape1.png";
import AssMal from "./cards_images/AssMaladieEtape2.png";
import Assrep from "./cards_images/AssRespCivile.jpg";
import CVEC from "./cards_images/CvecPart6.png";
import Bc from "./cards_images/CompteBancairePart5.jpg";
import CVitale from "./cards_images/CarteVitalePartie3.png";

const Contracts = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let componentMounted = true;

  useEffect(() => {
    const getContracts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:7000/contract/allcontracts");
        if (componentMounted) {
          // You are fetching contracts but not using them yet
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching contracts:", error);
        setLoading(false);
      }
    };

    getContracts();
    return () => { componentMounted = false; };
  }, []);

  const Loading = () => (
    <div className="row justify-content-center">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
          <Skeleton height={300} width={250} />
        </div>
      ))}
    </div>
  );
  const cardStyle = {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#fff",
    textDecoration: "none",
    height: "auto",
  };

  return (
    <div className="container my-5">
      <h2 className="display-5 text-center mb-4">Blogs</h2>
      <hr className="mb-5" />

      <div className="row gy-4 justify-content-center">
        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
          <a href="./Visa" style={cardStyle}>
            <MediaCard image={Visa} title="Validation Visa" description="" />
          </a>
        </div>

        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
          <a href="./AssMal" style={cardStyle}>
            <MediaCard image={AssMal} title="Assurance Maladie" description="" />
          </a>
        </div>

        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
          <a href="./AssRep" style={cardStyle}>
            <MediaCard image={Assrep} title="Assurance Responsabilité Civile" description="" />
          </a>
        </div>

        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
          <a href="./Cvec" style={cardStyle}>
            <MediaCard image={CVEC} title="CVEC" description="" />
          </a>
        </div>

        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
          <a href="./CB" style={cardStyle}>
            <MediaCard image={Bc} title="Compte Bancaire" description="" />
          </a>
        </div>

        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
          <a href="./Cvitale" style={cardStyle}>
            <MediaCard image={CVitale} title="Carte Vitale" description="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contracts;
