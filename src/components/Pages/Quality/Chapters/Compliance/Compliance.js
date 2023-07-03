import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import Subtitle from "../../../../Subtitle/Subtitle";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table11 from "../../../Tables/Chapter4/Table11";
import Table11kan from "../../../Tables/Chapter4kan/Table11";

const Compliance = () => {
    const ctx = useContext(MyContext)
    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/reconciliation" forward="/quality/submission" />
                
                        <Title>
                        {ctx.chapterFour.Fourth.title}
                        </Title>
                        <Subtitle>
                        {ctx.chapterFour.Fourth.Para1}
                        </Subtitle>
                        {["Para2","Para3"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Fourth[item]}
                            </Para> )}
                            <Table11/>

                        {/* <Para>
                        {ctx.chapterFour.Fourth.Para4}
                        </Para> */}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ?<div >
                <Navbar />
                <div className="contentwrapper" id="home">
                <FloatingActionButtons back="/quality/reconciliation" forward="/quality/submission" />
                  
                    
                    <Title>
                    {ctx.chapter4kannada.Content.para74}
                    </Title>
                    <Subtitle>
                    {ctx.chapter4kannada.Content.para75}   
                    </Subtitle>
                    {["para76","para77"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter4kannada.Content[item]}
                        </Para> )}
                        <Table11kan/>
                     
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default Compliance