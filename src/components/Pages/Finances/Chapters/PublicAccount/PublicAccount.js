import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import { FaSpinner } from 'react-icons/fa'
import Table28 from '../../../Tables/Chapter2/Table28'
import { Chart13 } from '../../../Charts/Chap2Charts'
import Table29 from '../../../Tables/Chapter2/Table29'

const PublicAccount = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterTwo && ctx.charts2
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/application" forward="/finances/debtmanagement" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                <Para>
                                    {ctx.chapterTwo.Finances["Public Account"].para1}
                                </Para>
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].subheads["Net Public Account balances"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Net Public Account balances"][item]}
                                    </Para>
                                )}
                                <Table28 />
                                <p className="footer">
                                    Note: +ve denotes debit balance and –ve denotes credit balances
                                </p>
                                <Chart13 />
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Net Public Account balances"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                <Para>
                                    {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].para1}
                                </Para>
                                <Para>
                                    {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].para2}
                                </Para>
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item].substring(0, 112)}
                                        <span className="tooltip">
                                            {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item].substring(112, 123)}                                        <span className="tooltiptext">
                                                Green Tax Cess is cess on old vehicles which have completed fifteen years in respect of two
                                                wheelers and non-transport vehicles and seven years in respect of transport vehicles at the time of renewal of Certificate of Registration in addition to the tax levied at the rates specified for the purpose of implementation of various measures to control air pollution.
                                            </span>
                                            <sup>24</sup>
                                        </span>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item].substring(123,)}
                                    </Para>
                                )}
                                {['para5', 'para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para7}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para8', 'para9', 'para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                                <Table29 />
                                {['para11'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para12}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para13', 'para14'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para15}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para16', 'para17', 'para18'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para19}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para20'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                                {['para21', 'para22', 'para23', 'para24'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para25}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para26'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para27}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para28', 'para29', 'para30', 'para31'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
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
                        <FloatingActionButtons back="/finances/application" forward="/finances/debtmanagement" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                <Para>
                                    {ctx.chapter2kannada.Finances["Public Account"].para1}
                                </Para>
                            </div>
                            : ""}
    
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].subheads["Net Public Account balances"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Net Public Account balances"][item]}
                                    </Para>
                                )}
                                <Table28 />
                                <p className="footer">
                                    Note: +ve denotes debit balance and –ve denotes credit balances
                                </p>
                                <Chart13 />
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Net Public Account balances"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
    
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                <Para>
                                    {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].para1}
                                </Para>
                                <Para>
                                    {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].para2}
                                </Para>
                            </div>
                            : ""}
    
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
    
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item].substring(0, 112)}
                                        <span className="tooltip">
                                            {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item].substring(112, 123)}                                        <span className="tooltiptext">
                                                Green Tax Cess is cess on old vehicles which have completed fifteen years in respect of two
                                                wheelers and non-transport vehicles and seven years in respect of transport vehicles at the time of renewal of Certificate of Registration in addition to the tax levied at the rates specified for the purpose of implementation of various measures to control air pollution.
                                            </span>
                                            <sup>24</sup>
                                        </span>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item].substring(123,)}
                                    </Para>
                                )}
                                {['para5', 'para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
    
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para7}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para8', 'para9', 'para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                                <Table29 />
                                {['para11'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
    
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para12}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para13', 'para14'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
    
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para15}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para16', 'para17', 'para18'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
    
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para19}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para20'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                                {['para21', 'para22', 'para23', 'para24'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}
    
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para25}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para26'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
    
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"].para27}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para28', 'para29', 'para30', 'para31'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Public Account"].subheads["Reserve Funds"].subheads["Consolidated Sinking Fund"][item]}
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

export default PublicAccount