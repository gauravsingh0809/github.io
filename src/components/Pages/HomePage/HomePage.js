import ImageComponent from 'material-ui-image';
import React, { useState } from 'react';
import { getFirebase } from '../../../firebase/firebase';
import "./HomePage.css";

const HomePage = () => {

  const [url, setURL] = useState("");
  const [emblem, setEmblem] = useState("");
  const [ags, setags] = useState("");

  getFirebase()
    .storage()
    .ref('/images/logotp.png')
    .getDownloadURL()
    .then((url) => {
      setURL(url);
    });

  getFirebase()
    .storage()
    .ref('/images/emblem.png')
    .getDownloadURL()
    .then((emblem) => {
      setEmblem(emblem);
    });

  getFirebase()
    .storage()
    .ref('/images/agoffice.png')
    .getDownloadURL()
    .then((ags) => {
      setags(ags);
    });

  return (
    <div>
      {/* <h3>📖</h3> */}
      <div className="wrapper">
        {/* <div className="one">
          <h2>Digital Finance Audit Report</h2>
          State Finance Report for the state of Karnataka, 2019-20
        </div>
        <div className="three emblem">
          <ImageComponent src={emblem} aspectRatio="1/1" color="#ffffff00" />
        </div> */}
      </div>
      <div className="wrapper">
        <div className="one logo">
          <ImageComponent src={emblem} color="#ffffff00" />
        </div>
        <div className="three logo">
          <ImageComponent src={url} color="#ffffff00" />
        </div>
        <div className="two logo" style={{ marginLeft: "110px" }}>
          <ImageComponent src={ags} color="#ffffff00" />
        </div>
      </div>
      <div className="heading">
          <span style={{fontWeight:"bolder", fontSize:"40px"}}>Digital State Finance Audit Report of the </span>
          <br></br><span style={{fontWeight:"bolder", fontSize:"40px"}}>Comptroller and Auditor General of India </span><br></br>
          <span style={{fontWeight:"bolder", fontSize:"35px"}}>for the year ended March 2020</span> 
          <br></br>
          <br></br>
          <span style={{fontWeight:"bolder", fontSize:"35px"}}>Government of Karnataka</span>
          <br>
          </br>
          <span style={{fontWeight:"bolder", fontSize:"35px"}}>Report No. 1 of the year 2021</span>
        </div>
    </div>

  )
}


export default HomePage;
