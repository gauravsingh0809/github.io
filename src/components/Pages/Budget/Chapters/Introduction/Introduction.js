import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "./../../../../Title/Title";
import Navbar from "./../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";

const BudIntroduction = () => {
  const ctx = useContext(MyContext);
  console.log("ctx", ctx);

  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget" forward="budget-process" />
          <Title>{ctx.chapterThree.Para1}</Title>
          <Title>{ctx.chapterThree.Introduction.Title}</Title>
          {ctx.isStatus.status1 ? (
            <div>
              <Para>{ctx.chapterThree.Introduction.Para1}</Para>
            </div>
          ) : (
            ""
          )}
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

export default BudIntroduction;