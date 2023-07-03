import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import { getFirebase } from "../../../firebase/firebase";
import Tabled1 from '../Tables/Chapter1/Tabled1'
import Tabled2 from '../Tables/Chapter1/Tabled2'
import Tabled3 from '../Tables/Chapter1/Tabled3'
import Tabled4 from '../Tables/Chapter1/Tabled4'
import Tabled5 from '../Tables/Chapter1/Tabled5'
import Tabled6 from '../Tables/Chapter1/Tabled6'

const Appendix4 = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/appendices/appendix-2" forward="/appendices/appendix-4" />
                        <h3 className='headnote'>
                        ₹ in crore
                       </h3>
<Tabled1 />
<h4> Source: Office of the AG(A&E)</h4>
 <h3 className='headnote'>
 (Amount in ₹)
                       </h3>
<Tabled2 />
<h4> Source: Office of the AG(A&E)/DDR Ledger</h4>

                       <Tabled3 />
<h4>  Source:  Office of the Pr. AG (Audit-I) & AG (Audit-II)</h4>


<h3 className='headnote'>
                        ₹ in crore
                       </h3>
<Tabled4 />
<h4>Source: Office of the Pr. AG (Audit-I) &  AG (Audit-II)</h4>


<h3 className='headnote'>
                        ₹ in crore
                       </h3>
<Tabled5 />
<h4>   Source:  Office of the Pr.AG(Audit-I)</h4>

 <h3 className='headnote'>
                      (₹ in Lakh)
                       </h3>
<Tabled6 /> 
<h4>Source: Office of the Pr. AG (Audit-I) &  AG (Audit-II)</h4>


   
           {/* <object
                            width="100%"
                            height="600"
                            data="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-3-to-upload.pdf?alt=media&token=c56217f2-9923-4456-a342-ab07e55f4007"
                            type="application/pdf">
                            <embed
                                src="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-3-to-upload.pdf?alt=media&token=c56217f2-9923-4456-a342-ab07e55f4007"
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
                        <FloatingActionButtons back="/appendices/appendix-2" forward="/appendices/appendix-4" />
                        {/* <object
                            width="100%"
                            height="600"
                            data="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-3-to-upload.pdf?alt=media&token=c56217f2-9923-4456-a342-ab07e55f4007"
                            type="application/pdf">
                            <embed
                                src="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-3-to-upload.pdf?alt=media&token=c56217f2-9923-4456-a342-ab07e55f4007"
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

export default Appendix4
