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
import Chart1 from '../../../Charts/Charts'



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
