import React, { useContext} from "react"
import Navbar from "../../Navbar/Navbar"
import './State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Para from "../../Para/Para"
import Title from "../../Title/Title";
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
// import Table10 from "../../../Tables/Chapter4/Table10";
// import Table10kan from "../../../Tables/Chapter4kan/Table10";

// import ImageComponent from 'material-ui-image'
// import { getFirebase } from '../../../../../firebase/firebase'

const State = () => {

    const ctx = useContext(MyContext)
    // const [url, setURL] = useState("");

    // getFirebase()
    //     .storage()
    //     .ref('/pdfs/chart43.PNG')
    //     .getDownloadURL()
    //     .then((url) => {
    //         setURL(url);
    //     });

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/recommendations" forward="/State/Definition" />


                        <Title>
                            {ctx.chapterFive.Fifth.Para0}
                        </Title>
                        <Para>
                            {ctx.chapterFive.Fifth.Para1}
                        </Para>
                        {/* <ImageComponent src={url} alt="chart43" aspectRatio={1 / 0.35} /> */}
                        {/* <Para>
                            {ctx.chapterFour.Third.Para25a}
                        </Para>

                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        {/* <Table10 /> */}
                        {/* <h4>Source- Report on MCA and Finance Accounts</h4>
                        <Para>
                            {ctx.chapterFour.Third.Para26}
                        </Para>  */}

                        {/* <Para>
                            {ctx.chapterFour.Third.Para27}
                        </Para> */}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter5kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/quality/recommendations" forward="/State/Definition" />
                        <Title>
                            {ctx.chapter4kannada.Content.para66}
                        </Title>
                        <Para>
                            {ctx.chapter4kannada.Content.para67}
                        </Para>
                        <Para>
                            {ctx.chapter4kannada.Content.para68}
                        </Para>
                        <h3 className="headnote">
                            ₹ In crore
                        </h3>
                        {/* <Table10kan /> */}
                        <h4>ಆಕರ-ಎಮ್‌ಸಿಎ ಮೇಲಿನ ವರದಿ ಮತ್ತು ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h4>
                        <Para>
                            {ctx.chapter4kannada.Content.para69}
                        </Para>
                        <Para>
                            {ctx.chapter4kannada.Content.para70}
                        </Para>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default State