import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table3 from '../../../Tables/Chapter2/Table3'
import { Chart2, Chart3, Chart4 } from '../../../Charts/Chap2Charts'
import Table5 from '../../../Tables/Chapter2/Table5'
import './../../Finances.css'
import Table7 from '../../../Tables/Chapter2/Table7'
import Table8 from '../../../Tables/Chapter2/Table8'
import Table9 from '../../../Tables/Chapter2/Table9'
import Table10 from '../../../Tables/Chapter2/Table10'
import Table11 from '../../../Tables/Chapter2/Table11'
import Table12 from '../../../Tables/Chapter2/Table12'
import { FaSpinner } from 'react-icons/fa'
import CustomTooltip from '../../../../CustomTooltip/CustomTooltip'
import { getFirebase } from '../../../../../firebase/firebase'
import Image from 'material-ui-image'



const Resources = () => {

    const ctx = useContext(MyContext)

    const [allImages, setImages] = useState({});

    useEffect(() => {
        const getImages = getFirebase()
            .storage()
            .ref('/images/')
            .listAll().then(
                function (res) {
                    res.items.forEach((i) => {
                        i.getDownloadURL().then((res) => {
                            setImages((allImages) => ({ ...allImages, [i.name]: res }));
                        });
                    });
                })
        return getImages
    }, [])

    return (
        ctx.langPref
            ? (ctx.chapterTwo && ctx.charts2
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/sources-application" forward="/finances/application" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["Revenue Receipts"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Revenue Receipts"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Image src={allImages["chap2chart3.png"]} alt="chart2.3" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["Trends and growth"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Trends and growth"][item]}
                                    </Para>
                                )}
                                <Table3 />
                                FootNotes:
                                {ctx.isStatus.status1
                                    ? <div>
                                        {['sub5', 'sub6', 'sub7'].map((item, ind) =>
                                            <p key={ind} className="footer">
                                                {ctx.chapterTwo.Finances["Resources"].subheads["Trends and growth"][item]}
                                            </p>
                                        )}
                                    </div> : ""}
                                <p className="footer">
                                    Source: Finance Accounts and Economic Survey of GoK
                                </p>
                                < Chart2 />
                                <p className="footer">
                                    Source: Finance Accounts and Economic Survey of GoK
                                </p>
                                <Chart3 />
                                <p className="footer">
                                    Source: Finance Accounts and Economic Survey of GoK
                                </p>
                                <Title>{ctx.chapterTwo.Finances["Resources"].subheads["Trends and growth"]['para2']}</Title>
                                {['para3', 'para4', 'para5', 'para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapterTwo.Finances["Resources"].subheads["Trends and growth"][item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title>{ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title>{ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"].para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Chart4 />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {/* <Table4 /> */}
                        <Image src={allImages["chap2table4.png"]} alt="chart2.4" />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"].para7}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table5 />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para9'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {['para10'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item].substring(0, 325)}
                                <CustomTooltip
                                    tooltip="Under Major Heads 0005 – CGST (`8,773.82 crore), 0006 – SGST (`42,147.23 crore) and 0008 – IGST (Nil)."
                                    content={ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item].substring(325, 331)}
                                    supScript="8"
                                    top="true"
                                />
                                {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item].substring(331,)}
                            </Para>
                        )}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para11'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"].para11a}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para11b'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"].para12}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para13', 'para15', 'para14'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {/* <Table6 /> */}
                        <Image src={allImages["chap2table6.png"]} alt="Table2.6" />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para16', 'para18',].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <div>
                            {['para17'].map((item, ind) =>
                                <Para key={ind}>
                                    <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </span>
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["Transfers from Centre"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Transfers from Centre"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table7 />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Transfers from Centre"][item].substring(0, 259)}
                                        <CustomTooltip
                                            tooltip="Out of the total devolution of `30,919 crore, the share of Corporation Tax, Customs Duty and Union Excise duties was 4.75 per cent, Income tax and Wealth Tax was at 4.77 per cent, CGST was 4.76 per cent and Other Taxes and Duties was at 4.80 per cent."
                                            content={ctx.chapterTwo.Finances["Resources"].subheads["Transfers from Centre"][item].substring(259, 269)}
                                            supScript="9"
                                            top="true"
                                        />
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Transfers from Centre"][item].substring(269,)}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Transfers from Centre"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table8 />
                        <p className="footer">
                            Source: Reports of FFC and Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Transfers from Centre"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table9 />
                        {ctx.isStatus.status1
                            ? <div>
                                {['sub1', 'sub2', 'sub3'].map((item, ind) =>
                                    <p key={ind} className="footer">
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </p>
                                )}
                            </div> : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"].para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"].para5}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table10 />
                        {ctx.isStatus.status1
                            ? <div>
                                {['sub4', 'sub5', 'sub6'].map((item, ind) =>
                                    <p key={ind} className="footer">
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </p>
                                )}
                            </div> : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para7', 'para8', 'para8a'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"].para9}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["Capital Receipts"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Capital Receipts"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table11 />
                        {ctx.isStatus.status1
                            ? <div>
                                {['sub1'].map((item, ind) =>
                                    <p key={ind} className="footer">
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </p>
                                )}
                            </div> : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["Capital Receipts"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Para>
                            {ctx.chapterTwo.Finances["Resources"].subheads["Capital Receipts"]['para3'].substring(0, 192)}
                            <span className="tooltip">
                                {ctx.chapterTwo.Finances["Resources"].subheads["Capital Receipts"]['para3'].substring(192, 197)}
                                <span className="tooltiptext">Other loans include back to back external loans </span>
                                <sup>11</sup>
                            </span>
                            {ctx.chapterTwo.Finances["Resources"].subheads["Capital Receipts"]['para3'].substring(197,)}
                        </Para>

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Resources"].subheads["State's performance"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterTwo.Finances["Resources"].subheads["State's performance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table12 />
                        <div>
                            {['sub1'].map((item, ind) =>
                                <p key={ind} className="footer">
                                    {ctx.chapterTwo.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                </p>
                            )}
                        </div>
                        <div>
                            {['para2'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterTwo.Finances["Resources"].subheads["State's performance"][item]}
                                </Para>
                            )}
                        </div>
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
                        <FloatingActionButtons back="/finances/sources-application" forward="/finances/application" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["Revenue Receipts"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Revenue Receipts"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Image src={allImages["chap2chart3.png"]} alt="chart2.3" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["Trends and growth"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Trends and growth"][item]}
                                    </Para>
                                )}
                                <Table3 />
                                <p className="footer">
                                    Source: Finance Accounts and Economic Survey of GoK
                                </p>
                                < Chart2 />
                                FootNotes:
                                {ctx.isStatus.status1
                                    ? <div>
                                        {['sub5', 'sub6', 'sub7'].map((item, ind) =>
                                            <p key={ind} className="footer">
                                                {ctx.chapter2kannada.Finances["Resources"].subheads["Trends and growth"][item]}
                                            </p>
                                        )}
                                    </div> : ""}
                                <p className="footer">
                                    Source: Finance Accounts and Economic Survey of GoK
                                </p>
                                <Chart3 />
                                <p className="footer">
                                    Source: Finance Accounts and Economic Survey of GoK
                                </p>
                                <Title>{ctx.chapter2kannada.Finances["Resources"].subheads["Trends and growth"]['para2']}</Title>
                                {['para3', 'para4', 'para5', 'para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapter2kannada.Finances["Resources"].subheads["Trends and growth"][item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title>{ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title>{ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"].para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Chart4 />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {/* <Table4 /> */}
                        <Image src={allImages["chap2table4.png"]} alt="chart2.4" />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"].para7}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table5 />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para9'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {['para10'].map((item,ind) =>
                            <Para key={ind}>
                                {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item].substring(0, 325)}
                                <CustomTooltip
                                    tooltip="Under Major Heads 0005 – CGST (`8,773.82 crore), 0006 – SGST (`42,147.23 crore) and 0008 – IGST (Nil)."
                                    content={ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item].substring(325, 331)}
                                    supScript="8"
                                    top="true"
                                />
                                {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item].substring(331,)}
                            </Para>
                        )}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para11'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para11b'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"].para12}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para13', 'para14', 'para15'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {/* <Table6 /> */}
                        <Image src={allImages["chap2table6.png"]} alt="Table2.6" />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para16', 'para18',].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <div>
                            {['para17'].map((item, ind) =>
                                <Para key={ind}>
                                    <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's Own Resources"][item]}
                                    </span>
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["Transfers from Centre"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Transfers from Centre"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table7 />
                        <p className="footer">
                            Source: Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Transfers from Centre"][item].substring(0, 259)}
                                        <CustomTooltip
                                            tooltip="Out of the total devolution of `30,919 crore, the share of Corporation Tax, Customs Duty and Union Excise duties was 4.75 per cent, Income tax and Wealth Tax was at 4.77 per cent, CGST was 4.76 per cent and Other Taxes and Duties was at 4.80 per cent."
                                            content={ctx.chapter2kannada.Finances["Resources"].subheads["Transfers from Centre"][item].substring(259, 269)}
                                            supScript="9"
                                            top="true"
                                        />
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Transfers from Centre"][item].substring(269,)}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Transfers from Centre"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table8 />
                        <p className="footer">
                            Source: Reports of FFC and Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Transfers from Centre"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table9 />
                        {ctx.isStatus.status1
                            ? <div>
                                {['sub1', 'sub2', 'sub3'].map((item, ind) =>
                                    <p key={ind} className="footer">
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </p>
                                )}
                            </div> : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"].para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"].para5}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table10 />
                        {ctx.isStatus.status1
                            ? <div>
                                {['sub4', 'sub5', 'sub6'].map((item, ind) =>
                                    <p key={ind} className="footer">
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </p>
                                )}
                            </div> : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para7', 'para8', 'para8a'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"].para9}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["Capital Receipts"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Capital Receipts"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table11 />
                        {ctx.isStatus.status1
                            ? <div>
                                {['sub1'].map((item, ind) =>
                                    <p key={ind} className="footer">
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </p>
                                )}
                            </div> : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Capital Receipts"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Para>
                            {ctx.chapter2kannada.Finances["Resources"].subheads["Capital Receipts"]['para3'].substring(0, 192)}
                            <span className="tooltip">
                                {ctx.chapter2kannada.Finances["Resources"].subheads["Capital Receipts"]['para3'].substring(192, 197)}
                                <span className="tooltiptext">Other loans include back to back external loans </span>
                                <sup>11</sup>
                            </span>
                            {ctx.chapter2kannada.Finances["Resources"].subheads["Capital Receipts"]['para3'].substring(197,)}
                        </Para>

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Resources"].subheads["State's performance"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's performance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Table12 />
                        {ctx.isStatus.status1
                            ? <div>
                                {['sub1'].map((item, ind) =>
                                    <p key={ind} className="footer">
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["Grants-in-Aid"][item]}
                                    </p>
                                )}
                            </div> : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Resources"].subheads["State's performance"][item]}
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

export default Resources