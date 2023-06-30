import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import Subtitle from "./../../../../Subtitle/Subtitle"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Result = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Cag" forward="/State/Management" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para103}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para104}
                            </i>
                        </Subtitle>

                        <Para>
                              {ctx.chapterFive.Fifth.Para105}
                        </Para> 

                        <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para106}
                            </i>
                        </Subtitle>

                        <Para>
                              {ctx.chapterFive.Fifth.Para107}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para108}
                            </i>
                        </Subtitle>

                        <Para>
                              {ctx.chapterFive.Fifth.Para109}
                        </Para> 

                        <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para110}
                            </i>
                        </Subtitle>

                        {["Para111", "Para112"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}

                        <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para113}
                            </i>
                        </Subtitle>

                        {["Para114", "Para115"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}

                            {["Para116", "Para117", "Para118"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                
                                </li>
                            </Para>)}    

                            <Para>
                              {ctx.chapterFive.Fifth.Para119}
                            </Para> 

                            {["Para120", "Para121"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                        {ctx.chapterFive.Fifth[item]}
                                </li>
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
                    <FloatingActionButtons back="/State/Cag" forward="/State/Management"  />


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

export default Result