import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import Table2 from '../../../Tables/Chapter1/Table2'
import { FaSpinner } from 'react-icons/fa'


const FinanceSnapshot = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref ?
            (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/budgetprocess" forward="/overview/snapshot-assets" />
                        <Title status={ctx.isStatus.status7} id={7}>{ctx.chapterOne.Overview["Snapshot of Finances"].title}</Title>
                        {['para1'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapterOne.Overview["Snapshot of Finances"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table2 />
                        <p className="footer">
                            *Tax Revenue Includes Major Heads 0005 – CGST (`8,773.82 crore), 0006 – SGST (`42,147.23 crore) and 0008 – IGST (Nil).
                        </p>
                        {['para2'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.chapterOne.Overview["Snapshot of Finances"][item]}
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
                        <Title status={ctx.isStatus.status7} id={7}>{ctx.chapter1kannada.Overview["Snapshot of Finances"].title}</Title>
                        {['para1'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Snapshot of Finances"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table2 />
                        <p className="footer">
                            *ತೆರಿಗೆ ರಾಜಸ್ವವು ಪ್ರಧಾನ ಲೆಕ್ಕಶೀರ್ಷಿಕೆ 0005 –ಕೇಂದ್ರ ಸರಕು ಮತ್ತು ಸೇವೆಗಳ ತೆರಿಗೆ (`8,773.82 ಕೋಟಿ) 0006 –ರಾಜ್ಯ ಸರಕು ಮತ್ತು ಸೇವೆಗಳ ತೆರಿಗೆ (`42,147.23 ಕೋಟಿ) ಮತ್ತು 0008-ಸಮಗ್ರ ಸರಕು ಮತ್ತು ಸೇವೆಗಳ ತೆರಿಗೆ (ಶೂನ್ಯ) ಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.
                        </p>
                        {['para2'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Snapshot of Finances"][item]}
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