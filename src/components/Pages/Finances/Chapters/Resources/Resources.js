import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'

const  Resources= () => {

    const ctx = useContext(MyContext)
    console.log(ctx.Chap2)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                        <Title>{ctx.chapterTwo.Profile.Para6}</Title>
                        <Para>
                            {ctx.chapterTwo.Profile.Para5}
                        </Para>
                        {["Para7", "Para8","Para9","Para10", "Para10a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                           {["Para11", "Para12","Para13","Para14", "Para15","Para16","Para17","Para18","Para19","Para21"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            {["Para22", "Para23","Para24","Para25"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}

                            {["Para26", "Para27","Para28","Para29", "Para30","Para31","Para32"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}

                            {["Para32", "Para33","Para34", "Para35","Para36","Para37","Para38","Para39"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}

                            {["Para40", "Para41","Para42", "Para43"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            {["Para44", "Para45","Para46","Para47", "Para48","Para49","Para50","Para51","Para52","Para53","Para54"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}

                            {["Para55","Para56","Para57","Para58","Para59","Para60"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            {["Para61","Para62","Para63","Para64"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            {["Para65","Para66",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter2kannada
                ? <div >
                    <Navbar />
                    {/* <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances.Introduction.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                <Para>
                                    {ctx.chapter2kannada.Finances.Introduction.para1}
                                </Para>
                            </div>
                            : ""}
                    </div> */}
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Resources