import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table12 from '../../../Tables/Chapter4/Table12'

const Misappropriations = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="timelines" forward="follow" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Misappropriation"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Misappropriation"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                            <p className="footer">
                                In crores
                            </p>
                        <Table12 />
                        <p className="footer">
                            Source: PAG(Audit I) and AG(Audit II)
                        </p>
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
                        <FloatingActionButtons back="timelines" forward="follow" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Misappropriation"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Misappropriation"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                            <p className="footer">
                                In crores
                            </p>
                        <Table12 />
                        <p className="footer">
                            Source: PAG(Audit I) and AG(Audit II)
                        </p>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Misappropriations