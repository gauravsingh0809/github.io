import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table1 from '../../../Tables/Chapter1/Table1'
import Table1kan from '../../../Tables/Chapter1kan/Table1'
import ImageComponent from 'material-ui-image'
import kc1 from '../../../../../Images/kc1.png'
import kc2 from '../../../../../Images/kc2.png'
import kc3 from '../../../../../Images/kc3.png'
import kc4 from '../../../../../Images/kc4.png'
import chap1c1 from '../../../../../Images/chap1c1.png'
import c2 from '../../../../../Images/c2.png'
import c3 from '../../../../../Images/c3.png'
import c4 from '../../../../../Images/c4.png'
import Chart1, { Chart2, Chart3, Chart4 } from '../../../Charts/Charts'
import Subtitle from '../../../../Subtitle/Subtitle'
import Chart1Kan from '../../../Charts/ChartsKan/Charts'
// import Table1kan from '../../../Tables/Chapter1kan/Table1'

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
                                As per Economic Survey of India 2021-22.
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
                        {["para5"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        {/* <Para>
                            {ctx.chapterOne.Profile.para5.substring(0, 186)}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.para5.substring(186, 195)}
                                <span className="tooltiptext">
                                    The difference between per capita income of the State and National’s average during 2020-21 was ₹99,828
                                </span>
                                <sup>2</sup>
                            </span>
                            {ctx.chapterOne.Profile.para5.substring(195, 350)}

                        </Para> */}

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
                        {/* /* ENglish */}
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T1F1} <br></br>
                                {ctx.tables1.T1F2}<br></br>
                                {ctx.tables1.T1F2a}
                            </i>
                        </h4>
                        <Title>
                                Chart 1.1: Growth of India’s GDP and State’s GSDP
                        </Title>
                        
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={chap1c1} color ="#ffffff00" />
                        <h4 className='footnote'>
                            <i>
                            Source: All India GDP figures and GSDP (2017-18 to 2020-21) from Economic Survey 2021-22, GoK.
                            <br></br>
                            GSDP figures 2021-22, as per Ministry of Statistics and Programme Implementation. 

                                
                                
                            </i>
                        </h4>
                        {/* Chart 1 goes here */}
                        {/* <Chart1 /> */}

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
                        <Title>
                           Chart 1.2: Change in Sectoral contribution to GSVA (2017-18 and 2021-22)
                        </Title>
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={c2} color ="#ffffff00" />
                        {/* <Chart2 /> */}
                        <h4 className='footnote'>
                            <i>
                                Source:Economic Survey of Karnataka 2021-22
                                <br></br>
                                
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterOne.Profile.Para11}
                        </Para>
                        <Title>
                        Chart 1.3: Sectoral growth in GSDP
                        </Title>
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={c3} color ="#ffffff00" />
                        
                        {/* <Chart3 /> */}

                        <h4 className='footnote'>
                            <i>
                            Source: Directorate of Economics and Statistics, GoK
                            </i>
                        </h4>
                        {["Para12", "Para13", "Para14"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Title>
                        Chart 1.4: Sectoral contribution to GSDP during 2021-22
                        </Title>
                     <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={c4} color ="#ffffff00" />

                        {/* <Chart4 /> */}
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
                        {["para11","para11a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}

                        {/* Table 1 goes here */}
                        <Table1kan id="table1" />
                        <h4>
                            {ctx.chapter1kannada.Content.t1f1} <br></br>
                            {ctx.chapter1kannada.Content.t1f2}<br></br>
                            {ctx.chapter1kannada.Content.t1f3}
                        </h4>
                        <Title>
                        ನಕ್ಷೆ-1.1: ಭಾರತದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನ ಮತ್ತು ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ವೃದ್ಧಿ
                        </Title>
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={kc1} color ="#ffffff00" />
                       
                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಅಖಿಲ ಭಾರತ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ಮತ್ತು ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ಅಂಕಿ ಅಂಶಗಳು (201೭-1೮ರಿಂದ 
೨೦೨೦-೨೧) ಕರ್ನಾಟಕ  ಸರ್ಕಾರ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆ - 202೧-2೨. <br></br>
ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ಅಂಕಿ ಅಂಶಗಳು 2020-21, ಅಂಕಿಅಂಶಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮ ಅನುಷ್ಠಾನ ಸಚಿವಾಲಯದ ಪ್ರಕಾರ.

                                </i>
                        </h4>
                        {/* Chart 1 goes here */}
                        {/* <Chart1 /> */}
                        {/* <Chart1Kan/> */}
                        {/* <Para>
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
                        </Para> */}
                        {["para13","para13a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
 <Title>
 ನಕ್ಷೆ-1.2: ರಾಜ್ಯದ ಒಟ್ಟು ಮೌಲ್ಯಾದಾರಿತಕ್ಕೆ ವಿಭಾಗೀಯ ಕೊಡುಗೆಯಲ್ಲಿನ ಬದಲಾವಣೆ 
(೨೦೧೭-೧೮ ಮತ್ತು ೨೦೨೧-೨೨)

                        </Title>
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={kc2} color ="#ffffff00" />
                        <h4>
                        ಆಕರ: ಕರ್ನಾಟಕದ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆ 2021-22
                            <br></br>
                            
                        </h4>
                        <Para>
                            {ctx.chapter1kannada.Content.para14}
                        </Para>
                        <Title>
                        ನಕ್ಷೆ-1.3: ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದಲ್ಲಿ ವಿಭಾಗೀಯ ಬೆಳವಣಿಗೆ
                        </Title>
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={kc3} color ="#ffffff00" />
                        <h4>
                        ಆಕರ: ಆರ್ಥಿಕ ಮತ್ತು ಅಂಕಿಅಂಶಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ
                        
                            
                        </h4>
                        {/* <Chart3 /> */}
                      
                        {["para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                         <Title>
                         ನಕ್ಷೆ-1.4: ೨೦೨೧-೨೨ರಲ್ಲಿ ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನಕ್ಕೆ ವಿಭಾಗೀಯ ಕೊಡುಗೆ
                        </Title>
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={kc4} color ="#ffffff00" />
                        <h4>
                        ಆಕರ: ಆರ್ಥಿಕ ಮತ್ತು ಅಂಕಿಅಂಶಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ
                        
                            
                        </h4>
                        {/* <Chart4 /> */}
                    
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Profile
