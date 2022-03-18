import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'
import Table10 from "../../../Tables/Chapter4/Table10";

const NonReconciliation = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapterFour)




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
                        <Para>
                        {ctx.chapterFour.Third.Para26}
                        </Para>
                        <Table10/>
                        <h6>Source- Report on MCA and Finance Accounts</h6>
                        <Para>
                        {ctx.chapterFour.Third.Para27}
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
                    <FloatingActionButtons back="/quality/balances" forward="/quality/reconciliation" />
                  
                    
                    <Title>
                    {ctx.chapter4kannada.Content.para66}
                    </Title>
                    <Para>
                    {ctx.chapter4kannada.Content.para67}
                    </Para>
                    <Para>
                    {ctx.chapter4kannada.Content.para68}
                    </Para>
                    <Table10/>
                    <h6>ಆಕರ-ಎಮ್‌ಸಿಎ ಮೇಲಿನ ವರದಿ ಮತ್ತು ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
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

export default NonReconciliation