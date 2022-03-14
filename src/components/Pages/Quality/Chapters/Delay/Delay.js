import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'


const Delay = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapter4kannada)




    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="delay" />
                        <Title>{ctx.chapterFour.second.Para1}</Title>
                        
                        <Para>
                        {ctx.chapterFour.second.para3}
                        </Para>
                        <Para>
                        {ctx.chapterFour.second.para2}
                        </Para>
                        <Para>
                        {ctx.chapterFour.second.para4}
                        </Para>
                        {["para5","para6"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.first[item]}
                            </Para> )}
                            
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
                    <FloatingActionButtons back="/quality" forward="delay" />
                    <Title>{ctx.chapter4kannada.Content.para16}</Title>
                    
                    <Para>
                    {ctx.chapter4kannada.Content.para17}
                    </Para>
                    <Para>
                    {ctx.chapter4kannada.Content.para18}
                    </Para>
                    <Para>
                    {ctx.chapter4kannada.Content.para19}
                    </Para>
                    {["para20","para21"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter4kannada.Content[item]}
                        </Para> )}
                        
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default Delay