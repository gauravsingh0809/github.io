import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table2 from '../../../Tables/Chapter2/Table2'
import { Chart11a, Chart12b } from '../../../Charts/Chap2Charts'
import { FaSpinner } from 'react-icons/fa'

const Sources = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref ? (ctx.chapterTwo ?
            <div >
                <Navbar />
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/finances/major-sources" forward="/finances/resources" />
                    <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Sources and application"].title}</Title>
                    {ctx.isStatus.status1
                        ? <div>
                            <Para>
                                {ctx.chapterTwo.Finances["Sources and application"].para1}
                            </Para>
                            <Table2 />
                            <p className="footer">
                            Source: Finance Accounts
                            </p>
                            <Para>
                                {ctx.chapterTwo.Finances["Sources and application"].para2}
                            </Para>
                            <div className="chart-grid">
                                <Chart11a />
                                <Chart12b />
                            </div>
                        </div>
                        : ""}
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>) 
            : (ctx.chapter2kannada ?
                <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/major-sources" forward="/finances/resources" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Sources and application"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                <Para>
                                    {ctx.chapter2kannada.Finances["Sources and application"].para1}
                                </Para>
                                <Table2 />
                                <Para>
                                    {ctx.chapter2kannada.Finances["Sources and application"].para2}
                                </Para>
                                <div className="chart-grid">
                                    <Chart11a />
                                    <Chart12b />
                                </div>
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

export default Sources