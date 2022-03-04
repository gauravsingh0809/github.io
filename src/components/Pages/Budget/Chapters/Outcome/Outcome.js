import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";

const Outcome = () => {
  const ctx = useContext(MyContext);
  console.log(ctx.chapterThree);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget" forward="budget-process" />

          <Title>{ctx.chapterThree.Profile.Para120}</Title>
          {["Para121", "Para122", "Para123","Para124", "Para125", "Para126",
          "Para127", "Para128"].map(
            (item, ind) => (
              <Para key={ind / 10}>
              {ctx.chapterThree.Profile[item]}
              </Para>
          ))}
          {["Para129","Para130","Para131"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          {["Para132","Para133"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          {["Para134","Para135","Para136","Para137"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
   
          {["Para138","Para139","Para140","Para141","Para142","Para143","Para144","Para145","Para146","Para147","Para148","Para149","Para150","Para151","Para152","Para153","Para154","Para155","Para156"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )) 
          }
          {["Para157","Para158","Para159"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )) 
          }
          {["Para160","Para161","Para162","Para163","Para164","Para165","Para166","Para167","Para168"].map(
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

export default Outcome;
