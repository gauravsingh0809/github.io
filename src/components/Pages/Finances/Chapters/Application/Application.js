import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import { FaSpinner } from 'react-icons/fa'
import { Chart10, Chart11, Chart12, Chart7, Chart8, Chart9 } from '../../../Charts/Chap2Charts'
import Table13 from '../../../Tables/Chapter2/Table13'
import Table14 from '../../../Tables/Chapter2/Table14'
import Table15 from '../../../Tables/Chapter2/Table15'
import Table16 from '../../../Tables/Chapter2/Table16'
import Table17 from '../../../Tables/Chapter2/Table17'
import Table18 from '../../../Tables/Chapter2/Table18'
import Table19 from '../../../Tables/Chapter2/Table19'
import Table20 from '../../../Tables/Chapter2/Table20'
import Table21 from '../../../Tables/Chapter2/Table21'
import Table22 from '../../../Tables/Chapter2/Table22'
import Table23 from '../../../Tables/Chapter2/Table23'
import Table24 from '../../../Tables/Chapter2/Table24'
import Table25 from '../../../Tables/Chapter2/Table25'
import Table27 from '../../../Tables/Chapter2/Table27'
import Table24a from '../../../Tables/Chapter2/Table24a'
import Table24b from '../../../Tables/Chapter2/Table24b'
import Table26 from '../../../Tables/Chapter2/Table26'

