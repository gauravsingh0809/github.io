import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import { Chart14, Chart15, Chart16, Chart17 } from '../../../Charts/Chap2Charts'
import { FaSpinner } from 'react-icons/fa'
import Table30 from '../../../Tables/Chapter2/Table30'
import Table31 from '../../../Tables/Chapter2/Table31'
import Table32 from '../../../Tables/Chapter2/Table32'
import Table33 from '../../../Tables/Chapter2/Table33'
import Table34 from '../../../Tables/Chapter2/Table34'


const DebtManagement = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="publicaccount" forward="dsa" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Debt Management"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                                <Chart14 />
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Debt Management"].para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                                <Table30 />
                                {['para6', 'para7', 'para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapterTwo.Finances["Debt Management"][item]}
                                        </li>
                                    </Para>
                                )}
                                <Chart15 />
                                <Chart16 />
                                {['para9', 'para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Debt Management"].para11}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para12', 'para13'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                                <Table31 />
                                {['para14'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Debt Management"].para15}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para16'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                                <Table32 />
                                <p className="footer">
                                    Source: Finance Accounts
                                    <br>
                                    </br>
                                    *All these figures are net disbursement/outflows during the year.
                                </p>
                                <Table33 />
                                <Chart17 />
                                {['para17'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Debt Management"].para18}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para19'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                                <Table34 />
                                {['para20'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Debt Management"][item]}
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
            : (ctx.chapter2kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="publicaccount" forward="dsa" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Debt Management"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                                <Chart14 />
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Debt Management"].para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                                <Table30 />
                                {['para6', 'para7', 'para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapter2kannada.Finances["Debt Management"][item]}
                                        </li>
                                    </Para>
                                )}
                                <Chart15 />
                                <Chart16 />
                                {['para9', 'para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Debt Management"].para11}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para12', 'para13'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                                <Table31 />
                                {['para14'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Debt Management"].para15}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para16'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                                <Table32 />
                                <p className="footer">
                                    Source: Finance Accounts
                                    <br>
                                    </br>
                                    *All these figures are net disbursement/outflows during the year.
                                </p>
                                <Table33 />
                                <Chart17 />
                                {['para17'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Debt Management"].para18}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para19'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Debt Management"][item]}
                                    </Para>
                                )}
                                <Table34 />
                                {['para20'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Debt Management"][item]}
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

export default DebtManagement