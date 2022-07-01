import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table30 from '../../../Tables/Chapter2/Table30'
import Table30kan from '../../../Tables/Chapter2kan/Table30'

import Table31 from '../../../Tables/Chapter2/Table31'
import Table31kan from '../../../Tables/Chapter2kan/Table31'
import Table32 from '../../../Tables/Chapter2/Table32'
import Table32kan from '../../../Tables/Chapter2kan/Table32'
import Table33 from '../../../Tables/Chapter2/Table33'
import Table33kan from '../../../Tables/Chapter2kan/Table33'
import Table34 from '../../../Tables/Chapter2/Table34'
import {
    Chart14, Chart15, Chart16,
} from '../../../Charts/Chap2Charts'
import Subtitle from '../../../../Subtitle/Subtitle'

const DebtManagement = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/publicaccount" forward="/finances/dsa" />
                        <Title>
                            {ctx.chapterTwo.Second.para55}
                        </Title>
                        <Para>
                            {ctx.chapterTwo.Second.para56}
                        </Para>
                        <Chart14 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts.
                            </i>
                        </h4>
                        {["para56a", "para57"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Second["para58"]}
                        </Subtitle>
                        {["para59", "para60"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table30 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                *The back-to-back Loan (₹ 12,407 crore) received
                                from GoI in lieu of GST compensation has not been
                                considered as Debt for working out the indicator.
                            </i>
                        </h4>

                        {["para61"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        {["para63", "para64"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo.Second[item]}
                                </li>
                            </Para>)}
                        <Chart15 />
                        <h4 className='footnote'>
                            <i>
                                Note: Effective GOI loans would be ₹14,210 crore as the
                                Department of Expenditure, GOI had decided that GST
                                compensation of ₹12,407 crore given to the State as
                                back-to-back loan under debt receipts (6004-101. Loans
                                and Advances from GOI) would not be treated as debt of
                                the State for any norms which may be prescribed by the
                                Finance Commission, thus, impacting the total debt to
                                ₹4,03,519 crore.
                            </i>
                        </h4>

                        <Chart16 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["para65", "para66"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Second["para67"]}
                        </Subtitle>
                        {["para68", "para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table31 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["para70", "para71", "para72"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Second["para73"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Second["para74"]}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table32 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                *All these figures are net disbursement/outflows during the year
                            </i>
                        </h4>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table33 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                       
                        <Para>
                            {ctx.chapterTwo.Second["para75"]}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Second["para76"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Second["para77"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table34 />
                        <Para>
                            {ctx.chapterTwo.Second.para78}
                        </Para>
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
                        <FloatingActionButtons back="/finances/publicaccount" forward="/finances/dsa" />
                        <Title>{ctx.chapter2kannada.Content.para256}</Title>
                        <Para>
                            {ctx.chapter2kannada.Content.para257}
                        </Para>
                        <Chart14 />
                        <h6> ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br>
                            </br>
                            
                        </h6>
                        {["para258", "para259", "para260", "para261", "para262"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table30kan />
                        <h6>  ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br>
                            </br>
                            *  ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆಯ ಪರಿಹಾರದ ಬದಲಾಗಿ ಭಾರತ ಸರ್ಕಾರದಿಂದ ಪಡೆದ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವನ್ನು (`12,407 ಕೋಟಿ) ಸೂಚಕವನ್ನು ಲೆಕ್ಕ ಹಾಕಲು ಪರಿಗಣಿಸಲಾಗಿಲ್ಲ.
                            <br>
                            </br>
                        </h6>
                        {["para263","para264","para265"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Chart15 />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                        {["para266"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Chart16 />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                        {["para267", "para268", "para269", "para270", "para271"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table31kan />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                        {["para272", "para273", "para274", "para275", "para276"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Para>
                            {ctx.chapter2kannada.Content.para277}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table32kan />
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br></br> * ಈ ಅಂಕೆಗಳು ವರ್ಷದ ನಿವ್ವಳ ವಿತರಣೆಗಳು/ಹೊರಹರಿವು (ವೆಚ್ಚಗಳು)
                        
                        </h6>
                        <Table33kan />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br></br>
                        </h6>
                       
                        <Para>
                            {ctx.chapter2kannada.Content.para278}
                        </Para>
                        {["para279", "para280"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table34 />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h6>
                        {["para281"].map((item, ind) =>
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

export default DebtManagement