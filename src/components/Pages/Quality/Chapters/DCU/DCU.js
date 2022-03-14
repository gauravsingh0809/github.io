import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'


const DCU = () => {

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
                        {ctx.chapterFour.Fourth.Para8}
                        </Title>
                        {["Para9","Para10","Para11","Para12"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Fourth[item]}
                            </Para> )}
                       
                        
                         
                           
                    
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
                    {ctx.chapter4kannada.Content.para81}
                    </Title>
                    {["para82","para83","para84"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter4kannada.Content[item]}
                        </Para> )}
                   
                    
                     
                       
                
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default DCU