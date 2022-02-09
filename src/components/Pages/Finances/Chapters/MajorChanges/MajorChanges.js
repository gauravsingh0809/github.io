import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table1 from '../../../Tables/Chapter2/Table1'
import { FaSpinner } from 'react-icons/fa'

const MajorChanges = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref 
        ? (ctx.chapterTwo 
            ? <div >
                <Navbar />
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="introduction" forward="sources-application" />
                    <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Major changes"].title}</Title>
                    {ctx.isStatus.status1
                        ? <div>
                            <Para>
                                {ctx.chapterTwo.Finances["Major changes"].para1}
                            </Para>
                            <Table1 />
                            <Para>
                                {ctx.chapterTwo.Finances["Major changes"].para2}
                            </Para>

                        </div>
                        : ""}
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
            : (ctx.chapter2kannada 
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="introduction" forward="sources-application" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Major changes"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                <Para>
                                    {ctx.chapter2kannada.Finances["Major changes"].para1}
                                </Para>
                                <Table1 />
                                <Para>
                                    {ctx.chapter2kannada.Finances["Major changes"].para2}
                                </Para>
    
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

export default MajorChanges