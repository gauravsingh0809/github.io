import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table35 from '../../../Tables/Chapter2/Table35'
import Table35kan from '../../../Tables/Chapter2kan/Table35'
import Table36kan from '../../../Tables/Chapter2kan/Table36'
import Table37 from '../../../Tables/Chapter2/Table37'
import Table37kan from '../../../Tables/Chapter2kan/Table37'
import Table38 from '../../../Tables/Chapter2/Table38'
import Table38kan from '../../../Tables/Chapter2kan/Table38'
import Table39 from '../../../Tables/Chapter2/Table39'
import Table39kan from '../../../Tables/Chapter2kan/Table39'
import Table40 from '../../../Tables/Chapter2/Table40'
import {
    Chart17,
    Chart18,
    Chart19
} from '../../../Charts/Chap2Charts'
import Subtitle from '../../../../Subtitle/Subtitle'
const Dsa = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapterTwo)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/debtmanagement" forward="/finances/conclusion" />
                        <Title>{ctx.chapterTwo.Second.para79}</Title>

                        {["para80", "para81", "para82"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table35 />
                        <h6>*Outstanding Public Debt is the sum of outstanding balances under the heads 6003-Internal Debt and 6004-Loans and Advances from Government of India.
                            <br></br>
                            #Net debt available to the State Government is calculated as excess of Public Debt receipts over Public Debt repayment and interest payments on Public Debt and does not include back-to-back loans received from GoI as GST compensation.
                            <br></br>
                            ^The back-to-back Loan (₹ 12,407 crore) received from GoI in lieu of GST compensation has not been considered as Debt for working out the indicator.
                        </h6>
                        {["para83", "para84", "para85", "para86", "para87",
                            "para88", "para89", "para90", "para91", "para92",
                            "para93", "para94"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo.Second[item]}
                                </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Second["para95"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Second["para96"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table37 />
                        {["para97", "para98"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                            <Subtitle>
                            {ctx.chapterTwo.Second["para99"]}
                        </Subtitle>
                        <Para>
                        {ctx.chapterTwo.Second["para100"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table38 />
                        <Para>
                            <li>
                                {ctx.chapterTwo.Second.para101.substring(0,)}
                                <span className="tooltip">
                                    <span className="tooltiptext">
                                    Irrigation (₹16,061 crore), Co-operation (₹1,175 crore), Finance (₹1,251 crore), Power (₹10,855 crore), Housing (₹2,439 crore), Transport (₹426 crore) and other sectors (₹198 crore)
                                        </span>
                                    <sup>29</sup>
                                </span>

                            </li>
                        </Para>

                        {["para101", "para102", "para103",
                        "para104", "para105", "para106"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo.Second[item]}
                                </Para>)}
                                <Subtitle>
                                {ctx.chapterTwo.Second["para107"]}
                                </Subtitle>
                        
                        {[  "para108", "para109", "para110", "para111"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo.Second[item]}
                                </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table39 />
                        {["para112", "para113", "para114", "para115"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table40 />
                        {["para116", "para117"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <Chart17 />
                        <Para>
                            {ctx.chapterTwo.Second.para118}
                        </Para>
                        <Chart18 />
                        <Chart19 />
                        {["para119", "para120", "para121", "para122", "para123"].map((item, ind) =>
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
                        <FloatingActionButtons back="/finances/debtmanagement" forward="/finances/conclusion" />
                        <Title>{ctx.chapter2kannada.Content.para282}</Title>

                        {["para283", "para284", "para285"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table35kan />
                        <h6>* ಬಾಕಿಯಿರುವ ಸಾರ್ವಜನಿಕ ಋಣವು 6003-ಆಂತರಿಕ ಋಣ ಮತ್ತು 6004-ಭಾರತ ಸರ್ಕಾರದಿಂದ ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳ ಅಡಿಯಲ್ಲಿ ಉಳಿದಿರುವ ಮೊತ್ತವಾಗಿದೆ.
                            <br></br>
                            #	 ರಾಜ್ಯ ಸರ್ಕಾರಕ್ಕೆ ಲಭ್ಯವಿರುವ ನಿವ್ವಳ ಸಾಲವನ್ನು, ಸಾರ್ವಜನಿಕ ಸಾಲ ಮರುಪಾವತಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಾಲದ ಮೇಲಿನ ಬಡ್ಡಿ ಪಾವತಿಗಳ ಮೇಲಿನ ಸಾರ್ವಜನಿಕ ಸಾಲ ಸ್ವೀಕೃತಿಗಳ ಹೆಚ್ಚುವರಿ ಎಂದು ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ ಮತ್ತು ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವಾಗಿ ಭಾರತ ಸರ್ಕಾರದಿಂದ ಪಡೆದ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲಗಳನ್ನು ಒಳಗೊಂಡಿರುವುದಿಲ್ಲ.
                            <br></br>
                            ^  ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರದ ಬದಲಾಗಿ ಭಾರತ ಸರ್ಕಾರದಿಂದ ಪಡೆದ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವನ್ನು (₹12,407 ಕೋಟಿ) ಸೂಚಕವನ್ನು ಲೆಕ್ಕ ಹಾಕಲು ಪರಿಗಣಿಸಲಾಗಿಲ್ಲ.
                        </h6>
                        {["para286", "para287", "para288", "para289", "para290", "para291", "para292", "para293", "para294", "para295", "para296", "para297", "para298", "para299","para300"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table36kan />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                        {["para301", "para302", "para303","para304"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table37kan />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                        {["para305", "para306", "para307", "para308", "para309", "para310", "para311", "para312", "para313", "para314","para315"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table38kan />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                        {["para316", "para317", "para318"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        {["para319"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table39kan />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                        

                        {["para320","para321"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Chart19 />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                        <Para>
                            {ctx.chapter2kannada.Content.para322}
                        </Para>
                        <Chart18 />
                        <Chart19 />
                        {["para323","para324","Para325","para325a","para325b","para326"].map((item, ind) =>
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

export default Dsa