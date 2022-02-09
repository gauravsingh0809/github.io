import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import Table7 from '../../../Tables/Chapter1/Table7'
import { FaSpinner } from 'react-icons/fa'


const Impact = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/fisc-situation" forward="/finances" />
                        <Title status={ctx.isStatus.status15} id={15}>{ctx.chapterOne.Overview["Impact"].title}</Title>
                        {['para1'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Overview["Impact"].subheads["Fiscal Indicators"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table7 />
                        <p className="footer">
                            Notes to Account 2019-20
                        </p>
                        {['para2', 'para3', 'para4', 'para5', 'para6', 'para7'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list" >
                                    {ctx.chapterOne.Overview["Impact"].subheads["Fiscal Indicators"][item]}
                                </li>
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
                        <FloatingActionButtons back="/overview/fisc-situation" forward="/finances" />
                        <Title status={ctx.isStatus.status15} id={15}>{ctx.chapter1kannada.Overview["Impact"].title}</Title>
                        {['para1'].map((item) =>
                            <Para>
                                {ctx.chapter1kannada.Overview["Impact"].subheads["Fiscal Indicators"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table7 />
                        <p className="footer">
                            Notes to Account 2019-20
                        </p>
                        <Para>
                            {ctx.chapter1kannada.Overview["Impact"].subheads["Fiscal Indicators"]['para2']}
                        </Para>
                        {['para3', 'para4', 'para5', 'para6', 'para7'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list" >
                                    {ctx.chapter1kannada.Overview["Impact"].subheads["Fiscal Indicators"][item]}
                                </li>
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

export default Impact