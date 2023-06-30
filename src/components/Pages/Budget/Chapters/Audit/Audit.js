import React, { useContext, useState } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Table7 from "../../../Tables/Chapter3/Table7";

import Table7a from "../../../Tables/Chapter3/Table7a";
import Table7b from "../../../Tables/Chapter3/Table7b";
import Table7c from "../../../Tables/Chapter3/Table7c";
import Table8 from "../../../Tables/Chapter3/Table8";
import Table9 from "../../../Tables/Chapter3/Table9";
import Table10 from "../../../Tables/Chapter3/Table10";
import Table7kan from '../../../Tables/Chapter3kan/Table7'
import Table8kan from '../../../Tables/Chapter3kan/Table8'
import Table8akan from '../../../Tables/Chapter3kan/Table8a'
import Table8bkan from '../../../Tables/Chapter3kan/Table8b'
import Table9kan from '../../../Tables/Chapter3kan/Table9'
import Table10kan from '../../../Tables/Chapter3kan/Table10'
import Table11 from "../../../Tables/Chapter3/Table11";
import { Chart3 as Chart3Chap3 } from '../../../Charts/Chap3Charts'
import k32 from '../../../../../Images/k32.png'
import k32a from '../../../../../Images/k32a.png'
import k33 from '../../../../../Images/k33.png'
import c32 from '../../../../../Images/c32.png'
import c32a from '../../../../../Images/c32a.png'
import c33 from '../../../../../Images/c33.png'
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'


