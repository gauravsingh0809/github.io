import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Subtitle from "../../../../Subtitle/Subtitle"
import { Chart5, Chart6 } from '../../../Charts/Charts'
import Table4 from '../../../Tables/Chapter1/Table4'
import Table4kan from '../../../Tables/Chapter1kan/Table4'



const FiscalParams = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/snapshot-assets" forward="/overview/fisc-situation" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para46}
                        </Title>
                        {["Para47", "Para48"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapterOne.Profile["Para49"]}
                        </Subtitle>

                        {["Para50"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Chart5 />
                        <Chart6 />

                        <Para>
                            {ctx.chapterOne.Profile.Para51.substring(0, 91)}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.Para51.substring(91, 99)}
                                <span className="tooltiptext">
                                    Growth rate of Revenue Receipts and Revenue Expenditure for 2020-21 is (-) 10.67 per cent and 1.03 per cent respectively. The difference between these two is (-) 9.64 per cent.
                                </span>
                                <sup>4</sup>
                            </span>
                            {ctx.chapterOne.Profile.Para51.substring(99,)}

                        </Para>

                        <Subtitle>
                            {ctx.chapterOne.Profile["Para52"]}
                        </Subtitle>

                        {["Para53"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table4 />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T4F1}
                                <br></br>
                                * Effective Loans and Advances for GoI would be ₹ 14,210 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹ 12,407 crore given to the state as back-to-back loan under Debt Receipt would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.
                            </i>
                        </h4>

                        {["Para53a","Para54"].map((item, ind) =>
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
                        <FloatingActionButtons back="/overview/snapshot-assets" forward="/overview/fisc-situation" />
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para49}
                        </Title>
                        {["para50", "para51"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapter1kannada.Content["para52"]}
                        </Subtitle>

                        {["para53"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Chart5 />
                        {["f8a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Chart6 />
                        {["f8b"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        {["para54"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}

                        <Subtitle>
                            {ctx.chapter1kannada.Content["para55"]}
                        </Subtitle>

                        {["para56"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Table4kan />
                        {["f10"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                      
                        {["para56a","para57"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        {["para58"].map((item, ind) =>
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

export default FiscalParams
