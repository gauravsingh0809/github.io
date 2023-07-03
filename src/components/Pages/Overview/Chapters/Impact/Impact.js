import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table7 from '../../../Tables/Chapter1/Table7'
import Table7kan from '../../../Tables/Chapter1kan/Table7'
const Impact = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/fisc-situation" forward="/finances" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para66}
                        </Title>

                        {["Para67"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                         <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table7 />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T7F1}
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterOne.Profile["Para68"]}
                        </Para>
                        {["Para69", "Para70", "Para71","Para72", "Para73"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    <li>
                                        {ctx.chapterOne.Profile[item]}
                                    </li>
                                </Para>
                            )}

                        {["Para74", "Para75"].map((item, ind) =>
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
                ? <div>
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/fisc-situation" forward="/finances" />
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para71}
                        </Title>

                        {["para72"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Table7kan/>
                        
                        {["f14"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Para>
                            {ctx.chapter1kannada.Content["para73"]}
                        </Para>
                        {["para74", "para75", "para76", "para77"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    <li>
                                        {ctx.chapter1kannada.Content[item]}
                                    </li>
                                </Para>
                            )}
                        {["para78"].map((item, ind) =>
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

export default Impact
