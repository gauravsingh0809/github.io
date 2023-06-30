import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Conclusions= () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Management" forward="/State/Recommend" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para125}
                        </Title>

                        <Para>
                            <li>                              
                              {ctx.chapterFive.Fifth.Para126}
                            
                            <span className="tooltip">
                            {ctx.chapterFive.Fifth.Para126.substring(329, 330)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para129}
                                </span>
                                <sup>43</sup>
                            </span>
                            </li>
                        </Para> 

                        {["Para127", "Para128"].map((item, ind) =>
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
                    <FloatingActionButtons back="/State/Management" forward="/State/Recommend"  />


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

export default Conclusions