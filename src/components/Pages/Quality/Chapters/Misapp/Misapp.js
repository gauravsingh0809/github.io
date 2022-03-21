import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table12 from '../../../Tables/Chapter4/Table12'


const Misapp = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/timelines" forward="/quality/follow" />


                        <Title>
                            {ctx.chapterFour.Fourth.Para21}
                        </Title>
                        {["Para22"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Fourth[item]}
                            </Para>)}
                        <h3 className="headnote">
                            ₹ In Lakhs
                        </h3>

                        <Table12 />
                        <h6>Source: Office of the Pr.AG(Audit I) and AG(Audit II)</h6>



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
                        <FloatingActionButtons back="/quality/timelines" forward="/quality/follow" />


                        <Title>
                            {ctx.chapter4kannada.Content.para93}
                        </Title>
                        {["para94"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className="headnote">
                            ₹ In Lakhs
                        </h3>
                        <Table12 />
                        <h6>ಆಕರ: ಮಹಾಲೇಖಪಾಲರು (ಆಡಿಟ್ I) ಮತ್ತು ಮಹಾಲೇಖಪಾಲರು (ಆಡಿಟ್ II) ಕಚೇರಿ</h6>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Misapp