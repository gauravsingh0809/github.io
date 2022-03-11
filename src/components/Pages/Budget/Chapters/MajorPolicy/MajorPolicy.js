import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";

const MajorPolicy = () => {
  const ctx = useContext(MyContext);
  console.log(ctx.chapterThree);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget" forward="budget-process" />

          <Title>{ctx.chapterThree.Profile.Para28}</Title>
          {["Para29", "Para30", "Para31", "Para32"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
             {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}

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
          <FloatingActionButtons back="/budget" forward="budget-process" />

          <Title>{ctx.chapter3kannada.Content.para34}</Title>
          {["para35", "para36", "para37", "para38"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            )
          )}
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

export default MajorPolicy;
