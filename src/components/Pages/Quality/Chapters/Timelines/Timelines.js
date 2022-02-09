import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table11 from '../../../Tables/Chapter4/Table11'

const Timelines = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="non-submission" forward="misappropriations" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Timelines"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Timelines"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                            <Table11 />
                            <p className="footer">
                                Source: Report on MCA
                            </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Timelines"][item]}
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
                        <FloatingActionButtons back="non-submission" forward="misappropriations" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Timelines"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Timelines"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                            <Table11 />
                            <p className="footer">
                                Source: Report on MCA
                            </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Timelines"][item]}
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

export default Timelines