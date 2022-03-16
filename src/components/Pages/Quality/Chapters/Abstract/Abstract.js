import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table4 from "../../../Tables/Chapter4/Table4";

const Abstract = () => {

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
                            {ctx.chapterFour.second.para7}
                        </Title>
                        <Para>
                            {ctx.chapterFour.second.para8}
                        </Para>
                        <Table4/>
                        <h6>Source- Finance Accounts 
                        <br>*Excluding Bills for the Month of March 2021 </br>	</h6>
                        {["Para9", "Para10", "Para11", "Para12"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.second[item]}
                            </Para>)}


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
                    <Title>{ctx.chapter4kannada.Content.para22}</Title>

                    <Para>
                        {ctx.chapter4kannada.Content.para23}
                    </Para>
                    <Table4/>
                    <h6>ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                    <br>* ಮಾರ್ಚ್‌ ೨೦೨೧ರ ಬಿಲ್ಲುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ </br> </h6>
                    
                        {["para24", "para25", "para26", "para27"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}


                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default Abstract