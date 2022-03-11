import React, { useContext } from 'react'
import { Link } from "@material-ui/core"
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Subtitle from "../../../../Subtitle/Subtitle"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table5 from '../../../Tables/Chapter1/Table5'
import Table6 from '../../../Tables/Chapter1/Table6'



const FiscalSituation = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapter1kannada)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/fiscalparams" forward="/overview/impact" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para55}
                        </Title>
                        {["Para56"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapterOne.Profile.Para57}
                        </Subtitle>
                        {["Para58"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Table5 />
                        <h6>
                            {ctx.tables1.T5F1}
                        </h6>
                        {["Para59", "Para60"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                        <Subtitle>
                            {ctx.chapterOne.Profile["Para61"]}
                        </Subtitle>

                        {["Para62", "Para63",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                        <Table6 />
                        <h6>
                            {ctx.tables1.T6F1} and MTFP 2019-23
                            <br></br>
                            {ctx.tables1.T6F2}
                        </h6>
                        {["Para64", "Para65"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter1kannada
                ? <div >
                <Navbar />
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/overview/fiscalparams" forward="/overview/impact" />
                    <Title id="anchor">
                        {ctx.chapter1kannada.Content.para58}
                    </Title>
                    {["para59"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter1kannada.Content[item]}
                        </Para>
                    )}
                    <Subtitle>
                        {ctx.chapter1kannada.Content.para60}
                    </Subtitle>
                    {["para61"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter1kannada.Content[item]}
                        </Para>
                    )}
                    {/* <Table5 />
                    <h6>
                        {ctx.tables1.T5F1}
                    </h6> */}
                    {["para62", "para63"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter1kannada.Content[item]}
                        </Para>
                    )}

                    <Subtitle>
                        {ctx.chapter1kannada.Content["para64"]}
                    </Subtitle>

                    {["para65", "para66",].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter1kannada.Content[item]}
                        </Para>
                    )}

                    {/* <Table6 />
                    <h6>
                        {ctx.tables1.T6F1} and MTFP 2019-23
                        <br></br>
                        {ctx.tables1.T6F2}
                    </h6> */}
                    {["para67", "para68"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter1kannada.Content[item]}
                        </Para>
                    )}
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default FiscalSituation
