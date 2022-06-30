import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table3 from '../../../Tables/Chapter1/Table3'
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
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para43}
                        </Title>
                        {["Para44"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Table3 />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T3F1}
                                <br></br>
                                * Effective Loans and Advances for GoI would be ₹ 14,210 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹ 12,407 crore given to the state as back-to- back loan under Debt Receipt would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.
                            </i>
                        </h4>
                        {["Para45"].map((item, ind) =>
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
                        <FloatingActionButtons back="/overview/snapshot-finances" forward="/overview/fiscalparams" />
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para46}
                        </Title>
                        {["para47"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Table3kan />
                        <h4 className='footnote'>
                            <i>
                                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                                <br></br>
                                * ಋಣ ಸ್ವೀಕೃತಿಗಳಡಿಯಲ್ಲಿ ರಾಜ್ಯಕ್ಕೆ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವಾಗಿ ನೀಡಲಾದ ₹12,407 ಕೋಟಿ ಸರಕು ಮತ್ತು
                                 ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವನ್ನು, ಹಣಕಾಸು ಆಯೋಗವು ಸೂಚಿಸಬಹುದಾದ ಯಾವುದೇ ಮಾನದಂಡಗಳಿಗೆ ರಾಜ್ಯದ
                                  ಸಾಲವೆಂದು ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದು ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚದ ಇಲಾಖೆಯು ನಿರ್ಧರಿಸಿರುವುದರಿಂದ ಭಾರತ 
                                  ಸರ್ಕಾರದಿಂದ ನಿವ್ವಳ ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳು ₹1೪,೨೧೦ ಕೋಟಿಯಾ ಗುತ್ತದೆ
                            </i>
                        </h4>
                        {["para48"].map((item, ind) =>
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

export default AssetsSnapshot
