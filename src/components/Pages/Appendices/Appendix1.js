import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import Para from '../../Para/Para'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Tablea1 from '../Tables/Chapter1/Tablea1'
import Tablekan1 from '../Tables/Chapter1/Tablekan1'
import Tablekan2 from '../Tables/Chapter1/Tablekan2'
import Tablekan3 from '../Tables/Chapter1/Tablekan3'
import Tablekan4 from '../Tables/Chapter1/Tablekan4'
import Tablea2 from '../Tables/Chapter1/Tablea2'
import Tablea3 from '../Tables/Chapter1/Tablea3'
import Tablea4 from '../Tables/Chapter1/Tablea4'

import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import ImageComponent from "material-ui-image";
import { getFirebase } from "../../../firebase/firebase";

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// import AppendixOne from './../../../AppendixOne.pdf';


const Appendix1 = () => {

    const ctx = useContext(MyContext)


    // const [allImages, setImages] = useState({});
    // const [allImagesKan, setImagesKan] = useState({});

    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }


    // useEffect(() => {
    //     const getImages = getFirebase()
    //         .storage()
    //         .ref('/images/appendices/Appendix1')
    //         .listAll().then(
    //             function (res) {
    //                 res.items.forEach((i) => {
    //                     i.getDownloadURL().then((res) => {
    //                         setImages((allImages) => ({ ...allImages, [i.name]: res }));
    //                     });
    //                 });
    //             })
    //     return getImages
    // }, [])

    // useEffect(() => {
    //     const getImages = getFirebase()
    //         .storage()
    //         .ref('/images/appendiceskan/Appendix1')
    //         .listAll().then(
    //             function (res) {
    //                 res.items.forEach((i) => {
    //                     i.getDownloadURL().then((res) => {
    //                         setImagesKan((allImagesKan) => ({ ...allImagesKan, [i.name]: res }));
    //                     });
    //                 });
    //             })
    //     return getImages
    // }, [])

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/Quality/recommendations" forward="/appendices/appendix-2" />
<Tablea1 />
<Tablea2 />
<h4> Source: Financial data is based on Finance Accounts <br></br>
# Human Development Index is a composite index comprising of life expectancy, education and per-capita income.<br></br>
* GC states figures is adopted from the information sent by Economic Advisor, O/o the CAG, New Delhi.<br></br>
^2019-20 to 2020-21  figures is arrived by considering the Finance Accounts for the year ended March 2021.<br></br> <br></br>
</h4>
{["para1a","para1b","para1c","para1d","para1e","para1f","para1g","para1h","para1i","para1j","para1k","para1l","para1m","para1n"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Tablea3 />
                        <h3 className='headnote'>
                        ₹ in crore
                       </h3>
                        <Tablea4 />
                        <h4> *The amount excludes ₹0.48crore being the retirement of capital/disinvestment in respect of co-operatives.
                            <br></br>
                            ^ Effective Loans and Advances for GoI would be ₹14,869 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹12,407 crore and ₹18,109 crore  given to the State as back-to-back loan during 2020-21 and 2021-22 respectively under Debt Receipt would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.
                        </h4>
                        {/* <object
                            width="100%"
                            height="600"
                            data="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-1-to-upload.pdf?alt=media&token=bf9ac43a-a103-47be-8924-b868762312d6"
                            type="application/pdf">
                            <embed
                                src="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-1-to-upload.pdf?alt=media&token=bf9ac43a-a103-47be-8924-b868762312d6"
                                type="application/pdf" />
                        </object> */}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/Quality/recommendations" forward="/appendices/appendix-2" />
                       <Tablekan1 />
                       <Tablekan2 />
                       <h4>ಆಕರ: ಹಣಕಾಸು ದತ್ತಾಂಶಗಳಿಗೆ ಹಣಕಾಸು ಲೆಕ್ಕಗಳು ಆಧಾರಿತ.<br></br>
                       ಸಾಮಾನ್ಯ ವರ್ಗದ ರಾಜ್ಯಗಳ ಅಂಕಿಅಂಶಗಳನ್ನು ಆರ್ಥಿಕ ಸಲಹೆಗಾರರು, ಭಾರತದ ಲೆಕ್ಕನಿಯಂತ್ರಕರು ಮತ್ತು ಮಹಾ ಲೆಕ್ಕಪರಿಶೋಧಕರ ಕಛೇರಿ, ನವದೆಹಲಿ ಇವರಿಂದ ಮಾಹಿತಿ ಪಡೆಯಲಾಗಿದೆ.<br></br>

^ ೨೦೧೯-20 ರಿಂದ 20೨೦-21ರ ಅಂಕಿಅಂಶಗಳನ್ನು ಮಾರ್ಚಿ ೨೦೨1ಕ್ಕೆ ಕೊನೆಗೊಂಡ ಆರ್ಥಿಕ ಲೆಕ್ಕಗಳಿಂದ ಅಳವಡಿಸಲಾಗಿದೆ.<br></br> <br></br>
</h4>
{["para1ak","para1bk","para1ck","para1dk","para1ek","para1fk","para1gk","para1hk","para1ik","para1jk","para1kk","para1lk","para1mk","para1nk","para1ok"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Tablekan3 />
                       <h3 className='headnote'>
                       (` ಕೋಟಿಗಳಲ್ಲಿ)
                       </h3>
                        <Tablekan4 />
                        <h4> * ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಮರುಪಾವತಿ ಆದ ಹೂಡಿಕೆಗಳು (`0.48 ಕೋಟಿ) ಹೊರತು ಮೊತ್ತ ತೋರಿಸಲಾಗಿದೆ.
                            <br></br>
                            ^ ಋಣ ಸ್ವೀಕೃತಿಗಳಡಿಯಲ್ಲಿ ರಾಜ್ಯಕ್ಕೆ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವಾಗಿ ನೀಡಲಾದ `18,109 ಕೋಟಿ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವನ್ನು, ಹಣಕಾಸು ಆಯೋಗವು ಸೂಚಿಸಬಹುದಾದ ಯಾವುದೇ ಮಾನದಂಡಗಳಿಗೆ ರಾಜ್ಯದ ಸಾಲವೆಂದು ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದು ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚದ ಇಲಾಖೆಯು ನಿರ್ಧರಿಸಿರುವುದರಿಂದ ಪರಿಣಾಮಕಾರಿ ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳು `27,276 ಕೋಟಿಗಳಾಗುತ್ತದೆ.
                        </h4>
                        {/* <object
                            width="100%"
                            height="600"
                            data="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-1-to-upload.pdf?alt=media&token=bf9ac43a-a103-47be-8924-b868762312d6"
                            type="application/pdf">
                            <embed
                                src="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-1-to-upload.pdf?alt=media&token=bf9ac43a-a103-47be-8924-b868762312d6"
                                type="application/pdf" />
                        </object> */}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Appendix1
