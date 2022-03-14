import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'


const Funds = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapter4kannada)



    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="delay" />
                        <Title>{ctx.chapterFour.title}</Title>
                        
                        <Para>
                        {ctx.chapterFour.para1}
                        </Para>
                        <Title>{ctx.chapterFour.para2}</Title>
                        <Para>
                        {ctx.chapterFour.first.title}
                        </Para>
                        {["para1","para2",":Para3","Para4","Para5","Para6","Para7","Para8","Para9"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.first[item]}
                            </Para> )}
                            <Para>
                        {ctx.chapterFour.first.Para9a}
                        </Para>
                        <Para>
                        {ctx.chapterFour.first.Para9b}
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
                    <FloatingActionButtons back="/quality" forward="delay" />
                    <Title>{ctx.chapter4kannada.Content.para1}</Title>
                    
                    <Para>
                    {ctx.chapter4kannada.Content.para2}
                    </Para>
                    <Title>{ctx.chapter4kannada.Content.para3}</Title>
                    <Para>
                    {ctx.chapter4kannada.Content.para4}
                    </Para>
                    {["para5","para6","para7","para8","para9","para10","para11","para12","para13"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter4kannada.Content[item]}
                        </Para> )}
                        <Para>
                    {ctx.chapter4kannada.Content.para14}
                    </Para>
                    <Para>
                    {ctx.chapter4kannada.Content.para15}
                    </Para>


                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default Funds