import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table2 from '../../../Tables/Chapter1/Table2'
import Table2kan from '../../../Tables/Chapter1kan/Table2'



const FinanceSnapshot = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/budgetprocess" forward="/overview/snapshot-assets" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para39}
                        </Title>
                        <Para >
                            {ctx.chapterOne.Profile["Para40"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ in crore
                        </h3>
                        <Table2 />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T2F1}
                                <br></br>
                                {ctx.tables1.T2F2}
                                <br></br>
                                <br></br>
                                {ctx.tables1.T2F3}
                                <br></br>
                                {ctx.tables1.T2F4.substring(0, 97)}
                                <br></br>
                                ^^ Effective Public Debt Receipts for the year 2020-21 and 2021-22 would be ` 72,121 crore and `62,532 crore respectively, as the Department of Expenditure, GoI had decided that GST compensation of `12,407 crore in 2020-21 and `18,109 crore in 2021-22 given to the State as back-to-back loan under Debt Receipts would not be treated as debt of the State for any norms which may be prescribed by the Finance Commission.
                            </i>
                        </h4>

                        {["Para40a", "Para41", "Para42"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
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
                        <FloatingActionButtons back="/overview/budgetprocess" forward="/overview/snapshot-assets" />
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para41}
                        </Title>
                        <Para >
                            {ctx.chapter1kannada.Content["para42"]}
                        </Para>
                        <Table2kan/>
                      
                        <h4 >
                            {["f4", "f5", "f6","f7","f7a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}</h4>

                        {["para43", "para44"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
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

export default FinanceSnapshot
