import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table5 from "../../../Tables/Chapter4/Table5";
import Table5kan from "../../../Tables/Chapter4kan/Table5";
import Table6 from "../../../Tables/Chapter4/Table6";
import Table6kan from "../../../Tables/Chapter4kan/Table6";
import Table7 from "../../../Tables/Chapter4/Table7";
import Table7kan from "../../../Tables/Chapter4kan/Table7";

const PD = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/acbills" forward="/quality/balances" />

                        <Title>
                            {ctx.chapterFour.second.Para13}
                        </Title>

                        {["Para14", "Para15", "Para16"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.second[item]}
                            </Para>)}
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table5 />
                        <h4 className="footnote">
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para17", "Para18"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.second[item]}
                            </Para>)}
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table6 />
                        <h4 className="footnote">
                            <i>
                                Source: DDR Ledger
                            </i>
                        </h4>
                        {["Para19", "Para20", "Para21"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.second[item]}
                            </Para>)}
                        {/* <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table7 />
                        {["Para23", "Para24", "Para25", "Para26", "Para27", "Para28"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.second[item]}
                            </Para>)} */}

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
                        <FloatingActionButtons back="/quality/acbills" forward="/quality/balances" />
                        <Title>
                            {ctx.chapter4kannada.Content.para28}
                        </Title>

                        {["para29", "para30", "para31"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table5kan />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>

                        {["para32", "para33"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                        <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table6kan />
                        <h4> ಆಕರ–ಋಣ, ಠೇವಣಿ ಇರಸಾಲು ಲೆಡ್ಜರ್‌ಗಳು </h4>
                        {["para34", "para35", "para36"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                        <h3 className="headnote"> 
                            ₹ In crore
                        </h3>
                        {/* <Table7kan /> */}
                        {/* {["para37a","para38","para39","para40","para41","para42"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)} */}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default PD