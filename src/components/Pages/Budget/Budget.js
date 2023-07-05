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
            ? (ctx.execsummary
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/conclusion" forward="/budget/introduction" />
                        <Title>{ctx.execsummary.para3}</Title>
                        {['para4'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para9}</Title>
                        {['para10'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title >{ctx.execsummary.para32}</Title>
                        {['para33', 'para34', 'para35', 'para36',
                            'para37', 'para38', 'para39', 'para40'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.execsummary[item]}
                                </Para>
                            )}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.execsummarykan
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/conclusion" forward="/budget/introduction" />
                        <Title>{ctx.execsummarykan.para4}</Title>
                        {['para5'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execsummarykan.para10}</Title>
                        {['para11'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                       
                        <Title >{ctx.execsummarykan.para33}</Title>
                        {['para34','para35','para36','para37',
                        'para38','para39','para40'
                        ].map((item, ind) =>
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

export default Budget
