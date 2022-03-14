import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'


const PD = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapterFour)




    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="delay" />
                      
                        
                        <Title>
                        {ctx.chapterFour.second.Para13}
                        </Title>
                        
                           
                         {["Para14","Para15","Para16"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.second[item]}
                            </Para> )}
                            {["Para17","Para18"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.second[item]}
                            </Para> )}
                            {["Para19","Para20","Para21","Para22"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.second[item]}
                            </Para> )}
                            {["Para23","Para24","Para25","Para26","Para27","Para28"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.second[item]}
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
                          
                            
                            <Title>
                            {ctx.chapter4kannada.Content.para28}
                            </Title>
                            
                               
                             {["para29","para30","para31"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapter4kannada.Content[item]}
                                </Para> )}
                                {["para32","para33"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapter4kannada.Content[item]}
                                </Para> )}
                                {["para34","para35","para36","para37","para37a"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapter4kannada.Content[item]}
                                </Para> )}
                                {["para38","para39","para40","para41","para42","para43"].map((item, ind) =>
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

export default PD