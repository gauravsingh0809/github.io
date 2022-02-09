import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"

const Submission = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="compliance" forward="dcu" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Submission"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Submission"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="compliance" forward="dcu" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Submission"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Submission"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Submission