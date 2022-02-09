import React, { useContext, useState } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table9 from '../../../Tables/Chapter4/Table9'
import { getFirebase } from "../../../../../firebase/firebase";
import ImageComponent from "material-ui-image";

const NonReconciliation = () => {

    const ctx = useContext(MyContext)
    const [url, setURL] = useState("");

    getFirebase()
    .storage()
    .ref('/images/chap4chart3.png')
    .getDownloadURL()
        .then((url) => {
            setURL(url);
        });

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="balances" forward="reconciliation" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality["Non reconciliation"].title}</Title>
                        <div>
                            {['para1'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterFour.Quality["Non reconciliation"][item]}
                                </Para>
                            )}
                        </div>
                        <ImageComponent src={url} alt="Chapter4 chart 3" aspectRatio="1/1.5" />
                        <div>
                            {['para2'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterFour.Quality["Non reconciliation"][item]}
                                </Para>
                            )}
                        </div>
                        <p className="footer">
                            In crores
                        </p>
                        <Table9 />
                        <p className="footer">
                            Source- Report on MCA and Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality["Non reconciliation"][item]}
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
                        <FloatingActionButtons back="balances" forward="reconciliation" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality["Non reconciliation"].title}</Title>
                        <div>
                            {['para1'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter4kannada.Quality["Non reconciliation"][item]}
                                </Para>
                            )}
                        </div>
                        <ImageComponent src={url} alt="Chapter4 chart 3" aspectRatio="1/1.5" />
                        <div>
                            {['para2'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter4kannada.Quality["Non reconciliation"][item]}
                                </Para>
                            )}
                        </div>
                        <p className="footer">
                            In crores
                        </p>
                        <Table9 />
                        <p className="footer">
                            Source- Report on MCA and Finance Accounts
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality["Non reconciliation"][item]}
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

export default NonReconciliation