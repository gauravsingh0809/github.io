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
import c214 from '../../../../../Images/c214.png'
import c215 from '../../../../../Images/c215.png'
import c216 from '../../../../../Images/c216.png'
import c217 from '../../../../../Images/c217.png'
import ImageComponent from 'material-ui-image'

import Table31 from '../../../Tables/Chapter2/Table31'
import Table31kan from '../../../Tables/Chapter2kan/Table31'
import Table32 from '../../../Tables/Chapter2/Table32'
import Table32kan from '../../../Tables/Chapter2kan/Table32'
import Table33 from '../../../Tables/Chapter2/Table33'
import Table33a from '../../../Tables/Chapter2/Table33a'
import Table33kan from '../../../Tables/Chapter2kan/Table33'
import Table34 from '../../../Tables/Chapter2/Table34'
import Table34kan from '../../../Tables/Chapter2kan/Table34'
import Table35kan from '../../../Tables/Chapter2kan/Table35'
import Table36kan from '../../../Tables/Chapter2kan/Table36'
import Table37kan from '../../../Tables/Chapter2kan/Table37'
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
                        {/* <Chart14 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts.
                            </i>
                        </h4> */}
                        <ImageComponent  src={c214} alt="chart23" aspectRatio={1 / 0.5} />
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
                                *Effective Loans and Advances for GoI would be `14,869 crore 
                                as the Department of Expenditure, GoI had decided that GST compensation 
                                of `12,407 crore and `18,109 crore given to the State as back-to-back 
                                loan during 2020-21 and 2021-22 respectively under Debt Receipt would 
                                not be treated as debt of the State for any 
                                norms which may be prescribed by the Finance Commission.
                            </i>
                        </h4>

                        {["para61"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        {["para61a", "para62"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo.Second[item]}
                                </li>
                            </Para>)}
                        {/* <Chart15 /> */}
                        <ImageComponent  src={c215} alt="chart23" aspectRatio={1 / 0.5} />
                        <h4 className='footnote'>
                            <i>
                            Note: Effective Loans and Advances for GoI would be `14,869 crore as the Department of Expenditure, GoI had decided that GST compensation of `12,407 crore and `18,109 crore  given to the State as back-to-back loan during 2020-21 and 2021-22 respectively under Debt Receipt would not be treated as debt of the State for any norms which may be prescribed by the Finance Commission. The effective outstanding debt would be `4,59,740 crore.
                            
                            </i>
                        </h4>

                        {/* <Chart16 /> */}
                        <ImageComponent  src={c216} alt="chart23" aspectRatio={1 / 0.5} />
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
                        {["para68", "para69", "para70"].map((item, ind) =>
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
                        {["para70a","para71"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <Table33a/>    
                        {["para72", "para72a"].map((item, ind) =>
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
                        <Para>
                            {ctx.chapterTwo.Second["para75"]}
                        </Para>
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
                            {ctx.chapterTwo.Second["para75a"]}
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
                        <ImageComponent  src={c217} alt="chart23" aspectRatio={1 / 0.5} />
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
                        <Title>{ctx.chapter2kannada.Content.para237}</Title>
                        <Para>
                            {ctx.chapter2kannada.Content.para238}
                        </Para>
                        {/* <Chart14 />
                        <h6> ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br>
                            </br>
                            
                        </h6> */}
                        {["para239", "para240"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para241}
                            </i>
                        </Subtitle>    
                        {[ "para242", "para243"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table31kan />
                        <h3>  ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br>
                            </br>
                            *  ಋಣ ಸ್ವೀಕೃತಿಗಳಡಿಯಲ್ಲಿ ರಾಜ್ಯಕ್ಕೆ ೨೦೨೦-೨೧ ಮತ್ತು ೨೦೨೧-೨೨ರ ಅವಧಿಯಲ್ಲಿ  ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವಾಗಿ ನೀಡಲಾದ `12,407 ಕೋಟಿ ಮತ್ತು `೧೮,೧೦೯ ಕೋಟಿ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವನ್ನು, ಹಣಕಾಸು ಆಯೋಗವು ಸೂಚಿಸಬಹುದಾದ ಯಾವುದೇ ಮಾನದಂಡಗಳಿಗೆ ರಾಜ್ಯದ ಸಾಲವೆಂದು ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದು ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚದ ಇಲಾಖೆಯು ನಿರ್ಧರಿಸಿರುವುದರಿಂದ ಪರಿಣಾಮಕಾರಿ ಬಾಕಿ ಇರುವ ಭಾರತ ಸರ್ಕಾರದ ಸಾಲಗಳು `೧೪,೮೬೯ ಕೋಟಿಗಳಾಗಿದೆ.
                            <br>
                            </br>
                        </h3>
                        <Para>
                            {ctx.chapter2kannada.Content.para244}
                        </Para>
                        {["para245","para246"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                            </Para>)}
                        <Chart15 />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                        
                        <Chart16 />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                        
                        {["para247","para248"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        
                        <Para>
                            <h3>
                            {ctx.chapter2kannada.Content.para249}
                            </h3>
                        </Para>  
                        
                        {["para250", "para251", "para252"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                         <Table33kan /> 
                        <h3>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h3>


                        {["para253", "para254"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        
                        
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table34kan />

                        
                        {["para255", "para256"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para257}
                            </i>
                        </Subtitle> 

                        <Para>
                            {ctx.chapter2kannada.Content.para258}
                        </Para>

                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                         <Table35kan /> 
                        <h3>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h3>
                        <h3> *  ಈ ಅಂಕೆಗಳು ವರ್ಷದ ನಿವ್ವಳ ವಿತರಣೆಗಳು/ಹೊರಹರಿವು (ವೆಚ್ಚಗಳು)</h3>

                        <Para>
                            {ctx.chapter2kannada.Content.para259}
                        </Para>

                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                         <Table36kan /> 
                        <h3>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h3>

                        <Para>
                            {ctx.chapter2kannada.Content.para260}
                        </Para>

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para261}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter2kannada.Content.para262}
                        </Para>

                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                         <Table37kan /> 
                        <h3>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h3>

                        <Para>
                            {ctx.chapter2kannada.Content.para263}
                        </Para>




                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default DebtManagement