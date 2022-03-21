import React, { useContext, useState } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table2 from "../../../Tables/Chapter4/Table2"
import Table3 from "../../../Tables/Chapter4/Table3"

import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'


const Delay = () => {

    const ctx = useContext(MyContext)

    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/pdfs/chart41a.png')
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
                        <FloatingActionButtons back="/quality/funds" forward="/quality/acbills" />
                        <Title>B.{ctx.chapterFour.second.Para1}</Title>

                        <Para>
                            {ctx.chapterFour.second.para3}
                        </Para>
                        <Para>
                            {ctx.chapterFour.second.para2}
                        </Para>
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table2 />
                        <h4 className="footnote">
                            <i>
                                Source: Office of the Pr.AG(A&E)
                            </i>
                        </h4>

                        <Table3 />
                        <h4 className="footnote">
                            <i>
                                Source: Office of the Pr.AG(A&E)
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterFour.second.para4}
                        </Para>
                        <ImageComponent src={url} alt="chart32" aspectRatio={1 / 0.35} />


                        {["Para5", "Para6"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.first[item]}
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
                        <FloatingActionButtons back="/quality/funds" forward="/quality/acbills" />
                        <Title>{ctx.chapter4kannada.Content.para16}</Title>

                        <Para>
                            {ctx.chapter4kannada.Content.para17}
                        </Para>
                        <Para>
                            {ctx.chapter4kannada.Content.para18}
                        </Para>
                        <Table2 />
                        <h6>ಆಕರ - ಮಹಾಲೇಖಪಾಲರ (ಲೆ ಮತ್ತು ಹ) ಕಚೇರಿ</h6>
                        <Table3 />
                        <h6>ಆಕರ - ಮಹಾಲೇಖಪಾಲರ (ಲೆ ಮತ್ತು ಹ) ಕಚೇರಿ</h6>
                        <Para>
                            {ctx.chapter4kannada.Content.para19}
                        </Para>
                        {["para20", "para21"].map((item, ind) =>
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

export default Delay