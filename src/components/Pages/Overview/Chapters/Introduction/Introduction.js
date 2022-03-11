import React, { useContext } from 'react'
import { Link } from "@material-ui/core"
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'



const Introduction = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapter1kannada)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview" forward="/overview/profile" />
                        <Title id="anchor">
                            {ctx.chapterOne.Introduction.title}
                        </Title>
                        <div>
                            <Para>
                                {ctx.chapterOne.Introduction.para1}
                            </Para>
                        </div>
                       
                        
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
                    <FloatingActionButtons back="/overview" forward="/overview/profile" />
                    <Title id="anchor">
                        {ctx.chapter1kannada.Content.para1}
                    </Title>
                    <div>
                        <Para>
                            {ctx.chapter1kannada.Content.para2}
                        </Para>
                        <Para>
                            {ctx.chapter1kannada.Content.para3}
                        </Para>
                    </div>
                    
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default Introduction