const Audit = () => {
  const ctx = useContext(MyContext);

  const [url, setURL] = useState("");
  const [url2, setURL2] = useState("");


  getFirebase()
    .storage()
    .ref('/pdfs/chart32.png')
    .getDownloadURL()
    .then((url) => {
      setURL(url);
    });


  getFirebase()
    .storage()
    .ref('/pdfs/3731text.png')
    .getDownloadURL()
    .then((url2) => {
      setURL2(url2);
    });


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget/appropaccounts" forward="/budget/outcome" />

          <Title>{ctx.chapterThree.Profile.Para40}</Title>
          {["Para41", "Para42", "Para43", "Para44", "Para45", "Para46",
            "Para47", "Para48", "Para49", "Para50"].map(
              (item, ind) => (
                <Para key={ind / 10}>
                  {ctx.chapterThree.Profile[item]}
                </Para>
              ))}
          <Table7/>
          <h4 className="footnote">
            <i>
              Source: Appropriation Accounts
            </i>
          </h4>
          {["Para51", "Para52", "Para53", "Para54","Para55"].map(
              (item, ind) => (
                <Para key={ind / 10}>
                  {ctx.chapterThree.Profile[item]}
                </Para>
              ))}
             <Table7a />
              {["Para56"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <Table7b />
             {["Para57"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
            <Table7c />
           {["Para58"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          {["Para59", "Para60", "Para61"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Title>
          Chart 3.2: Unnecessary/Excessive/Inadequate Supplementary provision*                 
                        </Title>
                        <h3 className="headnote">
            ₹ In crore
          </h3>
         
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={c32} color ="#ffffff00" />
          <h4>* Re-appropriation orders have not been considered for working out the unnecessary/ excessive/ inadequate supplementary provision.</h4>
          {/* <Table8/> */}
          {/* <h4>
            <i>
              Source
              
              
              : Grant Register
            </i>
          </h4> */}
          {["Para62", "Para63", "Para64","Para66", "Para67"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          

          {["Para68","Para69"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          {["Para70"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }

          {["Para71", "Para72", "Para73", "Para74", "Para75", "Para76", "Para77", "Para78"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          {["Para79", "Para80", "Para81", "Para82", "Para83", "Para84", "Para85", "Para86", "Para87", "Para88", "Para89", "Para90", "Para91", "Para92", "Para93", "Para94", "Para95", "Para96", "Para97", "Para98", "Para99", "Para100"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          
                        <ImageComponent flex="6" aspectRatio = "6" resizeMode = 'contain' src={c32a} color ="#ffffff00" />
                        <h4>
                        Source: Appropriation Accounts
                        </h4>
          {/* <Table9 /> */}
          {["Para101", "Para102","Para103",].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <Title>
          Chart 3.3:  Monthly Receipts and Disbursements during 2021-22 
          </Title>
           <h3 className="headnote">
            ₹ In crore
          </h3>
          <ImageComponent flex="4" aspectRatio = "4" resizeMode = 'contain' src={c33} color ="#ffffff00" />
                        <h4>
                        Source: Monthly Civil Accounts	
                        </h4>
             {["Para104", "Para105"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
           <h3 className="headnote">
            ₹ In crore
          </h3>
          <Table10 />
          <h4 className="footnote">
            <i>
              Source: Monthly Civil Accounts
            </i>
          </h4>
          {["Para106"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
         


         
          {/* <h3 className="headnote">
            ₹ In crore
          </h3>
          <Chart3Chap3 />
          <h4 className="footnote">
            <i>
              Source: Monthly Civil Accounts
            </i>
          </h4> */}
        
         
          

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
        <FloatingActionButtons back="/budget/appropaccounts" forward="/budget/outcome" />

        <Title>{ctx.chapter3kannada.Content.para46}</Title>
        {["para47", "para48", "para49", "para50", "para51", "para52",
          "para53", "para54", "para55", "para56"].map(
            (item, ind) => (
              <Para key={ind / 10}>
                {ctx.chapter3kannada.Content[item]}
              </Para>
            ))}
            <h3 className="headnote">
            (` ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>
        <Table7kan />
        <h6>ಆಧಾರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {[ "para57", "para58", "para59", "para60","para61"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table8kan />
        <h6>ಆಕರ: ಅನುದಾನ ವಹಿ</h6>
        {["para62"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table8akan />
        {["para63"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table8bkan />
         {["para64"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {[ "para65","para65a","para66"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
         <Title >
         ನಕ್ಷೆ-3.2: ಅನವಶ್ಯಕ/ಅಧಿಕ/ಅಪರ್ಯಾಪ್ತ ಪೂರಕ ಅನುದಾನಗಳು*
                        </Title>
                        <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ )
          </h3>
        <ImageComponent src={k32}  aspectRatio={1 / 0.5} />
        <h4> * ಅನಗತ್ಯ/ಅಧಿಕ/ಅಪರ್ಯಾಪ್ತ ಪೂರಕ ಅವಕಾಶಗಳನ್ನು ಲೆಕ್ಕ ಹಾಕಲು ಪುನರ್ವಿನಿಯೋಗ ಆದೇಶಗಳನ್ನು ಪರಿಗಣಿಸಿಲ್ಲ</h4>
         {[ "para67","para68", "para69", "para70", "para71", "para72", "para73", "para74"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {["para75", "para76", "para77", "para78", "para79", "para80", "para81", "para82", "para83", "para84"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {["para85", "para86", "para87", "para88", "para89", "para90", "para91", "para92", "para93", "para94", "para95", "para96", "para97", "para98", "para99", "para100", "para101", "para102", "para103", "para104"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
          <h3 className="headnote">
                        
          </h3>
        <ImageComponent src={k32a}  aspectRatio={1 /0.3} />
        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>

             {["para105", "para106", "para107"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Title>
        ನಕ್ಷೆ ೩.೩: ೨೦೨೧-೨೨ರಲ್ಲಿ ಮಾಸಿಕ ಸ್ವೀಕೃತಿಗಳು ಮತ್ತು ವಿತರಣೆಗಳು
        </Title>
            <h3 className="headnote">
         (` ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>
          <ImageComponent src={k33}  aspectRatio={1 /0.3} />
        <h4>ಆಕರ: ಮಾಸಿಕ ಸಿವಿಲ್‌ ಲೆಕ್ಕಗಳು	</h4>
         <h3 className="headnote">
         (` ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>
        <Table9kan />
        <h4>ಆಕರ: ಮಾಸಿಕ ಸಿವಿಲ್‌ ಲೆಕ್ಕಗಳು</h4>
     
         {["para110"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {/* {["para110","para111","para112","para113","para114","para115","para116","para117","para118","para119"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Chart3Chap3 />
        <h6>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {["para120","para121"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table10kan />
        <h6>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {["para122", "para123"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        } */}

      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <FaSpinner icon="spinner" className="spinner" />
    </div>
  );
};

export default Audit;
