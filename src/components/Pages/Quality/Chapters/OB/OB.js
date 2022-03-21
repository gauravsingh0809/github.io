import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import Subtitle from "../../../../Subtitle/Subtitle";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table8 from '../../../Tables/Chapter4/Table8'
import Table9 from "../../../Tables/Chapter4/Table9";

const OB = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/pdaccounts" forward="/quality/non-reconciliation" />


                        <Title>
                            {ctx.chapterFour.Third.title}
                        </Title>


                        {["Para1", "Para2", "Para3"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Third[item]}
                            </Para>)}
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table8 />
                        <h4>
                            <i>Source- DDR Ledger
                            </i>
                        </h4>
                        {["Para4", "Para5"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Third[item]}
                            </Para>)}
                        {["Para6", "Para7"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterFour.Third[item]}
                                </li>
                            </Para>)}

                        <Para>
                            {ctx.chapterFour.Third["Para8"]}
                        </Para>
                        <Para>
                            <li>
                                {ctx.chapterFour.Third["Para9"]}
                            </li>
                        </Para>
                        <Para>
                            {ctx.chapterFour.Third["Para10"]}
                        </Para>
                        <Para>
                            <li>
                                {ctx.chapterFour.Third["Para11"]}
                            </li>
                        </Para>
                        <Para>
                            {ctx.chapterFour.Third["Para12"]}
                        </Para>
                        <Para>
                            <li>
                                {ctx.chapterFour.Third["Para13"]}
                            </li>
                        </Para>
                        <Para>
                            {ctx.chapterFour.Third["Para14"]}
                        </Para>
                        <Para>
                            <li>
                                {ctx.chapterFour.Third["Para15"]}
                            </li>
                        </Para>
                        <Para>
                            {ctx.chapterFour.Third["Para16"]}
                        </Para>
                        <Para>
                            <li>
                                {ctx.chapterFour.Third["Para17"]}
                            </li>
                        </Para>
                        <Para>
                            {ctx.chapterFour.Third["Para18"]}
                        </Para>
                        <Para>
                            {ctx.chapterFour.Third["Para19"]}
                        </Para>
                        <Para>
                            <li>
                                {ctx.chapterFour.Third["Para20"]}
                            </li>
                        </Para>
                        <Para>
                            <li>
                                {ctx.chapterFour.Third["Para21"]}
                            </li>
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Third["Para22"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Third["Para23"]}
                        </Para>

                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table9 />
                        <h4>
                            <i>
                                Source- Office of the Pr.AG(A&E)
                            </i>
                        </h4>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/pdaccounts" forward="/quality/non-reconciliation" />


                        <Title>
                            {ctx.chapter4kannada.Content.para44}
                        </Title>


                        {["para45", "para46", "para47"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table8 />
                        <h6>ಆಕರ : ಡಿಡಿಆರ್‌ ಲೆಡ್ಜರುಗಳು</h6>
                        {["para48", "para49", "para50", "para51", "para52", "para53", "para54", "para55", "para56", "para57", "para58", "para59", "para60", "para61", "para62", "para63", "para64", "para65"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table9 />
                        <h6>ಆಕರ -  ಮಹಾಲೇಖಪಾಲರ (ಲೆ ಮತ್ತು ಹ) ಕಚೇರಿ</h6>

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default OB