import Subtitle from "./../../../../Subtitle/Subtitle"
import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Cag = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Submissions" forward="/State/Result" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para91}
                        </Title>
                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para92}
                        </Subtitle>

                        <Para>
                              {ctx.chapterFive.Fifth.Para93}
                        </Para>    

                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para94}
                        </Subtitle>

                        {["Para95", "Para96"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                  {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}

                            {["Para97", "Para98"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    <i>
                                        {ctx.chapterFive.Fifth[item]}
                                    </i>
                                </li>
                            </Para>)}    

                            <Subtitle>
                            {ctx.chapterFive.Fifth.Para99}
                        </Subtitle>

                        {["Para100", "Para101", "Para102"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                  {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}

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
                    <FloatingActionButtons back="/State/Submissions" forward="/State/Result"  />


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

export default Cag