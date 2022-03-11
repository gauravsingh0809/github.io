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
    console.log(ctx.chapter2kannada)

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
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                    <Title>{ctx.chapter2kannada.Content.para9}</Title>
                    <Para>
                        {ctx.chapter2kannada.Content.para10}
                    </Para>
                    {["para11", "para12","para13","para14", "para15"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                       {["para16", "para17","para18","para19", "para20","para21","para22","para23","para24","para25"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para26", "para27","para28","para29"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}

                        {["para30", "para31","para32","para33", "para34","para35","para36"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}

                        {["para37", "para38","para39", "para40","para41","para42","para43","para44"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}

                        {["para45", "para46","para47", "para48"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para49", "para50","para51","para52", "para53","para54","para55","para56","para57","para58","para59"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}

                        {["para60","para61","para62","para63","para64","para65"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para66","para67","para68","para69"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para70","para71",].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}

                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default Resources