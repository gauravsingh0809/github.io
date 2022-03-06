import React, { useContext } from 'react'
import { Link } from "@material-ui/core"
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table1 from '../../../Tables/Chapter1/Table1'
import Chart1, { Chart2, Chart3, Chart4, Chart5, Chart6 } from '../../../Charts/Charts'
import Subtitle from '../../../../Subtitle/Subtitle'
import { Chart10, Chart11, Chart11a, Chart12, Chart12b, 
    Chart13, Chart14, Chart15, Chart16, Chart17, 
    Chart18, 
    Chart19, 
    Chart2 as Chrt2, Chart20, Chart3 as Chrt3, Chart4 as Chrt4, Chart7, Chart8, Chart9 } from '../../../Charts/Chap2Charts'



const Profile = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.tables1)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview" forward="/overview/profile" />
                        <Title>
                            1.2 Profile of the state
                        </Title>
                        <Chart20 />
                        <Chart19 />
                        <Chart18 />
                        <Chart17 />
                        <Chart16 />
                        <Chart15 />
                        <Chart14 />
                        <Chart13 />
                        <Chart12 />
                        <Chart11/>
                        <Chart10 />
                        <Chart9 />
                        <Chart8 />
                        <Chart7 />
                        <Chrt4 />
                        <Chrt3 />
                        <Chrt2 />
                        <Chart11a />
                        <Chart12b />
                        <Chart6 />
                        <Chart5 />
                        <Chart4 />
                        <Chart3 />
                        <Chart2 />
                        <Chart1 />

                        <Title>
                            {ctx.chapterOne.Profile.para1}
                        </Title>
                        <Para>
                            {ctx.chapterOne.Profile.para2}
                        </Para>
                        <Title>
                            {ctx.chapterOne.Profile.para3}
                        </Title>

                        {["para4", "para5"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        {/* Table 1 goes here */}
                        <Table1 id="table1"/>
                        <h6>
                            {ctx.tables1.T1F1} <br></br>
                            {ctx.tables1.T1F2}
                        </h6>
                        <Chart1 />
                        <Title>
                            {ctx.chapterOne.Profile.para6}
                        </Title>
                        {["para7", "para8"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        {["Para9", "Para10", ""].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Para>
                            {ctx.chapterOne.Profile.Para11}
                        </Para>
                        {["Para12", "Para13", "Para14"].map((item, ind) =>
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
                    {/* <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview" forward="/overview/profile" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter1kannada.Overview.Introduction.title}</Title>
                        <Para>
                            {ctx.chapter1kannada.Overview.Introduction.content}
                        </Para>
                    </div> */}
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Profile
