import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'


const Reconciliation = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapter4kannada)




    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="delay" />
                      
                        
                        <Title>
                        {ctx.chapterFour.Third.Para28}
                        </Title>
                        <Para>
                        {ctx.chapterFour.Third.Para29}
                        </Para>
                        <Para>
                        {ctx.chapterFour.Third.Para30}
                        </Para>
                     
                         
                           
                    
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
                    <FloatingActionButtons back="/quality" forward="delay" />
                  
                    
                    <Title>
                    {ctx.chapter4kannada.Content.para71}
                    </Title>
                    <Para>
                    {ctx.chapter4kannada.Content.para72}
                    </Para>
                    <Para>
                    {ctx.chapter4kannada.Content.para73}
                    </Para>
                    <Para>
                    {ctx.chapter4kannada.Content.para74}
                    </Para>
                 
                     
                       
                
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default Reconciliation