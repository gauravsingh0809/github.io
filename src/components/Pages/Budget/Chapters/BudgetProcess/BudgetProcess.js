import React, { useContext, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Budget.css'
import { getFirebase } from '../../../../../firebase/firebase'
import ImageComponent from 'material-ui-image'

const BudgetProcessChap3 = () => {

    const ctx = useContext(MyContext)

    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/images/chap3chart1.png')
        .getDownloadURL()
        .then((url) => {
            setURL(url);
        });

    return (
        ctx.langPref
            ? (ctx.chapterThree
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="introduction" forward="gender-budget" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Budget Process"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2', 'para3', 'para4', 'para5', 'para6'].map((item, ind) =>
                                    <Para key={ind/10}>
                                        {ctx.chapterThree.Budget["Budget Process"][item]}
                                    </Para>
                                )}
                                <ImageComponent src={url} alt="Chart3.1" aspectRatio={1/0.8} />
                            </div>
                            : ""}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter3kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="introduction" forward="gender-budget" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Budget Process"].title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1', 'para2', 'para3', 'para4', 'para5', 'para6'].map((item, ind) =>
                                    <Para key={ind/10}>
                                        {ctx.chapter3kannada.Budget["Budget Process"][item]}
                                    </Para>
                                )}
                                <ImageComponent src={url} alt="Chart3.1" aspectRatio={1/0.8} />
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

export default BudgetProcessChap3