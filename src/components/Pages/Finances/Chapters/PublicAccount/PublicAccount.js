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
import c213 from '../../../../../Images/c213.png'
import ImageComponent from 'material-ui-image'

import Table29 from '../../../Tables/Chapter2/Table29'

import Table29a from '../../../Tables/Chapter2/Table29a'
import Table29kan from '../../../Tables/Chapter2kan/Table29'
import Table30kan from '../../../Tables/Chapter2kan/Table30'
import Table31akan from '../../../Tables/Chapter2kan/Table31a'
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
                        <ImageComponent  src={c213} alt="chart23" aspectRatio={1 / 0.5} />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>

                        {["para18", , "para19", "para19a", "Para20", "para21",
                            "para22", "para23", "para26"].map((item, ind) =>
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

                        {["para28", "para29", "Para29a", "Para29b", "para30", "para31",
                            "para32", "para33", "para34", "para35", "para36",
                            "para37", "para38", "para39",  "para40",
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

                        {["para44", "para44a", "para44b", "para44c", "para44d", "para44e", "para44f", "para45", "para46",                            "para48", "para49", "para50", "para51",
                            "para52", "para53", "para54", "para54a", "para54b"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo.Second[item]}
                                </Para>)}
                        <Para>
                            {ctx.chapterTwo.Second.para54c}
                        </Para>
                        <Table29a/>        
                         {["para54d", "para54e"].map((item, ind) =>
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
                        <Title>{ctx.chapter2kannada.Content.para187}</Title>

                        <Para>
                            {ctx.chapter2kannada.Content.para188}
                        </Para>

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para189}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter2kannada.Content.para190}
                        </Para>

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table29kan />
                        <h3> ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br>
                            </br>
                            ಟಿಪ್ಪಣಿ : (+) ಎನ್ನುವುದು ಖರ್ಚು ಶಿಲ್ಕನ್ನು ಮತ್ತು (-) ಎನ್ನುವುದು ಜಮೆ ಶಿಲ್ಕನ್ನು ಸೂಚಿಸುತ್ತದೆ
                        </h3>

                        <Para>
                            {ctx.chapter2kannada.Content.para191}
                        </Para>
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para192}
                            </i>
                        </Subtitle>


                        {["para193", "para194"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para195}
                            </h4>
                        </Para>     
                        <Para>
                            {ctx.chapter2kannada.Content.para196}
                        </Para>
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para197}
                            </h4>
                        </Para> 
                        {["para198", "para199", "para200", "para201", "para202"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para203}
                            </h4>
                        </Para> 
                        {["para204", "para205", "para206", "para207" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para208}
                            </h4>
                        </Para>    
                        {["para209", "para210", "para211", "para212" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para213}
                            </h4>
                        </Para>
                        {["para214", "para215", "para216" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        
                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table30kan />
                        <h3> 
                            <i>
                            ಆಕರ: 15ನೇ ಹಣಕಾಸು ಆಯೋಗ ಮತ್ತು ಖಾತೆ/ಖಾತಾ ಪುಸ್ತಕ
                            </i>
                            <br>
                            </br>
                            
                        </h3>


                        <Para>
                            {ctx.chapter2kannada.Content.para217}
                        </Para>    
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para218}
                            </h4>
                        </Para>
                        {["para219", "para220", "para221", "para222", "para223" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para224}
                            </i>
                        </Subtitle>    
                        {["para225", "para226" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para227}
                            </i>
                        </Subtitle>  
                        {["para228", "para229" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}  
                        {["para230", "para231","para232", "para233"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                {ctx.chapter2kannada.Content[item]}
                                
                        </Para>)}
                        
                        <Para>
                            {ctx.chapter2kannada.Content.para234}
                        </Para>


                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table31akan />


                        {["para235", "para236" ].map((item, ind) =>
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