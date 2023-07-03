import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'



const OverviewBP = () => {

    const ctx = useContext(MyContext)
    console.log(ctx)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/structure" forward="/overview/snapshot-finances" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para36}
                        </Title>
                        {["Para37", "Para38"].map((item, ind) =>
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
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/overview/structure" forward="/overview/snapshot-finances" />
                    <Title id="anchor">
                        {ctx.chapter1kannada.Content.para38}
                    </Title>
                    {["para39", "para40"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter1kannada.Content[item]}
                        </Para>
                    )}
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default OverviewBP
