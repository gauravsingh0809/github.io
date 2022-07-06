import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table28 from '../../../Tables/Chapter2/Table28'
import Table28kan from '../../../Tables/Chapter2kan/Table28'

import Table29 from '../../../Tables/Chapter2/Table29'
import Table29kan from '../../../Tables/Chapter2kan/Table29'
import {

    Chart13
} from '../../../Charts/Chap2Charts'
import Subtitle from '../../../../Subtitle/Subtitle'

const PublicAccount = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapter2kannada)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/application" forward="/finances/debtmanagement" />
                        <Title>{ctx.chapterTwo.Second.para14}</Title>

                        {["para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Second["para16"]}
                        </Subtitle>
                        {["para17"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table28 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                Note: +ve denotes debit balance and –ve denotes credit balances
                            </i>
                        </h4>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        {/* <Chart13 /> */}
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>

                        {["para18", , "para19", "", "Para20", "para21",
                            "para22", "para23", "para24", "para25", "para26"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo.Second[item]}
                                </Para>)}
                        <Para>
                            <li>
                                {ctx.chapterTwo.Second.para27.substring(0, 113)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.Second.para27.substring(113, 122)}
                                    <span className="tooltiptext">
                                        Green Tax Cess is cess on old vehicles which have completed fifteen years in respect of two
                                        wheelers and non-transport vehicles and seven years in respect of transport vehicles at the time of renewal of Certificate of Registration in addition to the tax levied at the rates specified for the purpose of implementation of various measures to control air pollution.
                                    </span>
                                    <sup>27</sup>
                                </span>
                                {ctx.chapterTwo.Second.para27.substring(122,)}

                            </li>
                        </Para>

                        {["para28", "para29", "para30", "para31",
                            "para32", "para33", "para34", "para35", "para36",
                            "para37", "para38", "para39", "para32", "para40",
                            "para41", "para42", "para43"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo.Second[item]}
                                </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table29 />
                        <h4 className='footnote'>
                            <i>
                                Source: XV Finance Commission and NTA 2020-21
                            </i>
                        </h4>

                        {["para44", , "para45", "para46", "para47",
                            "para48", "para49", "para50", "para51",
                            "para52", "para53", "para54"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo.Second[item]}
                                </Para>)}
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
                        <FloatingActionButtons back="/finances/application" forward="/finances/debtmanagement" />
                        <Title>{ctx.chapter2kannada.Content.para214}</Title>

                        {["para215", "para216", "para217"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table28kan />
                        <h6> ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br>
                            </br>
                            ಟಿಪ್ಪಣಿ : + ಎನ್ನುವುದು ಖರ್ಚು ಶಿಲ್ಕನ್ನು ಮತ್ತು - ಎನ್ನುವುದು ಜಮೆ ಶಿಲ್ಕನ್ನು ಸೂಚಿಸುತ್ತದೆ
                        </h6>
                        {/* <Chart13 /> */}
                        <h6> ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br>
                            </br>
                            
                        </h6>

                        {["para218", "para219", "para220", "para221", "para222", "para223", "para224", "para225", "para226", "para227", "para228", "para229", "para230", "para231", "para232", "para233", "para234", "para235", "para236", "para237", "para238", "para239", "para240", "para241", "para242", "para243", "para244"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table29kan />
                        <h6> ಆಕರ : 15ನೇ ಹಣಕಾಸು ಆಯೋಗ ಮತ್ತು ಎನ್‌ಟಿಎ–2020-21
                            <br>
                            </br>
                            
                        </h6>

                        {["para245", , "para246", "para247", "para248", "para249", "para250", "para251", "para252", "para253", "para254", "para255"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default PublicAccount