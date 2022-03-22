import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Preface.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Para from "../../Para/Para"
import Title from "../../Title/Title";
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"


const Preface = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref ? (
            ctx.preface ?
                <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/" forward="/overview/" />
                        <Title>
                            {ctx.preface.title}
                        </Title>
                        <ol>
                            {['para1', 'para2', 'para3', 'para4', 'para5', 'para6'].map((item, ind) =>
                                <li key={ind / 10} className="list">
                                    <Para>
                                        {ctx.preface[item]}
                                    </Para>
                                </li>
                            )}
                        </ol>
                        <Title>{ctx.execsummary.para1}</Title>
                        <Para>
                            {ctx.execsummary['para2']}
                        </Para>
                    </div>
                </div> : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.prefacekan ?
                <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/" forward="/overview/" />
                        
                        <Title >{ctx.prefacekan.title}</Title>
                        <ol>
                            {['para1', 'para2', 'para3', 'para4', 'para5', 'para6',"para7"].map((item, ind) =>
                                <li key={ind / 10} className="list">
                                    <Para >
                                        {ctx.prefacekan[item]}
                                    </Para>
                                </li>
                            )}
                        </ol>
                        <Title>{ctx.execsummarykan.para2}</Title>
                        <Para>
                            {ctx.execsummarykan['para3']}
                        </Para>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Preface
