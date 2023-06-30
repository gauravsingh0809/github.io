import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "./../../../../Title/Title";
import Navbar from "./../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Subtitle from  "../../../../Subtitle/Subtitle"
import Table2 from "../../../Tables/Chapter3/Table2";
import Table3 from "../../../Tables/Chapter3/Table3";
import Table2kan from '../../../Tables/Chapter3kan/Table2'
import Table3kan from '../../../Tables/Chapter3kan/Table3'
const ChildBudget = () => {
  const ctx = useContext(MyContext);
  console.log("ctx", ctx);

  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
        <FloatingActionButtons back="/budget/gender-budget" forward="/budget/appropaccounts" />

          <Title>{ctx.chapterThree.Profile.Para13}</Title>
          <Subtitle>{ctx.chapterThree.Profile.Para14}</Subtitle>
          {["Para15", "Para16"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          {/* <Subtitle>{ctx.chapterThree.Profile.Para17}</Subtitle> */}
          {/* {["Para18", "Para19", "Para20", "Para21", "Para22", "Para23", "Para24"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}   */}
          {/* <Table2/> 
          <h4>
            i) Budgetary allocation and expenditure for Child Centric Non-programme/Scheme comprise institutional set ups, establishments, infrastructure facilities and administrative support that benefit children.
          <br></br>
          (ii) Beneficiaries of 100% Child Centric Programme include pregnant or expectant mothers and lactating mothers.
          </h4> */}
             {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}
             
             <Table3/>
             <Para>{ctx.chapterThree.Profile.Para25}</Para>
             <Para>{ctx.chapterThree.Profile.Para26}</Para>
             <Para>{ctx.chapterThree.Profile.Para27}</Para>

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
          <FloatingActionButtons back="/budget/gender-budget" forward="/budget/appropaccounts" />

          <Title>{ctx.chapter3kannada.Content.para19}</Title>
         
          {["para21", "para22"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            )
          )}
          
          
          <Table2kan/>  
          <h4>
          ಆಕರ: ಅನುದಾನ ವಹಿ
          </h4>
             {/* <Para>{ctx.chapter3kannada.Introduction.Para1}</Para> */}
             {/* <Para>{ctx.chapter3kannada.Content.para31}</Para>
             <Table3kan/>
             <h6>ಆಕರ: ಅನುದಾನ ವಹಿಗಳು</h6> */}
        
             <Para>{ctx.chapter3kannada.Content.para32}</Para>
             <Para>{ctx.chapter3kannada.Content.para33}</Para>
             <Para>{ctx.chapter3kannada.Content.para33a}</Para>
        </div>
      </div>
    ) : (
      <div>
        <Navbar />
        <FaSpinner icon="spinner" className="spinner" />
      </div>
  );
};

export default ChildBudget;
