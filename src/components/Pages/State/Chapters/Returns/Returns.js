import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import Subtitle from "./../../../../Subtitle/Subtitle"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table5 from "../../../Tables/Chapter5/Table5";
import Table6 from "../../../Tables/Chapter5/Table6";
// import Table1 from '../../../Tables/Chapter4/Table1'


const Returns = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Investment" forward="/State/Debt" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para29}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para30}
                            </i>
                        </Subtitle>
                        {["Para31", "Para32"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}

                            <Table5 />

                            <h4 className='footnote'>
                                <i>
                                    Source: Latest Financial Statements of SPSEs
                                    <br></br>
                                    
                                </i>
                            </h4>

                        <Para>
                              {ctx.chapterFive.Fifth.Para33}
                        </Para>    

                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para34}
                        </Subtitle>

                        <Para>
                            {ctx.chapterFive.Fifth.Para35.substring(0, 76)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para35.substring(76, 77)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para39}
                                </span>
                                <sup>31</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para35.substring(77,)}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table6 />

                        <h4 className='footnote'>
                            <i>
                                Source: Latest Financial Statements of SPSEs
                                <br></br>
                                
                            </i>
                        </h4>

                        <Para>
                              {ctx.chapterFive.Fifth.Para41}
                        </Para> 

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
                    <FloatingActionButtons back="/State/Investment" forward="/State/Debt" />


                        <Title>
                            {ctx.chapter4kannada.Content.para103}
                        </Title>
                        {["para104", "para105", "para106", "para107", "para108"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <i>
                                    {ctx.chapter4kannada.Content[item]}
                                </i>
                            </Para>)}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Returns