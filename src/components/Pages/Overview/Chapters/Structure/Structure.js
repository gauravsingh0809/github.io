import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import ContentSlider from '../../../../ContentSlider/ContentSlider'



const Structure = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/basis" forward="/overview/budgetprocess" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para26}
                        </Title>
                        <Para>
                            {ctx.chapterOne.Profile.Para27}
                        </Para>

                        <ContentSlider
                            position="left"
                            content={ctx.chapterOne.Profile.Para27a}
                            title="Consolidated fund"
                        />
                        <ContentSlider
                            position="right"
                            content={ctx.chapterOne.Profile.Para27b}
                            title="Contingency fund"
                        />
                        <ContentSlider
                            position="left"
                            content={ctx.chapterOne.Profile.Para27c}
                            title="Public Account"
                        />

                        <Para>
                            {ctx.chapterOne.Profile.Para28}
                        </Para>



                        {["Para29", "Para30", "Para31"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterOne.Profile[item]}
                                </li>
                            </Para>
                        )}
                        {["Para32", "Para33"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li style={{ marginLeft: "25px", listStyle: "square" }}>
                                    {ctx.chapterOne.Profile[item]}
                                </li>
                            </Para>
                        )}
                        {["Para34"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterOne.Profile[item]}
                                </li>
                            </Para>
                        )}
                        <Para>
                            {ctx.chapterOne.Profile["Para35"]}
                        </Para>
                        Flow Chart Image Comes here.
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

export default Structure