const Application = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref ?
            (ctx.chapterTwo && ctx.charts2
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/resources" forward="/finances/publicaccount" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Growth"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Growth"][item]}
                                    </Para>
                                )}
                                <Table13 />
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Growth"][item]}
                                    </Para>
                                )}
                                <Chart7 />
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Growth"][item]}
                                    </Para>
                                )}
                                <Chart8 />
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Growth"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2', 'para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"][item]}
                                    </Para>
                                )}
                                <Table14 />
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"][item]}
                                    </Para>
                                )}
                                <Chart9 />
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"][item]}
                                    </Para>
                                )}
                                <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Major changes in Revenue Expenditure"].title}</Title>
                                {ctx.isStatus.status1
                                    ? <div>
                                        {['para1'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Major changes in Revenue Expenditure"][item]}
                                            </Para>
                                        )}
                                        <Table15 />
                                        {['para2'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Major changes in Revenue Expenditure"][item]}
                                            </Para>
                                        )}
                                    </div>
                                    : ""}

                                <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Object Headwise Expenditure"].title}</Title>
                                {ctx.isStatus.status1
                                    ? <div>
                                        {['para1'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Object Headwise Expenditure"][item]}
                                            </Para>
                                        )}
                                        <Table16 />
                                        <p className="footer">
                                            *Includes object heads Consolidated Salary, pay of officers, pay of staff, Interim Relief, Dearness Allowance, Other allowances, medical allowance and reimbursement of medical expenses.
                                        </p>
                                        {['para2'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Object Headwise Expenditure"][item]}
                                            </Para>
                                        )}
                                    </div>
                                    : ""}
                                <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Committed Expenditure"].title}</Title>
                                {ctx.isStatus.status1
                                    ? <div>
                                        {['para1'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Committed Expenditure"][item]}
                                            </Para>
                                        )}
                                        <Table17 />
                                        <p className="footer">
                                            #includes interest on off-budget borrowings.
                                            <br></br>
                                            @excludes subsidies in the form of financial assistance.
                                            <br></br>
                                            ^Does not include Daily wages and wages to Contract/Outsourced employees.
                                            <br></br>
                                            *includes non-salary component of PRIs and other expenditure related to PRIs and ULBs

                                        </p>
                                        <Chart10 />
                                        {['para2'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Committed Expenditure"][item]}
                                            </Para>
                                        )}
                                    </div>
                                    : ""}
                                <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Salaries and Wages"].title}</Title>
                                {ctx.isStatus.status1
                                    ? <div>
                                        {['para1', 'para2'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Salaries and Wages"][item]}
                                            </Para>
                                        )}
                                    </div>
                                    : ""}
                            </div>
                            : ""}


                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"][item]}
                                    </Para>
                                )}
                                {['para2'].map((item, ind) =>
                                    <Title key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"][item]}
                                    </Title>
                                )}
                                {['para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"][item]}
                                    </Para>
                                )}
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"][item]}
                                        </li>
                                    </Para>
                                )}
                                <Para>
                                    <li className="list">
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para6'].substring(0, 55)}
                                        <span className="tooltip">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para6'].substring(55, 62)}
                                            <span className="tooltiptext">Refers to the contribution the employee had to make from the date of his entry into service to the date of implementation of the scheme.</span>
                                            <sup>12</sup>
                                        </span>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para6'].substring(62, 102)}
                                        <span className="tooltip">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para6'].substring(102, 114)}
                                            <span className="tooltiptext">Till 31 March 2020, the employee contribution was `4,316.58 crore and the matching contribution made by State Government was `4,791.79 crore.</span>
                                            <sup>13</sup>
                                        </span>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para6'].substring(114,)}
                                    </li>
                                </Para>
                                <Para>
                                    <li className="list">
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para7']}
                                    </li>
                                </Para>
                                <Para>
                                    <li className="list">
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para8']}
                                    </li>
                                </Para>
                                {['para9'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Interest Payments"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        <span className="tooltip">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Interest Payments"][item].substring(0, 17)}
                                            <span className="tooltiptext">For 2019-20, for interest payments, XIV FC made an assessment of `17,168 crore, while the State Government projected `19,060 crore and `18,990 crore in its budget and MTFP respectively.  However, the actual interest payment was `19,903 crore.</span>
                                            <sup>14</sup>
                                        </span>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Interest Payments"][item].substring(17,)}
                                    </Para>
                                )}
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Interest Payments"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"][item]}
                                    </Para>
                                )}
                                <Table18 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"][item]}
                                    </Para>
                                )}
                                <Chart11 />
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li>
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"][item]}
                                        </li>
                                    </Para>
                                )}
                                {['para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"][item]}
                                    </Para>
                                )}
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"][item]}
                                        </span>
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Financial Assistance"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Financial Assistance"][item]}
                                    </Para>
                                )}
                                <Table19 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para2', 'para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Financial Assistance"][item]}
                                    </Para>
                                )}
                                <Table20 />
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Financial Assistance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Capital Expenditure"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Capital Expenditure"][item]}
                                    </Para>
                                )}
                                <Chart12 />
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Capital Expenditure"][item]}
                                    </Para>
                                )}
                                <Table21 />
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Capital Expenditure"][item]}
                                    </Para>
                                )}
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        <span style={{ fontWeight: 'bolder' }}>
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Capital Expenditure"][item]}
                                        </span>
                                    </Para>
                                )}
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Capital Expenditure"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item].substring(0, 66)}
                                        <span className="tooltip">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item].substring(65, 68)}
                                            <span className="tooltiptext">includes investment of `68 crore in 16 non-working Government Companies.</span>
                                            <sup>15</sup>
                                        </span>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item].substring(68, 615)}
                                        <span className="tooltip">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item].substring(615, 622)}
                                            <span className="tooltiptext">Irrigation (`36,779 crore), Power (`10,375.11 crore), Infrastructure (`4,819 crore), Financing
                                                (`3,455 crore), Transport (`1,513 crore), Social (`1,997 crore), Housing (`1,451 crore), Industries (`1,048 crore), Construction (`2 crore) and Other sectors (`118 crore).
                                            </span>
                                            <sup>16</sup>
                                        </span>
                                    </Para>
                                )}
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item]}
                                    </Para>
                                )}
                                <Para>
                                    <li>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"].para3}
                                    </li>
                                </Para>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item]}
                                    </Para>
                                )}
                                <Table22 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item]}
                                    </Para>
                                )}
                                <Para>
                                    <li>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"].para6}
                                    </li>
                                </Para>
                                {['para7'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item]}
                                    </Para>
                                )}
                                <Table23 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para8', 'para9', 'para10', 'para11'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"][item]}
                                    </Para>
                                )}
                                <Table24 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para2', 'para3', 'para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"][item]}
                                        </li>
                                    </Para>
                                )}
                                <Para>
                                    <li className="list">
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"]['para6'].substring(0, 240)}
                                        <span className="tooltip">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"]['para6'].substring(240, 242)}
                                            <span className="tooltiptext">
                                                In 2018-19, 19 out of 842 institutions have furnished the information
                                            </span>
                                            <sup>17</sup>
                                        </span>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"]['para6'].substring(242,)}
                                    </li>
                                </Para>
                                <Para>
                                    <li className="list">
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"]['para7']}
                                    </li>
                                </Para>
                                <Para>
                                    <span className="list">
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"]['para8']}
                                    </span>
                                </Para>
                                {['para9', 'para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                                    </Para>
                                )}
                                <Table24a />
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(0, 72)}
                                        <span className="tooltip">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(72, 89)}
                                            <span className="tooltiptext">
                                                Latest finalized accounts as of September 2019.
                                            </span>
                                            <sup>18</sup>
                                        </span>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(89,)}
                                    </Para>
                                )}
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                                    </Para>
                                )}
                                <Table24b />
                                <p className="footer">
                                    Source: Report of the C&AG on PSU – 2018-19
                                </p>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(0, 118)}
                                        <span className="tooltip">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(118, 123)}
                                            <span className="tooltiptext">
                                                Equity: Karnataka Minorities Development Corporation Limited, Karnataka State Industrial Infrastructure and Development Corporation Limited, Krishna Bhagya Jala Nigam Limited, Karnataka Neeravari Nigam Limited, Cauvery Neeravari Nigama Limited, Vishveswaraya Jala Nigam Limited,
                                                Loans: Rajiv Gandhi Housing Corporation Limited, Vishveswaraya Jala Nigam Limited and The Mysore Paper Mills Limited.
                                            </span>
                                            <sup>19</sup>
                                        </span>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(123,)}
                                    </Para>
                                )}
                                <Para>
                                    <li>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"]['para5']}
                                    </li>
                                </Para>
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(0, 82)}
                                        <span className="tooltip">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(82, 86)}
                                            <span className="tooltiptext">
                                                Statutory corporations-6, non-working Government companies-13, working Government companies - 95
                                            </span>
                                            <sup>20</sup>
                                        </span>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(86,)}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {['para7'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                            </Para>
                        )}
                        {['para8'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                            </Para>
                        )}
                        <Para>
                            <li>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"]['para9']}
                            </li>
                        </Para>
                        {['para10'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                            </Para>
                        )}
                        <Para>
                            <li>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"]['para11']}
                            </li>
                        </Para>
                        {['para12'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                            </Para>
                        )}
                        {['para13'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(0, 71)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(71, 82)}
                                    <span className="tooltiptext">
                                        Measures the profit or loss made in a fixed year relating to the amount of money invested in the form of equity and long term loans and is expressed as a percentage of profit to total investment.
                                    </span>
                                    <sup>21</sup>
                                </span>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(82, 94)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(94, 100)}
                                    <span className="tooltiptext">
                                        Measure of performance calculated by dividing net profit by shareholder’s funds.
                                    </span>
                                    <sup>22</sup>
                                </span>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(100, 124)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(124, 133)}
                                    <span className="tooltiptext">
                                        Financial ratio that measures the company’s profitability and the efficiency with which its capital is used and is calculated by dividing the company’s earnings before interest and taxes by capital employed.
                                    </span>
                                    <sup>23</sup>
                                </span>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item].substring(133,)}
                            </Para>
                        )}
                        {['para14', 'para15', 'para16', 'para17', 'para18'].map((item, ind) =>
                            <Para key={ind}>
                                <li className="list">
                                    {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                                </li>
                            </Para>
                        )}
                        <Para>
                            <li>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"]['para19']}
                            </li>
                        </Para>
                        {['para20'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                            </Para>
                        )}
                        <Para>
                            <li>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"]['para21']}
                            </li>
                        </Para>
                        {['para22', 'para23', 'para24'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                            </Para>
                        )}
                        <Para>
                            <li>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"]['para25']}
                            </li>
                        </Para>
                        {['para26'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                            </Para>
                        )}
                        {['para26a', 'para27', 'para28', 'para29'].map((item, ind) =>
                            <Para key={ind}>
                                <li className="list">
                                    {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                                </li>
                            </Para>
                        )}
                        <Para>
                            <li>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"]['para30']}
                            </li>
                        </Para>
                        {['para31', 'para32', 'para33'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments in Govt"][item]}
                            </Para>
                        )}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                                    </Para>
                                )}

                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para2', 'para3', 'para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Application of Resources"].subheads["Expenditure priorities"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Expenditure priorities"][item]}
                                    </Para>
                                )}
                                <Table27 />
                                <p className="footer">
                                    Source: Economic Advisor<br>
                                    </br>
                                    * The GSDP figures of Kerala has been obtained from AG Kerala<br>
                                    </br>
                                    AE: Aggregate Expenditure, CE: Capital Expenditure, DE: Development Expenditure (includes total expenditure under social and economic sectors)<br>
                                    </br>
                                    Source: For GSDP, data as available on 31.07.2020 in the website of Ministry of Statistics and Programme Implementation (MoSPI).
                                </p>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Application of Resources"].subheads["Expenditure priorities"][item]}
                                    </Para>
                                )}
                                {['para3', 'para4', 'para5', 'para6', 'para7'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapterTwo.Finances["Application of Resources"].subheads["Expenditure priorities"][item]}
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
            : (ctx.chapter2kannada && ctx.charts2
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/resources" forward="/finances/publicaccount" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Growth"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Growth"][item]}
                                    </Para>
                                )}
                                <Table13 />
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Growth"][item]}
                                    </Para>
                                )}
                                <Chart7 />
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Growth"][item]}
                                    </Para>
                                )}
                                <Chart8 />
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Growth"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2', 'para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"][item]}
                                    </Para>
                                )}
                                <Table14 />
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"][item]}
                                    </Para>
                                )}
                                <Chart9 />
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"][item]}
                                    </Para>
                                )}
                                <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Major changes in Revenue Expenditure"].title}</Title>
                                {ctx.isStatus.status1
                                    ? <div>
                                        {['para1'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Major changes in Revenue Expenditure"][item]}
                                            </Para>
                                        )}
                                        <Table15 />
                                        {['para2'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Major changes in Revenue Expenditure"][item]}
                                            </Para>
                                        )}
                                    </div>
                                    : ""}

                                <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Object Headwise Expenditure"].title}</Title>
                                {ctx.isStatus.status1
                                    ? <div>
                                        {['para1'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Object Headwise Expenditure"][item]}
                                            </Para>
                                        )}
                                        <Table16 />
                                        <p className="footer">
                                            *Includes object heads Consolidated Salary, pay of officers, pay of staff, Interim Relief, Dearness Allowance, Other allowances, medical allowance and reimbursement of medical expenses.
                                        </p>
                                        {['para2'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Object Headwise Expenditure"][item]}
                                            </Para>
                                        )}
                                    </div>
                                    : ""}
                                <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Committed Expenditure"].title}</Title>
                                {ctx.isStatus.status1
                                    ? <div>
                                        {['para1'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Committed Expenditure"][item]}
                                            </Para>
                                        )}
                                        <Table17 />
                                        <p className="footer">
                                            #includes interest on off-budget borrowings.
                                            <br></br>
                                            @excludes subsidies in the form of financial assistance.
                                            <br></br>
                                            ^Does not include Daily wages and wages to Contract/Outsourced employees.
                                            <br></br>
                                            *includes non-salary component of PRIs and other expenditure related to PRIs and ULBs

                                        </p>
                                        <Chart10 />
                                        {['para2'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Committed Expenditure"][item]}
                                            </Para>
                                        )}
                                    </div>
                                    : ""}
                                <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Salaries and Wages"].title}</Title>
                                {ctx.isStatus.status1
                                    ? <div>
                                        {['para1', 'para2'].map((item, ind) =>
                                            <Para key={ind}>
                                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Salaries and Wages"][item]}
                                            </Para>
                                        )}
                                    </div>
                                    : ""}
                            </div>
                            : ""}


                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"][item]}
                                    </Para>
                                )}
                                {['para2'].map((item, ind) =>
                                    <Title key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"][item]}
                                    </Title>
                                )}
                                {['para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"][item]}
                                    </Para>
                                )}
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"][item]}
                                        </li>
                                    </Para>
                                )}
                                <Para>
                                    <li className="list">
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para6'].substring(0, 55)}
                                        <span className="tooltip">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para6'].substring(55, 66)}
                                            <span className="tooltiptext">Refers to the contribution the employee had to make from the date of his entry into service to the date of implementation of the scheme.</span>
                                            <sup>12</sup>
                                        </span>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para6'].substring(66, 84)}
                                        <span className="tooltip">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para6'].substring(84, 93)}
                                            <span className="tooltiptext">Till 31 March 2020, the employee contribution was `4,316.58 crore and the matching contribution made by State Government was `4,791.79 crore.</span>
                                            <sup>13</sup>
                                        </span>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para6'].substring(93,)}
                                    </li>
                                </Para>
                                <Para>
                                    <li className="list">
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para7']}
                                    </li>
                                </Para>
                                <Para>
                                    <li className="list">
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"]['para8']}
                                    </li>
                                </Para>
                                {['para9'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Pensions"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>
                            <span className="tooltip">
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Interest Payments"].title.substring(0,)}
                                <span className="tooltiptext">For 2019-20, for interest payments, XIV FC made an assessment of `17,168 crore, while the State Government projected `19,060 crore and `18,990 crore in its budget and MTFP respectively.  However, the actual interest payment was `19,903 crore.</span>
                                <sup>14</sup>
                            </span>
                        </Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Interest Payments"][item]}
                                    </Para>
                                )}
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Interest Payments"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"][item]}
                                    </Para>
                                )}
                                <Table18 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"][item]}
                                    </Para>
                                )}
                                <Chart11 />
                                {['para3'].map((item, ind) =>
                                    <Title key={ind}>
                                        <li>
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"][item]}
                                        </li>
                                    </Title>
                                )}
                                {['para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"][item]}
                                    </Para>
                                )}
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Subsidies"][item]}
                                        </span>
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Financial Assistance"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Financial Assistance"][item]}
                                    </Para>
                                )}
                                <Table19 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para2', 'para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Financial Assistance"][item]}
                                    </Para>
                                )}
                                <Table20 />
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Revenue Expenditure"].subheads["Financial Assistance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Capital Expenditure"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Capital Expenditure"][item]}
                                    </Para>
                                )}
                                <Chart12 />
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Capital Expenditure"][item]}
                                    </Para>
                                )}
                                <Table21 />
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Capital Expenditure"][item]}
                                    </Para>
                                )}
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        <span style={{ fontWeight: 'bolder' }}>
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Capital Expenditure"][item]}
                                        </span>
                                    </Para>
                                )}
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Capital Expenditure"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item].substring(0, 66)}
                                        <span className="tooltip">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item].substring(65, 68)}
                                            <span className="tooltiptext">includes investment of `68 crore in 16 non-working Government Companies.</span>
                                            <sup>15</sup>
                                        </span>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item].substring(68, 615)}
                                        <span className="tooltip">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item].substring(615, 622)}
                                            <span className="tooltiptext">Irrigation (`36,779 crore), Power (`10,375.11 crore), Infrastructure (`4,819 crore), Financing
                                                (`3,455 crore), Transport (`1,513 crore), Social (`1,997 crore), Housing (`1,451 crore), Industries (`1,048 crore), Construction (`2 crore) and Other sectors (`118 crore).
                                            </span>
                                            <sup>16</sup>
                                        </span>
                                    </Para>
                                )}
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item]}
                                    </Para>
                                )}
                                <Para>
                                    <li>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"].para3}
                                    </li>
                                </Para>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item]}
                                    </Para>
                                )}
                                <Table22 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item]}
                                    </Para>
                                )}
                                <Para>
                                    <li>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"].para6}
                                    </li>
                                </Para>
                                {['para7'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item]}
                                    </Para>
                                )}
                                <Table23 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para8', 'para9', 'para10', 'para11'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Investments"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"][item]}
                                    </Para>
                                )}
                                <Table24 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para2', 'para3', 'para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"][item]}
                                        </li>
                                    </Para>
                                )}
                                <Para>
                                    <li className="list">
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"]['para6'].substring(0, 217)}
                                        <span className="tooltip">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"]['para6'].substring(217, 220)}
                                            <span className="tooltiptext">
                                                In 2018-19, 19 out of 842 institutions have furnished the information
                                            </span>
                                            <sup>17</sup>
                                        </span>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"]['para6'].substring(220,)}
                                    </li>
                                </Para>
                                <Para>
                                    <li className="list">
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"]['para7']}
                                    </li>
                                </Para>
                                <Para>
                                    <span className="list">
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"]['para8']}
                                    </span>
                                </Para>
                                {['para9', 'para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Loans and advances"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                                    </Para>
                                )}
                                <Table24a />
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(0, 72)}
                                        <span className="tooltip">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(72, 89)}
                                            <span className="tooltiptext">
                                                Latest finalized accounts as of September 2019.
                                            </span>
                                            <sup>18</sup>
                                        </span>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(89,)}
                                    </Para>
                                )}
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                                    </Para>
                                )}
                                <Table24b />
                                <p className="footer">
                                    Source: Report of the C&AG on PSU – 2018-19
                                </p>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        <span className="tooltip">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(0,7)}
                                            <span className="tooltiptext">
                                                Equity: Karnataka Minorities Development Corporation Limited, Karnataka State Industrial Infrastructure and Development Corporation Limited, Krishna Bhagya Jala Nigam Limited, Karnataka Neeravari Nigam Limited, Cauvery Neeravari Nigama Limited, Vishveswaraya Jala Nigam Limited,
                                                Loans: Rajiv Gandhi Housing Corporation Limited, Vishveswaraya Jala Nigam Limited and The Mysore Paper Mills Limited.
                                            </span>
                                            <sup>19</sup>
                                        </span>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(7,)}
                                    </Para>
                                )}
                                <Title>
                                    <li>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"]['para5']}
                                    </li>
                                </Title>
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(0, 129)}
                                        <span className="tooltip">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(129, 133)}
                                            <span className="tooltiptext">
                                                Statutory corporations-6, non-working Government companies-13, working Government companies - 95
                                            </span>
                                            <sup>20</sup>
                                        </span>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(133,)}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {['para7'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}
                        {['para8'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}
                        <Title>
                            <li>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"]['para9']}
                            </li>
                        </Title>
                        {['para10'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}
                        <Title>
                            <li>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"]['para11']}
                            </li>
                        </Title>
                        {['para12'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}
                        {['para13'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(0, 71)}
                                <span className="tooltip">
                                    {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(71, 82)}
                                    <span className="tooltiptext">
                                        Measures the profit or loss made in a fixed year relating to the amount of money invested in the form of equity and long term loans and is expressed as a percentage of profit to total investment.
                                    </span>
                                    <sup>21</sup>
                                </span>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(82, 94)}
                                <span className="tooltip">
                                    {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(94, 100)}
                                    <span className="tooltiptext">
                                        Measure of performance calculated by dividing net profit by shareholder’s funds.
                                    </span>
                                    <sup>22</sup>
                                </span>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(100, 124)}
                                <span className="tooltip">
                                    {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(124, 133)}
                                    <span className="tooltiptext">
                                        Financial ratio that measures the company’s profitability and the efficiency with which its capital is used and is calculated by dividing the company’s earnings before interest and taxes by capital employed.
                                    </span>
                                    <sup>23</sup>
                                </span>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item].substring(133,)}
                            </Para>
                        )}
                        {['para14', 'para15', 'para16', 'para17', 'para18'].map((item, ind) =>
                            <Para key={ind}>
                                <li className="list">
                                    {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                                </li>
                            </Para>
                        )}
                        <Title>
                            <li>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"]['para19']}
                            </li>
                        </Title>
                        {['para20'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}
                        <Title>
                            <li>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"]['para21']}
                            </li>
                        </Title>
                        {['para22', 'para23', 'para24'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}
                        <Title>
                            <li>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"]['para25']}
                            </li>
                        </Title>
                        {['para26'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}
                        {[ 'para27', 'para28', 'para29'].map((item, ind) =>
                            <Para key={ind}>
                                <li className="list">
                                    {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                                </li>
                            </Para>
                        )}
                        <Para>
                            <li>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"]['para30']}
                            </li>
                        </Para>
                        <Title>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"]["para31"]}
                        </Title>
                        {['para32', 'para33'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}
                        {['para34'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"]["para35"]}</Title>
                        {['para36'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}
                        <Table25 />
                        <Table26 />
                        {['para37', 'para38', 'para39', 'para40'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                            </Para>
                        )}


                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                                    </Para>
                                )}
                                <Table25 />
                                <Table26 />
                                <p className="footer">
                                    Source: Finance Accounts
                                </p>
                                {['para2', 'para3', 'para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Quality of Capital Expenditure"].subheads["Capital locked"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Application of Resources"].subheads["Expenditure priorities"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Expenditure priorities"][item]}
                                    </Para>
                                )}
                                <Table27 />
                                <p className="footer">
                                    Source: Economic Advisor<br>
                                    </br>
                                    * The GSDP figures of Kerala has been obtained from AG Kerala<br>
                                    </br>
                                    AE: Aggregate Expenditure, CE: Capital Expenditure, DE: Development Expenditure (includes total expenditure under social and economic sectors)<br>
                                    </br>
                                    Source: For GSDP, data as available on 31.07.2020 in the website of Ministry of Statistics and Programme Implementation (MoSPI).
                                </p>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Expenditure priorities"][item]}
                                    </Para>
                                )}
                                {['para3', 'para4', 'para5', 'para6', 'para7'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapter2kannada.Finances["Application of Resources"].subheads["Expenditure priorities"][item]}
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

export default Application