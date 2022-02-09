import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'


const Basis = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/profile" forward="/overview/structure" />
                        <Title>{ctx.chapterOne.Overview["Basis and Approach to State Finance Audit Report"].title}</Title>
                        {ctx.isStatus.status4
                            ? <span>
                                {['para1', 'para2', 'para3'].map((item, ind) =>
                                    <Para key={ind/10}>
                                        {ctx.chapterOne.Overview["Basis and Approach to State Finance Audit Report"][item]}
                                    </Para>
                                )}
                                {['para4', 'para5', 'para6', 'para7', 'para8', 'para9', 'para10'].map((item, ind) =>
                                    <Para key={ind/10}>
                                        <li className="list" >
                                            {ctx.chapterOne.Overview["Basis and Approach to State Finance Audit Report"][item]}
                                        </li>
                                    </Para>
                                )}
                            </span>
                            : ""}
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
                        <FloatingActionButtons back="/overview/profile" forward="/overview/structure" />
                        <Title>{ctx.chapter1kannada.Overview["Basis and Approach to State Finance Audit Report"].title}</Title>
                        {ctx.isStatus.status4
                            ? <span>
                                {['para1', 'para2', 'para3'].map((item, ind) =>
                                    <Para key ={ind/10}>
                                        {ctx.chapter1kannada.Overview["Basis and Approach to State Finance Audit Report"][item]}
                                    </Para>
                                )}
                                {['para4', 'para5', 'para6', 'para7', 'para8', 'para9', 'para10'].map((item, ind) =>
                                    <Para key={ind/10}>
                                        <li className="list" >
                                            {ctx.chapter1kannada.Overview["Basis and Approach to State Finance Audit Report"][item]}
                                        </li>
                                    </Para>
                                )}
                            </span>
                            : ""}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Basis
