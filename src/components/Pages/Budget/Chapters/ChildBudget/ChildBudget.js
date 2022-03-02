import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "./../../../../Title/Title";
import Navbar from "./../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Subtitle from  "../../../../Subtitle/Subtitle"

const ChildBudget = () => {
  const ctx = useContext(MyContext);
  console.log("ctx", ctx);

  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget" forward="budget-process" />

          <Title>{ctx.chapterThree.Profile.Para13}</Title>
          <Subtitle>{ctx.chapterThree.Profile.Para14}</Subtitle>
          {["Para15", "Para16"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>{ctx.chapterThree.Profile.Para17}</Subtitle>
          {["Para18", "Para19", "Para20", "Para21", "Para22", "Para23", "Para24"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}      
             {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}
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
      {/* <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/budget" forward="budget-process" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Introduction.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                <Para>
                                    {ctx.chapter3kannada.Budget.Introduction.para1}
                                </Para>
                            </div>
                            : ""}
                    </div> */}
    </div>
  ) : (
    <div>
      <Navbar />
      <FaSpinner icon="spinner" className="spinner" />
    </div>
  );
};

export default ChildBudget;
