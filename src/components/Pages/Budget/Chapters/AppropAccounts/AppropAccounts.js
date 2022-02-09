import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Budget.css'
import Table7 from '../../../Tables/Chapter3/Table7'
import Table8 from '../../../Tables/Chapter3/Table8'

const AppropAccounts = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterThree
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="policy" forward="audit" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Appropriation.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Appropriation[item].substring(0, 859)}
                                        <span class="tooltip">
                                            {ctx.chapterThree.Budget.Appropriation[item].slice(-18)}
                                            <span className="tooltiptext">
                                                Finance Accounts provides broad perspective of finances of GoK during the financial year
                                                which is dealt in the Chapter 1 and 2 of this Report
                                            </span>
                                            <sup>34</sup>
                                        </span>
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Appropriation.para2}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Appropriation[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table7 />
                                <p className="footer">
                                    Source : Appropriation Accounts
                                </p>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Appropriation[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Appropriation"].para5}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Appropriation[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table8 />
                                <p className="footer">
                                    Source: Appropriation Accounts
                                </p>
                                {['para7'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Appropriation[item]}
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
                        <FloatingActionButtons back="policy" forward="audit" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Appropriation.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Appropriation[item].substring(0, 859)}
                                        <span class="tooltip">
                                            {ctx.chapter3kannada.Budget.Appropriation[item].slice(-18)}
                                            <span className="tooltiptext">
                                                Finance Accounts provides broad perspective of finances of GoK during the financial year
                                                which is dealt in the Chapter 1 and 2 of this Report
                                            </span>
                                            <sup>34</sup>
                                        </span>
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Appropriation.para2}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Appropriation[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table7 />
                                <p className="footer">
                                    Source : Appropriation Accounts
                                </p>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Appropriation[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Appropriation"].para5}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Appropriation[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table8 />
                                <p className="footer">
                                    Source: Appropriation Accounts
                                </p>
                                {['para7'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Appropriation[item]}
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

export default AppropAccounts