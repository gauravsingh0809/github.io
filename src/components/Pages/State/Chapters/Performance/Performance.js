import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Subtitle from "./../../../../Subtitle/Subtitle"
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import Table8 from "../../../Tables/Chapter5/Table8";
import Table9 from "../../../Tables/Chapter5/Table9";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Performance = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Debt" forward="/State/Loss" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para49}
                        </Title>
                        <Para>
                              {ctx.chapterFive.Fifth.Para50}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para51}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFive.Fifth.Para52.substring(0, 212)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para52.substring(213, 214)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para52s}
                                </span>
                                <sup>34</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para52.substring(213,)}
                        </Para>

                        <Table8 />
                        <h4 className='footnote'>
                                <i>
                                    Source: Latest Financial Statements of SPSEs
                                    <br></br>
                                    
                                </i>
                            </h4>

                        <Para>
                              {ctx.chapterFive.Fifth.Para53}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para54}
                        </Subtitle>
                        {["Para55", "Para56", "Para57"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                        </Para>)}

                        <Table9 />
                        
                        <Para>
                              {ctx.chapterFive.Fifth.Para58}
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
                    <FloatingActionButtons back="/State/Debt" forward="/State/Loss"  />


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

export default Performance