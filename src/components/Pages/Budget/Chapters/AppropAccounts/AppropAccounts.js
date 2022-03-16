import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Table5 from "../../../Tables/Chapter3/Table5";
import Table6 from "../../../Tables/Chapter3/Table6";
const AppropAccounts = () => {
  const ctx = useContext(MyContext);
  console.log(ctx.chapter3kannada);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget" forward="budget-process" />

          <Title>{ctx.chapterThree.Profile.Para33}</Title>
          {["Para34", "Para35", "Para36"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Table5/>
          {["Para37", "Para38", "Para39"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Table6/>
          <h6>Source: Appropriation Accounts</h6>
             {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}

        </div>
      </div>
    ) : (
      <div>
        <Navbar />
        <FaSpinner icon="spinner" className="spinner" />
      </div>
    )
  ) 
  : ctx.chapter3kannada 
  ? (
    <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget" forward="budget-process" />

          <Title>{ctx.chapter3kannada.Content.para39}</Title>
          {["para40", "para41", "para42"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            )
          )}
          <Table5/>

          {["para43", "para44", "para45"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            )
          )}
          <Table6/>
          <h6>ಆಧಾರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
             {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}

        </div>
      </div>
    ) 
    : (
      <div>
        <Navbar />
        <FaSpinner icon="spinner" className="spinner" />
      </div>
  )
};

export default AppropAccounts;
