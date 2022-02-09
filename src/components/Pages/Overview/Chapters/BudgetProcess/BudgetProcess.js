import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import CustomTooltip from '../../../../CustomTooltip/CustomTooltip'
import { FaSpinner } from 'react-icons/fa'


const BudgetProcess = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref ?
            (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/structure" forward="/overview/snapshot-finances" />
                        <Title status={ctx.isStatus.status6} id={6}>{ctx.chapterOne.Overview["Budgetary Processes"].title}</Title>
                        <Para>
                            {ctx.chapterOne.Overview["Budgetary Processes"].para1.substring(0, 629)}
                            <CustomTooltip
                                tooltip="Gender Budget refers to the expenditure proposed to be incurred within the overall budget on schemes, which are designed to benefit women fully or partly"
                                content={ctx.chapterOne.Overview["Budgetary Processes"].para1.substring(629, 642)}
                                supScript="" />
                            {ctx.chapterOne.Overview["Budgetary Processes"].para1.substring(643,)}
                        </Para>
                        <Para>
                            {ctx.chapterOne.Overview["Budgetary Processes"].para2}
                        </Para>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter1kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/structure" forward="/overview/snapshot-finances" />
                        <Title status={ctx.isStatus.status6} id={6}>{ctx.chapter1kannada.Overview["Budgetary Processes"].title}</Title>
                        <Para>
                            {ctx.chapter1kannada.Overview["Budgetary Processes"].para1.substring(0, 629)}
                            <CustomTooltip
                                tooltip="Gender Budget refers to the expenditure proposed to be incurred within the overall budget on schemes, which are designed to benefit women fully or partly"
                                content={ctx.chapter1kannada.Overview["Budgetary Processes"].para1.substring(629, 642)}
                                supScript="" />
                            {ctx.chapter1kannada.Overview["Budgetary Processes"].para1.substring(643,)}
                        </Para>
                        <Para>
                            {ctx.chapter1kannada.Overview["Budgetary Processes"].para2}
                        </Para>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default BudgetProcess