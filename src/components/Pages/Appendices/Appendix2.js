import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import Para from '../../Para/Para'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Tableb1 from '../Tables/Chapter1/Tableb1'
import Tableb2 from '../Tables/Chapter1/Tableb2'
import Tableb3 from '../Tables/Chapter1/Tableb3'
import Tableb4 from '../Tables/Chapter1/Tableb4'
import Tableb5 from '../Tables/Chapter1/Tableb5'
import Tableb6 from '../Tables/Chapter1/Tableb6'
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


const Appendix2 = () => {

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
                        
                        <h3 className='headnote'>
                        ₹ in crore
                       </h3>
<Tableb1 />
<Tableb2 />
<h4> # Includes expenditure on interest payment in respect of off-budget borrowings etc., under various service heads (₹1,292.26) crore borrowed through Special Purpose Vehicles- Social Services (₹156.67 crore) and Economic Services (₹ 1,135.59 crore). <br></br>
*Includes expenditure of ₹ 4,089.27 crore on account of off-budget borrowings.<br></br>
** Effective Public Debts would be ₹62,531.89 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹18,108.91 crore given to the state as back-to-back loan under Debt Receipts would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.<br></br>
$There is a difference in actual Revenue Deficit (₹13,666.20 crore) and Revenue deficit ₹13,666.23 crore mentioned in Finance Accounts 2021-22 due to rounding off. For calculation purpose ₹13,666.20 crore is considered. <br></br>
</h4>
<h3 className='headnote'>
                        ₹ in crore
                       </h3>
<Tableb3 />
<h4>
Figures in brackets represent percentages (rounded) to total of each sub-heading<br></br>
# Includes expenditure on interest payment in respect of off-budget borrowings etc., under various service heads (₹ 1,292.26 crore borrowed through Special Purpose Vehicles- Social Services (₹ 156.67 crore) and Economic Services (₹  1,135.59 crore).<br></br>
*GSDP figures adopted in previous audit report are 2017-18 (₹ 13,36,914 crore), 2018-19 (₹ 14,90,624 crore), (2019-20 ₹ 16,28,928 crore) and 2020-21 (₹ 18,03,609 crore).<br></br>
**Buoyancy ratio indicates the elasticity or degree of responsiveness of a fiscal variable with respect to a given change in the base variable.  For instance, revenue buoyancy at 0.4 implies that revenue receipts tend to increase     by 0.4 percentage points, if the GSDP increases by one<br></br>
^The back to back Loan ₹ 12,407 crore in 2020-21 and ₹  18,109 crore in 2021-22 received from GoI in lieu of GST compensation has not been considered as Debt for working out the indicator<br></br>
## Effective Public Debts would be ₹ 62,531.89 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹ 18,108.91 crore given to the state as back-to-back loan under Debt Receipts would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.<br></br>
^^ Effective Outstanding Fiscal Liabilities would be ₹ 4,59,740 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹ 12,407 crore in 2020-21 and ₹  18,109 crore in 2021-22 given to the state as back-to-back loan under Debt Receipts would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.<br></br>


</h4>
<h3 className='headnote'>
                        ₹ in crore
                       </h3>
<Tableb4 />
<h4>
Source: Finance Accounts
</h4>                    
          <h3 className='headnote'>
                        ₹ in crore
                       </h3>
                        <Tableb5 />
                        <h4>Source: Consolidated Abstract of major heads
                        </h4>
                        <Tableb6 />
                        <h4> Source: Finance Accounts</h4>
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
                       ( ₹  ಕೋಟಿಗಳಲ್ಲಿ)
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

export default Appendix2
