import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import Table3 from '../../../Tables/Chapter1/Table3'
import { FaSpinner } from 'react-icons/fa'
import Table3kan from '../../../Tables/Chapter1kan/Table3'



const AssetsSnapshot = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref 
        ? (ctx.chapterOne 
            ? <div >
                <Navbar />
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/overview/snapshot-finances" forward="/overview/fiscalparams" />
                    <Title status={ctx.isStatus.status8} id={8}>{ctx.chapterOne.Overview["Snapshot of Assets and Liabilities of the Government"].title}</Title>
                    {['para1'].map((item,i) =>
                        <Para key={i/10}>
                            {ctx.chapterOne.Overview["Snapshot of Assets and Liabilities of the Government"][item]}
                        </Para>
                    )}
                    <p className="footer">
                        In crores
                    </p>
                    <Table3 />
                    <p className="footer">
                        Source: Finance Accounts
                    </p>
                    {['para2'].map((item,ind) =>
                        <Para key={ind/10}>
                            {ctx.chapterOne.Overview["Snapshot of Assets and Liabilities of the Government"][item]}
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
                        <FloatingActionButtons back="/overview/snapshot-finances" forward="/overview/fiscalparams" />
                        <Title status={ctx.isStatus.status8} id={8}>{ctx.chapter1kannada.Overview["Snapshot of Assets and Liabilities of the Government"].title}</Title>
                        {['para1'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Snapshot of Assets and Liabilities of the Government"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table3kan />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {['para2'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Snapshot of Assets and Liabilities of the Government"][item]}
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

export default AssetsSnapshot