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
                          <h3 className='headnote'>
                        ₹ in crore
                       </h3>
                        <Table3 />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T3F1}
                                <br></br>
                                * Effective Loans and Advances for GoI would be `14,869 crore as the Department of Expenditure, GoI had decided that GST compensation of `12,407 and `18,109 crore given to the state as back-to-back loan during 2020-21 and 2021-22 respectively under Debt Receipt would not be treated as debt of the State for any norms which may be prescribed by the Finance Commission.
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
                                * ಭಾರತ ಸರ್ಕಾರಕ್ಕೆ ಪರಿಣಾಮಕಾರಿ ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳು `೧೪,೮೬೯ ಕೋಟಗಳಷ್ಟಾಗುತ್ತದೆ ಏಕೆಂದರೆ, ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚ ಇಲಾಖೆಯು ರಾಜ್ಯಕ್ಕೆ ಬ್ಯಾಕ್‌-ಟು-ಬ್ಯಾಕ್‌ ಸಾಲವಾಗಿ ಋಣ ಸ್ವೀಕೃತಿ ಅಡಿಯಲ್ಲಿ ನೀಡಿದ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರ ಧನವಾದ ೨೦೨೦-೨೧ರಲ್ಲಿ `೧೨,೪೦೭ ಕೋಟಿ ಮತ್ತು ೨೦೨೧-೨೨ರಲ್ಲಿ `೧೮,೧೦೯ ಕೋಟಿಗಳನ್ನು ಹಣಕಾಸು ಅಯೋಗದಿಂದ ನಿಗದಿಪಡಿಸುವ ಯಾವುದೇ ಮಾನದಂಡದಡಿಯಲ್ಲಿ ರಾಜ್ಯದ ಸಾಲ ಎಂದು ಪರಿಗಣಿಸುವುದಿಲ್ಲ ಎಂದು ನಿರ್ದರಿಸಿತು. 
                                  
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
