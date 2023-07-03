import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";

const Recommendations = () => {
  const ctx = useContext(MyContext);
  console.log(ctx.chapter3kannada);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget/conclusion" forward="/quality" />

          <Title>{ctx.chapterThree.Profile.Para175}</Title>
          {["Para176", "Para177", "Para178"].map(
            (item, ind) => (
              <Para key={ind / 10}>
                <i>
                  {ctx.chapterThree.Profile[item]}
                </i>
              </Para>
            ))}



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
        <FloatingActionButtons back="/budget/conclusion" forward="/quality" />

        <Title>{ctx.chapter3kannada.Content.para176}</Title>
        {["para177", "para178", "para179"].map(
          (item, ind) => (
            <Para key={ind / 10}>
              {ctx.chapter3kannada.Content[item]}
            </Para>
          ))}



      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <FaSpinner icon="spinner" className="spinner" />
    </div>
  );
};

export default Recommendations;
