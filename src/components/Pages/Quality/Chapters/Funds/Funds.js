import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'
import Table2 from "../../../Tables/Chapter4/Table2";
import Table3 from "../../../Tables/Chapter4/Table3";
import Table4 from "../../../Tables/Chapter4/Table4";
import Table5 from "../../../Tables/Chapter4/Table5";
import Table6 from "../../../Tables/Chapter4/Table6";
import Table7 from "../../../Tables/Chapter4/Table7";
import Table8 from "../../../Tables/Chapter4/Table8";
import Table9 from "../../../Tables/Chapter4/Table9";
import Table10 from "../../../Tables/Chapter4/Table10";
import Table11 from "../../../Tables/Chapter4/Table11";
import Table12 from "../../../Tables/Chapter4/Table12";



const Funds = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="delay" />
                        <Title>{ctx.chapterFour.title}</Title>

                        <Table1/>
                        <Table2/>
                        <Table3/>
                        <Table4/>
                        <Table5/>
                        <Table6/>
                        <Table7/>
                        <Table8/>
                        <Table9/>
                        <Table10/>
                        <Table11/>
                        <Table12/>
                        
                        <Para>
                        {ctx.chapterFour.para1}
                        </Para>
                        <Title>{ctx.chapterFour.para2}</Title>
                        <Para>
                        {ctx.chapterFour.first.title}
                        </Para>
                        {["para1","para2",":Para3","Para4","Para5","Para6","Para7","Para8","Para9"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.first[item]}
                            </Para> )}
                            <Para>
                        {ctx.chapterFour.first.Para9a}
                        </Para>
                        <Para>
                        {ctx.chapterFour.first.Para9b}
                        </Para>


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

export default Funds