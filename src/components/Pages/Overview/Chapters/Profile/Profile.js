import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import CustomTooltip from '../../../../CustomTooltip/CustomTooltip'
import Table1 from '../../../Tables/Chapter1/Table1'
import Chart1 from '../../../Charts/Charts'
import { Typography } from '@material-ui/core'
import { Chart2, Chart3, Chart4 } from '../../../Charts/Charts'
import { FaSpinner } from 'react-icons/fa'
// import Table1kan from '../../../Tables/Chapter1kan/Table1'

const Profile = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
           ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/introduction" forward="/overview/basis" />
                        <Title status={ctx.isStatus.status2} id={2}>{ctx.chapterOne.Overview.Profile.title}</Title>
                        {ctx.isStatus.status2 ? <div>
                            <Typography variant="h4">
                                <li>
                                    {ctx.chapterOne.Overview.Profile.content["Social Indicators"].title}
                                </li>
                            </Typography>
                            <Para>
                                {ctx.chapterOne.Overview.Profile.content["Social Indicators"].content.substring(0, 291)}
                                <CustomTooltip
                                    tooltip="As per Economic Survey of Karnataka 2019-20"
                                    content={ctx.chapterOne.Overview.Profile.content["Social Indicators"].content.substring(291, 295)}
                                    supScript="1" />
                                {ctx.chapterOne.Overview.Profile.content["Social Indicators"].content.substring(297,)}
                            </Para>
                            <Typography variant="h4">
                                <li>
                                    {ctx.chapterOne.Overview.Profile.content["Economic Indicators"].title}
                                </li>
                            </Typography>
                            <Para>
                                {ctx.chapterOne.Overview.Profile.content["Economic Indicators"].para1}
                                <br></br>
                                {ctx.chapterOne.Overview.Profile.content["Economic Indicators"].para2.substring(0, 187)}
                                <CustomTooltip
                                    tooltip="The difference between per capita income of the State and National’s average during 2019-20 was ₹96,196."
                                    content={ctx.chapterOne.Overview.Profile.content["Economic Indicators"].para2.substring(187, 195)}
                                    supScript="2" />
                                {ctx.chapterOne.Overview.Profile.content["Economic Indicators"].para2.substring(195, 400)}
                            </Para>

                        </div>
                            : "Summary of profile"}
                        <Title status={ctx.isStatus.status3} id={3}>{ctx.chapterOne.Overview.Profile.content.subheads.GSDP_State.title}</Title>
                        {ctx.isStatus.status3
                            ? <span>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind / 10}>
                                        {ctx.chapterOne.Overview.Profile.content.subheads.GSDP_State[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table1 />
                                <Chart1 />
                                {['para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterOne.Overview.Profile.content.subheads.GSDP_State[item]}
                                    </Para>
                                )}
                                <Chart2 />
                                <Para>
                                    {ctx.chapterOne.Overview.Profile.content.subheads.GSDP_State.para5}
                                </Para>
                                <Chart3 />
                                <Para>
                                    {ctx.chapterOne.Overview.Profile.content.subheads.GSDP_State.para6}
                                </Para>
                                <Chart4 />
                            </span>
                            : ""}
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
                        <FloatingActionButtons back="/overview/introduction" forward="/overview/basis" />
                        <Title status={ctx.isStatus.status2} id={2}>{ctx.chapter1kannada.Overview.Profile.title}</Title>
                        {ctx.isStatus.status2 ? <div>
                            <Typography variant="h4">
                                <li>
                                    {ctx.chapter1kannada.Overview.Profile.content["Social Indicators"].title}
                                </li>
                            </Typography>
                            <Para>
                                {ctx.chapter1kannada.Overview.Profile.content["Social Indicators"].content.substring(0, 333)}
                                <CustomTooltip
                                    tooltip="ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆ ೨೦೧೯-೨೦ರ ಅನ್ವಯ"
                                    content={ctx.chapter1kannada.Overview.Profile.content["Social Indicators"].content.substring(333, 339)}
                                    supScript="1" />
                                {ctx.chapter1kannada.Overview.Profile.content["Social Indicators"].content.substring(339,)}
                            </Para>
                            <Typography variant="h4">
                                <li>
                                    {ctx.chapter1kannada.Overview.Profile.content["Economic Indicators"].title}
                                </li>
                            </Typography>
                            <Para>
                                {ctx.chapter1kannada.Overview.Profile.content["Economic Indicators"].para1}
                                <br></br>
                                {ctx.chapter1kannada.Overview.Profile.content["Economic Indicators"].para2.substring(0, 132)}
                                <CustomTooltip
                                    tooltip="The difference between per capita income of the State and National’s average during 2019-20 was ₹96,196."
                                    content={ctx.chapter1kannada.Overview.Profile.content["Economic Indicators"].para2.substring(132, 146)}
                                    supScript="2" />
                                {ctx.chapter1kannada.Overview.Profile.content["Economic Indicators"].para2.substring(146, 400)}
                            </Para>

                        </div>
                            : "Summary of profile"}
                        <Title status={ctx.isStatus.status3} id={3}>{ctx.chapter1kannada.Overview.Profile.content.subheads.GSDP_State.title}</Title>
                        {ctx.isStatus.status3
                            ? <span>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind / 10}>
                                        {ctx.chapter1kannada.Overview.Profile.content.subheads.GSDP_State[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table1 />
                                <Chart1 />
                                {['para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter1kannada.Overview.Profile.content.subheads.GSDP_State[item]}
                                    </Para>
                                )}
                                <Chart2 />
                                <Para>
                                    {ctx.chapter1kannada.Overview.Profile.content.subheads.GSDP_State.para5}
                                </Para>
                                <Chart3 />
                                <Para>
                                    {ctx.chapter1kannada.Overview.Profile.content.subheads.GSDP_State.para6}
                                </Para>
                                <Chart4 />
                            </span>
                            : ""}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Profile
