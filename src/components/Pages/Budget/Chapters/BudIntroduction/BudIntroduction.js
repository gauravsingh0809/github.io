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
import Actual4 from "../../../Tables/Chapter3/Actual4";
import Actual5 from "../../../Tables/Chapter3/Actual5";

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
          <Actual4/>
          <Actual5/>

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
