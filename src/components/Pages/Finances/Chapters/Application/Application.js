import React, { useContext, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Subtitle from "./../../../../Subtitle/Subtitle"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table13 from '../../../Tables/Chapter2/Table13'
import Table14 from '../../../Tables/Chapter2/Table14'
import Table15 from '../../../Tables/Chapter2/Table15'
import Table16 from '../../../Tables/Chapter2/Table16'
import Table17 from '../../../Tables/Chapter2/Table17'
import Table18 from '../../../Tables/Chapter2/Table18'
import Table19 from '../../../Tables/Chapter2/Table19'
import Table20 from '../../../Tables/Chapter2/Table20'
import Table20a from '../../../Tables/Chapter2/Table20a'
import Table20b from '../../../Tables/Chapter2/Table20b.js'
import Table20c from '../../../Tables/Chapter2/Table20c.js'
import Table21 from '../../../Tables/Chapter2/Table21'
import Table22 from '../../../Tables/Chapter2/Table22'
import Table23 from '../../../Tables/Chapter2/Table23'
import Table24 from '../../../Tables/Chapter2/Table24'
import Table24b from '../../../Tables/Chapter2/Table24b'
import Table25 from '../../../Tables/Chapter2/Table25'
import Table25a from '../../../Tables/Chapter2/Table25a'
import Table26 from '../../../Tables/Chapter2/Table26'
import Table27 from '../../../Tables/Chapter2/Table27'
import Table13kan from '../../../Tables/Chapter2kan/Table13'
import Table14kan from '../../../Tables/Chapter2kan/Table14'
import Table15kan from '../../../Tables/Chapter2kan/Table15'
import Table16kan from '../../../Tables/Chapter2kan/Table16'
import Table17kan from '../../../Tables/Chapter2kan/Table17'
import Table18kan from '../../../Tables/Chapter2kan/Table18'
import Table18akan from '../../../Tables/Chapter2kan/Table18a'
import Table19kan from '../../../Tables/Chapter2kan/Table19'
import Table20akan from '../../../Tables/Chapter2kan/Table20a'
import Table20bkan from '../../../Tables/Chapter2kan/Table20b'
import Table20ckan from '../../../Tables/Chapter2kan/Table20c'
import Table20dkan from '../../../Tables/Chapter2kan/Table20d'

import Table22kan from '../../../Tables/Chapter2kan/Table22'
import Table23kan from '../../../Tables/Chapter2kan/Table23'
import Table24kan from '../../../Tables/Chapter2kan/Table24'
import Table25kan from '../../../Tables/Chapter2kan/Table25'
import Table26kan from '../../../Tables/Chapter2kan/Table26'
import Table27kan from '../../../Tables/Chapter2kan/Table27'
import Table28kan from '../../../Tables/Chapter2kan/Table28'
import {
     Chart11, Chart12,
   Chart7, Chart8, Chart9
} from '../../../Charts/Chap2Charts'
import c27 from '../../../../../Images/c27.png'
import c28 from '../../../../../Images/c28.png'
import c29 from '../../../../../Images/c29.png'
import c210 from '../../../../../Images/c210.png'
import c211 from '../../../../../Images/c211.png'
import c212a from '../../../../../Images/c212a.png'
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'
import Table20kan from '../../../Tables/Chapter2kan/Table20'
import { Chart11a } from '../../../Charts/Chap2Charts'


const Application = () => {

    const ctx = useContext(MyContext)
    const [url, setURL] = useState("");

    // getFirebase()
    //     .storage()
    //     .ref('/pdfs/2542text.png')
    //     .getDownloadURL()
    //     .then((url) => {
    //         setURL(url);
    //     });


    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/resources" forward="/finances/publicaccount" />
                        <Title>{ctx.chapterTwo.Para67}</Title>
                        {["Para68", "Para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo["Para70"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo["Para71"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table13 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Para72}
                        </Para>
                        {/* <Chart7 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                         <ImageComponent src={c27} alt="chart23" aspectRatio={1 / 0.5} />
                        <Para>
                            {ctx.chapterTwo.Para73}
                        </Para>
                        {/* <Chart8 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                         <ImageComponent  src={c28} alt="chart23" aspectRatio={1 / 0.5} />
                        {["Para74"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo["Para75"]}
                        </Subtitle>
                        {["Para76", "Para77", "Para78"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table14 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts of respective years
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Para79}
                        </Para>
                        {/* <Chart9 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                         <ImageComponent  src={c29} alt="chart23" aspectRatio={1 / 0.5} />
                        {["Para80"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para81}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para82}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table15 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para83"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para84}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para85}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table16 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                *Includes object heads Consolidated Salary, pay of officers, pay of staff, Interim Relief, Dearness Allowance, Other allowances, medical allowance and reimbursement of medical expenses
                            </i>
                        </h4>
                        {["Para86"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para87}
                        </Subtitle>
                        {["Para88"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                        <Para>
                            {ctx.chapterTwo.Para89.substring(0, 283)}

                            <span className="tooltip">
                                {ctx.chapterTwo.Para89.substring(283, 285)}
                                <span className="tooltiptext">
                                The KFRC-2 was established for periodic recommendation for restricting of department and rationalization of Staff strength at all levels of Government identification of unnecessary cadre/staffs in Departments and possibility of merging of departments due to use of technology.
                                </span>
                                <sup>12</sup>
                            </span>

                            {ctx.chapterTwo.Para89.substring(284,)}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table17 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                #includes interest on off-budget borrowings.
                                <br />
                                @excludes subsidies in the form of financial assistance
                                <br></br>
                                *includes non-salary component of PRIs and other expenditure related to PRIs and ULBs
                                <br></br>
                            </i>
                        </h4>
                    
                       
                        <ImageComponent  src={c210} alt="chart23" aspectRatio={1 / 0.5} />
                        {["Para90"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para91}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para92}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.Para93}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Para94}
                        </Subtitle>
                        {["Para95", "Para96", "Para97", "Para98"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        {["Para99", "Para100"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}
                        <Para>
                            <li>
                                {ctx.chapterTwo.Para101.substring(0, 56)}

                                <span className="tooltip">
                                    {ctx.chapterTwo.Para101.substring(56, 63)}
                                    <span className="tooltiptext">
                                        Refers to the contribution the employee had to make from the date of his entry into service to the date of implementation of the scheme.
                                    </span>
                                    <sup>13</sup>
                                </span>

                                {ctx.chapterTwo.Para101.substring(63,)}
                            </li>
                        </Para>
                        {["Para102"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}
                        {["Para103"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        {["Para104", "Para104a", "Para104b", "Para104c", "Para104d"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}        
                        <Subtitle>
                            {ctx.chapterTwo.Para105}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para106}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.Para107}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Para108}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para109}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table18 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Para110}
                        </Para>
                        {/* <Chart11 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                         <ImageComponent  src={c211} alt="chart23" aspectRatio={1 / 0.5} />
                        {["Para111"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                                </Para>)}    
                        <Para>
                            
                                {ctx.chapterTwo.Para112.substring(0, 69)}

                                <span className="tooltip">
                                    {ctx.chapterTwo.Para112.substring(69, 77)}
                                    <span className="tooltiptext">
                                        Explicit subsidy is that which provides for expenditure in the form of a subsidy or interest subvention for certain schemes of the Government. It was stressed that the challenge lies in
                                        ensuring that these subsidies do not become a permanent source of additional support and thereby deter these sectors from undertaking reforms.
                                    </span>
                                    <sup>14</sup>
                                </span>

                                {ctx.chapterTwo.Para112.substring(77,)}
                            
                        </Para>
                        {["Para113"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para115}
                        </Subtitle>
                        {["Para114"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                                </Para>)}
                        <Para>
                            {ctx.chapterTwo.Para116}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table19 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>

                        {["Para117", "Para118", "Para119"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        {["Para119a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}    
                        {["Para120"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}    
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table20 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para120a", "Para120b", "Para120c"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Table20a/>    
                        <Para>
                            {ctx.chapterTwo.Para120d}
                        </Para>
                        {["Para120e", "Para120f", "Para120g", "Para120h"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                            </Para>)} 
                        {["Para120i"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>    
                        <Table20b/>
                        <h4>
                            <i>
                                
                                *The cess and collection charges have not been considered for calculating NLNORR. Further, the compensation received as back-to-back loans during 2020-21 and 2021-22 has not been considered.
                                <br></br>
                                # Devolutions from XIII, XIV and XV Finance Commission has not been included.
                            </i>
                        </h4>    
                        <Para>
                            {ctx.chapterTwo.Para120j}
                        </Para>        
                        <Subtitle>
                            {ctx.chapterTwo.Para120k}
                        </Subtitle>
                        {["Para120l", "Para120m"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ In crore
                        </h3>    
                        <Table20c/>
                        <h4>
                            <i>
                            Source: Information furnished by HFW/ME
                            </i>
                        </h4>    
                        <Para>
                            {ctx.chapterTwo.Para120n}
                        </Para>      
                        <Subtitle>
                            {ctx.chapterTwo.Para121}
                        </Subtitle>
                        {["Para122", "Para123"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        {/* <Chart12 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                         <ImageComponent  src={c212a} alt="chart23" aspectRatio={1 / 0.5} />
                        <Para>
                            {ctx.chapterTwo.Para125}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table21 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para126"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <div style={{
                            backgroundColor: "#ac8",
                            fontSize: "18px",
                            padding: "5px 5px 5px 20px",
                            borderRadius: "5px"
                        }}>
                            <p>
                                {ctx.chapterTwo["Para130"]}
                            </p>
                        </div>
                        <Subtitle>
                            {ctx.chapterTwo["Para131"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo["Para132"]}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo["Para133"]}
                        </Subtitle>
                        <Para>
                            
                                {ctx.chapterTwo.Para134.substring(0, 69)}

                                <span className="tooltip">
                                    {ctx.chapterTwo.Para134.substring(69, 71)}
                                    <span className="tooltiptext">
                                        Includes investment of ₹68 crore in 16 non-working Government Companies.
                                    </span>
                                    <sup>15</sup>
                                </span>
                                {ctx.chapterTwo.Para134.substring(71, 643)}
                                <span className='tooltip'>
                                    {ctx.chapterTwo.Para134.substring(643,)}
                                    <span className='tooltiptext'>
                                    Irrigation (`36,779.37 crore), Power (`12,025.66 crore), Infrastructure (`4,933.65 crore), Finance (`3,641.80 crore), Transport (`1,670.21 crore), Housing (`1,450.97 crore), Industries (`1,288.27 crore) and Other sectors (`8,836.50 crore).
                                    </span>
                                    <sup>16</sup>
                                </span>
                            
                        </Para>
                        {["Para135", "Para136", "Para137",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table22 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para138", "Para139", "Para140", "Para141"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>    
                        <Table23 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para142", "Para143", "Para144"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        
                        <Subtitle>
                            {ctx.chapterTwo["Para147"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo["Para148"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table24 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para149", "Para150", "Para151", "Para151a", "Para152"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}

                        <Para>
                            <li>
                                {ctx.chapterTwo.Para153.substring(0, 243)}

                                <span className="tooltip">
                                    {ctx.chapterTwo.Para153.substring(243, 246)}
                                    <span className="tooltiptext">
                                    In 2020-21, eight out of 842 institutions have furnished the information</span>
                                    <sup>17</sup>
                                </span>

                                {ctx.chapterTwo.Para153.substring(246,)}
                            </li>
                        </Para>
                        {["Para154"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}
                        {["Para155"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                        <h3 className='headnote'>
                            (Amount in ₹)
                        </h3>    
                        <Table25a/>    
                        <Para>
                            {ctx.chapterTwo.Para156}
                        </Para>    
                        <Subtitle>
                            {ctx.chapterTwo.Second.para1h1}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Second.para1}
                        </Para>
                        {/* <ImageComponent src={url} alt="table2543" aspectRatio={1 / 0.25} /> */}

                        {/* <Para>
                            <li>
                                {ctx.chapterTwo.para2.substring(0, 70)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.para2.substring(70, 83)}
                                    <span className="tooltiptext">
                                        Latest finalized accounts as of November 2021
                                    </span>
                                    <sup>19</sup>
                                </span>

                                {ctx.chapterTwo.para2.substring(83,)}
                            </li>
                        </Para> */}
                       
                       <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table25 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table26 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        
                        {["para2","para3", "para4"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}    

                        
                        {/* <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table24b /> */}
                        {/* <Para>
                            <li>
                                {ctx.chapterTwo.para4.substring(0, 121)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.para4.substring(121, 125)}
                                    <span className="tooltiptext">
                                        Equity: Karnataka Neeravari Nigam Limited, Cauvery Neeravari Nigama Limited, Vishveswaraya Jala Nigam Limited, Rail Infrastructure Development Corporation (Karnataka) Limited, Karnataka Power Transmission corporation limited and Krishna Bhagya Jala Nigam Limited,
                                        Loans Mangalore electricity Supply Company limited, Cauvery Neeravari Nigam Limited and KPC Gas Power Corporation limited.
                                        Guarantees Raichur power Company Limited, Mangalore electricity Supply Company limited KPC Gas Power Corporation limited.
                                    </span>
                                    <sup>20</sup>
                                </span>

                                {ctx.chapterTwo.para4.substring(125,)}
                            </li>
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para5}
                        </Para>
                        <Para>
                            <li>
                                {ctx.chapterTwo.para6.substring(0, 39)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.para6.substring(39, 43)}
                                    <span className="tooltiptext">
                                        Statutory corporations-6, Working Government companies -105, Non-working Government companies-13
                                    </span>
                                    <sup>21</sup>
                                </span>

                                {ctx.chapterTwo.para6.substring(43,)}
                            </li>
                        </Para>
                        {["para7", "para8", "para9"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Para>
                            <li>
                                {ctx.chapterTwo.para10.substring(0, 39)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.para10.substring(39,)}
                                    <span className="tooltiptext">
                                        For the purpose of paragraphs(iii),(v) and (vi), subsidiaries companies were also considered during 2019-20 and 2020-21.
                                    </span>
                                    <sup>22</sup>
                                </span>

                            </li>
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para11}
                        </Para>
                        <Para>
                            <li>
                                {ctx.chapterTwo.para12.substring(0, 73)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.para12.substring(73, 83)}
                                    <span className="tooltiptext">
                                        Measures the profit or loss made in a fixed year relating to the amount of money invested in the form of equity and long-term loans and is expressed as a percentage of profit to total investment                                    </span>
                                    <sup>23</sup>
                                </span>

                                {ctx.chapterTwo.para12.substring(83, 95)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.para12.substring(95, 101)}
                                    <span className="tooltiptext">
                                        Measure of performance calculated by dividing net profit by shareholder’s funds                                    </span>
                                    <sup>24</sup>
                                </span>
                                {ctx.chapterTwo.para12.substring(101, 125)}

                                <span className="tooltip">
                                    {ctx.chapterTwo.para12.substring(125, 133)}
                                    <span className="tooltiptext">
                                        Financial ratio that measures the company’s profitability and the efficiency with which its capital is used and is calculated by dividing the company’s earnings before interest and taxes by capital employed.                                    </span>
                                    <sup>25</sup>
                                </span>

                            </li>
                        </Para>
                        {["para13", "para14", "para15", "para16",
                            "para17", "para18", "para19", "para20", "para21", "para22",
                            "para23", "para24", "para25", "para26", "para27", "para28",
                            "para29", "para30", "para31", "para32"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo[item]}
                                </Para>)}
                        <Para>
                            <li>
                                {ctx.chapterTwo.para33.substring(0, 317)}
                                <span className="tooltip">
                                    {ctx.chapterTwo.para33.substring(317, 319)}
                                    <span className="tooltiptext">
                                        The Ministry of Corporate Affairs has given general extension of time for finalisation of accounts  by SPSUs upto November 2021.
                                    </span>
                                    <sup>26</sup>
                                </span>
                                {ctx.chapterTwo.para33.substring(319,)}

                            </li>
                        </Para>

                        
                        <Subtitle>
                            {ctx.chapterTwo.Second.para1h1}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Second.para1}
                        </Para>
                        {["para2", "para3", "para4", "para5"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)} */}
                            
                        <Subtitle>
                            {ctx.chapterTwo.Second.para6}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Second.para7}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table27 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                AE: Aggregate Expenditure, CE: Capital Expenditure, DE: Development Expenditure (includes total expenditure under social and economic sectors)
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Second.para8}
                        </Para>
                        {["para9", "para10", "para11", "para12", "para13"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapterTwo.Second[item]}
                                </li>
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
                        <FloatingActionButtons back="/finances/resources" forward="/finances/publicaccount" />
                        <Title>{ctx.chapter2kannada.Content.para72}</Title>
                        {["para73"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            {ctx.chapter2kannada.Content["para74"]}
                        </Para>
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para75"]}
                        </Subtitle>
                        {["para76"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}


                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>    
                        <Table13kan />
                        <h3>
                        ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h3>
                        
                        
                        <Para>
                            {ctx.chapter2kannada.Content["t3fb"]}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.para77}
                        </Para>
                        <Chart7 />
                        <Para>
                            {ctx.chapter2kannada.Content["t3fb"]}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.para78}
                        </Para>
                        <Chart8 />
                        <Para>
                            {ctx.chapter2kannada.Content["t3fb"]}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content["para79"]}
                        </Para>
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para80"]}
                        </Subtitle>
                        {[ "para81", "para82", "para83"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}


                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>    
                        <Table14kan />
                        <Para>
                            {ctx.chapter2kannada.Content["t13a"]}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.para84}
                        </Para>
                        <Chart9 />
                        <Para>
                            {ctx.chapter2kannada.Content["t3fb"]}
                        </Para>
                        {["para85", "para86", "para87",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>    
                        <Table15kan />
                       
                        <Para>
                            {ctx.chapter2kannada.Content["t3fb"]}
                        </Para>
                        {["para88", "para89", "para90",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>      
                        <Table16kan />
                        <h3>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        <br></br>
                        * ಉದ್ದೇಶ ಶೀರ್ಷಿಕೆ ಕ್ರೋಢೀಕೃತ ಸಂಬಳಗಳು ಅಧಿಕಾರಿಗಳ ವೇತನ, ಸಿಬ್ಬಂದಿ ವೇತನ, ಮಧ್ಯಂತರ ಪರಿಹಾರ, ತುಟ್ಟಿಭತ್ಯೆ, ಇತರ ಭತ್ಯೆಗಳು, ವೈದ್ಯಕೀಯ ಭತ್ಯೆ ಮತ್ತು ವೈದ್ಯಕೀಯ ವೆಚ್ಚಗಳ ಮರುಪಾವತಿಯನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ.
                        </h3> 
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content["t15b"]}
                        </Para>
                        {["para91", "para92", "para93", "para94"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>     
                        <Table17kan />
                        <h3>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        <br></br>
                        # ಆಯವ್ಯಯ ಹೊರಗಿನ ಸಾಲಗಳ ಮೇಲಿನ ಬಡ್ಡಿಯನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ
                        <br></br>
                        @ ಹಣಕಾಸಿನ ಸಹಾಯದ ರೂಪದಲ್ಲಿ ಸಹಾಯಧನಗಳನ್ನು ಹೊರತುಪಡಿಸುತ್ತದೆ
                        <br></br>
                        * ಪಂಚಾಯತ್‌ ರಾಜ್‌ ಸಂಸ್ಥೆಗಳ ಸಂಬಳೇತರ ಬಾಬ್ತುಗಳು ಮತ್ತು ಪಂಚಾಯತ್‌ ರಾಜ್‌ ಸಂಸ್ಥೆಗಳ ಮತ್ತು ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಇತರ ವೆಚ್ಚಗಳ ಬಾಬ್ತುಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.
                        </h3> 
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para>
                        
                        {["para95" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Para>
                            {ctx.chapter2kannada.Content["para96"]}
                        </Para>
                        {["para97", "para98"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            {ctx.chapter2kannada.Content["para99"]}
                        </Para>
                        {["para100","para101", "para102", "para103", "para104", "para105", "para106",
                            "para107", "para108", "para109", "para110", "para111", "para112", "para113"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapter2kannada.Content[item]}
                                </Para>)}
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para114"]}
                        </Subtitle>   
                        {["para115", "para116"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}    
                        
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para117"]}
                        </Subtitle>      
                        
                        <Para>
                            {ctx.chapter2kannada.Content["para118"]}
                        </Para>
                        
                        <Table18kan />
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.para119}
                        </Para>
                        <Chart11 />
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para>
                        {["para120", "para121", "para122"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para122a"]}
                        </Subtitle>     
                            
                        {[ "para123", "para124"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table18akan />
                        <h3>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h3>
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para>
                        {["para125","para126", "para127", "para128", "para129"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table19kan />
                        <h3 className='headnote'>
                        ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h3>
                            
                        
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para>
                        {["para130","para131", "para132"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <Table20akan />
                        {/* <Chart12 />
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para> */}

                        <Para>
                            {ctx.chapter2kannada.Content.para133}
                        </Para>

                        {["para133","para134", "para135", "para136", "para137"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>    
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                            </Para>)}

                        <Para>
                            {ctx.chapter2kannada.Content.para138}
                        </Para>
                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table20bkan />
                        <h3>
                        *	ಸಾಲ ಅಲ್ಲದ ನಿವ್ವಳ ಸ್ವಂತ ರಾಜಸ್ವ ಆದಾಯವನ್ನು ಲೆಕ್ಕ ಹಾಕುವಾಗ ಉಪಕರ (ಸೆಸ್) ಮತ್ತು ವಸೂಲಿ ಶುಲ್ಕಗಳನ್ನು ಪರಿಗಣಿಸಿಲ್ಲ. ಮುಂದುವರೆದಂತೆ, ೨೦೨೦-೨೧ ಮತ್ತು ೨೦೨೧-೨೨ರ ಅವಧಿಯಲ್ಲಿ ಬ್ಯಾಕ್‌ ಟು ಬ್ಯಾಕ್‌ ಸಾಲವಾಗಿ ಸ್ವೀಕರಿಸಿದ ಪರಿಹಾರವನ್ನು ಪರಿಗಣಿಸಿಲ್ಲ. 
                        <br></br>
                        #	ಹದಿಮೂರು, ಹದಿನಾಲ್ಕು ಮತ್ತು ಹದಿನೈದನೆಯ ಹಣಕಾಸು ಆಯೋಗದ ಹಂಚಿಕೆಗಳನ್ನು ಒಳಗೊಂಡಿಲ್ಲ.

                        </h3>
                        <Para>
                            {ctx.chapter2kannada.Content.para139}
                        </Para>

                        <Subtitle>
                            {ctx.chapter2kannada.Content["para140"]}
                        </Subtitle>     

                        {["para141","para142"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table20ckan />
                        <h3>
                        ಆಕರ: ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಮತ್ತು ವೈದ್ಯಕೀಯ ಶಿಕ್ಷಣ ಇಲಾಖೆಯಿಂದ ಒದಗಿಸಲ್ಪಟ್ಟ ಮಾಹಿತಿ
                        </h3>
                        <Para>
                            {ctx.chapter2kannada.Content.para143}
                        </Para>

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content["para144"]}
                            </i>
                        </Subtitle>

                        {["para145","para146"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <Para>
                            {ctx.chapter2kannada.Content.para147}
                        </Para>  

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table20dkan />
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>

                        {["para148"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 

                        <div style={{
                            backgroundColor: "#ac8",
                            fontSize: "18px",
                            padding: "5px 5px 5px 20px",
                            borderRadius: "5px"
                        }}>
                            <p>
                                {ctx.chapter2kannada.Content.para149}
                            </p>
                        </div>
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para150}
                            </i>
                        </Subtitle>     
                        {["para151","para152","para153","para154","para155"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                        </Para>)} 

                        <Table22kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>
                        
                        {["para156","para157","para158","para159","para160"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                        </Para>)} 

                        <Table23kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>    

                        {["para161","para162","para163","para164","para165"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                        </Para>)}

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table24kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>

                        {["para166","para167","para168","para169","para170","para171","para172"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                        </Para>)}
                        <Para>
                            {ctx.chapter2kannada.Content.para173}
                        </Para> 

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table25kan/>

                        <Para>
                            {ctx.chapter2kannada.Content.para174}
                        </Para>

                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para175}
                            </h4>
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.para176}
                        </Para>    

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table26kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table27kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>

                        {["para177", "para178"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                        </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para179}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter2kannada.Content.para180}
                        </Para>

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table28kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        <br></br>
                        ಒವೆ: ಒಟ್ಟು ವೆಚ್ಚ, ಬಂವೆ: ಬಂಡವಾಳ ವೆಚ್ಚ, ಅವೆ: ಅಭಿವೃದ್ಧಿ ವೆಚ್ಚ (ಸಾಮಾಜಿಕ ಮತ್ತು ಆರ್ಥಿಕ ವಲಯಗಳ ಅಡಿಯಲ್ಲಿ ಒಟ್ಟು ವೆಚ್ಚವನ್ನು ಒಳಗೊಂಡಿದೆ).
                            </i>
                        </h3>

                        <Para>
                            {ctx.chapter2kannada.Content.para181}
                        </Para>
                        {["para182", "para183","para184", "para185", "para186"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                        </Para>)}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Application