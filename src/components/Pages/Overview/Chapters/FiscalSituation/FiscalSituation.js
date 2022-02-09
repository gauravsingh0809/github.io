import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import CustomTooltip from '../../../../CustomTooltip/CustomTooltip'
import './../../Overview.css'
import Table5 from '../../../Tables/Chapter1/Table5'
import Table6 from '../../../Tables/Chapter1/Table6'
import { FaSpinner } from 'react-icons/fa'


const FiscalSituation = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/fiscalparams" forward="/overview/impact" />
                        <Title status={ctx.isStatus.status12} id={12}>{ctx.chapterOne.Overview["Fiscal situation of the State"].title}</Title>
                        {['para1'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapterOne.Overview["Fiscal situation of the State"][item]}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status13} id={13}>{ctx.chapterOne.Overview["Fiscal situation of the State"].subheads["KFRA targets on key fiscal parameters and achievements thereon"].title}</Title>
                        {['para1'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapterOne.Overview["Fiscal situation of the State"].subheads["KFRA targets on key fiscal parameters and achievements thereon"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table5 />
                        {['para2'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapterOne.Overview["Fiscal situation of the State"].subheads["KFRA targets on key fiscal parameters and achievements thereon"][item].substring(0, 190)}
                                <CustomTooltip
                                    tooltip="Borrowings by PSUs and SPVs are Off-budget borrowings"
                                    content={ctx.chapterOne.Overview["Fiscal situation of the State"].subheads["KFRA targets on key fiscal parameters and achievements thereon"][item].substring(190, 215)}
                                    supScript="4" />
                                {ctx.chapterOne.Overview["Fiscal situation of the State"].subheads["KFRA targets on key fiscal parameters and achievements thereon"][item].substring(215,)}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status14} id={14}>{ctx.chapterOne.Overview["Fiscal situation of the State"].subheads["Actuals vis-à-vis projections of Medium Term Fiscal Plan for 2019-20"].title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.chapterOne.Overview["Fiscal situation of the State"].subheads["Actuals vis-à-vis projections of Medium Term Fiscal Plan for 2019-20"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table6 />
                        {['para3'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapterOne.Overview["Fiscal situation of the State"].subheads["Actuals vis-à-vis projections of Medium Term Fiscal Plan for 2019-20"][item]}
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
                        <FloatingActionButtons back="/overview/fiscalparams" forward="/overview/impact" />
                        <Title status={ctx.isStatus.status12} id={12}>{ctx.chapter1kannada.Overview["Fiscal situation of the State"].title}</Title>
                        {['para1'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Fiscal situation of the State"][item]}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status13} id={13}>{ctx.chapter1kannada.Overview["Fiscal situation of the State"].subheads["KFRA targets on key fiscal parameters and achievements thereon"].title}</Title>
                        {['para1'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Fiscal situation of the State"].subheads["KFRA targets on key fiscal parameters and achievements thereon"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table5 />
                        {['para2'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Fiscal situation of the State"].subheads["KFRA targets on key fiscal parameters and achievements thereon"][item].substring(0, 189)}
                                <CustomTooltip
                                    tooltip="ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳು ಮತ್ತು ವಿಶೇಷ ಉದ್ಧೇಶಿತ ಸಾಧನಗಳ ಸಾಲಗಳು ಆಯವ್ಯಯೇತರ ಸಾಲಗಳಾಗಿವೆ."
                                    content={ctx.chapter1kannada.Overview["Fiscal situation of the State"].subheads["KFRA targets on key fiscal parameters and achievements thereon"][item].substring(189, 205)}
                                    supScript="4" />
                                {ctx.chapter1kannada.Overview["Fiscal situation of the State"].subheads["KFRA targets on key fiscal parameters and achievements thereon"][item].substring(205,)}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status14} id={14}>{ctx.chapter1kannada.Overview["Fiscal situation of the State"].subheads["Actuals vis-à-vis projections of Medium Term Fiscal Plan for 2019-20"].title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Fiscal situation of the State"].subheads["Actuals vis-à-vis projections of Medium Term Fiscal Plan for 2019-20"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table6 />
                        {['para3'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.chapter1kannada.Overview["Fiscal situation of the State"].subheads["Actuals vis-à-vis projections of Medium Term Fiscal Plan for 2019-20"][item]}
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

export default FiscalSituation