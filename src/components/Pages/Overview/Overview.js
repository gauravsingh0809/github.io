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
            ? (ctx.execoverview
                ?
                <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/preface/" forward="/overview/introduction" />
                        <Title>{ctx.execoverview.title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.execoverview[item]}
                            </Para>
                        )}
                        <Title >{ctx.execoverview.para3}</Title>
                        <Title >{ctx.execoverview.para4}</Title>
                        {['para5', 'para6', 'para7'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.execoverview[item]}
                            </Para>
                        )}
                    </div>
                </div> : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.execoverviewkan
                ?
                <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/preface/" forward="/overview/introduction" />
                        <Title>{ctx.execoverviewkan.title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execoverviewkan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execoverviewkan.para3}</Title>
                        <Title >{ctx.execoverviewkan.para4}</Title>
                        {['para5', 'para6', 'para7'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execoverviewkan[item]}
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
