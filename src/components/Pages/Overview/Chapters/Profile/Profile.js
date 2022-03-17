import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table1 from '../../../Tables/Chapter1/Table1'
import Chart1, { Chart2, Chart3, Chart4, Chart5, Chart6 } from '../../../Charts/Charts'
import {
    Chart10, Chart11, Chart11a, Chart12, Chart12b,
    Chart13, Chart14, Chart15, Chart16, Chart17,
    Chart18, Chart21,
    Chart19,
    Chart2 as Chrt2, Chart20, Chart3 as Chrt3, Chart4 as Chrt4, Chart7, Chart8, Chart9
} from '../../../Charts/Chap2Charts'


import { Chart3 as Chart3Chap3 } from '../../../Charts/Chap3Charts'
// import { Chart1 as Chart1Chap4} from '../../../Charts/Chap4Charts'

import CustomTooltip from '../../../../CustomTooltip/CustomTooltip'


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
                        {/* <Chart1Chap4 /> */} { /* This one will be an image */}
                        {/* <Chart3Chap3 />
                        <Chart21 />
                        <Chart20 />
                        
                        
                        
                        <Chrt4 /> */}

                        {/* <Chrt3 /> */}
                        {/* <Chrt2 /> */}

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
                                    The difference between per capita income of the State and National’s average during 2020-21 was `99,828
                                </span>
                                <sup>2</sup>
                            </span>
                            {ctx.chapterOne.Profile.para5.substring(195,350)}

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
                        <h6>
                            {ctx.tables1.T1F1} <br></br>
                            {ctx.tables1.T1F2}
                        </h6>
                        {/* Chart 1 goes here */}
                        <Chart1 />

                        {["Para9"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Para>
                            {ctx.chapterOne.Profile.para10.substring(0, 165)}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.para10.substring(165, 174)}
                                <span className="tooltiptext">
                                Product taxes or subsidies are paid or received on per unit of product. Some examples of product taxes are excise tax, sales tax, service tax and import and export duties. Product subsidies include food, petroleum and fertilizer subsidies, interest subsidies given to farmers, households, etc. through banks
                                </span>
                                <sup>3</sup>
                            </span>
                            {ctx.chapterOne.Profile.para5.substring(174,)}

                        </Para>
                        <Chart2 />
                        <h6>
                            3 Source: Directorate of Economics and Statistics, Government of Karnataka
                            <br></br>
                            ^ Sectoral Distribution to GSDP
                        </h6>
                        <Para>
                            {ctx.chapterOne.Profile.Para11}
                        </Para>
                        <Chart3 />
                        {["Para12", "Para13", "Para14"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Chart4 />
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
                        <Title>
                            {ctx.chapter1kannada.Content.para5}
                        </Title>
                        <Para>
                            {ctx.chapter1kannada.Content.para6}
                        </Para>
                        <Title>
                            {ctx.chapter1kannada.Content.para7}
                        </Title>

                        {["para8", "para9"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}

                        <Title>
                            {ctx.chapter1kannada.Content.para10}
                        </Title>
                        {["para11", "para12"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}

                        {/* Table 1 goes here */}
                        <Table1 id="table1" />
                        <h6>
                            {ctx.tables1.T1F1} <br></br>
                            {ctx.tables1.T1F2}
                        </h6>
                        {/* Chart 1 goes here */}
                        <Chart1 />

                        {["para13", "para14"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Chart2 />
                        <h6>
                            3 Source: Directorate of Economics and Statistics, Government of Karnataka
                            <br></br>
                            ^ Sectoral Distribution to GSDP
                        </h6>
                        <Para>
                            {ctx.chapter1kannada.Content.Para11}
                        </Para>
                        <Chart3 />
                        {["para15", "para16", "para17"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Chart4 />
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Profile
