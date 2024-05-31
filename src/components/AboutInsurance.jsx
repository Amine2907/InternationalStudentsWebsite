import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios"; 
// import BrokenImageIcon from '@mui/icons-material/BrokenImage';
// import ChargingStationIcon from '@mui/icons-material/ChargingStation';
// import FormatColorResetIcon from '@mui/icons-material/FormatColorReset'; 
// import DescriptionIcon from '@mui/icons-material/Description';
// import GavelIcon from '@mui/icons-material/Gavel';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; 
import MediaCard from "./Cards/card";
import Visa from "./cards_images/ValidationEtape1.png";
import AssMal  from "./cards_images/AssMaladieEtape2.png" ;
import Assrep from "./cards_images/AssRespCivile.jpg" ; 
import CVEC from "./cards_images/CvecPart6.png";
import Bc from "./cards_images/CompteBancairePart5.jpg" ;  
import CVitale from "./cards_images/CarteVitalePartie3.png";  
const Contracts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let componentMounted = true;

  useEffect(() => {
    const getContracts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:7000/contract/allcontracts");
        if (componentMounted) {
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching contracts:", error);
        setLoading(false);
      }
    };

    getContracts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  // const ShowContracts = () => {
  //   return (
  //     <>
  //       {data.map((contract) => (
  //         <div key={contract._id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
  //           <div className="card text-center h-100">
  //             <div className="card-body">
  //               <div style={{ height: "100%" }}>
  //                 <img src={''} alt="contract" style={{ marginBottom: "20px", maxWidth: "100%" }} />
  //                 <h5 className="card-title"><GavelIcon/>{contract.name.substring(0, 12)}</h5>
  //                 <p><BrokenImageIcon/>Casse accidentelle</p>
  //                 <p><ChargingStationIcon/>Court-Circuit</p>
  //                 <p><FormatColorResetIcon/>Oxydation & Humidité</p>
  //                 <p>
  //                   <img src={''} alt="Knife Icon" /> Option vol
  //                 </p>                 
  //                  <p  className="card-text">  <DescriptionIcon/>{contract.description.substring(0, 90)}</p>
  //                 <div className="price"><AttachMoneyIcon/>Price: {contract.price} DT</div>
  //               </div>
  //             </div>
  //           </div> 
  //         </div>
  //       ))}
  //     </>
  //   );
  // }; 
  return (
    <div className="container my-3 py-3">
    <div className="row justify-content-center">
    <h2 className="display-5 text-center">Blogs</h2>
            <hr />   
      <div className="col-md-3"> 
        <a href="./Visa">   
        <MediaCard
        image={Visa}
        title="Validation Visa"
        description=""
      />  
      </a> 
      </div>
      <div className="col-md-3">
      <a href="./AssMal">  
      <MediaCard
        image={AssMal} 
        title="Assurance Maladie"
        description=""
      /> 
                </a>  
      </div>
      <div className="col-md-3">
      <a href="./AssRep"> 
      <MediaCard
        image={Assrep} 
        title="Assurance Responsabilite civile"
        description=""
      /> 
                </a>     
      </div>
      <div className="col-md-3">
      <a href="./Cvec"> 
      <MediaCard
        image={CVEC} 
        title="CVEC"
        description=""
      /> 
                </a>    
      </div> 
      <div className="col-md-3">
      <a href="./CB"> 
      <MediaCard
        image={Bc} 
        title="Comlpte Bancaire"
        description=""
      /> 
                </a>    
      </div> 
      <div className="col-md-3">
      <a href="./Cvitale"> 
      <MediaCard
        image={CVitale} 
        title="Carte vitale"
        description=""
      />  
                </a>    
      </div>  
{/* 
            <div className="text-center my-3 d-flex justify-content-center">
              <div className="mx-5 text-center">
                <a href="./AboutRepair">
                  <img src={''} alt="Repair logo" style={{ maxWidth: "100px", height: "100px", borderRadius: "50%" }} />
                </a>
                <div>Repair Services</div>
              </div>
              <div className="mx-5 text-center">
                <a href="./AboutINS">
                  <img src={''} alt="Insurance logo" style={{ maxWidth: "100px", height: "100px", borderRadius: "50%" }} />
                </a>
                <div>Insurance</div>
              </div>
              <div className="mx-5 text-center">
                <a href="./About">
                  <img src={''} alt="Online Shopping logo" style={{ maxWidth: "100px", height: "100px", borderRadius: "50%" }} />
                </a>
                <div>Online Shopping</div> 
              </div>
            </div> 
          </div> 
         <br/> 
        <br/>
        <br/>
        <h2 className="display-5 text-center">Blogs</h2> 
        <hr /> 
        <div className="row justify-content-center">{loading ? <Loading /> : <ShowContracts />}</div> */}
        </div>
        </div> 
  );
};  
export default Contracts;
