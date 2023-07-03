import React, { useContext } from 'react'
import { Link } from "@material-ui/core"
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Subtitle from "../../../../Subtitle/Subtitle"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table5 from '../../../Tables/Chapter1/Table5'
import Table6 from '../../../Tables/Chapter1/Table6'
import Table5kan from '../../../Tables/Chapter1kan/Table5'
import Table6kan from '../../../Tables/Chapter1kan/Table6'

const FiscalSituation = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/fiscalparams" forward="/overview/impact" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para55}
                        </Title>
                        {["Para56"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapterOne.Profile.Para57}
                        </Subtitle>
                        {["Para58"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        
                        <Table5 />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T5F1}
                            </i>
                        </h4>
                        {["Para58a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Para>
                            {ctx.chapterOne.Profile.Para59.substring(0, 177)}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.Para59.substring(177, 185)}
                                <span className="tooltiptext">
                                    Borrowings by PSUs and SPVs are Off-budget borrowings
                                </span>
                                <sup>2</sup>
                            </span>
                            {ctx.chapterOne.Profile.Para59.substring(185,)}

                        </Para>

                        {["Para60","Para60a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                        <Subtitle>
                            {ctx.chapterOne.Profile["Para61"]}
                        </Subtitle>

                        {["Para62", "Para63",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
     <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table6 />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T6F1} and MTFP 2019-23
                                <br></br>
                                *Effective total debt would be `4,59,740 crore as the Department of Expenditure, GoI had decided that GST compensation of `12,407 and `18,109 crore given to the State as back-to-back loan during 2020-21 and 2021-22 respectively under Debt Receipt would not be treated as debt of the State for any norms which may be prescribed by the Finance Commission and therefore, the effective variation would be 7.65 per cent.
                                <br></br>
                                **The back-to-back Loan (`30,516 crore) received during 2020-21 and 2021-22 from GoI in lieu of GST compensation has not been considered as Debt for working out the indicator.                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterOne.Profile.Para64.substring(0, 98)}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.Para64.substring(98, 108)}
                                <span className="tooltiptext">
                                    Fiscal indicators like revenue surplus/deficit, fiscal deficit, Debt-GSDP ratio and GSDP growth rate at current prices.
                                </span>
                                <sup>3</sup>
                            </span>
                            {ctx.chapterOne.Profile.Para64.substring(108,)}

                        </Para>
                        {["Para65"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
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
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para59}
                        </Title>
                        {["para60"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapter1kannada.Content.para61}
                        </Subtitle>
                        {["para62"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Table5kan />
                        {["f11"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        {["para63", "para64", "para65","para65a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}


                        <Subtitle>
                            {ctx.chapter1kannada.Content["para66"]}
                        </Subtitle>

                        {["para67", "para68"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}

                        <Table6kan />
                        {["f12","f13","f13a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        {["para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
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
