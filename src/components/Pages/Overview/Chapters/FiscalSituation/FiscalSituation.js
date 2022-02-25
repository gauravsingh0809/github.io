import React, { useContext } from 'react'
import { Link } from "@material-ui/core"
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'



const  FiscalSituation = () => {

    const ctx = useContext(MyContext)
    

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/profile" forward="/overview/structure" />
                        <Title>
                        {ctx.chapterOne.Profile.Para55}
                        </Title>
                        <div>

                        </div>
                        
                        

                        {["Para56", "Para57","Para58"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
   
                     {[ "Para59","Para60", "Para61","Para62", "Para63",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        {["Para64", "Para65"].map((item, ind) =>
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

export default FiscalSituation
