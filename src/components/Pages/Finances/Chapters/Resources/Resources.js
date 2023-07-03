import React, { useContext, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import c23 from '../../../../../Images/c23.png'
import c24 from '../../../../../Images/c24.png'
import c25 from '../../../../../Images/c25.png'
import c26 from '../../../../../Images/c26.png'
import t24 from '../../../../../Images/t24.png'
import t26 from '../../../../../Images/t26.png'
import ImageComponent from 'material-ui-image'
import Table3 from '../../../Tables/Chapter2/Table3'
import Table9 from '../../../Tables/Chapter2/Table9'
import Table10 from '../../../Tables/Chapter2/Table10'
import Table11 from '../../../Tables/Chapter2/Table11'
import Table12 from '../../../Tables/Chapter2/Table12'
import {

    Chart2 as Chrt2, Chart3 as Chrt3, Chart4 as Chrt4,
} from '../../../Charts/Chap2Charts'
import Table5 from '../../../Tables/Chapter2/Table5'
import Table6 from '../../../Tables/Chapter2/Table6'
import Table7 from '../../../Tables/Chapter2/Table7'
import Subtitle from '../../../../Subtitle/Subtitle'

import { getFirebase } from '../../../../../firebase/firebase'
import Table3kan from '../../../Tables/Chapter2kan/Table3'
import Table5kan from '../../../Tables/Chapter2kan/Table5'

import Table7kan from '../../../Tables/Chapter2kan/Table7'
import Table8kan from '../../../Tables/Chapter2kan/Table8'
import Table9kan from '../../../Tables/Chapter2kan/Table9'
import Table10kan from '../../../Tables/Chapter2kan/Table10'
import Table11kan from '../../../Tables/Chapter2kan/Table11'
import Table12kan from '../../../Tables/Chapter2kan/Table12'
const Resources = () => {

    const ctx = useContext(MyContext)
    const [url, setURL] = useState("");
    const [url2, setURL2] = useState("");
    const [url3, setURL3] = useState("");



    // getFirebase()
    //     .storage()
    //     .ref('/pdfs/chart23.png')
    //     .getDownloadURL()
    //     .then((url) => {
    //         setURL(url);
    //     });

    // getFirebase()
    //     .storage()
    //     .ref('/pdfs/table24.png')
    //     .getDownloadURL()
    //     .then((url2) => {
    //         setURL2(url2);
    //     });

    // getFirebase()
    //     .storage()
    //     .ref('/pdfs/table26.png')
    //     .getDownloadURL()
    //     .then((url3) => {
    //         setURL3(url3);
    //     });

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/sources-application" forward="/finances/application" />
                        <Title>{ctx.chapterTwo.Para6}</Title>
                        <Para>
                            {ctx.chapterTwo.Para7}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Para8}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para9}
                        </Para>

                        <ImageComponent src={c23} alt="chart23" aspectRatio={1 / 0.8} />
                        <h3>
                            <i>
                            * Effective Debt Receipts would be ₹62,532 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹18,109 crore given to the state as back-to-back loan under Debt Receipts would not be treated as debt of the State for any norms which may be prescribed by the Finance Commission and thus, the effective Capital Receipts stand at ₹62,665 crore and effective Total Receipts stand at ₹2,73,644 crore.               
                            </i>
                        </h3>
                        {["Para10a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}

                        <Para>
                            {ctx.chapterTwo.Para9a}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.Para9b}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Para10}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para10a}
                        </Para>
                        <Table3 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts and Economic Survey of Gok<br></br>
                            </i>
                            [1]Buoyancy ratio indicates the elasticity or degree of responsiveness of a fiscal variable with respect to a given change in the base variable.  For instance, revenue buoyancy with respect to GSDP at 0.63 implies that Revenue Receipts tend to increase by 0.63 percentage points, if the GSDP increases by one per cent.
                            <br></br>
                            [2]Revenue buoyancy refers to the growth rate of Revenue Receipts to growth rate of GSDP.
                            <br></br>
                            [3]Own revenue buoyancy refers to growth rate of Tax Revenue and non-Tax revenue to growth rate of GSDP.  It excludes devolution from GoI.
                        </h4>
                        {/* <Chrt2 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts and Economic Survey of Gok
                            </i>
                        </h4>
                        <Chrt3 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                        <ImageComponent src={c24} alt="chart23" aspectRatio={1 / 0.5} />
                        <ImageComponent src={c25} alt="chart23" aspectRatio={1 / 0.5} />
                        <Para>
                            {ctx.chapterTwo.Para11}
                        </Para>
                        {["Para12", "Para13", "Para14", "Para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para16}
                        </Subtitle>
                        {["Para17", "Para18"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapterTwo.Para19}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para21}
                        </Para>
                        {/* <Chrt4 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                        <ImageComponent src={c26} alt="chart23" aspectRatio={1 / 0.5} />
                        <Para>
                        The component wise details of State’s own-Tax Revenue collected during 2017-18 to 2021-22 are given in Table 2.4.
                        </Para>
                        <ImageComponent src={t24} alt="table24" aspectRatio={1 / 0.6} />
                        {["Para22", "Para23"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para24}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para25}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table5 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para26"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                        <Para>
                            {ctx.chapterTwo.Para27.substring(0, 356)}

                            <span className="tooltip">
                                {ctx.chapterTwo.Para27.substring(356, 358)}
                                <span className="tooltiptext">
                                    Under Major Heads 0005 – CGST (₹6,236.01 crore), 0006 – SGST (₹37,711.18 crore) and 0008 – IGST (Nil).
                                </span>
                                <sup>7</sup>
                            </span>

                            {ctx.chapterTwo.Para27.substring(357,)}
                        </Para>

                        {["Para28"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo["Para29"]}
                        </Subtitle>
                        {["Para30", "Para31", "Para31a", "Para32"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <ImageComponent src={t26} alt="chart23" aspectRatio={1 / 0.6} />
                        <Para>
                            {ctx.chapterTwo.Para33}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo["Para34"]}
                        </Subtitle>
                        {["Para35"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <div style={{
                            backgroundColor: "#ac8",
                            fontSize: "18px",
                            padding:"5px 5px 5px 20px",
                            borderRadius:"5px"
                        }}>
                            <p>
                                {ctx.chapterTwo["Para36"]}
                            </p>
                        </div>
                        <Table6/>
                        <Para>
                            {ctx.chapterTwo.Para37.substring(0, 410)}

                            <span className="tooltip">
                                {ctx.chapterTwo.Para37.substring(411, 412)}
                                <span className="tooltiptext">
                                •	  Grey Grantie: 867 Metric Ton(MT) * `350 PMT= 	₹3,03,450
                                •	Building Stone:187334 MT *  `60 PMT=		₹ 1,12,40,040
                                •	Ordinary sand: 4573 MT*  `60 PMT=		₹2,74,380 
                                    Total						₹1,18,17,870
                                </span>
                             <sup>8</sup>
                            </span>

                            {ctx.chapterTwo.Para37.substring(411,)}
                        </Para>
                        {["Para37a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo["Para38"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo["Para39"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table7 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Para40.substring(0, 270)}

                            <span className="tooltip">
                                {ctx.chapterTwo.Para40.substring(270, 280)}
                                <span className="tooltiptext">
                                    Out of the total devolution of ₹21,694.11 crore, the share of Corporation Tax 3.70 per cent, Customs Duty 3.52 per cent, Union Excise Duties 3.58 per cent, Income tax 3.71 per cent, Service Tax 4.54 per cent, CGST was 3.53 per cent and Other Taxes and Duties was at 4.80 per cent.                                
                                    </span>
                                <sup>9</sup>
                            </span>

                            {ctx.chapterTwo.Para40.substring(280,)}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo["Para42"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo["Para43"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table9 />
                        <h4 className='footnote'>
                            
                                Source: Finance Accounts
                                <br></br>
                                [10]It includes Grants towards contribution to National Disaster Response Fund and Compensation for loss of revenue arising out of implementation of GST.
                            
                        </h4>
                        {["Para44", "Para45", "Para46", "Para47", "Para48", "Para49", "Para50", "Para51", "Para52"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo["Para53"]}
                        </Subtitle>    
                        <Para>
                            {ctx.chapterTwo["Para53a"]}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo["Para54a"]}
                        </Subtitle>    
                        <Para>
                            {ctx.chapterTwo["Para54"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table10 />
                        <h4 className='footnote'>
                            <i>
                                Source: XV FC Report and Finance Accounts
                            </i>
                        </h4>


                        {["Para55", "Para56"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo["Para57"]}
                        </Subtitle>    
                        <Para>
                            {ctx.chapterTwo["Para58"]}
                        </Para> 
                        <Subtitle>
                            {ctx.chapterTwo["Para58a"]}
                        </Subtitle>    
                        <Para>
                            {ctx.chapterTwo["Para58b"]}
                        </Para>   
                        <Subtitle>
                            {ctx.chapterTwo["Para59"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo["Para60"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table11 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para60a", "Para61"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Para>
                            {ctx.chapterTwo.Para62.substring(0, 189)}

                            <span className="tooltip">
                                {ctx.chapterTwo.Para62.substring(189, 194)}
                                <span className="tooltiptext">
                                    Other loans include back-to-back external loans
                                </span>
                                <sup>11</sup>
                            </span>

                            {ctx.chapterTwo.Para62.substring(194,)}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo["Para63"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo["Para64"]}
                        </Para>
                       
                        <Table12 />
                        <h4 className='footnote'>
                            <i>
                                Source: XV FC Report and Finance Accounts
                            </i>
                        </h4>
                        {["Para65"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
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
                        <FloatingActionButtons back="/finances/sources-application" forward="/finances/application" />
                        <Title>{ctx.chapter2kannada.Content.para9}</Title>
                        
                        <Para>
                            {ctx.chapter2kannada.Content.para10}
                        </Para>
                        <Subtitle>
                            {ctx.chapter2kannada.Content.para11}
                        </Subtitle>
                         {["para12", "para13"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            {["para14", "para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para16}
                            </i>
                        </Subtitle>
                        {["para17"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                             
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table3kan />
                        <Para>
                            {ctx.chapter2kannada._collections_.t3f1}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada._collections_.t3f2}
                        </Para>
                        <Chrt2 />
                        
                        <Para>
                            <i>
                            {ctx.chapter2kannada._collections_.c4f1}
                            </i>
                        </Para>
                        <Para>
                            
                            {ctx.chapter2kannada._collections_.f6}
                            
                        </Para>
                        <Chrt3 />
                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h4>
                            {["para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                        <Para>
                            <h5>
                            {ctx.chapter2kannada.Content.para18}
                            </h5>
                        </Para>
                            
                            {["para19", "para20","para21", "para22"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                            </Para>)}

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para23}
                            </i>
                        </Subtitle>   

                        {["para24", "para25","para26", "para27"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                {ctx.chapter2kannada.Content[item]}
                                
                            </Para>)} 

                        <Chrt4 />
                        <Para>
                            {ctx.chapter2kannada.Content.para28}
                        </Para>
                        
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table5kan />
                        <Para>
                            {ctx.chapter2kannada.Content.para29}
                        </Para>
                        {["para30", "para31", "para32"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        
                        {/* <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        
                        <Table7kan/> */}
                        
                        {["para33", "para34", "para35", "para36",
                         "para37", "para38", "para39", "para40"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        {/* <Table9kan/> */}
                       
                        
                        {["para41", "para42", "para43", "para44",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        {["para45", "para46"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}    
                        
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para47}
                            </i>
                        </Subtitle>  

                        <Para>
                                {ctx.chapter2kannada.Content.para48}
                        </Para>

                        <Table7kan/>    
                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h4>

                        <Para>
                                {ctx.chapter2kannada.Content.para49}
                        </Para>

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para50}
                            </i>
                        </Subtitle>  

                        <Para>
                                {ctx.chapter2kannada.Content.para51}
                        </Para>

                        <Table8kan/>    
                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h4>

                        {["para52", "para53", "para54"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}    
                        
                         {["para55", "para56", "para57", "para58", "para59"].map((item, ind) =>
                        <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>    
                        </Para>)}    

                        {["para60", "para61", "para62", "para63", "para64"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 

                        <Table9kan/>

                        {["para65", "para66", "para67", "para68", "para69", "para70"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}      

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para71}
                            </i>
                        </Subtitle>  

                        <Para>
                                {ctx.chapter2kannada.Content.para72}
                        </Para>

                        <Table10kan/>

                        {["para73", "para74", "para75"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}      
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para76}
                            </i>
                        </Subtitle> 

                        <Para>
                                {ctx.chapter2kannada.Content.para77}
                        </Para>

                        <Table11kan/>    

                        <Para>
                                {ctx.chapter2kannada.Content.para78}
                        </Para>

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Resources