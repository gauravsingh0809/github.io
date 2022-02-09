import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Budget.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Para from "../../Para/Para"
import Title from "../../Title/Title";
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"


const Budget = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.execBudget
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/conclusion" forward="/budget/introduction" />
                        <Title>{ctx.execBudget.title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.execBudget[item]}
                            </Para>
                        )}
                        <Title >{ctx.execBudget.para3}</Title>
                        <Title >{ctx.execBudget.para4}</Title>
                        {['para5', 'para6', 'para7', 'para8',
                            'para9', 'para10', 'para11', 'para12'].map((item,ind) =>
                                <Para key={ind/10}>
                                    {ctx.execBudget[item]}
                                </Para>
                            )}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.execBudgetkan
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/conclusion" forward="/budget/introduction" />
                        <Title>{ctx.execBudgetkan.title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key = {ind/10}>
                                {ctx.execBudgetkan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execBudgetkan.para3}</Title>
                        <Title >{ctx.execBudgetkan.para4}</Title>
                        {['para5', 'para6', 'para7', 'para8',
                            'para9', 'para10', 'para11', 'para12'].map((item, ind) =>
                                <Para key = {ind/10}>
                                    {ctx.execBudgetkan[item]}
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

export default Budget
