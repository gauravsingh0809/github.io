import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'

const FinIntroduction = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                        <Title>
                            {ctx.chapterTwo.Introduction.title}
                            </Title>
                        <Para>
                            {ctx.chapterTwo.Introduction.para1}
                        </Para>

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
                        <Title>{ctx.chapter2kannada.Content.para1}</Title>
                        <Para>
                            {ctx.chapter2kannada.Content.para2}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.para3}
                        </Para>

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default FinIntroduction