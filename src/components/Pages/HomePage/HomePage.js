import ImageComponent from 'material-ui-image';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFirebase } from '../../../firebase/firebase';
import "./HomePage.css";
import ags1 from '../../../Assets/agoffice.svg';
import emblem1 from '../../../Assets/emblem.svg';
import url1 from '../../../Assets/logotp.svg';


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
      <div className="wrapper">
        <div className="one logo">
          <ImageComponent src={emblem1} color="#ffffff00" />
        </div>
        <div className="three logo">
          <ImageComponent src={url1} color="#ffffff00" />
        </div>
        <div className="two logo" style={{ marginLeft: "110px" }}>
          <ImageComponent src={ags1} color="#ffffff00" />
        </div>
      </div>
      <div className="heading">
        <div>
          Digital State Finance Audit Report of the
          Comptroller and Auditor General of India
          for the year ended March 2021
        </div>
        <div className='gradient__text'>
          Government of Karnataka
        </div>
        <div className='gradient__text'>
          Report No. 1 of the year 2022
        </div>
        <div>
          <button className="button-51">
            <Link to='/overview' style={{textDecoration:'none', color:'inherit'}}>
            Navigate to Overview
            </Link>
          </button>
        </div>

      </div>
    </div>

  )
}


export default HomePage;
