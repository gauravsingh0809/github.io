import React, { useContext, useState } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "./../../../../Title/Title";
import Navbar from "./../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";

import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'
import c31 from '../../../../../Images/c31.png'
import k31 from '../../../../../Images/k31.png'

const BudgetProcess = () => {
  const ctx = useContext(MyContext);

  const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/pdfs/chart31.png')
        .getDownloadURL()
        .then((url) => {
            setURL(url);
        });

  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget/introduction" forward="/budget/gender-budget" />

          <Title>{ctx.chapterThree.Profile.Para1}</Title>
          {["Para2", "Para3", "Para4", "Para5", "Para6", "Para7"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
             {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}

             <Title>
             Chart 3.1 Summary of Budget and Expenditure of Karnataka for 2021-22                  
                        </Title>
                        <h3 className="headnote">
            ₹ In crore
          </h3>
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={c31} color ="#ffffff00" />
                       
             

        </div>
      </div>
    ) : (
      <div>
        <Navbar />
        <FaSpinner icon="spinner" className="spinner" />
      </div>
    )
  ) : ctx.chapter3kannada ? (
    <div>
        <Navbar />
        <div className="contentwrapper" id="home">
        <FloatingActionButtons back="/budget/introduction" forward="/budget/gender-budget" />

          <Title>{ctx.chapter3kannada.Content.para4}</Title>
          {["para5", "para6", "para7", "para8", "para9", "para10"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            )
          )}
                            <Title >
                            ನಕ್ಷೆ-೩.೧: ೨೦೨1-22ರ ಕರ್ನಾಟಕದ ಆಯವ್ಯಯ ಮತ್ತು ವೆಚ್ಚದ ಸಾರಾಂಶ
                        </Title>
                        <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ )
          </h3>
     <ImageComponent src={k31}  aspectRatio={1 / 0.5} />
             {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}

        </div>
      </div>
    ) : (
      <div>
        <Navbar />
        <FaSpinner icon="spinner" className="spinner" />
      </div>
  );
};

export default BudgetProcess;
