import React, { useContext, useState } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table10 from "../../../Tables/Chapter4/Table10";
import Table10kan from "../../../Tables/Chapter4kan/Table10";
import c43 from '../../../../../Images/c43.png'
import k43 from '../../../../../Images/k43.png'
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'

const NonReconciliation = () => {

    const ctx = useContext(MyContext)
    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/pdfs/chart43.PNG')
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
                        <FloatingActionButtons back="/quality/balances" forward="/quality/reconciliation" />


                        <Title>
                            {ctx.chapterFour.Third.Para24}
                        </Title>
                        <Para>
                            {ctx.chapterFour.Third.Para25}
                        </Para>
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                       <ImageComponent flex="4" aspectRatio = "4" resizeMode = 'contain' src={c43} color ="#ffffff00" />
<h4>Source- Finance Accounts</h4>
<h4> * Excludes loans and advances </h4>
                        <Para>
                            {ctx.chapterFour.Third.Para25a}
                        </Para>

                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        <Table10 />
                        <h4>Source- Report on MCA and Finance Accounts</h4>
                        <Para>
                            {ctx.chapterFour.Third.Para26}
                        </Para>

                        {/* <Para>
                            {ctx.chapterFour.Third.Para27}
                        </Para> */}
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
                        <FloatingActionButtons back="/quality/balances" forward="/quality/reconciliation" />
                        <Title>
                            {ctx.chapter4kannada.Content.para66}
                        </Title>
                        <Para>
                            {ctx.chapter4kannada.Content.para67}
                        </Para>
                        <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ )
          </h3>
                        <ImageComponent src={k43}  aspectRatio={1 / 0.5} />
                       <h4> ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು <br></br>		*ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳನ್ನು ಹೊರತುಪಡಿಸಿ </h4>
                        <Para>
                            {ctx.chapter4kannada.Content.para68}
                        </Para>
                        <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table10kan />
                        <h4>ಆಕರ-ಎಮ್‌ಸಿಎ ಮೇಲಿನ ವರದಿ ಮತ್ತು ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h4>
                        <Para>
                            {ctx.chapter4kannada.Content.para69}
                        </Para>
                      
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default NonReconciliation