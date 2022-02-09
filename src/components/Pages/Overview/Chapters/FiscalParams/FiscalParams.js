import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import CustomTooltip from '../../../../CustomTooltip/CustomTooltip'
import Table4 from '../../../Tables/Chapter1/Table4'
import { Chart5, Chart6 } from '../../../Charts/Charts'
import { FaSpinner } from 'react-icons/fa'



const FiscalParams = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref ?
            (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/snapshot-assets" forward="/overview/fisc-situation" />
                        <Title status={ctx.isStatus.status9} id={9}>{ctx.chapterOne.Overview["Fiscal parameters"].title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.chapterOne.Overview["Fiscal parameters"][item]}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status10} id={10}>{ctx.chapterOne.Overview["Fiscal parameters"].subheads["Trends in DeficitSurplus"].title}</Title>
                        {['para1'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapterOne.Overview["Fiscal parameters"].subheads["Trends in DeficitSurplus"][item]}
                            </Para>
                        )}
                        <Chart5 />
                        <Chart6 />
                        {['para2'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapterOne.Overview["Fiscal parameters"].subheads["Trends in DeficitSurplus"][item].substring(0, 92)}
                                <CustomTooltip
                                    tooltip="Growth rate of Revenue Receipts and Revenue Expenditure for 2019-20 is 6.34 per cent and 6.06 per cent respectively. The difference between these two is 0.28 per cent."
                                    content={ctx.chapterOne.Overview["Fiscal parameters"].subheads["Trends in DeficitSurplus"][item].substring(92, 105)}
                                    supScript="3" />
                                {ctx.chapterOne.Overview["Fiscal parameters"].subheads["Trends in DeficitSurplus"][item].substring(105,)}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status11} id={11}>{ctx.chapterOne.Overview["Fiscal parameters"].subheads["Trends in Fiscal Liabilities and GSDP"].title}</Title>
                        {['para1'].map((item,i) =>
                            <Para key={i}>
                                {ctx.chapterOne.Overview["Fiscal parameters"].subheads["Trends in Fiscal Liabilities and GSDP"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table4 />
                        {['para2', 'para3'].map((item, ind) =>
                            <Para key ={ind/10}>
                                {ctx.chapterOne.Overview["Fiscal parameters"].subheads["Trends in Fiscal Liabilities and GSDP"][item]}
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
                        <Title status={ctx.isStatus.status9} id={9}>{ctx.chapter1kannada.Overview["Fiscal parameters"].title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Fiscal parameters"][item]}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status10} id={10}>{ctx.chapter1kannada.Overview["Fiscal parameters"].subheads["Trends in DeficitSurplus"].title}</Title>
                        {['para1'].map((item,i) =>
                            <Para key={i}>
                                {ctx.chapter1kannada.Overview["Fiscal parameters"].subheads["Trends in DeficitSurplus"][item]}
                            </Para>
                        )}
                        <Chart5 />
                        <Chart6 />
                        {['para2'].map((item,i) =>
                            <Para key={i}>
                                {ctx.chapter1kannada.Overview["Fiscal parameters"].subheads["Trends in DeficitSurplus"][item].substring(0, 76)}
                                <CustomTooltip
                                    tooltip="ರಾಜಸ್ವ ಸ್ವೀಕೃತಿಗಳು ಮತ್ತು ರಾಜಸ್ವ ವೆಚ್ಚದ ವೃದ್ಧಿಯು 2019-20ರಲ್ಲಿ ಕ್ರಮವಾಗಿ ಶೇಕಡ 6.34 ಮತ್ತು 6.06ರಷ್ಟಿದೆ. ಇವೆರಡರ ವ್ಯತ್ಯಾಸವು ಶೇಕಡ 0.28ರಷ್ಟಿದೆ."
                                    content={ctx.chapter1kannada.Overview["Fiscal parameters"].subheads["Trends in DeficitSurplus"][item].substring(76, 85)}
                                    supScript="3" />
                                {ctx.chapter1kannada.Overview["Fiscal parameters"].subheads["Trends in DeficitSurplus"][item].substring(85,)}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status11} id={11}>{ctx.chapter1kannada.Overview["Fiscal parameters"].subheads["Trends in Fiscal Liabilities and GSDP"].title}</Title>
                        {['para1'].map((item,i) =>
                            <Para key={i}>
                                {ctx.chapter1kannada.Overview["Fiscal parameters"].subheads["Trends in Fiscal Liabilities and GSDP"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table4 />
                        {['para2', 'para3'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Fiscal parameters"].subheads["Trends in Fiscal Liabilities and GSDP"][item]}
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