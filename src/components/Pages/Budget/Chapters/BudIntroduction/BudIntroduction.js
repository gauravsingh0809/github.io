import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Table1 from "../../../Tables/Chapter3/Table1";
import Table2 from "../../../Tables/Chapter3/Table2";
import Table3 from "../../../Tables/Chapter3/Table3";
import Table4 from "../../../Tables/Chapter3/Table4";
import Table5 from "../../../Tables/Chapter3/Table5";
import Table6 from "../../../Tables/Chapter3/Table6";
import Table7 from "../../../Tables/Chapter3/Table7";
import Table8 from "../../../Tables/Chapter3/Table8";
import Table9 from "../../../Tables/Chapter3/Table9";
import Table10 from "../../../Tables/Chapter3/Table10";
import Table11 from "../../../Tables/Chapter3/Table11";
import Table12 from "../../../Tables/Chapter3/Table12";
import Table13 from "../../../Tables/Chapter3/Table13";
import Table14 from "../../../Tables/Chapter3/Table14";
import Table15 from "../../../Tables/Chapter3/Table15";
import Table16 from "../../../Tables/Chapter3/Table16";
import Table17 from "../../../Tables/Chapter3/Table17";


const BudIntroduction = () => {
  const ctx = useContext(MyContext);

  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget" forward="budget-process" />
          <Title>
            {ctx.chapterThree.Para1}
          </Title>
          <Title>
            {ctx.chapterThree.Introduction.Title}
          </Title>
          <Para>
            {ctx.chapterThree.Introduction.Para1}
          </Para>
          <Table1/>
          <Table2/>
          <Table3/>
          <Table4/>
          <Table5/>
          <Table6/>
          <Table7/>
          <Table8/>
          <Table9/>
          <Table10/>
          <Table11/>
          <Table12/>
          <Table13/>
          <Table14/>
          <Table15/>
          <Table16/>
          <Table17/>


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
      <Title>{ctx.chapter3kannada.Content.para1}</Title>
      <Title>{ctx.chapter3kannada.Content.para2}</Title>

      <Para>{ctx.chapter3kannada.Content.para3}</Para>

    </div>
  </div>
) : (
  <div>
    <Navbar />
    <FaSpinner icon="spinner" className="spinner" />
  </div>
  );
};

export default BudIntroduction;
