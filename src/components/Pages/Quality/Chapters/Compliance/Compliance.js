import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table10 from '../../../Tables/Chapter4/Table10'


const Compliance = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="reconciliation" forward="submission" />
                        <Title>
                            D. Observation relating to disclosure
                        </Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Compliance"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Compliance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                            <Table10 />
                            {ctx.isStatus.status1
                            ? <div>
                                {['para3','para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Compliance"][item]}
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
                        <FloatingActionButtons back="reconciliation" forward="submission" />
                        <Title>
                            D. Observation relating to disclosure
                        </Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Compliance"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Compliance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                            <Table10 />
                            {ctx.isStatus.status1
                            ? <div>
                                {['para3','para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Compliance"][item]}
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

export default Compliance