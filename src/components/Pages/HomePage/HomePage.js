import ImageComponent from 'material-ui-image';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
          Digital State Finance Audit Report of the
          Comptroller and Auditor General of India
          for the year ended March 2020
        </div>
        <div className='gradient__text'>
          Government of Karnataka
        </div>
        <div className='gradient__text'>
          Report No. 1 of the year 2021
        </div>
        <div>
          <button class="button-51" role="button">
            <Link to='/preface' style={{textDecoration:'none', color:'inherit'}}>
            Navigate to Preface
            </Link>
          </button>
        </div>

      </div>
    </div>

  )
}


export default HomePage;
