import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table1 from '../../../Tables/Chapter1/Table1'
import Chart1, { Chart2, Chart3, Chart4 } from '../../../Charts/Charts'
import Subtitle from '../../../../Subtitle/Subtitle'
import Table1kan from '../../../Tables/Chapter1kan/Table1'

const Profile = () => {

    const ctx = useContext(MyContext)
    // console.log(ctx)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/introduction" forward="/overview/basis" />
                        <Title>
                            1.2 Profile of the state
                        </Title>


                        <Title>
                            {ctx.chapterOne.Profile.para1}
                        </Title>


                        <Para>
                            {ctx.chapterOne.Profile.para2.substring(0, 304)}

                            {/* Tooltip Code Snippet */}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.para2.substring(304, 309)}
                                <span className="tooltiptext">
                                    Refers to the contribution the employee had to make from the date of his entry into service to the date of implementation of the scheme.
                                </span>
                                <sup>1</sup>
                            </span>

                            {ctx.chapterOne.Profile.para2.substring(309,)}
                        </Para>

                        <Title>
                            {ctx.chapterOne.Profile.para3}
                        </Title>

                        {["para4"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Para>
                            {ctx.chapterOne.Profile.para5.substring(0, 186)}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.para5.substring(186, 195)}
                                <span className="tooltiptext">
                                    The difference between per capita income of the State and National’s average during 2020-21 was ₹99,828
                                </span>
                                <sup>2</sup>
                            </span>
                            {ctx.chapterOne.Profile.para5.substring(195, 350)}

                        </Para>

                        <Title>
                            {ctx.chapterOne.Profile.para6}
                        </Title>
                        {["para7", "para8"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                        {/* Table 1 goes here */}
                        <Table1 id="table1" />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T1F1} <br></br>
                                {ctx.tables1.T1F2}
                            </i>
                        </h4>
                        {/* Chart 1 goes here */}
                        <Chart1 />

                        {["Para9"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                        <Para>
                            {ctx.chapterOne.Profile.Para10.substring(0, 165)}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.Para10.substring(165, 174)}
                                <span className="tooltiptext">
                                    Product taxes or subsidies are paid or received on per unit of product. Some examples of product taxes are excise tax, sales tax, service tax and import and export duties. Product subsidies include food, petroleum and fertilizer subsidies, interest subsidies given to farmers, households, etc. through banks
                                </span>
                                <sup>3</sup>
                            </span>
                            {ctx.chapterOne.Profile.Para10.substring(174,)}

                        </Para>
                        <Chart2 />
                        <h4 className='footnote'>
                            <i>
                                3 Source: Directorate of Economics and Statistics, Government of Karnataka
                                <br></br>
                                ^ Sectoral Distribution to GSDP
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterOne.Profile.Para11}
                        </Para>
                        <Chart3 />

                        <h4 className='footnote'>
                            <i>
                                Source: Directorate of Economics and Statistics, Government of Karnataka
                            </i>
                        </h4>
                        {["Para12", "Para13", "Para14"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Chart4 />
                        <h4 className='footnote'>
                            <i>
                                Source: Directorate of Economics and Statistics, Government of Karnataka
                            </i>
                        </h4>
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

                        <Title>
                            {ctx.chapter1kannada.Content.para4}
                        </Title>
                        <Subtitle>
                            {ctx.chapter1kannada.Content.para5}
                            </Subtitle>
                        <Para>
                            {ctx.chapter1kannada.Content.para6.substring(0, 344)}

                            <span className="tooltip">
                                {ctx.chapter1kannada.Content.para6.substring(344, 349)}
                                <span className="tooltiptext">
                                    2020-21ರ ಭಾರತದ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆಯ ಪ್ರಕಾರ
                                </span>
                                <sup>1</sup>
                            </span>

                            {ctx.chapter1kannada.Content.para6.substring(349,)}
                        </Para>
                        <Subtitle>
                            {ctx.chapter1kannada.Content.para7}
                            </Subtitle>

                        {["para8"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Para>
                            {ctx.chapter1kannada.Content.para9.substring(0, 191)}

                            <span className="tooltip">
                                {ctx.chapter1kannada.Content.para9.substring(191, 201)}
                                <span className="tooltiptext">
                                    2020-21ರಲ್ಲಿ ರಾಜ್ಯದ ತಲಾ ಆದಾಯ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಸರಾಸರಿ ನಡುವಿನ ವ್ಯತ್ಯಾಸವು `99,828 ಆಗಿತ್ತು                                </span>
                                <sup>2</sup>
                            </span>

                            {ctx.chapter1kannada.Content.para9.substring(201,)}
                        </Para>

                        <Title>
                            {ctx.chapter1kannada.Content.para10}
                        </Title>
                        {["para11"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}

                     
 
                        {/* Table 1 goes here */}
                        <Table1kan id="table1" />
                        <h6>
                            {ctx.chapter1kannada.Content.t1f1} <br></br>
                            {ctx.chapter1kannada.Content.t1f2}
                        </h6>
                        {/* Chart 1 goes here */}
                        <Chart1 />
                        <Para>
                            {ctx.chapter1kannada.Content.para12.substring(0, 403)}

                            <span className="tooltip">
                                {ctx.chapter1kannada.Content.para12.substring(403, 413)}
                                <span className="tooltiptext">
                                    ಉತ್ಪನ್ನದ ಮೇಲಿನ ತೆರಿಗೆಗಳು ಅಥವಾ ಸಹಾಯಧನಗಳನ್ನು ಉತ್ಪನ್ನದ ಘಟಕವನ್ನಾಗಿ ಪಾವತಿಸಲಾಗುತ್ತದೆ/ ಸ್ವೀಕರಿಸಲಾಗುತ್ತದೆ.
                                    ಉದಾಹರಣೆಯಾಗಿ ಉತ್ಪನ್ನದ ಮೇಲಿನ ತೆರಿಗೆಗಳಿಗೆ ಅಬಕಾರಿ ತೆರಿಗೆ, ಮಾರಾಟ ತೆರಿಗೆ, ಸೇವಾ ತೆರಿಗೆ ಮತ್ತು ಆಮದು ಮತ್ತು ರಫ್ತು
                                    ಸುಂಕಗಳಾಗಿವೆ. ಬ್ಯಾಂಕಿನ ಮೂಲಕ ಪಡೆಯುವ ಉತ್ಪನ್ನ ಸಹಾಯಧನಗಳು ಆಹಾರ, ಪೆಟ್ತೋಲಿಯಮ್ ಮತ್ತು ಗೊಬ್ಬರ
                                    ಸಹಾಯಧನಗಳು, ರೈತರಿಗೆ ನೀಡಲಾಗುವ ಬಡ್ಡಿ ಸಹಾಯಧನಗಳು, ಗೃಹೋಪಯೋಗಿ ವಸ್ತುಗಳು ಮುಂತಾದವುಗಳನ್ನು
                                    ಒಳಗೊಂಡಿವೆ.
                                </span>
                                <sup>3</sup>
                            </span>

                            {ctx.chapter1kannada.Content.para12.substring(413,)}
                        </Para>
                        {["para13"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}

                        <Chart2 />
                        <h6>
                        ಆಕರ: ಆರ್ಥಿಕ ಮತ್ತು ಅಂಕಿ ಅಂಶಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ
                            <br></br>
                            ^ ರಾಒಆಂಉಕ್ಕೆ ವಿಭಾಗೀಯ ಕೊಡುಗೆ
                        </h6>
                        <Para>
                            {ctx.chapter1kannada.Content.para14}
                        </Para>

                        <Chart3 />
                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಆರ್ಥಿಕ ಮತ್ತು ಅಂಕಿ ಅಂಶಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ
                            </i>
                        </h4>
                        {["para15", "para16", "para17"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Chart4 />
                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಆರ್ಥಿಕ ಮತ್ತು ಅಂಕಿ ಅಂಶಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ
                            </i>
                        </h4>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Profile
