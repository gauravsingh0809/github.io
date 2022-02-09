import React, { useContext, useState } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table4 from '../../../Tables/Chapter4/Table4'
import { getFirebase } from "../../../../../firebase/firebase";
import ImageComponent from "material-ui-image";


const Abstract = () => {

    const ctx = useContext(MyContext)

    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/images/chap4chart2.png')
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
                        <FloatingActionButtons back="delay" forward="pdaccounts" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality.Abstract.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality.Abstract[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table4 />
                        <p className="footer">
                            *Excluding Bills for the Month of March 2020
                            <br>
                            </br>
                            Source- Finance Accounts
                        </p>
                        <ImageComponent src={url} alt="Chapter 4 Chart 2" aspectRatio="1/1.5" />
                        {/* <Chart2 /> */}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2', 'para3', 'para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality.Abstract[item]}
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
                        <FloatingActionButtons back="delay" forward="pdaccounts" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality.Abstract.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.Abstract[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table4 />
                        <p className="footer">
                            *Excluding Bills for the Month of March 2020
                            <br>
                            </br>
                            Source- Finance Accounts
                        </p>
                        <ImageComponent src={url} alt="Chapter 4 Chart 2" aspectRatio="1/1.5" />
                        {/* <Chart2 /> */}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2', 'para3', 'para4', 'para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.Abstract[item]}
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

export default Abstract