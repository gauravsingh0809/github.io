import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table7 from '../../../Tables/Chapter4/Table7'
import Table8 from '../../../Tables/Chapter4/Table8'

const OutstandingBal = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="pdaccounts" forward="non-reconciliation" />
                        <Title>C. Observations relatingto measurement</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Outstanding Balance"].title}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Outstanding Balance"].para1}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2', 'para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                <ol type="I">
                                    {['para5', 'para6'].map((item, ind) =>
                                        <Para key={ind}>
                                            <li className="list">
                                                {ctx.chapterFour.Quality["Outstanding Balance"][item]}
                                            </li>
                                        </Para>
                                    )}
                                </ol>
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table7 />
                        <p className="footer">
                            Source- DDR Ledger
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Outstanding Balance"].para9}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Outstanding Balance"].para11}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para12'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Outstanding Balance"].para13}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para14'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Outstanding Balance"].para15}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para16'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table8 />
                        <p className="footer">
                            Source- Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para17'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Outstanding Balance"][item]}
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
                        <FloatingActionButtons back="pdaccounts" forward="non-reconciliation" />
                        <Title>C. Observations relatingto measurement</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Outstanding Balance"].title}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Outstanding Balance"].para1}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2', 'para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                <ol type="I">
                                    {['para5', 'para6'].map((item, ind) =>
                                        <Para key={ind}>
                                            <li className="list">
                                                {ctx.chapter4kannada.Quality["Outstanding Balance"][item]}
                                            </li>
                                        </Para>
                                    )}
                                </ol>
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table7 />
                        <p className="footer">
                            Source- DDR Ledger
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Outstanding Balance"].para9}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Outstanding Balance"].para11}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para12'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Outstanding Balance"].para13}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para14'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Outstanding Balance"].para15}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para16'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Outstanding Balance"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table8 />
                        <p className="footer">
                            Source- Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para17'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Outstanding Balance"][item]}
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

export default OutstandingBal