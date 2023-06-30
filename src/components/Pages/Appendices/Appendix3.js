import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import { getFirebase } from "../../../firebase/firebase";
import Tablec1 from '../Tables/Chapter1/Tablec1'
import Tablec2 from '../Tables/Chapter1/Tablec2'
import Tablec3 from '../Tables/Chapter1/Tablec3'
import Tablec4 from '../Tables/Chapter1/Tablec4'
import Tablec5 from '../Tables/Chapter1/Tablec5'
import Tablec6 from '../Tables/Chapter1/Tablec6'
import Tablec6a from '../Tables/Chapter1/Tablec6a'
import Tablec6b from '../Tables/Chapter1/Tablec6b'
import Tablec6c from '../Tables/Chapter1/Tablec6c'
import Tablec7 from '../Tables/Chapter1/Tablec7'
import Tablec8 from '../Tables/Chapter1/Tablec8'
import Tablec9 from '../Tables/Chapter1/Tablec9'
import Tablec10 from '../Tables/Chapter1/Tablec10'
import Tablec11 from '../Tables/Chapter1/Tablec11'
import Tablec12 from '../Tables/Chapter1/Tablec12'
import Tablec13 from '../Tables/Chapter1/Tablec13'
import Tablec14 from '../Tables/Chapter1/Tablec14'
import Tablec15 from '../Tables/Chapter1/Tablec15'
import Tablec16 from '../Tables/Chapter1/Tablec16'
import Tablec17 from '../Tables/Chapter1/Tablec17'
const Appendix3 = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/appendices/appendix-2" forward="/appendices/appendix-4" />
                        <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
<Tablec1 />
<h4> Source: Child Budget</h4>
<h3 className='headnote'>
                        (₹ in crore)
                       </h3>
<Tablec2 />
<h4> Source: Appropriation Accounts</h4>
<h3 className='headnote'>
                        (₹ in crore)
                       </h3>
<Tablec3 />
<h4> Source: Grant Register</h4>


<h3 className='headnote'>
                        (₹ in crore)
                       </h3>
<Tablec4 />
<h4> Source: Grant Register</h4>


<h3 className='headnote'>
                        (₹ in crore)
                       </h3>
<Tablec5 />
<h4> Source: Grant Register</h4>

<h3 className='headnote'>
                        (₹ in crore)
                       </h3>
<Tablec6 />

<Tablec6a />
<Tablec6b />
<Tablec6c />
<h4> Source: Grant Register</h4>



<Tablec7 />
   <h4> Source: Office of the AG (A&E)</h4>     


   <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
   <Tablec8 /> 
   <h4> Source: Appropriation Accounts</h4>          
   
   
   <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
   <Tablec9 /> 
   <h4> Source: Appropriation Accounts</h4>  
   

   <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
   <Tablec10 /> 
   <h4> Source: Appropriation Accounts</h4>  
   <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
   <Tablec11 /> 
   <h4> Source: Appropriation Accounts <br></br>
   (+) : Refers to amount surrendered greater than Savings.</h4>
   <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
   <Tablec12 /> 
   <h4> Source: Grant Register <br></br>
   </h4>  

   <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
   <Tablec13 /> 
   <h4> Source: Office of  the AG (A&E) <br></br>
   </h4> 
   
   <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
   <Tablec14 /> 
   <h4>  Source: Appropriation Accounts <br></br>
   </h4> 

   <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
   <Tablec15 /> 
   <h4> Source: Office of  the AG (A&E) <br></br>
   </h4> 

   <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
   <Tablec16 /> 
   <h4> Source:  Grant Register <br></br>
   </h4> 

   <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
   <Tablec17 /> 
   <h4> Source:  Grant Register <br></br>
   </h4> 
   
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

export default Appendix3
