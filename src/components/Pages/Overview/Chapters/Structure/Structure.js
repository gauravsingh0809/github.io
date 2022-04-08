import React, { useContext, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import ContentSlider from '../../../../ContentSlider/ContentSlider'
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'



const Structure = () => {

    const ctx = useContext(MyContext)

    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/images/chap1chart5.png')
        .getDownloadURL()
        .then((url) => {
            setURL(url);
        });

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/basis" forward="/overview/budgetprocess" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para26}
                        </Title>
                        <Para>
                            {ctx.chapterOne.Profile.Para27}
                        </Para>

                        <ContentSlider
                            position="left"
                            content={ctx.chapterOne.Profile.Para27a}
                            title="Consolidated fund"
                        />
                        <ContentSlider
                            position="right"
                            content={ctx.chapterOne.Profile.Para27b}
                            title="Contingency fund"
                        />
                        <ContentSlider
                            position="left"
                            content={ctx.chapterOne.Profile.Para27c}
                            title="Public Account"
                        />

                        <Para>
                            {ctx.chapterOne.Profile.Para28}
                        </Para>

                        {["Para29", "Para30", "Para31"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterOne.Profile[item]}
                                </li>
                            </Para>
                        )}
                        {["Para32", "Para33"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li style={{ marginLeft: "25px", listStyle: "square" }}>
                                    {ctx.chapterOne.Profile[item]}
                                </li>
                            </Para>
                        )}
                        {["Para34"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterOne.Profile[item]}
                                </li>
                            </Para>
                        )}
                        <Para>
                            {ctx.chapterOne.Profile["Para35"]}
                        </Para>

                        <ImageComponent src={url} alt="chart5" aspectRatio={1 / 0.8} />
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter1kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/basis" forward="/overview/budgetprocess" />
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para29}
                        </Title>

                        <Para>
                            {ctx.chapter1kannada.Content.para29a}
                        </Para>


                        <ContentSlider
                            position="left"
                            content={ctx.chapter1kannada.Content.para27a}
                            title="ಸಂಚಿತ ನಿಧಿ"
                        />
                        <ContentSlider
                            position="right"
                            content={ctx.chapter1kannada.Content.para27b}
                            title="ಸಾದಿಲ್ವಾರು ನಿಧಿ"
                        />
                        <ContentSlider
                            position="left"
                            content={ctx.chapter1kannada.Content.para27c}
                            title="ಸಾರ್ವಜನಿಕ ಲೆಕ್ಕ"
                        />

                        <Para>
                            {ctx.chapter1kannada.Content.para30}
                        </Para>
                        {["para31", "para32", "para33"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapter1kannada.Content[item]}
                                </li>
                            </Para>
                        )}
                        {["para34", "para35"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li style={{ marginLeft: "25px", listStyle: "square" }}>
                                    {ctx.chapter1kannada.Content[item]}
                                </li>
                            </Para>
                        )}
                        {["para36"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapter1kannada.Content[item]}
                                </li>
                            </Para>
                        )}
                        <Para>
                            {ctx.chapter1kannada.Content["para37"]}
                        </Para>
                        <ImageComponent src={url} alt="chart5" aspectRatio={1 / 0.8} />
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Structure
