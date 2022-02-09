import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Budget.css'
import Table6 from '../../../Tables/Chapter3/Table6'

const MajorPolicy = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref ?
            (ctx.chapterThree
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="gender-budget" forward="appropaccounts" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Policy.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2', 'para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Policy[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table6 />
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
                        <FloatingActionButtons back="gender-budget" forward="appropaccounts" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Policy.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2', 'para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Policy[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table6 />
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default MajorPolicy