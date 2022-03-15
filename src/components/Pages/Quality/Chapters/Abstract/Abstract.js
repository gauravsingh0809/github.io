import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"


const Abstract = () => {

    const ctx = useContext(MyContext)
<<<<<<< HEAD
=======
    console.log(ctx.chapter4kannada)



>>>>>>> 05048680753dadd0fcb4b6f2511d82aea135a6be

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