import React, { useContext, useState } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table2 from '../../../Tables/Chapter4/Table2'
import Table3 from '../../../Tables/Chapter4/Table3'
import { getFirebase } from "../../../../../firebase/firebase";
import ImageComponent from "material-ui-image";


const Delay = () => {

    const ctx = useContext(MyContext)
    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/images/chap4chart1.png')
        .getDownloadURL()
        .then((url) => {
            setURL(url);
        });


    return (
        ctx.langPref
            ? (ctx.chapterFour && ctx.charts4
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="funds" forward="acbills" />
                        <Title>B. Observation relating to transparency</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterFour.Quality.Delay.title}</Title>
                        <div>
                            {['para1'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterFour.Quality.Delay[item]}
                                </Para>
                            )}
                        </div>
                        <p className="footer">
                            In crores
                        </p>
                        <Table2 />
                        <p className="footer">
                            Source: PAG(A&E)
                        </p>
                        <p className="footer">
                            In crores
                        </p>
                        <Table3 />
                        <p className="footer">
                            Source: PAG(A&E)
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality.Delay[item]}
                                    </Para>
                                )}
                                <ImageComponent src={url} alt="chapter 4 chart 1" aspectRatio="1/1.5" />
                                {/* <Chart1 /> */}
                                {['para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterFour.Quality.Delay[item]}
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
            : (ctx.chapter4kannada && ctx.charts4
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="funds" forward="acbills" />
                        <Title>B. Observation relating to transparency</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality.Delay.title}</Title>
                        <div>
                            {['para1'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter4kannada.Quality.Delay[item]}
                                </Para>
                            )}
                        </div>
                        <p className="footer">
                            In crores
                        </p>
                        <Table2 />
                        <p className="footer">
                            Source: PAG(A&E)
                        </p>
                        <p className="footer">
                            In crores
                        </p>
                        <Table3 />
                        <p className="footer">
                            Source: PAG(A&E)
                        </p>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.Delay[item]}
                                    </Para>
                                )}
                                <ImageComponent src={url} alt="chapter 4 chart 1" aspectRatio="1/1.5" />
                                {/* <Chart1 /> */}
                                {['para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.Delay[item]}
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

export default Delay