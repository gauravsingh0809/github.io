import React, { useContext, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table3 from '../../../Tables/Chapter2/Table3'
import Table9 from '../../../Tables/Chapter2/Table9'
import Table10 from '../../../Tables/Chapter2/Table10'
import Table11 from '../../../Tables/Chapter2/Table11'
import Table12 from '../../../Tables/Chapter2/Table12'
import {

    Chart2 as Chrt2, Chart3 as Chrt3, Chart4 as Chrt4,
} from '../../../Charts/Chap2Charts'
import Table5 from '../../../Tables/Chapter2/Table5'
import Table7 from '../../../Tables/Chapter2/Table7'
import Subtitle from '../../../../Subtitle/Subtitle'

import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'

const Resources = () => {

    const ctx = useContext(MyContext)
    const [url, setURL] = useState("");
    const [url2, setURL2] = useState("");
    const [url3, setURL3] = useState("");



    getFirebase()
        .storage()
        .ref('/pdfs/chart23.png')
        .getDownloadURL()
        .then((url) => {
            setURL(url);
        });

    getFirebase()
        .storage()
        .ref('/pdfs/table24.png')
        .getDownloadURL()
        .then((url2) => {
            setURL2(url2);
        });

    getFirebase()
        .storage()
        .ref('/pdfs/table26.png')
        .getDownloadURL()
        .then((url3) => {
            setURL3(url3);
        });

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/sources-application" forward="/finances/application" />
                        <Title>{ctx.chapterTwo.Profile.Para6}</Title>
                        <Para>
                            {ctx.chapterTwo.Profile.Para7}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para8}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile.Para9}
                        </Para>

                        <ImageComponent src={url} alt="chart23" aspectRatio={1 / 0.8} />
                        {["Para10a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}

                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para10}
                        </Subtitle>
                        <Table3 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts and Economic Survey of Gok
                            </i>
                        </h4>
                        <Chrt2 />
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
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Profile.Para11}
                        </Para>
                        {["Para12", "Para13", "Para14", "Para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo.Profile[item]}
                                </li>
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para16}
                        </Subtitle>
                        {["Para17", "Para18"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para19}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile.Para21}
                        </Para>
                        <Chrt4 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <Para>
                            The component wise details of State’s Own Tax Revenue collected during 2016-17 to 2020-21 are given in Table 2.4.
                        </Para>
                        <ImageComponent src={url2} alt="table24" aspectRatio={1 / 0.6} />
                        {["Para22", "Para23"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para24}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile.Para25}
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
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}

                        <Para>
                            {ctx.chapterTwo.Profile.Para27.substring(0, 398)}

                            <span className="tooltip">
                                {ctx.chapterTwo.Profile.Para27.substring(398, 403)}
                                <span className="tooltiptext">
                                    Under Major Heads 0005 – CGST (₹6,236.01 crore), 0006 – SGST (₹37,711.18 crore) and 0008 – IGST (Nil).
                                </span>
                                <sup>10</sup>
                            </span>

                            {ctx.chapterTwo.Profile.Para27.substring(403,)}
                        </Para>

                        {["Para28"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile["Para29"]}
                        </Subtitle>
                        {["Para30", "Para31", "Para32"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <ImageComponent src={url3} alt="chart23" aspectRatio={1 / 0.6} />
                        {["Para33", "Para34", "Para35", "Para36"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <div style={{
                            backgroundColor: "#ac8",
                            fontSize: "18px",
                            padding:"5px 5px 5px 20px",
                            borderRadius:"5px"
                        }}>
                            <p>
                                {ctx.chapterTwo.Profile["Para37"]}
                            </p>
                        </div>
                        <Subtitle>
                            {ctx.chapterTwo.Profile["Para38"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile["Para39"]}
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
                            {ctx.chapterTwo.Profile.Para40.substring(0, 270)}

                            <span className="tooltip">
                                {ctx.chapterTwo.Profile.Para40.substring(270, 280)}
                                <span className="tooltiptext">
                                    Out of the total devolution of ₹21,694.11 crore, the share of Corporation Tax 3.70 per cent, Customs Duty 3.52 per cent, Union Excise Duties 3.58 per cent, Income tax 3.71 per cent, Service Tax 4.54 per cent, CGST was 3.53 per cent and Other Taxes and Duties was at 4.80 per cent.                                </span>
                                <sup>11</sup>
                            </span>

                            {ctx.chapterTwo.Profile.Para40.substring(280,)}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Profile["Para42"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile["Para43"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table9 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                *There are no figures since the nomenclature of plan and non-plan grants was removed with effect from the year 2017-18 and replaced by Grants for CSS, Finance Commission Grants and Other Grants to States.
                            </i>
                        </h4>
                        {["Para44", "Para45", "Para46", "Para47", "Para48", "Para49", "Para50", "Para51", "Para52", "Para53", "Para54"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table10 />
                        <h4 className='footnote'>
                            <i>
                                Source: XV FC Report and Finance Accounts
                            </i>
                        </h4>


                        {["Para55", "Para56", "Para57", "Para58"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile["Para59"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile["Para60"]}
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
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Para>
                            {ctx.chapterTwo.Profile.Para62.substring(0, 189)}

                            <span className="tooltip">
                                {ctx.chapterTwo.Profile.Para62.substring(189, 194)}
                                <span className="tooltiptext">
                                    Other loans include back-to-back external loans
                                </span>
                                <sup>13</sup>
                            </span>

                            {ctx.chapterTwo.Profile.Para62.substring(194,)}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Profile["Para63"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile["Para64"]}
                        </Para>
                       
                        <Table12 />
                        <h4 className='footnote'>
                            <i>
                                Source: XV FC Report and Finance Accounts
                            </i>
                        </h4>
                        {["Para65", "Para66",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
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
                         {["para12"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        
                        
                        <Subtitle>
                            {ctx.chapter2kannada.Content.para13}
                        </Subtitle>
                        {["para14"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                             
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table3 />
                        <Para>
                            {ctx.chapter2kannada.Content.t3fa}
                        </Para>
                        <Chrt2 />
                        <Para>
                            {ctx.chapter2kannada.Content.t3fa}
                        </Para>
                        <Chrt3 />
                        <Para>
                            {ctx.chapter2kannada.Content.t3fb}
                        </Para>
                            {["para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                        {["para16", "para17", "para18", "para19"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                            {ctx.chapter2kannada.Content.para20}
                        </Subtitle>
                            {["para21", "para22", "para23", "para24"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Chrt4 />
                        <Para>
                            {ctx.chapter2kannada.Content.t3fb}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.para25}
                        </Para>
                        {["para26", "para27", "para28", "para29"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table5 />
                        <Para>
                            {ctx.chapter2kannada.Content.t3fb}
                        </Para>
                        {["para30", "para31", "para32", "para33", "para34", "para35", "para36"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        {["para37", "para38", "para39", "para40", "para41", "para42"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                            {ctx.chapter2kannada.Content.para43}
                        </Subtitle>
                        <Para>
                            {ctx.chapter2kannada.Content.para44}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table7 />
                        <Para>
                            {ctx.chapter2kannada.Content.t3fb}
                        </Para>
                        {["para45"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                            {ctx.chapter2kannada.Content.para46}
                        </Subtitle>
                        
                        {[ "para47"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table9 />
                        <Para>
                            {ctx.chapter2kannada.Content.t3fb}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.t8a}
                        </Para>
                        {[ "para48"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        {["para49", "para50", "para51", "para52", "para53", "para54", "para55", "para56", "para57", "para58"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table10 />
                        <Para>
                            {ctx.chapter2kannada.Content.t10a}
                        </Para>
                        {[ "para59"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        {["para60", "para61", "para62", "para64"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                            {ctx.chapter2kannada.Content.para63}
                        </Subtitle>
                        {[ "para64"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table11 />
                        <Para>
                            {ctx.chapter2kannada.Content.t3fb}
                        </Para>
                        {[ "para65"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        {["para66", "para67"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                            {ctx.chapter2kannada.Content.para68}
                        </Subtitle>
                        {[ "para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table12 />
                        <Para>
                            {ctx.chapter2kannada.Content.t11a}
                        </Para>
                        {["para70", "para71",].map((item, ind) =>
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

export default Resources