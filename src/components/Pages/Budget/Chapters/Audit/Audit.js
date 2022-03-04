import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";

const Audit = () => {
  const ctx = useContext(MyContext);
  console.log(ctx.chapterThree);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget" forward="budget-process" />

          <Title>{ctx.chapterThree.Profile.Para40}</Title>
          {["Para41", "Para42", "Para43","Para44", "Para45", "Para46",
          "Para47", "Para48", "Para49","Para50", "Para51", "Para52","Para53", "Para54"].map(
            (item, ind) => (
              <Para key={ind / 10}>
              {ctx.chapterThree.Profile[item]}
              </Para>
          ))}
          {["Para55","Para56","Para57","Para58","Para59","Para60","Para61"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          {["Para62","Para63","Para64","Para65","Para66","Para67","Para68"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          {["Para69","Para70","Para71","Para72","Para73","Para74","Para75","Para76","Para77","Para78"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )) 
          }
          {["Para79","Para80","Para81","Para82","Para83","Para84","Para85","Para86","Para87","Para88","Para89","Para90","Para91","Para92","Para93","Para94","Para95","Para96","Para97","Para98","Para99","Para100","Para101","Para102"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )) 
          }
          {["Para103","Para104","Para105","Para106","Para107","Para108","Para109","Para110","Para111","Para112"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )) 
          }
          {["Para113","Para114","Para115"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )) 
          }
          {["Para116","Para117"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )) 
          }
          {["Para118","Para119"].map(
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

export default Audit;
