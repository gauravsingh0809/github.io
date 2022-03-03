import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'


const Abstract = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapterFour)




    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="delay" />
                        <Title>{ctx.chapterFour.second.para7}</Title>

                        <Para>
                            {ctx.chapterFour.second.para8}
                        </Para>

                            {["Para9", "Para10", "Para11", "Para12"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterFour.second[item]}
                                </Para>)}


                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ? <div >
                    <Navbar />
                    {/* <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="delay" />
                        <Para>
                            {ctx.chapter4kannada.Quality.Funds["para0"]}
                        </Para>
                        <Title>A. Observations relating to completeness of accounts</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality.Funds.title}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality.Funds.para1}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2', 'para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.Funds[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                            <p className="footer">
                                In crores
                            </p>
                            <Table1 />
                            {ctx.isStatus.status1
                            ? <div>
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.Funds[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para6', 'para7', 'para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapter4kannada.Quality.Funds[item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para9', 'para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.Funds[item]}
                                    </Para>
                                )}
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

export default Abstract