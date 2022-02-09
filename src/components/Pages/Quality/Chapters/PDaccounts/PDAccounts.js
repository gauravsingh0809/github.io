import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table5 from '../../../Tables/Chapter4/Table5'
import Table6 from '../../../Tables/Chapter4/Table6'

const PD = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="acbills" forward="balances" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality.PD.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality.PD[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality.PD.para2}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality.PD[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table5 />
                        <p className="footer">
                            Source- Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality.PD[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table6 />
                        <p className="footer">
                            Source- DDR Ledger
                        </p>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality.PD.para6}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para7', 'para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality.PD[item]}
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
                        <FloatingActionButtons back="acbills" forward="balances" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality.PD.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.PD[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality.PD.para2}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.PD[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table5 />
                        <p className="footer">
                            Source- Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.PD[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table6 />
                        <p className="footer">
                            Source- DDR Ledger
                        </p>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality.PD.para6}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para7', 'para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.PD[item]}
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

export default PD