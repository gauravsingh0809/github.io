import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Overview.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Para from "../../Para/Para"
import Title from "../../Title/Title";
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"


const Overview = () => {

    const ctx = useContext(MyContext)

    console.log("ctx", ctx)

    return (
        ctx.langPref
            ? (ctx.execsummary
                ?
                <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/preface/" forward="/overview/introduction" />
                        <Title>{ctx.execsummary.para3}</Title>
                        {['para4'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para5}</Title>
                        {['para6'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        
                    </div>
                </div> : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.execsummarykan
                ?
                <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/preface/" forward="/overview/introduction" />
                        <Title>{ctx.execsummarykan.title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execsummarykan.para3}</Title>
                        <Title >{ctx.execsummarykan.para4}</Title>
                        {['para5', 'para6', 'para7'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Overview
