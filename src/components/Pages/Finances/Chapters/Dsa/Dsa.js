import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table35 from '../../../Tables/Chapter2/Table35'
import { Chart19, Chart20, Chart21 } from '../../../Charts/Chap2Charts'
import Table37 from '../../../Tables/Chapter2/Table37'
import Table38 from '../../../Tables/Chapter2/Table38'
import Table39 from '../../../Tables/Chapter2/Table39'
import Table40 from '../../../Tables/Chapter2/Table40'
import Table37a from '../../../Tables/Chapter2/Table37a'

const Dsa = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/debtmanagement" forward="/finances/conclusion" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["DSA"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2', 'para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <Table35 />
                                <p className="footer">
                                    Source: Finance Accounts<br>
                                    </br>
                                    *Outstanding Public Debt is the sum of outstanding balances under the heads 6003-Internal Debt and 6004-Loans and Advances from Government of India.<br>
                                    </br>
                                    #Net debt available to the State Government is calculated as excess of Public Debt receipts over Public Debt repayment and interest payments on Public Debt.
                                    <br>
                                    </br>
                                    [1]-Quantum Spread is Interest Spread as percentage of debt stock.  Interest Spread is the difference of rate of growth of GSDP and Average interest rate on Outstanding public debt.
                                </p>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                                {['para5', 'para6', 'para7'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapterTwo.Finances["DSA"][item]}
                                        </li>
                                    </Para>
                                )}
                                {['para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                                {['para9', 'para10', 'para11',
                                    'para12', 'para13', 'para14', 'para15'].map((item, ind) =>
                                        <Para key={ind}>
                                            <li className="list">
                                                {ctx.chapterTwo.Finances["DSA"][item]}
                                            </li>
                                        </Para>
                                    )}
                                <Title>{ctx.chapterTwo.Finances["DSA"]['para15a']}</Title>
                                {['para16'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <Table37a />
                                {['para17'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["DSA"].para18}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para19'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crore
                                </p>
                                <Table37 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para20'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item].substring(0, 268)}
                                        <span class="tooltip">
                                            {ctx.chapterTwo.Finances["DSA"][item].substring(268, 275)}
                                            <span className="tooltiptext">
                                                Irrigation (`16,866 crore), Co-operation (`1,342 crore), Finance (`1,362 crore), Power (`4,075 crore), Housing (`2,189 crore), Transport (`310 crore) and other sectors (`686 crore)
                                            </span>
                                            <sup>26</sup>
                                        </span>
                                    </Para>
                                )}
                                {['para21'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item].substring(0, 311)}
                                        <span class="tooltip">
                                            {ctx.chapterTwo.Finances["DSA"][item].substring(311, 319)}
                                            <span className="tooltiptext">
                                                Rajiv Gandhi Rural Housing Corporation Limited (`10.24 crore), Karnataka Road Development Corporation Limited (`2.54 crore), Power Company of Karnataka Limited (`37.46 crore), Krishna Bhagya Jala Nigam Limited (`12.01 crore), Karnataka Neeravari Nigam Limited (`18.52 crore), Visvesvaraya Jala Nigam Limited (`10.36 crore), Karnataka State Co-operative Marketing Federation Limited (`8.12 crore) and KEONICS (`2.03 crore)
                                            </span>
                                            <sup>27</sup>
                                        </span>
                                        {ctx.chapterTwo.Finances["DSA"][item].substring(319,)}
                                    </Para>
                                )}
                                {['para22', 'para23', 'para24'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["DSA"].para25}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para26'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapterTwo.Finances["DSA"].para27}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para28'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapterTwo.Finances["DSA"].para29}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para30', 'para31'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapterTwo.Finances["DSA"].para32}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para33'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapterTwo.Finances["DSA"].para34}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para35'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapterTwo.Finances["DSA"].para36}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para37'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crore
                                </p>
                                <Table38 />
                                {['para38'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapterTwo.Finances["DSA"].para39}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para40', 'para41'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapterTwo.Finances["DSA"].para42}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para43', 'para44', 'para45'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className='list'>
                                            {ctx.chapterTwo.Finances["DSA"][item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapterTwo.Finances["DSA"].para46}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para47', 'para48', 'para49', 'para50'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className='list'>
                                            {ctx.chapterTwo.Finances["DSA"][item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Para>
                            {ctx.chapterTwo.Finances["DSA"]["para50a"]}
                        </Para>

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["DSA"].para51}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para52'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                                {['para53', 'para54'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className='list'>
                                            {ctx.chapterTwo.Finances["DSA"][item]}
                                        </li>
                                    </Para>
                                )}
                                <Para >
                                    {ctx.chapterTwo.Finances["DSA"]['para55']}
                                </Para>

                                <Table39 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para56', 'para57', 'para58'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <Table40 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para59', 'para60'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <Chart19 />
                                {['para61'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <Chart20 />
                                <Chart21 />
                                {['para62', 'para63', 'para64', 'para65'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["DSA"][item]}
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
                        <FloatingActionButtons back="/finances/debtmanagement" forward="/finances/conclusion" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["DSA"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2', 'para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <Table35 />
                                <p className="footer">
                                    Source: Finance Accounts<br>
                                    </br>
                                    *Outstanding Public Debt is the sum of outstanding balances under the heads 6003-Internal Debt and 6004-Loans and Advances from Government of India.<br>
                                    </br>
                                    #Net debt available to the State Government is calculated as excess of Public Debt receipts over Public Debt repayment and interest payments on Public Debt.
                                    <br>
                                    </br>
                                    [1]-Quantum Spread is Interest Spread as percentage of debt stock.  Interest Spread is the difference of rate of growth of GSDP and Average interest rate on Outstanding public debt.
                                </p>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                                {['para5', 'para6', 'para7'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapter2kannada.Finances["DSA"][item]}
                                        </li>
                                    </Para>
                                )}
                                {['para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                                {['para9', 'para10', 'para11',
                                    'para12', 'para13', 'para14', 'para15'].map((item, ind) =>
                                        <Para key={ind}>
                                            <li className="list">
                                                {ctx.chapter2kannada.Finances["DSA"][item]}
                                            </li>
                                        </Para>
                                    )}
                                <Title>{ctx.chapter2kannada.Finances["DSA"]['para15a']}</Title>
                                {['para16'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <Table37a />
                                {['para17'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["DSA"].para18}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para19'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crore
                                </p>
                                <Table37 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para20'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item].substring(0, 268)}
                                        <span class="tooltip">
                                            {ctx.chapter2kannada.Finances["DSA"][item].substring(268, 275)}
                                            <span className="tooltiptext">
                                                Irrigation (`16,866 crore), Co-operation (`1,342 crore), Finance (`1,362 crore), Power (`4,075 crore), Housing (`2,189 crore), Transport (`310 crore) and other sectors (`686 crore)
                                            </span>
                                            <sup>26</sup>
                                        </span>
                                    </Para>
                                )}
                                {['para21'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item].substring(0, 311)}
                                        <span class="tooltip">
                                            {ctx.chapter2kannada.Finances["DSA"][item].substring(311, 319)}
                                            <span className="tooltiptext">
                                                Rajiv Gandhi Rural Housing Corporation Limited (`10.24 crore), Karnataka Road Development Corporation Limited (`2.54 crore), Power Company of Karnataka Limited (`37.46 crore), Krishna Bhagya Jala Nigam Limited (`12.01 crore), Karnataka Neeravari Nigam Limited (`18.52 crore), Visvesvaraya Jala Nigam Limited (`10.36 crore), Karnataka State Co-operative Marketing Federation Limited (`8.12 crore) and KEONICS (`2.03 crore)
                                            </span>
                                            <sup>27</sup>
                                        </span>
                                        {ctx.chapter2kannada.Finances["DSA"][item].substring(319,)}
                                    </Para>
                                )}
                                {['para22', 'para23', 'para24'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["DSA"].para25}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para26'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapter2kannada.Finances["DSA"].para27}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para28'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapter2kannada.Finances["DSA"].para29}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para30', 'para31'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapter2kannada.Finances["DSA"].para32}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para33'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapter2kannada.Finances["DSA"].para34}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para35'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapter2kannada.Finances["DSA"].para36}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para37'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crore
                                </p>
                                <Table38 />
                                {['para38'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapter2kannada.Finances["DSA"].para39}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para40', 'para41'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapter2kannada.Finances["DSA"].para42}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para43', 'para44', 'para45'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className='list'>
                                            {ctx.chapter2kannada.Finances["DSA"][item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}><li>{ctx.chapter2kannada.Finances["DSA"].para46}</li></Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para47', 'para48', 'para49', 'para50'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className='list'>
                                            {ctx.chapter2kannada.Finances["DSA"][item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Para>
                            {ctx.chapter2kannada.Finances["DSA"]["para50a"]}
                        </Para>

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["DSA"].para51}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para52'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                                {['para53', 'para54'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className='list'>
                                            {ctx.chapter2kannada.Finances["DSA"][item]}
                                        </li>
                                    </Para>
                                )}
                                <Para >
                                    {ctx.chapter2kannada.Finances["DSA"]['para55']}
                                </Para>

                                <Table39 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para56', 'para57', 'para58'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <Table40 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para59', 'para60'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <Chart19 />
                                {['para61'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
                                    </Para>
                                )}
                                <Chart20 />
                                <Chart21 />
                                {['para62', 'para63', 'para64', 'para65'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["DSA"][item]}
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

export default Dsa