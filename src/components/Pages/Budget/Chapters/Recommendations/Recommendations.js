import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Budget.css'

const Recommendations = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref ? 
        (ctx.chapterThree 
            ? <div >
                <Navbar />
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="conclusion" forward="/Quality" />
                    <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Recommendations.title}</Title>
                    {ctx.isStatus.status1
                        ? <div>
                            {['para1', 'para2', 'para3', 'para4'].map((item, ind) =>
                                <Para key={ind}>
                                    <li style={{fontStyle:"italic"}}>
                                        {ctx.chapterThree.Budget.Recommendations[item]}
                                    </li>
                                </Para>
                            )}
                        </div>
                        : ""}
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
            : (ctx.chapter3kannada 
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="conclusion" forward="/Quality" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Recommendations.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2', 'para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li style={{fontStyle:"italic"}}>
                                            {ctx.chapter3kannada.Budget.Recommendations[item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Recommendations