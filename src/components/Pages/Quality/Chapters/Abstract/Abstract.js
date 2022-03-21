import React, { useContext, useState } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table4 from "../../../Tables/Chapter4/Table4";
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'


const Abstract = () => {

    const ctx = useContext(MyContext)

    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/pdfs/chart41.png')
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
                        <FloatingActionButtons back="/quality/delay" forward="/quality/pdaccounts" />
                        <Title>
                            {ctx.chapterFour.second.para7}
                        </Title>
                        <Para>
                            {ctx.chapterFour.second.para8}
                        </Para>
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table4 />
                        <h4>
                            <i>Source- Finance Accounts
                                <br></br>
                                *Excluding Bills for the Month of March 2021
                            </i>
                        </h4>
                        <ImageComponent src={url} alt="chart42" aspectRatio={1 / 0.35} />

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
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/delay" forward="/quality/pdaccounts" />
                        <Title>{ctx.chapter4kannada.Content.para22}</Title>

                        <Para>
                            {ctx.chapter4kannada.Content.para23}
                        </Para>
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table4 />
                        <h6>ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br></br>
                            * ಮಾರ್ಚ್‌ ೨೦೨೧ರ ಬಿಲ್ಲುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ </h6>

                        {["para24", "para25", "para26", "para27"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}


                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Abstract