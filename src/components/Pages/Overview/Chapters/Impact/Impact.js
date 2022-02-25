import React, { useContext } from 'react'
import { Link } from "@material-ui/core"
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'



const Impact = () => {

    const ctx = useContext(MyContext)
    

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/profile" forward="/overview/structure" />
                        <Title>
                        {ctx.chapterOne.Profile.Para66}
                        </Title>
                        <div>

                        </div>
                        
                        

                        {["Para67"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}  
                     {["Para68", "Para69","Para70","Para71", "Para72","Para73","Para74","Para75"].map((item, ind) =>
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

export default Impact
