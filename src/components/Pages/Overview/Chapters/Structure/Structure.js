import React, { useContext, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import ContentSlider from '../../../../ContentSlider/ContentSlider'

import { getFirebase } from '../../../../../firebase/firebase'
import { FaSpinner } from 'react-icons/fa'
import ImageComponent from 'material-ui-image'



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
                        <Title status={ctx.isStatus.status5} id={5}>{ctx.chapterOne.Overview["Structure of Government Accounts"].title}</Title>
                        {ctx.isStatus.status5
                            ?
                            <span>
                                <Para>
                                    {ctx.chapterOne.Overview["Structure of Government Accounts"].content}
                                </Para>
                                <ContentSlider
                                    position="left"
                                    content={ctx.chapterOne.Overview["Structure of Government Accounts"]["para1"]}
                                    title="Consolidated fund"
                                />
                                <ContentSlider
                                    position="right"
                                    content={ctx.chapterOne.Overview["Structure of Government Accounts"]["para2"]}
                                    title="Contingency fund"
                                />
                                <ContentSlider
                                    position="left"
                                    content={ctx.chapterOne.Overview["Structure of Government Accounts"]["para3"]}
                                    title="Public Account"
                                />
                                <Para>
                                    {ctx.chapterOne.Overview["Structure of Government Accounts"].para4}
                                </Para>
                                {['para5', 'para6', 'para7'].map((item, ind) =>
                                    <Para key = {ind/10}>
                                        <li className="list" >
                                            {ctx.chapterOne.Overview["Structure of Government Accounts"][item]}
                                        </li>
                                    </Para>
                                )}
                                {['para8', 'para9'].map((item, ind) =>
                                    <Para key = {ind/10}>
                                        <li className="sublist" >
                                            {ctx.chapterOne.Overview["Structure of Government Accounts"][item]}
                                        </li>
                                    </Para>
                                )}
                                {['para10'].map((item, ind) =>
                                    <Para key={ind/10}>
                                        <li className="list" >
                                            {ctx.chapterOne.Overview["Structure of Government Accounts"][item]}
                                        </li>
                                    </Para>
                                )}
                                <Para>
                                    {ctx.chapterOne.Overview["Structure of Government Accounts"].para11}
                                </Para>
                            </span>
                            : ""}
                        <ImageComponent src={url} alt="chart5" aspectRatio={1/1.3} />
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
                        <Title status={ctx.isStatus.status5} id={5}>{ctx.chapter1kannada.Overview["Structure of Government Accounts"].title}</Title>
                        {ctx.isStatus.status5
                            ?
                            <span>
                                <Para>
                                    {ctx.chapter1kannada.Overview["Structure of Government Accounts"].content}
                                </Para>
                                <ContentSlider
                                    position="left"
                                    content={ctx.chapter1kannada.Overview["Structure of Government Accounts"]["para1"]}
                                    title="ಸಂಚಿತ ನಿಧಿ"
                                />
                                <ContentSlider
                                    position="right"
                                    content={ctx.chapter1kannada.Overview["Structure of Government Accounts"]["para2"]}
                                    title="ಸಾದಿಲ್ವಾರು ನಿಧಿ"
                                />
                                <ContentSlider
                                    position="left"
                                    content={ctx.chapter1kannada.Overview["Structure of Government Accounts"]["para3"]}
                                    title="ಸಾರ್ವಜನಿಕ ಲೆಕ್ಕ"
                                />
                                <Para>
                                    {ctx.chapter1kannada.Overview["Structure of Government Accounts"].para4}
                                </Para>
                                {['para5', 'para6', 'para7'].map((item, ind) =>
                                    <Para key={ind/10}>
                                        <li className="list" >
                                            {ctx.chapter1kannada.Overview["Structure of Government Accounts"][item]}
                                        </li>
                                    </Para>
                                )}
                                {['para8', 'para9'].map((item, ind) =>
                                    <Para key={ind/10}>
                                        <li className="sublist" >
                                            {ctx.chapter1kannada.Overview["Structure of Government Accounts"][item]}
                                        </li>
                                    </Para>
                                )}
                                {['para10'].map((item,ind) =>
                                    <Para key={ind/10}>
                                        <li className="list" >
                                            {ctx.chapter1kannada.Overview["Structure of Government Accounts"][item]}
                                        </li>
                                    </Para>
                                )}
                                <Para>
                                    {ctx.chapter1kannada.Overview["Structure of Government Accounts"].para11}
                                </Para>
                            </span>
                            : ""}
                        <ImageComponent src={url} alt="chart5" aspectRatio={1/1.3} />
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Structure