import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table8 from '../../../Tables/Chapter4/Table8'
import Table9 from "../../../Tables/Chapter4/Table9";

const OB = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapter4kannada)




    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/pdaccounts" forward="/quality/non-reconciliation" />
                      
                        
                        <Title>
                        {ctx.chapterFour.Third.title}
                        </Title>
                        
                           
                         {["Para1","Para2","Para3"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Third[item]}
                            </Para> )}
                            <Table8/>
                            <h6>Source- DDR Ledger</h6>
                            {["Para4","Para5","Para6","Para7","Para8","Para9","Para10","Para11","Para12","Para13","Para14","Para15","Para16","Para17","Para18","Para19","Para20","Para21","Para22","Para23"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Third[item]}
                            </Para> )}
                            <Table9/>
                            <h6>Source- Office of the Pr.AG(A&E)</h6>
                            

                           
                    
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ?  <div >
                <Navbar />
                <div className="contentwrapper" id="home">
                <FloatingActionButtons back="/quality/pdaccounts" forward="/quality/non-reconciliation" />
                  
                    
                    <Title>
                    {ctx.chapter4kannada.Content.para44}
                    </Title>
                    
                       
                     {["para45","para46","para47"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter4kannada.Content[item]}
                        </Para> )}
                        <Table8/>
                        <h6>ಆಕರ : ಡಿಡಿಆರ್‌ ಲೆಡ್ಜರುಗಳು</h6>
                        {["para48","para49","para50","para51","para52","para53","para54","para55","para56","para57","para58","para59","para60","para61","para62","para63","para64","para65"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter4kannada.Content[item]}
                        </Para> )}
                        <Table9/>
                        <h6>ಆಕರ -  ಮಹಾಲೇಖಪಾಲರ (ಲೆ ಮತ್ತು ಹ) ಕಚೇರಿ</h6>

                       
                
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default OB