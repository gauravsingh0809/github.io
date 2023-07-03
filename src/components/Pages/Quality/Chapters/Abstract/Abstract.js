import React, { useContext, useState } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table5a from "../../../Tables/Chapter4/Table5a";
import Table4 from "../../../Tables/Chapter4/Table4";
import Table4kan from "../../../Tables/Chapter4kan/Table4";
import Table4akan from "../../../Tables/Chapter4kan/Table4a";
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'
import c42 from '../../../../../Images/c42.png'
import k42 from '../../../../../Images/k42.png'
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
                        <Para>
                            {ctx.chapterFour.second.para7a}
                        </Para>
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table4 />
                        <h4>
                            <i>Source- Finance Accounts
                                <br></br>
                                *Excluding Bills for the Month of March 2022
                            </i>
                        </h4>
                        <h3 className="headnote">
                          ( ₹ In crore)
                        </h3>
                        <ImageComponent flex="4" aspectRatio = "4" resizeMode = 'contain' src={c42} color ="#ffffff00" />
<h4>Source: Office of the AG(A&E)</h4>


                        {["Para9", "Para10","Para10a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.second[item]}
                            </Para>)}
                            <h3 className="headnote">
                            ₹ In crore
                        </h3>
                            <Table5a />
                        {["Para11", "Para12","Para12a","Para12b","Para12c",,"Para12d","Para12e","Para12f","Para12g","Para12h","Para12i","Para12j","Para12k","Para12l","Para12m","Para12n","Para12o","Para12p","Para12q","Para12r","Para12s","Para12t","Para12u","Para12v","Para12w","Para12x","Para12y","Para12z","Para12a1","Para12a2","Para12a3","Para12a4","Para12a5","Para12a6","Para12a7"].map((item, ind) =>
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
                        <Para>
                            {ctx.chapter4kannada.Content.para24}
                        </Para>
                        <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table4kan />
                        <h4>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು 	
                        <br></br>			* ಮಾರ್ಚ್‌ ೨೦೨೨ರ ಬಿಲ್ಲುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ 
                             </h4>
                             <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ )
          </h3>
                        <ImageComponent src={k42}  aspectRatio={1 / 0.5} />
                       <h4> ಆಕರ: ಮಹಾಲೇಖಾಪಾಲರು (ಲೆ ಮತ್ತು ಹ) ಅವರ ಕಛೇರಿ </h4>

                        {["para25", "para26", "para27"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table4akan />     
                    {["para27a", "para27b", "para27c","para27d","para27e","para27f","para27g","para27h","para27i","para27j","para27k","para27l","para27m","para27n","para27o","para27p","para27q","para27r","para27s","para27t","para27u","para27v","para27w","para27x","para27y","para27z","para27za", "para27zb", "para27zc", "para27za","para27zd","para27ze","para27zf","para27zg","para27zh","para27zi",].map((item, ind) =>
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