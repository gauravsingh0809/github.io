import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import Subtitle from "./../../../../Subtitle/Subtitle"
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table10 from "../../../Tables/Chapter5/Table10";
// import Table1 from '../../../Tables/Chapter4/Table1'


const Loss = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Performance" forward="/State/Auditt" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para59}
                        </Title>
                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para60}
                        </Subtitle>

                        <Para>
                            {ctx.chapterFive.Fifth.Para61.substring(0, 19)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para61.substring(20, 21)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para67}
                                </span>
                                <sup>35</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para61.substring(20,)}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table10 />

                        <Para>
                              {ctx.chapterFive.Fifth.Para62}
                              <span className="tooltip">
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para69}
                                </span>
                                <sup>37</sup>
                            </span>
                        </Para>  

                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para63}
                        </Subtitle>

                        <Para>
                              {ctx.chapterFive.Fifth.Para64}
                              <span className="tooltip">
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para70}
                                </span>
                                <sup>38</sup>
                            </span>
                        </Para> 

                        {["Para65", "Para66"].map((item, ind) =>
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
                    <FloatingActionButtons back="/State/Performance" forward="/State/Auditt"  />


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

export default Loss