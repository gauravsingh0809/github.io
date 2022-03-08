import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'



const Basis = () => {

    const ctx = useContext(MyContext)
    // console.log("basis-context-viewer", ctx)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/profile" forward="/overview/structure" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para15}
                        </Title>

                        <Para>
                            {ctx.chapterOne.Profile.Para16}
                        </Para>
                        <Para>
                            {ctx.chapterOne.Profile.Para17}
                        </Para>
                        <Para>
                            {ctx.chapterOne.Profile.Para18}
                        </Para>

                        {[ "Para19", "Para20", "Para21", "Para22", "Para23", "Para24", "Para25"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterOne.Profile[item]}
                                </li>
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

export default Basis
