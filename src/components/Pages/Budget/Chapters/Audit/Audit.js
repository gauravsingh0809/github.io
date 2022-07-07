import React, { useContext, useState } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Table7 from "../../../Tables/Chapter3/Table7";
import Table8 from "../../../Tables/Chapter3/Table8";
import Table9 from "../../../Tables/Chapter3/Table9";
import Table10 from "../../../Tables/Chapter3/Table10";
import Table7kan from '../../../Tables/Chapter3kan/Table7'
import Table8kan from '../../../Tables/Chapter3kan/Table8'
import Table11 from "../../../Tables/Chapter3/Table11";
import { Chart3 as Chart3Chap3 } from '../../../Charts/Chap3Charts'

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
            "Para47", "Para48", "Para49", "Para50", "Para51", "Para52", "Para53", "Para54"].map(
              (item, ind) => (
                <Para key={ind / 10}>
                  {ctx.chapterThree.Profile[item]}
                </Para>
              ))}
          <Table7kan />
          <h4 className="footnote">
            <i>
              Source: Appropriation Accounts
            </i>
          </h4>
          {["Para55", "Para56", "Para57", "Para58", "Para59", "Para60", "Para61"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Table8kan />
          <h4>
            <i>
              Source: Grant Register
            </i>
          </h4>
          {["Para62", "Para63", "Para64", "Para65", "Para66", "Para67", "Para68"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <ImageComponent src={url} alt="chart32" aspectRatio={1 / 0.5} />

          {["Para69"].map(
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
          {["Para79", "Para80", "Para81", "Para82", "Para83", "Para84", "Para85", "Para86", "Para87", "Para88", "Para89", "Para90", "Para91", "Para92", "Para93", "Para94", "Para95", "Para96", "Para97", "Para98", "Para99", "Para100", "Para101", "Para102"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <Table9 />
          {["Para103", "Para104", "Para105", "Para106", "Para107", "Para108", "Para109", "Para110", "Para111", "Para112"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <ImageComponent src={url2} alt="chart32" aspectRatio={1 / 0.15} />


          {["Para113", "Para114", "Para115"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Chart3Chap3 />
          <h4 className="footnote">
            <i>
              Source: Monthly Civil Accounts
            </i>
          </h4>
          {["Para116", "Para117"].map(
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
          {["Para118", "Para119"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }

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
          "para53", "para54", "para55", "para56", "para57", "para58", "para59", "para60"].map(
            (item, ind) => (
              <Para key={ind / 10}>
                {ctx.chapter3kannada.Content[item]}
              </Para>
            ))}
        <Table7kan />
        <h6>ಆಧಾರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {["para61","para62", "para63", "para64", "para65","para65a","para66"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table8kan />
        <h6>ಆಕರ: ಅನುದಾನ ವಹಿ</h6>
        {["para67","para68", "para69", "para70", "para71", "para72", "para73", "para74"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {["para75", "para76", "para77", "para78", "para79", "para80", "para81", "para82", "para83", "para84"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {["para85", "para86", "para87", "para88", "para89", "para90", "para91", "para92", "para93", "para94", "para95", "para96", "para97", "para98", "para99", "para100", "para101", "para102", "para103", "para104", "para105", "para106", "para107"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table9 />
        <h6>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {["para108","para109","para110","para111","para112","para113","para114","para115","para116","para117","para118","para119"].map(
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
        <Table10 />
        <h6>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {["para122", "para123"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }

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
