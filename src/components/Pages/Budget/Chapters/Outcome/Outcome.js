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
  console.log(ctx.chapter3kannada);


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
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget" forward="budget-process" />

          <Title>{ctx.chapter3kannada.Content.para124}</Title>
          {["para125", "para126", "para127","para128", "para129", "para130",
          "para131", "para132"].map(
            (item, ind) => (
              <Para key={ind / 10}>
              {ctx.chapter3kannada.Content[item]}
              </Para>
          ))}
          {["para133","para134","para135"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            ))
          }
          {["para136","para137"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            ))
          }
          {["para138","para139","para140","para141"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            ))
          }
   
          {["para142","para143","para144","para145","para146","para147","para148","para149","para150","para151","para152","para153","para154","para155","para156","para157","para158","para159","para160"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            )) 
          }
          {["para161","para162","para163"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            )) 
          }
          {["para164","para165","para166","para167","para168","para169"].map(
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

export default Outcome;
