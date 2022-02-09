import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Para from "../../Para/Para"
import Title from "../../Title/Title";
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"


const Quality = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.execQuality
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/budget/Recommendations" forward="/Quality/funds" />
                        <Title>{ctx.execQuality.title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key ={ind/10}>
                                {ctx.execQuality[item]}
                            </Para>
                        )}
                        <Title >{ctx.execQuality.para3}</Title>
                        <Title >{ctx.execQuality.para4}</Title>
                        {['para5', 'para6', 'para7'].map((item, ind) =>
                            <Para key = {ind/10}>
                                {ctx.execQuality[item]}
                            </Para>
                        )}
                    </div>
                </div> 
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.execQualitykan
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/budget/Recommendations" forward="/Quality/funds" />
                        <Title>{ctx.execQualitykan.title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key = {ind/10}>
                                {ctx.execQualitykan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execQualitykan.para3}</Title>
                        <Title >{ctx.execQualitykan.para4}</Title>
                        {['para5a','para5', 'para6', 'para7'].map((item, ind) =>
                            <Para key = {ind/10}>
                                {ctx.execQualitykan[item]}
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

export default Quality
